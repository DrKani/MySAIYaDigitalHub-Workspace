import * as React from 'react';

/**
 * MySAIYa action button. Gold gradient is the sacred primary CTA (navy text);
 * navy secondary; outline tertiary; red destructive; purple-glow for alert CTAs.
 *
 * @startingPoint section="Core" subtitle="Primary, secondary, tertiary & destructive actions" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'purple' | 'gold-outline';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** 'pill' = fully rounded (sign-in/up, hero CTAs). @default 'default' */
  shape?: 'default' | 'pill';
  /** ALL CAPS with wide tracking (labels ≤3 words only). @default false */
  uppercase?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
