import React from 'react';

/**
 * Hub sidebar — member-only navigation. 264px expanded / 76px collapsed.
 * Items are grouped in labelled clusters (Main, Journey, Community, Committee),
 * max six per group. Active item: 3px gold left rule, 14% gold wash, gold icon,
 * white semibold label — only ever one at a time. Hover is an 8% white wash with
 * no movement. Counts use the semantic accent for their area (orange for live
 * activity, red only for errors). The progress footer is pinned to the bottom.
 */
export function Sidebar({
  groups = [], active, onSelect, collapsed = false,
  brand = 'MySAIYa Hub', logo, progress = null, style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const width = collapsed ? 76 : 264;

  return (
    <nav aria-label="Hub navigation" style={{
      width, flexShrink: 0, background: 'var(--navy-900)',
      borderRadius: 'var(--radius-2xl)', padding: collapsed ? '20px 12px' : '20px 14px',
      display: 'flex', flexDirection: 'column', gap: 4, minHeight: 520,
      transition: 'width var(--duration-standard) var(--ease-out)', ...style,
    }} {...rest}>
      <div style={{ padding: collapsed ? '6px 0 18px' : '6px 12px 18px', display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start', gap: 10 }}>
        {logo}
        {!collapsed && (
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 15, lineHeight: 1, background: 'var(--gradient-gold-wordmark)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', whiteSpace: 'nowrap' }}>{brand}</span>
        )}
      </div>

      {groups.map((grp) => (
        <React.Fragment key={grp.label}>
          {!collapsed && (
            <span style={{ padding: '10px 12px 6px', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-300)' }}>{grp.label}</span>
          )}
          {grp.items.slice(0, 6).map((it) => {
            const on = it.id === active;
            const hot = hover === it.id;
            return (
              <button
                key={it.id}
                onClick={() => onSelect && onSelect(it.id)}
                onMouseEnter={() => setHover(it.id)}
                onMouseLeave={() => setHover(null)}
                title={collapsed ? it.label : undefined}
                aria-current={on ? 'page' : undefined}
                style={{
                  position: 'relative', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 12,
                  minHeight: 44, padding: collapsed ? '0 12px' : '0 14px',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  borderRadius: 'var(--radius-lg)',
                  background: on ? 'rgba(212,175,55,0.14)' : hot ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: on ? '#fff' : '#C9D6E4',
                  fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: on ? 600 : 500,
                  transition: 'background var(--duration-standard) var(--ease-out)',
                  overflow: 'hidden',
                }}
              >
                {on && <span style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, borderRadius: 3, background: 'var(--gold-500)' }} />}
                <span style={{ display: 'inline-flex', flexShrink: 0, color: on ? 'var(--gold-400)' : 'inherit' }}>{it.icon}</span>
                {!collapsed && <span style={{ flex: 1, textAlign: 'left', whiteSpace: 'nowrap' }}>{it.label}</span>}
                {!collapsed && it.count != null && (
                  <span style={{
                    flexShrink: 0, minWidth: 22, height: 22, padding: '0 7px', borderRadius: 'var(--radius-pill)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: it.tone === 'error' ? 'var(--red-500)' : 'var(--orange-500)',
                    color: '#fff', fontSize: 11, fontWeight: 700,
                  }}>{it.count}</span>
                )}
              </button>
            );
          })}
        </React.Fragment>
      ))}

      {progress && (
        <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          {collapsed ? (
            <div style={{ height: 6, borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.14)', overflow: 'hidden' }}>
              <div style={{ width: `${progress.percent}%`, height: '100%', background: 'var(--gradient-gold)' }} />
            </div>
          ) : (
            <React.Fragment>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 4px 8px', fontFamily: 'var(--font-ui)', fontSize: 13 }}>
                <span style={{ color: 'var(--navy-300)' }}>{progress.label}</span>
                <span style={{ color: '#fff', fontWeight: 700 }}>{progress.points}</span>
              </div>
              <div style={{ height: 6, borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.14)', overflow: 'hidden' }}>
                <div style={{ width: `${progress.percent}%`, height: '100%', background: 'var(--gradient-gold)' }} />
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </nav>
  );
}
