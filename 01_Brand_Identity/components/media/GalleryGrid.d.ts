import * as React from 'react';

export interface GalleryItem {
  id?: string;
  src: string;
  alt?: string;
  /** Shown on hover/focus over a bottom scrim. */
  caption?: string;
  /** Second line under the caption — date, venue, photographer. */
  meta?: string;
  /** Uppercase pill in the top-left corner. */
  category?: string;
}

/**
 * Gallery view — album grid for Events, Seva and In Action. Photos carry the
 * page; captions reveal on hover/focus so the grid stays quiet at rest.
 */
export interface GalleryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** @default 3 */
  columns?: number;
  /** Promote the first item to a 2×2 hero tile. @default false */
  featured?: boolean;
  /** @default 12 */
  gap?: number;
  style?: React.CSSProperties;
}
export function GalleryGrid(props: GalleryGridProps): JSX.Element;
