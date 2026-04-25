import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Copy, Scissors, Files, Trash2 } from 'lucide-react';
import { cn } from '../lib/cn.js';
import type { CalendarEvent } from '../lib/calendar-utils';

export type EventClipboardAction = 'copy' | 'cut' | 'duplicate' | 'delete';

export function EventContextMenu({
  event,
  position,
  onClose,
  onAction,
}: {
  event: CalendarEvent | null;
  position: { x: number; y: number } | null;
  onClose: () => void;
  onAction: (action: EventClipboardAction, event: CalendarEvent) => void;
}) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    if (!event || !position || !ref.current) {
      setPos(null);
      return;
    }
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 8;
    let left = position.x;
    let top = position.y;
    if (left + rect.width > vw - pad) left = vw - rect.width - pad;
    if (top + rect.height > vh - pad) top = vh - rect.height - pad;
    if (left < pad) left = pad;
    if (top < pad) top = pad;
    setPos({ left, top });
  }, [event, position]);

  useEffect(() => {
    if (!event) return;
    const close = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) return;
      onClose();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('mousedown', close, true);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', close, true);
      document.removeEventListener('keydown', onKey);
    };
  }, [event, onClose]);

  if (!event || !position) return null;

  const item = (action: EventClipboardAction, icon: ReactNode, label: string, danger?: boolean) => (
    <button
      type="button"
      key={action}
      className={cn(
        'flex w-full items-center gap-2 px-3 py-2 text-left text-sm rounded-md transition-colors',
        danger ? 'text-destructive hover:bg-destructive/10' : 'text-foreground hover:bg-accent',
      )}
      onClick={() => { onAction(action, event); onClose(); }}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <>
      <div className="fixed inset-0 z-[90]" aria-hidden />
      <div
        ref={ref}
        className="fixed z-[100] min-w-[180px] rounded-lg border border-border/60 bg-popover py-1 shadow-xl"
        style={pos ? { left: pos.left, top: pos.top } : { left: position.x, top: position.y, visibility: 'hidden' }}
        role="menu"
      >
        {item('copy', <Copy className="h-4 w-4 shrink-0 opacity-70" />, t('calendar.ctxCopy'))}
        {item('cut', <Scissors className="h-4 w-4 shrink-0 opacity-70" />, t('calendar.ctxCut'))}
        {item('duplicate', <Files className="h-4 w-4 shrink-0 opacity-70" />, t('calendar.ctxDuplicate'))}
        {item('delete', <Trash2 className="h-4 w-4 shrink-0 opacity-70" />, t('calendar.ctxDelete'), true)}
      </div>
    </>
  );
}
