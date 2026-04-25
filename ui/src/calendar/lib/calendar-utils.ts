import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addDays,
  addWeeks,
  addMonths,
  subDays,
  subWeeks,
  subMonths,
  format,
  isSameDay,
  isToday,
  parseISO,
  getDay,
  differenceInMinutes,
  setHours,
  setMinutes,
  isBefore,
  isAfter,
  startOfDay,
  endOfDay,
} from 'date-fns';
import type { Locale } from 'date-fns';

export type CalendarView = 'day' | 'week' | 'month';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  color?: string;
  status?: string;
  priority?: string;
  raw?: unknown;
  /** 父子任务展示信息（可选）：childCount 用于在事件上显示"3 子任务"；isChild 用于画缩进/虚线。 */
  childCount?: number;
  isChild?: boolean;
}

export interface TimeSlot {
  hour: number;
  label: string;
}

export const HOUR_HEIGHT = 60;
export const HOURS = Array.from({ length: 24 }, (_, i) => i);
export const WEEK_STARTS_ON = 1; // Monday

export function getTimeSlots(): TimeSlot[] {
  return HOURS.map((h) => ({
    hour: h,
    label: `${String(h).padStart(2, '0')}:00`,
  }));
}

export function getWeekDays(date: Date): Date[] {
  const start = startOfWeek(date, { weekStartsOn: WEEK_STARTS_ON });
  return eachDayOfInterval({ start, end: addDays(start, 6) });
}

export function getMonthDays(date: Date): Date[] {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calStart = startOfWeek(monthStart, { weekStartsOn: WEEK_STARTS_ON });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: WEEK_STARTS_ON });
  return eachDayOfInterval({ start: calStart, end: calEnd });
}

export function getViewDateRange(
  date: Date,
  view: CalendarView,
): { start: Date; end: Date } {
  switch (view) {
    case 'day':
      return { start: startOfDay(date), end: endOfDay(date) };
    case 'week': {
      const weekStart = startOfWeek(date, { weekStartsOn: WEEK_STARTS_ON });
      return { start: startOfDay(weekStart), end: endOfDay(addDays(weekStart, 6)) };
    }
    case 'month': {
      const monthStart = startOfMonth(date);
      const monthEnd = endOfMonth(date);
      const calStart = startOfWeek(monthStart, { weekStartsOn: WEEK_STARTS_ON });
      const calEnd = endOfWeek(monthEnd, { weekStartsOn: WEEK_STARTS_ON });
      return { start: startOfDay(calStart), end: endOfDay(calEnd) };
    }
  }
}

export function navigateDate(
  date: Date,
  view: CalendarView,
  direction: 'prev' | 'next',
): Date {
  const fn = direction === 'next'
    ? { day: addDays, week: addWeeks, month: addMonths }
    : { day: subDays, week: subWeeks, month: subMonths };
  return fn[view](date, 1);
}

function isZhLocale(locale: Locale): boolean {
  return (locale.code ?? '').toLowerCase().startsWith('zh');
}

export function getViewTitle(date: Date, view: CalendarView, locale: Locale): string {
  const zh = isZhLocale(locale);
  switch (view) {
    case 'day':
      return zh
        ? format(date, 'yyyy年M月d日 EEE', { locale })
        : format(date, 'EEE, MMM d, yyyy', { locale });
    case 'week': {
      const weekDays = getWeekDays(date);
      const first = weekDays[0];
      const last = weekDays[6];
      if (first.getMonth() === last.getMonth()) {
        return zh
          ? format(first, 'yyyy年M月', { locale })
          : format(first, 'MMMM yyyy', { locale });
      }
      if (first.getFullYear() === last.getFullYear()) {
        return zh
          ? `${format(first, 'M月', { locale })} – ${format(last, 'M月', { locale })} ${format(first, 'yyyy年', { locale })}`
          : `${format(first, 'MMM', { locale })} – ${format(last, 'MMM yyyy', { locale })}`;
      }
      return zh
        ? `${format(first, 'yyyy年M月', { locale })} – ${format(last, 'yyyy年M月', { locale })}`
        : `${format(first, 'MMM yyyy', { locale })} – ${format(last, 'MMM yyyy', { locale })}`;
    }
    case 'month':
      return zh
        ? format(date, 'yyyy年M月', { locale })
        : format(date, 'MMMM yyyy', { locale });
  }
}

export function getEventTopAndHeight(
  event: CalendarEvent,
  dayDate: Date,
): { top: number; height: number } {
  const dayStart = startOfDay(dayDate);
  const dayEnd = endOfDay(dayDate);

  const effectiveStart = isBefore(event.start, dayStart) ? dayStart : event.start;
  const effectiveEnd = isAfter(event.end, dayEnd) ? dayEnd : event.end;

  const startMinutes =
    effectiveStart.getHours() * 60 + effectiveStart.getMinutes();
  const endMinutes =
    effectiveEnd.getHours() * 60 + effectiveEnd.getMinutes();

  const top = (startMinutes / 60) * HOUR_HEIGHT;
  const height = Math.max(((endMinutes - startMinutes) / 60) * HOUR_HEIGHT, 20);

  return { top, height };
}

export function isEventOnDay(event: CalendarEvent, day: Date): boolean {
  const dayStart = startOfDay(day);
  const dayEnd = endOfDay(day);
  return isBefore(event.start, dayEnd) && isAfter(event.end, dayStart);
}

export function getEventsForDay(
  events: CalendarEvent[],
  day: Date,
): CalendarEvent[] {
  return events.filter((e) => isEventOnDay(e, day));
}

export function timeFromY(y: number, snapMinutes = 15): { hours: number; minutes: number } {
  const totalMinutes = Math.max(0, Math.min(24 * 60 - 1, (y / HOUR_HEIGHT) * 60));
  const snapped = Math.round(totalMinutes / snapMinutes) * snapMinutes;
  return {
    hours: Math.floor(snapped / 60),
    minutes: snapped % 60,
  };
}

export function formatTimeRange(start: Date, end: Date): string {
  return `${format(start, 'HH:mm')} – ${format(end, 'HH:mm')}`;
}

export function formatDuration(start: Date, end: Date): string {
  const mins = differenceInMinutes(end, start);
  if (mins < 60) return `${mins} 分钟`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h} 小时 ${m} 分钟` : `${h} 小时`;
}

export { isSameDay, isToday, format, parseISO, startOfDay, endOfDay, startOfMonth, endOfMonth, setHours, setMinutes, addDays, getDay };
