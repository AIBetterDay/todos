import type { TodoPriority, TodoStatus } from '../lib/types';

export interface TodoCardItem {
  id?: string;
  title?: string;
  description?: string | null;
  priority?: TodoPriority | string;
  status?: TodoStatus | string;
  dueDate?: string | null;
  dateStart?: string | null;
  remindAt?: string | null;
  reminderEnabled?: boolean;
  repeatRule?: string | { type?: string } | null;
  color?: string | null;
  tags?: string[];
}

export interface TodoItemPayload {
  title?: string;
  subtitle?: string;
  item?: TodoCardItem;
}

export interface TodoListPayload {
  title?: string;
  subtitle?: string;
  items?: TodoCardItem[];
  total?: number;
  completed?: number;
  pending?: number;
}

export interface TodoSchedulePayload {
  title?: string;
  date?: string;
  items?: TodoCardItem[];
}

export interface TodoBulkActionPayload {
  title?: string;
  action?: string;
  summary?: string;
  updated?: number;
  completed?: number;
  rescheduled?: number;
  cancelled?: number;
  items?: TodoCardItem[];
}
