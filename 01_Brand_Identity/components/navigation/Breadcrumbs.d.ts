import * as React from 'react';

export interface Crumb {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

/**
 * Breadcrumbs — third level and deeper only. One line, never wrapped; max four
 * levels with the middle collapsible. The leaf is never a link and never gold.
 */
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: Crumb[];
  /** 'dark' for hero and page headers on navy. @default 'light' */
  tone?: 'light' | 'dark';
  /** @default 4 */
  maxItems?: number;
  style?: React.CSSProperties;
}
export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;

/** Back link — the article / detail-page alternative to a full trail. */
export interface BackLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: React.ReactNode;
}
export function BackLink(props: BackLinkProps): JSX.Element;
