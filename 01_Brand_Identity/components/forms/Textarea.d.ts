import * as React from 'react';

/** Multi-line text field. Same state borders as Input; vertical resize only. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  message?: string;
  /** @default 'default' */
  state?: 'default' | 'success' | 'warning' | 'error';
  required?: boolean;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
