import { ViewTransition } from "react";

/**
 * Fades the old page out and the new one in when you move between pages
 * (CSS: ::view-transition-*(.page-*) in globals.css). Browsers without the
 * View Transitions API just swap pages instantly.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
