import * as React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  /** Descriptive count. Orange by default; 'error' turns it red. */
  count?: number | string;
  tone?: 'activity' | 'error';
}

export interface SidebarGroup {
  /** Cluster label: Main, Journey, Community, Committee. */
  label: string;
  /** Max six items — more means the group needs splitting. */
  items: SidebarItem[];
}

/**
 * Hub sidebar — member-only. 264px expanded / 76px collapsed, labelled clusters,
 * one active item with a gold left rule, progress footer pinned to the bottom.
 * Committee tools are their own group and appear only for that role.
 */
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  groups: SidebarGroup[];
  active?: string;
  onSelect?: (id: string) => void;
  /** @default false */
  collapsed?: boolean;
  /** @default 'MySAIYa Hub' */
  brand?: string;
  logo?: React.ReactNode;
  progress?: { label: string; points: string; percent: number } | null;
  style?: React.CSSProperties;
}
export function Sidebar(props: SidebarProps): JSX.Element;
