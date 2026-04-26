import type { ReactNode } from 'react';

interface CardShellProps {
  eyebrow: string;
  title: string;
  icon?: ReactNode;
  meta?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export function CardShell({ eyebrow, title, icon, meta, children, footer }: CardShellProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border/70 bg-card text-card-foreground shadow-sm">
      <div className="border-b border-border/60 bg-muted/35 px-4 py-3">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background text-foreground shadow-sm">
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </div>
            <h3 className="mt-0.5 truncate text-[15px] font-semibold leading-snug text-foreground">
              {title}
            </h3>
            {meta ? <div className="mt-1 text-[11.5px] text-muted-foreground">{meta}</div> : null}
          </div>
        </div>
      </div>
      <div className="px-4 py-3">{children}</div>
      {footer ? (
        <div className="border-t border-border/50 bg-muted/20 px-4 py-2.5 text-[11.5px] text-muted-foreground">
          {footer}
        </div>
      ) : null}
    </article>
  );
}

export function Pill({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] ${className}`}>
      {children}
    </span>
  );
}
