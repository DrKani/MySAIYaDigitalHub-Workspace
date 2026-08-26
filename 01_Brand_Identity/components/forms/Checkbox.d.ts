import * as React from 'react';

/** Checkbox, teal when checked, 44px hit area. Consent boxes are never pre-selected. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  message?: string;
  /** @default 'default' */
  state?: 'default' | 'warning' | 'error';
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
