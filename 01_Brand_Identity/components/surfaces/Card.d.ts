import * as React from 'react';

/**
 * Surface card — the workhorse container. White with a soft navy-tinted shadow
 * by default; `dark` flips to navy-800; `shiny` is navy with a gold gradient
 * border (quotes / divine messages). `accent` adds a category top border.
 *
 * @startingPoint section="Core" subtitle="White, dark, glass & shiny surfaces" viewport="700x240"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'default' */
  variant?: 'default' | 'dark' | 'shiny';
  /** Category top border. @default null */
  accent?: 'leadership' | 'service' | 'spiritual' | 'education' | 'multimedia' | string | null;
  /** Frosted glass surface (white card system). @default false */
  glass?: boolean;
  /** Lift + deepen shadow on hover. @default false */
  hoverable?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
