import { useState, useCallback, type ReactNode } from 'react';
import type { CalendarView, CalendarEvent } from '../lib/calendar-utils';
import type { SelectionSlot } from './time-grid';
import { CalendarHeader } from './calendar-header';
import { DayView } from './day-view';
import { WeekView } from './week-view';
import { MonthView } from './month-view';

interface CalendarProps {
  events: CalendarEvent[];
  defaultView?: CalendarView;
  defaultDate?: Date;
  selectionSlot?: SelectionSlot | null;
  onEventClick?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  onEventContextMenu?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  onToggleComplete?: (event: CalendarEvent) => void;
  onSlotClick?: (start: Date, end: Date, slot: SelectionSlot, mouseX: number, mouseY: number) => void;
  onEventDrop?: (eventId: string, newStart: Date, newEnd: Date) => void;
  onEventResize?: (eventId: string, newStart: Date, newEnd: Date) => void;
  onEmptyAllDayContextMenu?: (day: Date, mouseX: number, mouseY: number) => void;
  onEmptyGridContextMenu?: (payload: { dayIndex: number; start: Date; end: Date; mouseX: number; mouseY: number }) => void;
  onDayClick?: (day: Date) => void;
  onDateChange?: (date: Date) => void;
  onViewChange?: (view: CalendarView) => void;
  className?: string;
  /** 顶部 header 左侧的额外插槽（给 app 能力面板等入口用）。 */
  headerLeftExtra?: ReactNode;
}

export function Calendar({
  events, selectionSlot, defaultView = 'day', defaultDate,
  onEventClick, onEventContextMenu, onToggleComplete, onSlotClick, onEventDrop, onEventResize, onEmptyAllDayContextMenu,
  onEmptyGridContextMenu,
  onDayClick, onDateChange, onViewChange, className, headerLeftExtra,
}: CalendarProps) {
  const [date, setDate] = useState(defaultDate ?? new Date());
  const [view, setView] = useState<CalendarView>(defaultView);

  const handleDateChange = useCallback((d: Date) => { setDate(d); onDateChange?.(d); }, [onDateChange]);
  const handleViewChange = useCallback((v: CalendarView) => { setView(v); onViewChange?.(v); }, [onViewChange]);
  const handleDayClick = useCallback((day: Date) => {
    if (onDayClick) { onDayClick(day); }
    else { setDate(day); setView('day'); onDateChange?.(day); onViewChange?.('day'); }
  }, [onDayClick, onDateChange, onViewChange]);

  return (
    <div className={`flex flex-col h-full ${className ?? ''}`}>
      <CalendarHeader date={date} view={view} onDateChange={handleDateChange} onViewChange={handleViewChange} leftExtra={headerLeftExtra} />
      {view === 'day' && (
        <DayView date={date} events={events} selectionSlot={selectionSlot}
          onEventClick={onEventClick} onEventContextMenu={onEventContextMenu} onToggleComplete={onToggleComplete}
          onSlotClick={onSlotClick} onEventDrop={onEventDrop}
          onEventResize={onEventResize} onEmptyAllDayContextMenu={onEmptyAllDayContextMenu}
          onEmptyGridContextMenu={onEmptyGridContextMenu} />
      )}
      {view === 'week' && (
        <WeekView date={date} events={events} selectionSlot={selectionSlot}
          onEventClick={onEventClick} onEventContextMenu={onEventContextMenu} onToggleComplete={onToggleComplete}
          onSlotClick={onSlotClick} onEventDrop={onEventDrop}
          onEventResize={onEventResize} onEmptyAllDayContextMenu={onEmptyAllDayContextMenu}
          onEmptyGridContextMenu={onEmptyGridContextMenu} />
      )}
      {view === 'month' && (
        <MonthView date={date} events={events}
          onEventClick={onEventClick} onEventContextMenu={onEventContextMenu} onToggleComplete={onToggleComplete}
          onDayClick={handleDayClick} />
      )}
    </div>
  );
}
