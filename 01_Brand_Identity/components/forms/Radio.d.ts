import * as React from 'react';

/** Radio button. Teal dot when selected; give every option in a group the same `name`. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  message?: string;
  /** @default 'default' */
  state?: 'default' | 'warning' | 'error';
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
