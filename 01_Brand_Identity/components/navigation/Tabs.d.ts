import * as React from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  /** Neutral descriptive count — never a red alert badge. */
  count?: number | string;
}

/**
 * Tabs — single-select, never removable. underline (default) / elevated (navy
 * surface + gold top stroke) / section (purple underline). Panels crossfade in
 * 150ms. Never mix tabs and filter pills in one row.
 */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
  tabs: (TabItem | string)[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** @default 'underline' */
  variant?: 'underline' | 'elevated' | 'section';
  /** Panel content, or a render function receiving the active id. */
  children?: React.ReactNode | ((active: string) => React.ReactNode);
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;

/** Segmented control — 3+ compact, mutually exclusive one/two-word options. */
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ({ id: string; label: string } | string)[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;

/** Filter pills — multi-select and removable. The opposite role to Tabs. */
export interface FilterPillsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ({ id: string; label: string } | string)[];
  value?: string[];
  onChange?: (value: string[]) => void;
  style?: React.CSSProperties;
}
export function FilterPills(props: FilterPillsProps): JSX.Element;
