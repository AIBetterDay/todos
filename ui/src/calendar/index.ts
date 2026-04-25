/**
 * Pure, host-agnostic calendar widgets for Better connectors. Lifted out of
 * the host app so the todos connector can render the calendar UI inside its
 * iframe without pulling in private host packages.
 *
 * No imports of host services or app-specific APIs.
 */

export { Calendar } from './components/calendar.js';
export { CalendarHeader } from './components/calendar-header.js';
export { DayView } from './components/day-view.js';
export { WeekView } from './components/week-view.js';
export { MonthView } from './components/month-view.js';
export { TimeGrid, eventBg, eventTextColor, type SelectionSlot } from './components/time-grid.js';
export { EventPopover } from './components/event-popover.js';
export { EventContextMenu, type EventClipboardAction } from './components/event-context-menu.js';

export {
  type CalendarEvent,
  type CalendarView,
  type TimeSlot,
  HOUR_HEIGHT,
  HOURS,
  WEEK_STARTS_ON,
  getTimeSlots,
  getWeekDays,
  getMonthDays,
  getViewDateRange,
  navigateDate,
  getViewTitle,
  getEventTopAndHeight,
  isEventOnDay,
  getEventsForDay,
  timeFromY,
  formatTimeRange,
  formatDuration,
  // re-exports of date-fns helpers used across the calendar
  isSameDay,
  isToday,
  format,
  parseISO,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  setHours,
  setMinutes,
  addDays,
  getDay,
} from './lib/calendar-utils.js';

export {
  todoToCalendarEvent,
  todosToCalendarEvents,
  DEFAULT_EVENT_COLOR,
} from './lib/todo-to-event.js';

export type {
  CalendarTodoLike,
  CalendarTodoCreate,
  CalendarTodoPatch,
  TodoRepeatType,
} from './lib/types.js';

export {
  setCalendarLocale,
  setCalendarLocaleObject,
  getDateLocale,
  type SupportedLocale,
} from './lib/locale.js';

export {
  THEME_CHANGE_EVENT,
  isDarkMode,
  notifyThemeChange,
} from './lib/theme.js';
