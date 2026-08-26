import * as React from 'react';

/**
 * Quiz question — the Play It answer card. Options are 52px targets; answer
 * feedback always pairs colour with a glyph (✓ / ✕). The card locks after one
 * answer and reveals the explanation.
 */
export interface QuizQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  total?: number;
  question: string;
  options: string[];
  /** Index of the correct option. @default 0 */
  correct?: number;
  /** Revealed after answering. */
  explanation?: string;
  onAnswer?: (index: number, correct: boolean) => void;
  /** Pre-answer the card (for docs / review mode). */
  value?: number | null;
  style?: React.CSSProperties;
}
export function QuizQuestion(props: QuizQuestionProps): JSX.Element;
