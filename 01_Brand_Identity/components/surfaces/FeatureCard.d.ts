import * as React from 'react';

/**
 * Feature dashboard card — gradient module tile routing into a major area.
 * Gradients are numbered 1–5 and assigned in layout order, never per module.
 * Never show more than five feature tiles at once; max 2 lines of descriptor.
 *
 * @startingPoint section="Dashboard" subtitle="Gradient module tiles" viewport="700x200"
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Slot number 1–5, assigned in layout order. @default 1 */
  gradient?: 1 | 2 | 3 | 4 | 5;
  icon?: React.ReactNode;
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
