import * as React from 'react';

/**
 * Blog post card — the unit of the Reflections / In Action feed. One component,
 * three layouts: stacked (grid), horizontal (list) and feature (lead story).
 * Meta is always one line: author · date · read time.
 */
export interface PostCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** @default 'stacked' */
  layout?: 'stacked' | 'horizontal' | 'feature';
  cover?: string;
  category?: string;
  title: string;
  excerpt?: string;
  author?: string;
  date?: string;
  /** e.g. "6 min read" */
  readTime?: string;
  href?: string;
  style?: React.CSSProperties;
}
export function PostCard(props: PostCardProps): JSX.Element;
