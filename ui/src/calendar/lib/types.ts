/**
 * Calendar package's view of a "todo-like" item, decoupled from any specific
 * host data layer. Connectors that want to plug their own row shape into the
 * calendar can adapt to this shape via a one-line `mapToTodo()` function.
 *
 * Date fields use the same loose ISO format the host uses:
 *   - `YYYY-MM-DD`         → all-day
 *   - `YYYY-MM-DDTHH:mm`   → timed (local timezone, no Z)
 *
 * Mixed pairs (one timed, one date-only) get normalised by `todoToCalendarEvent`
 * the same way the legacy code did.
 */
export interface CalendarTodoLike {
  id: string;
  title: string;
  status?: string;
  priority?: string;
  color?: string | null;
  parentId?: string | null;
  dueDate?: string | null;
  dateStart?: string | null;
  remindAt?: string | null;
  /** JSON-encoded `{ type: 'none'|'daily'|... }`. Calendar reads `.type` only. */
  repeatRule?: string;
}

export type TodoRepeatType = 'none' | 'daily' | 'weekdays' | 'weekly' | 'monthly';

export interface CalendarTodoPatch {
  title?: string;
  dateStart?: string | null;
  dueDate?: string | null;
  color?: string | null;
  repeatRule?: { type: TodoRepeatType };
}

export interface CalendarTodoCreate {
  title: string;
  dateStart?: string | null;
  dueDate?: string | null;
  color?: string | null;
  repeatRule?: { type: TodoRepeatType };
}
export interface PaginationMeta { total: number; page: number; pageSize: number; }
export interface ApiResponse<T = unknown> { success: true; data: T; meta?: PaginationMeta; }
