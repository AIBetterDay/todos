import { useRef, useCallback, useState, useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/cn.js';
import { Check, GitBranch } from 'lucide-react';
import { getDateLocale } from '../lib/locale.js';
import { THEME_CHANGE_EVENT } from '../lib/theme.js';
import type { CalendarEvent } from '../lib/calendar-utils';
import {
  HOUR_HEIGHT,
  HOURS,
  getEventTopAndHeight,
  getEventsForDay,
  isToday,
  isSameDay,
  format,
  timeFromY,
  setHours,
  setMinutes,
} from '../lib/calendar-utils';

function eventBg(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    const mix = (c: number) => Math.round(c * 0.22 + 38 * 0.78);
    return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
  }
  const mix = (c: number) => Math.round(c * 0.13 + 250 * 0.87);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function eventTextColor(hex: string): string {
  const isDark = document.documentElement.classList.contains('dark');
  if (!isDark) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lighten = (c: number) => Math.min(255, Math.round(c + (255 - c) * 0.45));
  return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`;
}

function eventSubTextColor(hex: string): string {
  const isDark = document.documentElement.classList.contains('dark');
  if (!isDark) return `${hex}aa`;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lighten = (c: number) => Math.min(255, Math.round(c + (255 - c) * 0.3));
  return `rgba(${lighten(r)}, ${lighten(g)}, ${lighten(b)}, 0.8)`;
}

export interface SelectionSlot {
  dayIndex: number;
  startY: number;
  endY: number;
}

interface TimeGridProps {
  days: Date[];
  events: CalendarEvent[];
  /** Persistent selection highlight controlled by parent (survives drag end). */
  selectionSlot?: SelectionSlot | null;
  onEventClick?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  onToggleComplete?: (event: CalendarEvent) => void;
  onSlotClick?: (start: Date, end: Date, slot: SelectionSlot, mouseX: number, mouseY: number) => void;
  onEventDrop?: (eventId: string, newStart: Date, newEnd: Date) => void;
  onEventResize?: (eventId: string, newStart: Date, newEnd: Date) => void;
  onEmptyAllDayContextMenu?: (day: Date, mouseX: number, mouseY: number) => void;
  onEmptyGridContextMenu?: (payload: { dayIndex: number; start: Date; end: Date; mouseX: number; mouseY: number }) => void;
  onEventContextMenu?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
}

const GUTTER_W = 56;
const INDENT_PX = 24;
const LEFT_BAR_W = 4;
const DRAG_THRESHOLD = 4;
const SLOT_RANGE_HIGHLIGHT = 'bg-sky-400/22 dark:bg-sky-400/18';
const EVENT_CARD_HOVER_OUTER = 'group';
const EVENT_CARD_HOVER_INNER =
  'transition-[filter] duration-150 group-hover:brightness-[1.1] dark:group-hover:brightness-[1.3]';

/* ── Current time indicator (pill in gutter + line in day column — avoids overflow-x clip) ── */

function useCurrentTimeInGrid(days: Date[]) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  const dayInView = days.find((d) => isSameDay(now, d));
  if (!dayInView) return null;
  const minutes = now.getHours() * 60 + now.getMinutes();
  const top = (minutes / 60) * HOUR_HEIGHT;
  const h12 = now.getHours() % 12 || 12;
  const ampm = now.getHours() < 12 ? 'AM' : 'PM';
  const label = `${h12}:${String(now.getMinutes()).padStart(2, '0')} ${ampm}`;
  return { now, top, label };
}

/* ── Cascade layout ── */

function layoutCascade(events: CalendarEvent[], day: Date) {
  if (events.length === 0) return [];
  const items = events.map((e) => ({ event: e, ...getEventTopAndHeight(e, day) }));
  items.sort((a, b) => a.top - b.top || b.height - a.height);

  const result: { event: CalendarEvent; zIndex: number; indent: number }[] = [];
  const active: { bottom: number; indent: number }[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const nextActive: typeof active = [];
    let maxOverlapIndent = -INDENT_PX;
    for (const a of active) {
      if (a.bottom > item.top) {
        nextActive.push(a);
        if (a.indent > maxOverlapIndent) maxOverlapIndent = a.indent;
      }
    }
    const indent = nextActive.length > 0 ? maxOverlapIndent + INDENT_PX : 0;
    result.push({ event: item.event, zIndex: 10 + i, indent });
    nextActive.push({ bottom: item.top + item.height, indent });
    active.length = 0;
    active.push(...nextActive);
  }
  return result;
}

/* ── Main TimeGrid ── */

export function TimeGrid({
  days, events, selectionSlot,
  onEventClick, onToggleComplete, onSlotClick, onEventDrop, onEventResize, onEmptyAllDayContextMenu,
  onEmptyGridContextMenu, onEventContextMenu,
}: TimeGridProps) {
  const { t } = useTranslation();
  const [, bumpAppearance] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    const onAppearance = () => bumpAppearance();
    window.addEventListener(THEME_CHANGE_EVENT, onAppearance);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, onAppearance);
  }, []);
  const dateLocale = getDateLocale();
  const currentTime = useCurrentTimeInGrid(days);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useRef(false);

  const [eventDrag, setEventDrag] = useState<{ event: CalendarEvent; dayIndex: number; offsetY: number; currentTop: number } | null>(null);
  const [resizeDrag, setResizeDrag] = useState<{ event: CalendarEvent; dayIndex: number; edge: 'top' | 'bottom'; currentY: number } | null>(null);
  const [slotDrag, setSlotDrag] = useState<{ dayIndex: number; startY: number; currentY: number } | null>(null);

  // Track pending event drag: only commit to drag after mouse moves beyond threshold
  const pendingDrag = useRef<{ event: CalendarEvent; dayIndex: number; startX: number; startY: number; gridY: number; eventTop: number } | null>(null);
  const slotDragRef = useRef<{ dayIndex: number; startY: number; currentY: number } | null>(null);

  useEffect(() => {
    if (scrollRef.current && !hasScrolled.current) {
      scrollRef.current.scrollTop = Math.max(0, (new Date().getHours() - 1) * HOUR_HEIGHT);
      hasScrolled.current = true;
    }
  }, []);

  const getY = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return 0;
    return e.clientY - scrollRef.current.getBoundingClientRect().top + scrollRef.current.scrollTop;
  }, []);

  const moveSlotDrag = useCallback((e: MouseEvent) => {
    const s = slotDragRef.current;
    if (!s || !scrollRef.current) return;
    const y = e.clientY - scrollRef.current.getBoundingClientRect().top + scrollRef.current.scrollTop;
    const next = { ...s, currentY: y };
    slotDragRef.current = next;
    setSlotDrag(next);
  }, []);

  const finishSlotDrag = useCallback((e: MouseEvent) => {
    window.removeEventListener('mousemove', moveSlotDrag);
    window.removeEventListener('mouseup', finishSlotDrag, true);
    const s = slotDragRef.current;
    slotDragRef.current = null;
    setSlotDrag(null);
    if (!s || e.button !== 0) return;
    const yTop = Math.min(s.startY, s.currentY);
    const yBot = Math.max(s.startY, s.currentY);
    if (yBot - yTop < DRAG_THRESHOLD) return;
    if (!onSlotClick) return;
    const day = days[s.dayIndex];
    const tStart = timeFromY(yTop);
    const tEnd = timeFromY(yBot);
    let start = setMinutes(setHours(day, tStart.hours), tStart.minutes);
    let end = setMinutes(setHours(day, tEnd.hours), tEnd.minutes);
    if (end.getTime() <= start.getTime()) {
      end = new Date(start.getTime() + 15 * 60 * 1000);
    }
    const slot: SelectionSlot = { dayIndex: s.dayIndex, startY: yTop, endY: yBot };
    onSlotClick(start, end, slot, e.clientX, e.clientY);
  }, [days, moveSlotDrag, onSlotClick]);

  const handleSlotMouseDown = useCallback((e: React.MouseEvent, dayIndex: number) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest('[data-event-block]')) return;
    if ((e.target as HTMLElement).closest('[data-drag-ghost]')) return;
    e.preventDefault();
    const y = getY(e);
    slotDragRef.current = { dayIndex, startY: y, currentY: y };
    setSlotDrag({ dayIndex, startY: y, currentY: y });
    window.addEventListener('mousemove', moveSlotDrag);
    window.addEventListener('mouseup', finishSlotDrag, true);
  }, [finishSlotDrag, getY, moveSlotDrag]);

  const handleGridContextMenu = useCallback((e: React.MouseEvent, dayIndex: number) => {
    if ((e.target as HTMLElement).closest('[data-event-block]')) return;
    if ((e.target as HTMLElement).closest('[data-drag-ghost]')) return;
    e.preventDefault();
    if (!onEmptyGridContextMenu) return;
    const y = getY(e);
    const st = timeFromY(y);
    const day = days[dayIndex];
    const start = setMinutes(setHours(day, st.hours), st.minutes);
    const ea = timeFromY(y + HOUR_HEIGHT);
    const end = setMinutes(setHours(day, ea.hours), ea.minutes);
    onEmptyGridContextMenu({ dayIndex, start, end, mouseX: e.clientX, mouseY: e.clientY });
  }, [days, getY, onEmptyGridContextMenu]);

  useEffect(() => () => {
    window.removeEventListener('mousemove', moveSlotDrag);
    window.removeEventListener('mouseup', finishSlotDrag, true);
    slotDragRef.current = null;
  }, [finishSlotDrag, moveSlotDrag]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const y = getY(e);

    // Check if pending drag should become actual drag
    if (pendingDrag.current) {
      const dx = e.clientX - pendingDrag.current.startX;
      const dy = e.clientY - pendingDrag.current.startY;
      if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        const p = pendingDrag.current;
        setEventDrag({ event: p.event, dayIndex: p.dayIndex, offsetY: p.gridY - p.eventTop, currentTop: p.eventTop });
        pendingDrag.current = null;
      }
      return;
    }

    if (eventDrag) setEventDrag((p) => p ? { ...p, currentTop: y - p.offsetY } : null);
    if (resizeDrag) setResizeDrag((p) => p ? { ...p, currentY: y } : null);
  }, [eventDrag, resizeDrag, getY]);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    // If pending drag never became actual drag → it was a click
    if (pendingDrag.current) {
      const p = pendingDrag.current;
      pendingDrag.current = null;
      onEventClick?.(p.event, e.clientX, e.clientY);
      return;
    }

    if (resizeDrag && onEventResize) {
      const ev = resizeDrag.event;
      const day = days[resizeDrag.dayIndex];
      const snapped = timeFromY(resizeDrag.currentY);
      const t = setMinutes(setHours(day, snapped.hours), snapped.minutes);
      if (resizeDrag.edge === 'top') onEventResize(ev.id, t, ev.end);
      else onEventResize(ev.id, ev.start, t);
      requestAnimationFrame(() => setResizeDrag(null));
      return;
    }
    if (eventDrag && onEventDrop) {
      const snapped = timeFromY(eventDrag.currentTop);
      const day = days[eventDrag.dayIndex];
      const dur = eventDrag.event.end.getTime() - eventDrag.event.start.getTime();
      const ns = setMinutes(setHours(day, snapped.hours), snapped.minutes);
      onEventDrop(eventDrag.event.id, ns, new Date(ns.getTime() + dur));
      requestAnimationFrame(() => setEventDrag(null));
      return;
    }
    if (eventDrag) { setEventDrag(null); return; }
  }, [eventDrag, resizeDrag, days, onEventDrop, onEventResize, onEventClick]);

  const handleEventMouseDown = useCallback((e: React.MouseEvent, event: CalendarEvent, dayIndex: number) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const gridY = getY(e);
    const { top } = getEventTopAndHeight(event, days[dayIndex]);
    pendingDrag.current = { event, dayIndex, startX: e.clientX, startY: e.clientY, gridY, eventTop: top };
  }, [days, getY]);

  const handleResizeStart = useCallback((e: React.MouseEvent, event: CalendarEvent, edge: 'top' | 'bottom', dayIndex: number) => {
    setResizeDrag({ event, dayIndex, edge, currentY: getY(e) });
  }, [getY]);

  const isMultiDay = days.length > 1;
  const isDragging = !!(eventDrag || resizeDrag);

  return (
    <div className="flex flex-col flex-1 min-h-0 pr-3 md:pr-4">
      {/* Day headers above all-day (week view — matches day view: date strip before all-day + grid) */}
      {isMultiDay && (
        <div className="flex shrink-0 border-b border-border/40">
          <div style={{ width: GUTTER_W }} className="shrink-0" />
          {days.map((day, dayIndex) => {
            const today = isToday(day);
            return (
              <div key={day.toISOString()} className={cn('flex-1 flex-[1_1_0%] min-w-0 text-center py-2 border-l border-border/30', dayIndex === 0 && 'border-l-0')}>
                <div className="text-[11px] text-muted-foreground">{format(day, 'EEE', { locale: dateLocale })}</div>
                <div className={cn('text-xl font-semibold leading-tight mt-0.5', today ? 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground' : 'text-foreground')}>
                  {format(day, 'd')}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* All-day row */}
      <div className="flex shrink-0 border-b border-border/40">
        <div style={{ width: GUTTER_W }} className="shrink-0 flex items-center justify-end pr-2">
          <span className="text-[11px] text-muted-foreground">{t('calendar.allDay')}</span>
        </div>
        {days.map((day, dayIndex) => {
          const allDayEvts = getEventsForDay(events, day).filter((e) => e.allDay);
          return (
            <div
              key={day.toISOString()}
              className={cn('flex-1 flex-[1_1_0%] min-w-0 border-l border-border/30 relative py-0.5 min-h-[32px]', dayIndex === 0 && 'border-l-0')}
              onContextMenu={(e) => {
                if ((e.target as HTMLElement).closest('[data-event-block]')) return;
                e.preventDefault();
                onEmptyAllDayContextMenu?.(day, e.clientX, e.clientY);
              }}
            >
              <div className="flex flex-col gap-0.5 ml-[2px] mr-1">
                {allDayEvts.map((ev) => {
                  const isDone = ev.status === 'completed';
                  const c = ev.color ?? '#3b82f6';
                  return (
                    <div
                      key={ev.id}
                      data-event-block
                      className={cn(
                        'flex items-center gap-1.5 rounded-[4px] overflow-hidden text-[11px] font-semibold truncate cursor-pointer',
                        'transition-[filter] duration-150 hover:brightness-[1.1] dark:hover:brightness-[1.3]',
                        isDone && 'opacity-40',
                      )}
                      style={{
                        backgroundColor: isDone ? 'hsl(var(--muted))' : eventBg(c),
                        borderLeft: `${LEFT_BAR_W}px solid ${isDone ? 'hsl(var(--muted-foreground) / 0.3)' : c}`,
                        padding: '3px 8px 3px 8px',
                      }}
                      onClick={(e) => onEventClick?.(ev, e.clientX, e.clientY)}
                      onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); onEventContextMenu?.(ev, e.clientX, e.clientY); }}
                    >
                      <button
                        data-checkbox
                        onClick={(e) => { e.stopPropagation(); onToggleComplete?.(ev); }}
                        className={cn('flex h-3 w-3 shrink-0 items-center justify-center rounded-[3px] border', isDone ? 'border-muted-foreground/40 bg-muted-foreground/20' : 'opacity-70 hover:opacity-100')}
                        style={{ borderColor: isDone ? undefined : c, backgroundColor: isDone ? undefined : 'transparent' }}
                      >
                        {isDone && <Check className="h-2 w-2" strokeWidth={3} />}
                      </button>
                      {ev.isChild && <span className="h-2 w-2 shrink-0 rounded-full opacity-50" style={{ backgroundColor: isDone ? 'hsl(var(--muted-foreground))' : c }} aria-hidden />}
                      <span className={cn('truncate', isDone && 'line-through')} style={{ color: isDone ? 'hsl(var(--muted-foreground))' : eventTextColor(c) }}>{ev.title}</span>
                      {ev.childCount && ev.childCount > 0 ? (
                        <span
                          className="ml-auto flex items-center gap-0.5 text-[10px] font-normal shrink-0 opacity-70"
                          style={{ color: isDone ? 'hsl(var(--muted-foreground))' : eventTextColor(c) }}
                        >
                          <GitBranch className="h-2.5 w-2.5" />
                          {ev.childCount}
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scrollable time grid */}
      <div
        ref={scrollRef}
        className={cn('flex-1 overflow-y-auto overflow-x-hidden relative select-none hide-scrollbar', (isDragging || slotDrag) && 'cursor-grabbing')}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          setEventDrag(null); setResizeDrag(null); pendingDrag.current = null;
          if (slotDragRef.current) {
            window.removeEventListener('mousemove', moveSlotDrag);
            window.removeEventListener('mouseup', finishSlotDrag, true);
            slotDragRef.current = null;
            setSlotDrag(null);
          }
        }}
      >
        <div className="flex" style={{ height: 24 * HOUR_HEIGHT }}>
          <div className="shrink-0 relative" style={{ width: GUTTER_W }}>
            {HOURS.map((h) => {
              if (h === 0) return null;
              const h12 = h % 12 || 12;
              const ampm = h < 12 ? 'AM' : 'PM';
              return (
                <div key={h} className="absolute right-2 text-[10px] text-muted-foreground -translate-y-1/2" style={{ top: h * HOUR_HEIGHT }}>
                  {`${h12} ${ampm}`}
                </div>
              );
            })}
            {currentTime && (
              <div
                className="absolute z-[31] pointer-events-none -translate-y-1/2 right-0"
                style={{ top: currentTime.top }}
              >
                <span className="inline-flex items-center rounded-lg bg-red-500 px-1.5 py-[3px] text-[10px] leading-none text-white whitespace-nowrap">
                  {currentTime.label}
                </span>
              </div>
            )}
          </div>

          {days.map((day, dayIndex) => {
            const dayEvents = getEventsForDay(events, day).filter((e) => !e.allDay);
            const laid = layoutCascade(dayEvents, day);
            return (
              <div
                key={day.toISOString()}
                className={cn('flex-1 flex-[1_1_0%] min-w-0 relative border-l border-border/30', dayIndex === 0 && 'border-l-0')}
                onMouseDown={(e) => handleSlotMouseDown(e, dayIndex)}
                onContextMenu={(e) => handleGridContextMenu(e, dayIndex)}
              >
                {HOURS.map((h) => (
                  <div key={h} className="absolute left-0 right-0 border-t border-border/30" style={{ top: h * HOUR_HEIGHT }} />
                ))}
                {HOURS.map((h) => (
                  <div key={`h-${h}`} className="absolute left-0 right-0 border-t border-border/15" style={{ top: h * HOUR_HEIGHT + HOUR_HEIGHT / 2 }} />
                ))}

                {laid.map(({ event, zIndex, indent }) => {
                  if (eventDrag?.event.id === event.id) return null;
                  const resizing = resizeDrag?.event.id === event.id;
                  let oTop: number | undefined;
                  let oHeight: number | undefined;
                  if (resizing && resizeDrag) {
                    const orig = getEventTopAndHeight(event, day);
                    const snapped = timeFromY(resizeDrag.currentY);
                    const sY = (snapped.hours * 60 + snapped.minutes) / 60 * HOUR_HEIGHT;
                    if (resizeDrag.edge === 'top') { oTop = sY; oHeight = orig.top + orig.height - sY; }
                    else { oTop = orig.top; oHeight = sY - orig.top; }
                  }
                  return (
                    <EventBlock
                      key={event.id} event={event} day={day}
                      onToggleComplete={onToggleComplete}
                      zIndex={zIndex} indent={indent}
                      overrideTop={oTop} overrideHeight={oHeight}
                      onMouseDown={(e) => handleEventMouseDown(e, event, dayIndex)}
                      onResizeStart={(e, ev, edge) => handleResizeStart(e, ev, edge, dayIndex)}
                      onEventContextMenu={onEventContextMenu}
                    />
                  );
                })}

                {eventDrag && eventDrag.dayIndex === dayIndex && (() => {
                  const ev = eventDrag.event;
                  const dragIndent = laid.find(({ event: e }) => e.id === ev.id)?.indent ?? 0;
                  return (
                    <EventBlock
                      key={`drag-${ev.id}`}
                      event={ev}
                      day={day}
                      dragPreview
                      zIndex={100}
                      indent={dragIndent}
                      overrideTop={eventDrag.currentTop}
                      overrideHeight={Math.max(getEventTopAndHeight(ev, day).height, 22)}
 />
                  );
                })()}

                {slotDrag && slotDrag.dayIndex === dayIndex && (() => {
                  const selTop = Math.min(slotDrag.startY, slotDrag.currentY);
                  const selH = Math.max(Math.abs(slotDrag.currentY - slotDrag.startY), 4);
                  return (
                    <div
                      className={cn('absolute left-0 right-0 z-[5] pointer-events-none rounded-[4px]', SLOT_RANGE_HIGHLIGHT)}
                      style={{ top: selTop, height: selH }}
                    />
                  );
                })()}

                {!slotDrag && selectionSlot && selectionSlot.dayIndex === dayIndex && (
                  <div
                    className={cn('absolute left-0 right-0 z-[5] pointer-events-none rounded-[4px]', SLOT_RANGE_HIGHLIGHT)}
                    style={{ top: selectionSlot.startY, height: Math.max(selectionSlot.endY - selectionSlot.startY, 4) }}
                  />
                )}

                {currentTime && isSameDay(day, currentTime.now) && (
                  <div
                    className="pointer-events-none absolute left-0 right-0 z-30 flex -translate-y-1/2 items-center"
                    style={{ top: currentTime.top }}
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <div className="h-[2px] flex-1 bg-red-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Event block — same style as all-day: border-left bar + rounded bg ── */

function EventBlock({
  event, day, onToggleComplete, zIndex, indent, overrideTop, overrideHeight, onMouseDown: onBlockMouseDown, onResizeStart, onEventContextMenu,
  dragPreview = false,
}: {
  event: CalendarEvent; day: Date;
  onToggleComplete?: (e: CalendarEvent) => void;
  zIndex: number; indent: number;
  overrideTop?: number; overrideHeight?: number;
  onMouseDown?: (e: React.MouseEvent) => void;
  onResizeStart?: (e: React.MouseEvent, event: CalendarEvent, edge: 'top' | 'bottom') => void;
  onEventContextMenu?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  /** Drag ghost: same chrome as normal block, non-interactive */
  dragPreview?: boolean;
}) {
  const { top, height } = getEventTopAndHeight(event, day);
  const isDone = event.status === 'completed';
  const color = event.color ?? '#3b82f6';
  const finalTop = overrideTop ?? top;
  const finalHeight = Math.max(overrideHeight ?? height, 22);
  const bg = isDone ? 'hsl(var(--muted))' : eventBg(color);
  const barColor = isDone ? 'hsl(var(--muted-foreground) / 0.3)' : color;
  const txtColor = isDone ? undefined : eventTextColor(color);
  const subColor = isDone ? undefined : eventSubTextColor(color);

  const cardInner = (
    <div
      className={cn('absolute inset-0 rounded-[4px] overflow-hidden', EVENT_CARD_HOVER_INNER)}
      style={{ backgroundColor: bg, borderLeft: `${LEFT_BAR_W}px solid ${barColor}` }}
    >
      <div className="h-full px-2 py-1">
        <div className="flex items-start gap-1.5">
          <button data-checkbox type="button" onClick={(e) => { e.stopPropagation(); onToggleComplete?.(event); }}
            className={cn('mt-[1px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border', isDone ? 'border-muted-foreground/40 bg-muted-foreground/20' : 'opacity-60 hover:opacity-100')}
            style={{ borderColor: isDone ? undefined : color }}>
            {isDone && <Check className="h-2 w-2 text-muted-foreground" strokeWidth={3} />}
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              {event.isChild && <span className="h-1.5 w-1.5 shrink-0 rounded-full opacity-60" style={{ backgroundColor: isDone ? 'hsl(var(--muted-foreground))' : color }} aria-hidden />}
              <span className={cn('font-semibold line-clamp-2 flex-1', isDone && 'line-through text-muted-foreground')} style={{ color: txtColor }}>{event.title}</span>
              {event.childCount && event.childCount > 0 ? (
                <span className="flex items-center gap-0.5 text-[10px] font-normal shrink-0 opacity-70" style={{ color: subColor }}>
                  <GitBranch className="h-2.5 w-2.5" />
                  {event.childCount}
                </span>
              ) : null}
            </div>
            {finalHeight >= 36 && (
              <span className="text-[10px] block mt-0.5" style={{ color: subColor }}>
                {format(event.start, 'h:mm')} – {format(event.end, 'h:mm a')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (dragPreview) {
    return (
      <div
        data-drag-ghost
        className={cn(
          'absolute text-left text-[11px] leading-tight pointer-events-none select-none',
          isDone && 'opacity-40',
        )}
        style={{ top: finalTop, height: finalHeight, left: indent + 2, right: 4, zIndex }}
      >
        <div
          className="h-full rounded-[4px] overflow-hidden"
          style={{ backgroundColor: bg, borderLeft: `${LEFT_BAR_W}px solid ${barColor}` }}
        >
          <div className="h-full px-2 py-1">
            <div className="flex items-start gap-1.5">
              <span
                className={cn(
                  'mt-[1px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border',
                  isDone ? 'border-muted-foreground/40 bg-muted-foreground/20' : 'opacity-60',
                )}
                style={{ borderColor: isDone ? undefined : color }}
                aria-hidden
              >
                {isDone && <Check className="h-2 w-2 text-muted-foreground" strokeWidth={3} />}
              </span>
              <div className="flex-1 min-w-0">
                <span className={cn('font-semibold line-clamp-2', isDone && 'line-through text-muted-foreground')} style={{ color: txtColor }}>{event.title}</span>
                {finalHeight >= 36 && (
                  <span className="text-[10px] block mt-0.5" style={{ color: subColor }}>
                    {format(event.start, 'h:mm')} – {format(event.end, 'h:mm a')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-event-block
      className={cn(
        'absolute text-left text-[11px] leading-tight cursor-pointer overflow-visible',
        EVENT_CARD_HOVER_OUTER,
        isDone && 'opacity-40',
      )}
      style={{ top: finalTop, height: finalHeight, left: indent + 2, right: 4, zIndex }}
      onMouseDown={(e) => {
        if ((e.target as HTMLElement).closest('[data-checkbox]')) {
          e.stopPropagation();
          return;
        }
        if ((e.target as HTMLElement).closest('[data-resize]')) return;
        e.stopPropagation();
        onBlockMouseDown?.(e);
      }}
      onContextMenu={(e) => {
        if ((e.target as HTMLElement).closest('[data-checkbox]')) return;
        if ((e.target as HTMLElement).closest('[data-resize]')) return;
        e.preventDefault();
        e.stopPropagation();
        onEventContextMenu?.(event, e.clientX, e.clientY);
      }}
    >
      <div className="absolute -top-[2px] right-0 h-[2px] pointer-events-none" style={{ left: LEFT_BAR_W, backgroundColor: 'var(--event-separator, rgba(255,255,255,0.85))' }} />
      {cardInner}
      <div className="absolute -bottom-[2px] right-0 h-[2px] pointer-events-none" style={{ left: LEFT_BAR_W, backgroundColor: 'var(--event-separator, rgba(255,255,255,0.85))' }} />

      <div data-resize="top" className="absolute -top-1 left-0 right-0 h-2.5 cursor-ns-resize z-10"
        onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); onResizeStart?.(e, event, 'top'); }} />
      <div data-resize="bottom" className="absolute -bottom-1 left-0 right-0 h-2.5 cursor-ns-resize z-10"
        onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); onResizeStart?.(e, event, 'bottom'); }} />
    </div>
  );
}

export { eventBg, eventTextColor, EVENT_CARD_HOVER_OUTER, EVENT_CARD_HOVER_INNER };
