import * as React from 'react';

/**
 * Modal — five locked popup patterns, one job each: locked (feature prompt),
 * consent (cookie/privacy), achievement, welcome (game onboarding), plain.
 * Never stack two modals; never give one more than one primary action.
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'plain' */
  pattern?: 'locked' | 'consent' | 'achievement' | 'welcome' | 'plain';
  /** @default true */
  open?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  /** @default 460 */
  width?: number;
  style?: React.CSSProperties;
}
export function Modal(props: ModalProps): JSX.Element | null;
