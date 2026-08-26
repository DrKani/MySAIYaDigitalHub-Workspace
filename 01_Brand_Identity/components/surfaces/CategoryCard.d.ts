import * as React from 'react';

export type CategoryKey =
  | 'leadership' | 'service' | 'spiritual' | 'medical'
  | 'youth' | 'learning' | 'events' | 'committee';

/**
 * Category card — Programme Directory tile. Gradient header fold (40px top
 * corners, icon chip, eyebrow, Playfair title) over a white body. One gradient
 * per category; 3-up desktop / 2-up tablet / 1-up mobile, 16–24px gap.
 */
export interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'service' */
  category?: CategoryKey;
  icon?: React.ReactNode;
  /** Defaults to the category's own label. */
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export function CategoryCard(props: CategoryCardProps): JSX.Element;

/** The locked taxonomy: label, Lucide icon name and gradient per category. */
export declare const CATEGORIES: Record<CategoryKey, { label: string; icon: string; gradient: string; dark: boolean }>;
