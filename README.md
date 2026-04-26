# Todos

Capture what needs to happen, place it on your calendar, and let Better help you keep the list moving.

[中文](./README.zh-CN.md)

## Why It Helps

Todos is built for the moment when a thought becomes an action. Add a task in plain language, give it a date or reminder, and review everything from a focused list or calendar view.

## What You Can Do

- Capture tasks with title, notes, priority, tags, subtasks, due dates, repeat rules, and reminders.
- Plan by time with calendar-aware day, week, and month views.
- Ask Better to find overdue work, reschedule a group, complete errands, or clean up a list.
- Keep status, priority, reminders, and context visible in the same workspace.

## Example Requests

- “Remind me to renew the passport next Friday morning.”
- “Show overdue todos and move the low priority ones to next week.”
- “Mark everything tagged errands as completed.”

## Interface Preview

![Todos overview](./assets/store/overview.png)

Plan from chat into the calendar: Better can turn a natural-language schedule into real todos with times, reminders, and context.

![Todo list view](./assets/store/listview.png)

Switch to a focused list when you want to scan what is done, what is scheduled, and what still needs attention.

![Create todo on the calendar](./assets/store/make_todo.png)

Create or edit todos directly inside the calendar, including time range, repeat rule, color, and reminder settings.

![Weekly calendar view](./assets/store/week_view.png)

Use the week view to balance recurring routines, deep work, errands, and flexible tasks across your schedule.

![Monthly calendar view](./assets/store/month_view.png)

Zoom out to the month view to spot busy weeks and keep long-running plans visible.

## Chat Cards

Todos now includes React chat cards in `ui/src/cards/` for structured responses from Better:

- Todo item cards show one task with priority, status, schedule, reminders, and tags.
- Todo list cards group multiple tasks with completed and pending counts.
- Schedule cards render day plans as a compact time-ordered agenda.
- Bulk action cards summarize completed, rescheduled, cancelled, or updated tasks.

These cards keep task results readable and actionable in chat instead of exposing raw JSON.

## Privacy

Todos stores task data inside Better on your device. It does not contact external services and only uses its own connector storage.

## Maintainer Docs

Technical notes, build steps, and release guidance live in [docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md). Store media and chat-card conventions live in [docs/STORE_ASSETS.md](./docs/STORE_ASSETS.md).
