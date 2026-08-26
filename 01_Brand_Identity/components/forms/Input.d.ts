import * as React from 'react';

/**
 * Text field with label, helper text and validation. Gold border on focus;
 * red border + icon on error (never a red fill). 48px tall for touch.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message; switches the field to its invalid state. */
  error?: string | null;
  required?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
