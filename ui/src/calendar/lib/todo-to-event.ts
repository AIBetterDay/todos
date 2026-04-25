import { parseISO, startOfDay, endOfDay } from 'date-fns';
import type { CalendarEvent } from './calendar-utils.js';
import type { CalendarTodoLike } from './types.js';

type TodoItem = CalendarTodoLike;

export const DEFAULT_EVENT_COLOR = '#3b82f6';

const DEFAULT_REMINDER_DURATION_MS = 30 * 60 * 1000;

export function todoToCalendarEvent(todo: TodoItem): CalendarEvent | null {
  const hasStart = !!todo.dateStart;
  const hasEnd = !!todo.dueDate;

  // Defense-in-depth：后端 create-todo 已经会把"只有 remindAt"的 todo 派生成
  // 一个时间窗；这里再兜底一层，让历史数据 / 手动写入的 only-remindAt 条目
  // 也能在日历上显示（而不是默默消失）。
  if (!hasStart && !hasEnd && todo.remindAt) {
    const startStr = todo.remindAt;
    if (startStr.includes('T')) {
      const start = parseISO(startStr);
      if (!Number.isNaN(start.getTime())) {
        const end = new Date(start.getTime() + DEFAULT_REMINDER_DURATION_MS);
        return {
          id: todo.id,
          title: todo.title,
          start,
          end,
          allDay: false,
          color: todo.color || DEFAULT_EVENT_COLOR,
          status: todo.status,
          priority: todo.priority,
          raw: todo,
        };
      }
    } else {
      const day = parseISO(startStr);
      if (!Number.isNaN(day.getTime())) {
        return {
          id: todo.id,
          title: todo.title,
          start: startOfDay(day),
          end: endOfDay(day),
          allDay: true,
          color: todo.color || DEFAULT_EVENT_COLOR,
          status: todo.status,
          priority: todo.priority,
          raw: todo,
        };
      }
    }
  }

  if (!hasStart && !hasEnd) return null;

  let start: Date;
  let end: Date;
  let allDay = true;

  if (hasStart && hasEnd) {
    const startStr = todo.dateStart!;
    const endStr = todo.dueDate!;

    if (startStr.includes('T')) {
      start = parseISO(startStr);
      allDay = false;
    } else {
      start = startOfDay(parseISO(startStr));
    }

    if (endStr.includes('T')) {
      end = parseISO(endStr);
      allDay = false;
    } else {
      end = endOfDay(parseISO(endStr));
    }
  } else if (hasStart) {
    const startStr = todo.dateStart!;
    if (startStr.includes('T')) {
      start = parseISO(startStr);
      end = new Date(start.getTime() + 60 * 60 * 1000);
      allDay = false;
    } else {
      start = startOfDay(parseISO(startStr));
      end = endOfDay(parseISO(startStr));
    }
  } else {
    const endStr = todo.dueDate!;
    if (endStr.includes('T')) {
      end = parseISO(endStr);
      start = new Date(end.getTime() - 60 * 60 * 1000);
      allDay = false;
    } else {
      start = startOfDay(parseISO(endStr));
      end = endOfDay(parseISO(endStr));
    }
  }

  return {
    id: todo.id,
    title: todo.title,
    start,
    end,
    allDay,
    color: todo.color || DEFAULT_EVENT_COLOR,
    status: todo.status,
    priority: todo.priority,
    raw: todo,
  };
}

export function todosToCalendarEvents(todos: TodoItem[]): CalendarEvent[] {
  // 先建 parentId → childCount 索引，这样单条 todoToCalendarEvent 查得到。
  const childCountByParent = new Map<string, number>();
  for (const t of todos) {
    if (t.parentId) {
      childCountByParent.set(t.parentId, (childCountByParent.get(t.parentId) ?? 0) + 1);
    }
  }
  const events: CalendarEvent[] = [];
  for (const todo of todos) {
    const event = todoToCalendarEvent(todo);
    if (event) {
      event.childCount = childCountByParent.get(todo.id) ?? 0;
      event.isChild = !!todo.parentId;
      events.push(event);
    }
  }
  return events;
}
