import * as React from 'react';

/**
 * Text link with the system's seven roles and one-active-pattern rule.
 * Gold marks the active navigation item and links on dark surfaces only.
 */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** @default 'inline' */
  role?: 'inline' | 'nav' | 'footer' | 'card' | 'utility';
  /** Active / selected — gold underline. */
  active?: boolean;
  visited?: boolean;
  /** Light styling for navy surfaces. */
  onDark?: boolean;
  /** Destructive action link; prefer a button for irreversible actions. */
  danger?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Link(props: LinkProps): JSX.Element;
