import type { CalendarEvent } from '../lib/calendar-utils';
import { TimeGrid, type SelectionSlot } from './time-grid';

interface DayViewProps {
  date: Date;
  events: CalendarEvent[];
  selectionSlot?: SelectionSlot | null;
  onEventClick?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  onEventContextMenu?: (event: CalendarEvent, mouseX: number, mouseY: number) => void;
  onToggleComplete?: (event: CalendarEvent) => void;
  onSlotClick?: (start: Date, end: Date, slot: SelectionSlot, mouseX: number, mouseY: number) => void;
  onEventDrop?: (eventId: string, newStart: Date, newEnd: Date) => void;
  onEventResize?: (eventId: string, newStart: Date, newEnd: Date) => void;
  onEmptyAllDayContextMenu?: (day: Date, mouseX: number, mouseY: number) => void;
  onEmptyGridContextMenu?: (payload: { dayIndex: number; start: Date; end: Date; mouseX: number; mouseY: number }) => void;
}

export function DayView({ date, events, selectionSlot, onEventClick, onEventContextMenu, onToggleComplete, onSlotClick, onEventDrop, onEventResize, onEmptyAllDayContextMenu, onEmptyGridContextMenu }: DayViewProps) {
  return (
    <TimeGrid
      days={[date]} events={events} selectionSlot={selectionSlot}
      onEventClick={onEventClick} onEventContextMenu={onEventContextMenu} onToggleComplete={onToggleComplete}
      onSlotClick={onSlotClick} onEventDrop={onEventDrop}
      onEventResize={onEventResize} onEmptyAllDayContextMenu={onEmptyAllDayContextMenu}
      onEmptyGridContextMenu={onEmptyGridContextMenu}
    />
  );
}
