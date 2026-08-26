import * as React from 'react';

/**
 * Semantic alert / banner / toast. Colour is never the only cue — always pairs an
 * icon with a title. Uses the locked semantic token set. error/destructive uses
 * role="alert"; everything else role="status".
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'info' */
  severity?: 'success' | 'info' | 'warning' | 'error' | 'progress' | 'devotional' | 'achievement';
  title?: string;
  icon?: React.ReactNode;
  /** Renders a dismiss button when provided. */
  onClose?: (() => void) | null;
  /** Action row (e.g. a Button) below the body. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
