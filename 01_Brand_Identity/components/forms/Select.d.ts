import * as React from 'react';

/** Dropdown using the shared field-state borders (purple focus, teal success, magenta error). */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Validation message; coloured by `state`. */
  message?: string;
  /** @default 'default' */
  state?: 'default' | 'success' | 'warning' | 'error';
  required?: boolean;
  options?: Array<string | { value: string; label: string }>;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Select(props: SelectProps): JSX.Element;
