import type { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/cn.js';
import { getDateLocale } from '../lib/locale.js';

type ButtonVariant = 'ghost' | 'outline';
type ButtonSize = 'icon' | 'sm';

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  icon: 'h-10 w-10',
  sm: 'h-9 rounded-md px-3',
};

interface InlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button({
  variant = 'ghost',
  size = 'sm',
  className,
  ...rest
}: InlineButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className,
      )}
      {...rest}
    />
  );
}
import type { CalendarView } from '../lib/calendar-utils';
import { getViewTitle, navigateDate } from '../lib/calendar-utils';

interface CalendarHeaderProps {
  date: Date;
  view: CalendarView;
  onDateChange: (date: Date) => void;
  onViewChange: (view: CalendarView) => void;
  className?: string;
  /** 标题右侧插槽（给 app 能力面板等入口用，不影响日期切换控件）。 */
  leftExtra?: ReactNode;
}

export function CalendarHeader({
  date,
  view,
  onDateChange,
  onViewChange,
  className,
  leftExtra,
}: CalendarHeaderProps) {
  const { t } = useTranslation();
  const title = getViewTitle(date, view, getDateLocale());
  const VIEW_OPTIONS: { value: CalendarView; label: string }[] = [
    { value: 'day', label: t('calendar.viewDay') },
    { value: 'week', label: t('calendar.viewWeek') },
    { value: 'month', label: t('calendar.viewMonth') },
  ];

  return (
    <div className={cn('flex items-center justify-between px-4 py-2 border-b border-border/50', className)}>
      {/* Left: date title + optional slot */}
      <div className="flex items-center gap-3 min-w-0">
        <h2 className="text-base font-semibold select-none">{title}</h2>
        {leftExtra}
      </div>

      {/* Right: < 今天 >  日 周 月 */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => onDateChange(navigateDate(date, view, 'prev'))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-7 rounded-full px-3 text-xs font-medium"
            onClick={() => onDateChange(new Date())}
          >
            {t('calendar.today')}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => onDateChange(navigateDate(date, view, 'next'))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center rounded-lg border border-border/60 bg-muted/30 p-0.5">
          {VIEW_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onViewChange(opt.value)}
              className={cn(
                'px-3 py-1 text-xs font-medium rounded-md transition-all',
                view === opt.value
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
