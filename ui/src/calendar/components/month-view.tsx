import { useEffect, useMemo, useReducer } from 'react';
import { addDays, startOfWeek } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/cn.js';
import { Check } from 'lucide-react';
import { getDateLocale } from '../lib/locale.js';
import { THEME_CHANGE_EVENT } from '../lib/theme.js';
import type { CalendarEvent } from '../lib/calendar-utils';
import {
  getMonthDays,
  getEventsForDay,
  isToday,
  format,
  startOfMonth,
  endOfMonth,
  WEEK_STARTS_ON,
} from '../lib/calendar-utils';
import { eventBg, eventTextColor } from './time-grid';

interface MonthViewProps {
  date: Date;
  events: CalendarEvent[];
  onEventClick?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  onEventContextMenu?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  onToggleComplete?: (event: CalendarEvent) => void;
  onDayClick?: (day: Date) => void;
}

const MAX_VISIBLE_EVENTS = 3;

export function MonthView({ date, events, onEventClick, onEventContextMenu, onToggleComplete, onDayClick }: MonthViewProps) {
  const { t, i18n } = useTranslation();
  const [, bumpAppearance] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    const onAppearance = () => bumpAppearance();
    window.addEventListener(THEME_CHANGE_EVENT, onAppearance);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, onAppearance);
  }, []);

  const weekdayLabels = useMemo(() => {
    const loc = getDateLocale();
    const base = startOfWeek(new Date(), { weekStartsOn: WEEK_STARTS_ON });
    return Array.from({ length: 7 }, (_, i) => format(addDays(base, i), 'EEE', { locale: loc }));
  }, [i18n.language]);

  const days = getMonthDays(date);
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const weeks: Date[][] = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 pr-3 md:pr-4">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-border/40 shrink-0">
        {weekdayLabels.map((label) => (
          <div
            key={label}
            className="py-2 text-center text-[11px] font-medium text-muted-foreground"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Weeks grid */}
      <div className="flex-1 grid overflow-hidden" style={{ gridTemplateRows: `repeat(${weeks.length}, 1fr)` }}>
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 border-b border-border/20 last:border-b-0 min-h-0">
            {week.map((day) => {
              const inMonth =
                day.getTime() >= monthStart.getTime() &&
                day.getTime() <= monthEnd.getTime();
              const today = isToday(day);
              const dayEvents = getEventsForDay(events, day);
              const allDayEvents = dayEvents.filter((e) => e.allDay);
              const timedEvents = dayEvents.filter((e) => !e.allDay);
              const visibleAllDay = allDayEvents.slice(0, MAX_VISIBLE_EVENTS);
              const slotLeft = Math.max(0, MAX_VISIBLE_EVENTS - visibleAllDay.length);
              const visibleTimed = timedEvents.slice(0, slotLeft);
              const visibleEvents = [...visibleAllDay, ...visibleTimed];
              const moreCount = dayEvents.length - visibleEvents.length;

              return (
                <div
                  key={day.toISOString()}
                  className={cn(
                    'border-r border-border/20 last:border-r-0 p-1 min-h-0 overflow-hidden',
                    'cursor-pointer hover:bg-accent/30 transition-colors',
                    !inMonth && 'bg-muted/20',
                  )}
                  onClick={() => onDayClick?.(day)}
                >
                  <div className="flex items-center justify-center mb-0.5">
                    <span
                      className={cn(
                        'text-[13px] leading-none',
                        today
                          ? 'flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold'
                          : inMonth
                            ? 'text-foreground'
                            : 'text-muted-foreground/40',
                      )}
                    >
                      {format(day, 'd')}
                    </span>
                  </div>

                  <div className="space-y-px overflow-hidden">
                    {visibleEvents.map((event) => {
                      const isDone = event.status === 'completed';
                      return (
                        <div
                          key={event.id}
                          data-event-block
                          className={cn(
                            'w-full rounded overflow-hidden px-1 py-[1px] text-[10px] leading-tight truncate text-left flex items-center gap-0.5',
                            'transition-[filter] duration-150 hover:brightness-[1.1] dark:hover:brightness-[1.3]',
                            isDone && 'opacity-40',
                          )}
                          style={{
                            backgroundColor: isDone
                              ? 'hsl(var(--muted))'
                              : eventBg(event.color ?? '#3b82f6'),
                            color: isDone ? 'hsl(var(--muted-foreground))' : eventTextColor(event.color ?? '#3b82f6'),
                          }}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onEventContextMenu?.(event, e.clientX, e.clientY);
                          }}
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleComplete?.(event);
                            }}
                            className={cn(
                              'flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-[2px] border transition-colors',
                              isDone
                                ? 'border-muted-foreground/40 bg-muted-foreground/20'
                                : 'border-current opacity-70 hover:opacity-100',
                            )}
                          >
                            {isDone && <Check className="h-1.5 w-1.5" strokeWidth={3} />}
                          </button>
                          <span
                            className={cn('truncate cursor-pointer', isDone && 'line-through')}
                            onClick={(e) => {
                              e.stopPropagation();
                              onEventClick?.(event, e.clientX, e.clientY);
                            }}
                          >
                            {!event.allDay && (
                              <span className="mr-0.5 opacity-70">
                                {format(event.start, 'HH:mm')}
                              </span>
                            )}
                            {event.title}
                          </span>
                        </div>
                      );
                    })}
                    {moreCount > 0 && (
                      <div className="text-[10px] text-muted-foreground pl-1">
                        {t('calendar.moreEvents', { count: moreCount })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
