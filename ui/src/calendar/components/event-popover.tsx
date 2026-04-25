import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Repeat, Palette } from 'lucide-react';
import { cn } from '../lib/cn.js';
import type { CalendarEvent } from '../lib/calendar-utils.js';
import { format } from '../lib/calendar-utils.js';
import { DEFAULT_EVENT_COLOR } from '../lib/todo-to-event.js';
import type { CalendarTodoLike, CalendarTodoCreate, CalendarTodoPatch, TodoRepeatType } from '../lib/types.js';

type TodoItem = CalendarTodoLike;
type CreateTodoInput = CalendarTodoCreate;
type UpdateTodoInput = CalendarTodoPatch;

interface EventPopoverProps {
  event?: CalendarEvent | null;
  /** When set without `event`, form is in create mode until `onCreate` succeeds. */
  createDraft?: { start: Date; end: Date } | null;
  anchorPos?: { x: number; y: number } | null;
  onClose: (currentTitle?: string) => void;
  onPatch: (id: string, patch: UpdateTodoInput) => void;
  onCreate?: (input: CreateTodoInput) => void | Promise<void>;
  onAbandonCreate?: () => void;
}

const REPEAT_OPTION_VALUES: TodoRepeatType[] = ['none', 'daily', 'weekdays', 'weekly', 'monthly'];

const COLOR_PRESETS = [
  '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7',
  '#ec4899', '#ef4444', '#f97316', '#eab308',
  '#22c55e', '#14b8a6', '#06b6d4', '#64748b',
];

