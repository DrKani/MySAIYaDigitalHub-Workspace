import * as React from 'react';

/** Immediate-effect toggle. Teal on, grey off — never gold. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  message?: string;
  /** @default 'default' */
  state?: 'default' | 'warning' | 'error';
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
