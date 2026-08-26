import * as React from 'react';

/**
 * Pagination — numbered pages for Programme Directory and Events. Current page
 * is a filled navy square; first and last are always shown with an ellipsis gap;
 * disabled arrows stay in place so the control keeps its shape.
 */
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  page: number;
  pageCount: number;
  onChange?: (page: number) => void;
  /** Show the per-page select when set. */
  perPage?: number | null;
  onPerPageChange?: (n: number) => void;
  /** @default [12, 24, 48] */
  perPageOptions?: number[];
  /** Left-hand summary, e.g. "Showing 25–36 of 138 programmes". */
  summary?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Pagination(props: PaginationProps): JSX.Element;

/** Load-more — the Blog alternative to numbered pages. */
export interface LoadMoreProps extends React.HTMLAttributes<HTMLDivElement> {
  shown?: number;
  total?: number;
  onClick?: () => void;
  label?: string;
}
export function LoadMore(props: LoadMoreProps): JSX.Element;

/** Prev / next — the article footer pair. */
export interface PrevNextProps extends React.HTMLAttributes<HTMLDivElement> {
  prev?: { label: string; href?: string };
  next?: { label: string; href?: string };
}
export function PrevNext(props: PrevNextProps): JSX.Element;
