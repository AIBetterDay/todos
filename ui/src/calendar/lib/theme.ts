/**
 * Dark-mode tracker. Calendar internals subscribe to this so they can pick
 * the right text colour against an event's background.
 *
 * Source of truth is the iframe's own `document.documentElement.classList`
 * (the connector-host pushes a `dark` class onto every connector iframe via
 * the SDK theme channel). When that class flips, callers should dispatch the
 * `THEME_CHANGE_EVENT` so the calendar can re-render.
 *
 * We don't use a context provider — that would force every connector that
 * uses the calendar to wrap a provider just to satisfy the calendar.
 */
export const THEME_CHANGE_EVENT = 'better-calendar-theme-change';

export function isDarkMode(): boolean {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

export function notifyThemeChange(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}
