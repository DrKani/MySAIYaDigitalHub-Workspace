import * as React from 'react';

/**
 * Status badge — the deep-fill half of the shared pill family (Chip is the
 * tinted half). Pill radius, 5×13 padding, 2px border, Poppins 600 at 12/16.
 * Every border is its own fill one step lighter. Status colours never override
 * card category colours.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'active' */
  status?: 'neutral' | 'active' | 'admin' | 'guest' | 'pending' | 'suspended' | 'points' | 'achievement';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
