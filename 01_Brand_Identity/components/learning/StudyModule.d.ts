import * as React from 'react';

export interface StudyLesson {
  id?: string;
  title: string;
  /** @default 'todo' */
  state?: 'done' | 'current' | 'todo' | 'locked';
  /** e.g. "12 min" */
  duration?: string;
}

/**
 * Study module — one chapter of Book Club or MySAIYa 101: gradient masthead,
 * progress bar, lesson list. Exactly one lesson should carry state="current".
 */
export interface StudyModuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Feature gradient slot 1–5 for the masthead. @default 2 */
  gradient?: 1 | 2 | 3 | 4 | 5;
  /** Uppercase kicker, e.g. "Module 3". */
  module?: string;
  title: string;
  description?: string;
  lessons?: StudyLesson[];
  /** Override the derived percentage. */
  progress?: number;
  /** Footer slot — usually a Button. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StudyModule(props: StudyModuleProps): JSX.Element;
