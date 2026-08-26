import * as React from 'react';

export interface NavItem { id: string; label: string; icon?: React.ReactNode }

/** Bottom tab bar — five slots max; the gold FAB is the bar's only gold element. */
export interface BottomTabBarProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[];
  active?: string;
  onSelect?: (id: string) => void;
  fab?: { label: string; icon?: React.ReactNode } | null;
  onFab?: () => void;
}
export function BottomTabBar(props: BottomTabBarProps): JSX.Element;

/** Mobile drawer — 300ms slide over a rgba(6,22,47,0.62) scrim. */
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  user?: { initials: string; name: string; meta?: string } | null;
  items?: NavItem[];
  active?: string;
  onSelect?: (id: string) => void;
}
export function Drawer(props: DrawerProps): JSX.Element;

/** Sticky action bar — exactly one primary action. */
export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  action: { label: string; onClick?: () => void };
  secondary?: { label: string; icon?: React.ReactNode; onClick?: () => void } | null;
}
export function ActionBar(props: ActionBarProps): JSX.Element;
