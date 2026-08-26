import React from 'react';

/**
 * Breadcrumbs — third level and deeper only, one line, never wrapped. Separator
 * is always a chevron, one step lighter than the links. The current page is
 * never a link and never gold: gold is reserved for actions. Maximum four
 * levels — collapse the middle behind an expandable "…" button.
 */
export function Breadcrumbs({ items = [], tone = 'light', maxItems = 4, style = {}, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const dark = tone === 'dark';
  const linkColor = dark ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)';
  const leafColor = dark ? '#fff' : 'var(--navy-900)';
  const sepColor = dark ? 'rgba(255,255,255,0.38)' : 'var(--gray-300)';

  const collapsed = !open && items.length > maxItems;
  const shown = collapsed ? [items[0], { collapsed: true }, items[items.length - 1]] : items;

  const Sep = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  return (
    <nav aria-label="Breadcrumb" style={{
      display: 'flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-ui)', fontSize: 14, whiteSpace: 'nowrap',
      overflow: 'hidden', ...style,
    }} {...rest}>
      {shown.map((it, i) => {
        const last = i === shown.length - 1;
        return (
          <React.Fragment key={it.collapsed ? 'ell' : (it.href || it.label) + i}>
            {it.collapsed ? (
              <button onClick={() => setOpen(true)} aria-label="Show all levels" style={{
                border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-sm)',
                background: dark ? 'rgba(255,255,255,0.12)' : 'var(--gray-100)',
                color: linkColor, padding: '3px 9px', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13, lineHeight: 1.4,
              }}>…</button>
            ) : last ? (
              <span aria-current="page" style={{ fontWeight: 600, color: leafColor, overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.label}</span>
            ) : (
              <a href={it.href || '#'} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: linkColor, textDecoration: 'none', fontWeight: 500 }}>
                {it.icon}
                {i === 0 && !it.icon ? it.label : it.label}
              </a>
            )}
            {!last && <Sep />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/**
 * Back link — the article and detail-page alternative to a full trail. One
 * arrow, one destination, no chevrons.
 */
export function BackLink({ href = '#', children = 'Back', style = {}, ...rest }) {
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 15,
      color: 'var(--navy-700)', textDecoration: 'none', ...style,
    }} {...rest}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
      {children}
    </a>
  );
}
