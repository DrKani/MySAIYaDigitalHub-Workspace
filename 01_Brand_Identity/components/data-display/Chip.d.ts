import * as React from 'react';

/**
 * Chip — the same pill as Badge (radius, 4×12 padding, Poppins 600 at 12/16),
 * for streaks, week numbers, tags and categories. Tone carries meaning:
 * gold=achievement, teal=completion, purple=reflection, orange=active/live.
 * `level` is the one gradient tone, reserved for game levels 1–10.
 */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  tone?: 'neutral' | 'gold' | 'teal' | 'purple' | 'orange' | 'navy' | 'level';
  /** 1–10, used only when tone="level". @default 5 */
  level?: number;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Chip(props: ChipProps): JSX.Element;
