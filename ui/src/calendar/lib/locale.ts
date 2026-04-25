/**
 * Date-fns locale picker. Connectors call `setCalendarLocale('zh' | 'en')`
 * when the host broadcasts a locale change; the calendar components read the
 * current value via `getDateLocale()`.
 *
 * Kept tiny on purpose so the calendar bundle stays small. If a connector
 * needs more locales, it can `setCalendarLocaleObject(myDateFnsLocale)`.
 */
import { type Locale } from 'date-fns';
import { zhCN, enUS } from 'date-fns/locale';

let current: Locale = enUS;

export type SupportedLocale = 'zh' | 'en';

export function setCalendarLocale(code: SupportedLocale | string): void {
  current = code.toLowerCase().startsWith('zh') ? zhCN : enUS;
}

export function setCalendarLocaleObject(locale: Locale): void {
  current = locale;
}

export function getDateLocale(): Locale {
  return current;
}
