import * as React from 'react';

export interface CrosswordEntry {
  answer: string;
  clue: string;
  /** 0-based grid position of the first letter. */
  row: number;
  col: number;
  dir: 'across' | 'down';
}

/**
 * Crossword — the Play It puzzle board. Declare entries only; the grid, the
 * row-major clue numbering and both clue columns are derived. 44px cells.
 */
export interface CrosswordProps extends React.HTMLAttributes<HTMLDivElement> {
  entries: CrosswordEntry[];
  /** Cell size in px. @default 44 */
  cell?: number;
  /** Fill the solution in and lock the board (answer key). @default false */
  reveal?: boolean;
  title?: string;
  style?: React.CSSProperties;
}
export function Crossword(props: CrosswordProps): JSX.Element;