export function EventPopover({
  event, createDraft, anchorPos, onClose, onPatch, onCreate, onAbandonCreate,
}: EventPopoverProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const todo = event?.raw as TodoItem | undefined;
  const syncedIdRef = useRef<string | null>(null);
  const draftRangeKeyRef = useRef('');
  const createDoneRef = useRef(false);

  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [allDay, setAllDay] = useState(true);
  const [repeatType, setRepeatType] = useState<TodoRepeatType>('none');
  const [color, setColor] = useState(DEFAULT_EVENT_COLOR);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  const isEditing = Boolean(event && todo);
  const isCreating = Boolean(createDraft && !event);

  useLayoutEffect(() => {
    if (!createDraft || event) return;
    const key = `${createDraft.start.getTime()}-${createDraft.end.getTime()}`;
    if (draftRangeKeyRef.current === key) return;
    draftRangeKeyRef.current = key;
    createDoneRef.current = false;
    const { start, end } = createDraft;
    const sH = start.getHours(), sM = start.getMinutes();
    const eH = end.getHours(), eM = end.getMinutes();
    const isAllDayRange = sH === 0 && sM === 0 && eH === 23 && eM >= 59;
    setTitle('');
    setAllDay(isAllDayRange);
    if (isAllDayRange) {
      setDateStart(format(start, 'yyyy-MM-dd'));
      setDueDate(format(end, 'yyyy-MM-dd'));
    } else {
      setDateStart(format(start, "yyyy-MM-dd'T'HH:mm"));
      setDueDate(format(end, "yyyy-MM-dd'T'HH:mm"));
    }
    setRepeatType('none');
    setColor(DEFAULT_EVENT_COLOR);
  }, [createDraft, event]);

  useLayoutEffect(() => {
    if (!event || !todo) return;
    if (syncedIdRef.current === event.id) return;
    syncedIdRef.current = event.id;
    setTitle(todo.title);
    setDateStart(todo.dateStart ?? '');
    setDueDate(todo.dueDate ?? '');
    setAllDay(!todo.dateStart?.includes('T'));
    setColor((todo as TodoItem & { color?: string }).color || event?.color || DEFAULT_EVENT_COLOR);
    try { setRepeatType((JSON.parse(todo.repeatRule ?? '{"type":"none"}') as { type: TodoRepeatType }).type ?? 'none'); } catch { setRepeatType('none'); }
  }, [event, todo]);

  useEffect(() => {
    if (!event) syncedIdRef.current = null;
  }, [event]);

  useEffect(() => {
    if (!createDraft) draftRangeKeyRef.current = '';
  }, [createDraft]);

  const open = Boolean(isEditing || isCreating);

  useLayoutEffect(() => {
    if (!ref.current || !open) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (anchorPos) {
      const pad = 4;
      let left = anchorPos.x + pad;
      let top = anchorPos.y + pad;
      if (left + rect.width > vw - pad) left = anchorPos.x - rect.width - pad;
      if (top + rect.height > vh - pad) top = anchorPos.y - rect.height - pad;
      if (left + rect.width > vw - pad) left = vw - rect.width - pad;
      if (top + rect.height > vh - pad) top = vh - rect.height - pad;
      if (left < pad) left = pad;
      if (top < pad) top = pad;
      setPos({ left, top });
    } else {
      setPos({ left: Math.max(16, (vw - rect.width) / 2), top: Math.max(16, vh * 0.15) });
    }
  }, [open, anchorPos, event, createDraft]);

  // commitCreateRef 让我们可以从事件回调（Enter / 点外面）里**同步地**触发一次创建，
  // 不用依赖 useEffect 的 450ms 防抖。关键在于：用户按 Enter 或点外面之后，
  // 父组件会清掉 createDraft / popoverAnchor，useEffect 的 cleanup 会取消那个 timer，
  // 导致原来的"只靠 debounce"方案直接 drop 掉这次创建——这就是之前的 bug。
  const commitCreateRef = useRef<() => boolean>(() => false);
  commitCreateRef.current = () => {
    if (!isCreating || !onCreate || createDoneRef.current) return false;
    const trimmed = title.trim();
    if (!trimmed) return false;
    createDoneRef.current = true;
    const ds = allDay ? dateStart.split('T')[0] : dateStart;
    const de = allDay ? dueDate.split('T')[0] : dueDate;
    const input: CreateTodoInput = {
      title: trimmed,
      dateStart: ds,
      dueDate: de,
      repeatRule: { type: repeatType },
      color,
    };
    void Promise.resolve(onCreate(input)).catch(() => { createDoneRef.current = false; });
    return true;
  };

  const requestClose = useCallback(() => {
    // 关闭时的三态：
    //   1. 编辑既有 todo → 直接关，parent 会 flush 标题差异 / 删空标题。
    //   2. 创建中 + 有标题 → 立即 flush 一次创建（同步），再让 parent 关闭。
    //   3. 创建中 + 空标题 → 放弃，什么都不建。
    if (createDraft && !event && !createDoneRef.current) {
      const committed = commitCreateRef.current();
      if (!committed) onAbandonCreate?.();
    }
    onClose(title);
  }, [createDraft, event, onAbandonCreate, onClose, title]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (ref.current && !ref.current.contains(e.target as Node)) requestClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [requestClose]);

  useEffect(() => {
    if (!todo || !event) return;
    const todoId = todo.id;
    const serverTitle = todo.title;
    const tmr = window.setTimeout(() => {
      const trimmed = title.trim();
      if (trimmed === (serverTitle ?? '').trim()) return;
      onPatch(todoId, { title: trimmed || ' ' });
    }, 400);
    return () => window.clearTimeout(tmr);
  }, [title, event?.id, todo?.id, todo?.title, onPatch]);

  // 创建态的 debounce 自动保存——作为"用户长时间不动"的兜底，不是主路径。
  // 主路径是 Enter / 点外面触发 commitCreate。
  useEffect(() => {
    if (!isCreating || createDoneRef.current) return;
    const trimmed = title.trim();
    if (!trimmed) return;
    const tmr = window.setTimeout(() => { commitCreateRef.current(); }, 600);
    return () => window.clearTimeout(tmr);
  }, [title, isCreating, dateStart, dueDate, allDay, repeatType, color]);

  if (!open) return null;

  const patchTodoDates = (ns: string, nd: string) => {
    if (!todo?.id) return;
    onPatch(todo.id, { dateStart: ns || null, dueDate: nd || null });
  };

  return (
    <>
      <div className="fixed inset-0 z-40" />
      <div
        ref={ref}
        className="fixed z-50 w-[380px] rounded-xl bg-popover shadow-2xl"
        style={pos ? { left: pos.left, top: pos.top } : { left: '50%', top: '15vh', transform: 'translateX(-50%)' }}
      >
        <div className="px-4 py-2.5">
          <span className="text-sm font-medium text-foreground">{t('calendar.todoTitle')}</span>
        </div>

        <div className="px-4 pb-4 space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                requestClose();
              } else if (e.key === 'Escape') {
                e.preventDefault();
                if (isCreating) onAbandonCreate?.();
                onClose('');
              }
            }}
            placeholder={t('calendar.titlePlaceholder')}
            className="w-full h-9 px-3 rounded-lg bg-muted/60 text-sm font-medium placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-ring/30 transition-shadow"
            autoFocus
          />

          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 mt-2 text-muted-foreground shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type={allDay ? 'date' : 'datetime-local'}
                  value={dateStart}
                  onChange={(e) => {
                    const v = e.target.value;
                    setDateStart(v);
                    patchTodoDates(v, dueDate);
                  }}
                  className="flex-1 h-8 px-2 rounded-lg bg-muted/60 text-xs outline-none focus:ring-1 focus:ring-ring/30"
                />
                <span className="text-xs text-muted-foreground">→</span>
                <input
                  type={allDay ? 'date' : 'datetime-local'}
                  value={dueDate}
                  onChange={(e) => {
                    const v = e.target.value;
                    setDueDate(v);
                    patchTodoDates(dateStart, v);
                  }}
                  className="flex-1 h-8 px-2 rounded-lg bg-muted/60 text-xs outline-none focus:ring-1 focus:ring-ring/30"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allDay}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    let ns = dateStart;
                    let nd = dueDate;
                    if (checked) {
                      ns = dateStart.includes('T') ? dateStart.split('T')[0] : dateStart;
                      nd = dueDate.includes('T') ? dueDate.split('T')[0] : dueDate;
                    } else {
                      if (!dateStart.includes('T')) ns = `${dateStart}T09:00`;
                      if (!dueDate.includes('T')) nd = `${dueDate}T10:00`;
                    }
                    setAllDay(checked);
                    setDateStart(ns);
                    setDueDate(nd);
                    patchTodoDates(ns, nd);
                  }}
                  className="h-3.5 w-3.5 rounded accent-primary"
                />
                <span className="text-xs text-muted-foreground">{t('calendar.allDay')}</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Repeat className="h-4 w-4 text-muted-foreground shrink-0" />
            <select
              value={repeatType}
              onChange={(e) => {
                const v = e.target.value as TodoRepeatType;
                setRepeatType(v);
                if (todo?.id) onPatch(todo.id, { repeatRule: { type: v } });
              }}
              className="h-8 px-2 rounded-lg bg-muted/60 text-xs outline-none"
            >
              {REPEAT_OPTION_VALUES.map((value) => (
                <option key={value} value={value}>{t(`calendar.repeat.${value}`)}</option>
              ))}
            </select>
          </div>

          <div className="flex items-start gap-3">
            <Palette className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
            <div className="flex flex-1 flex-wrap gap-1.5">
              {COLOR_PRESETS.map((c) => (
                <button
                  key={c}
                  type="button"
                  title={c}
                  aria-label={t('calendar.color')}
                  onClick={() => {
                    setColor(c);
                    if (todo?.id) onPatch(todo.id, { color: c });
                  }}
                  className={cn(
                    'h-6 w-6 rounded-full border-2 transition-transform hover:scale-110',
                    color === c ? 'border-foreground scale-110' : 'border-transparent',
                  )}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
