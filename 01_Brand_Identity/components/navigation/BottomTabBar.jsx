import React from 'react';

/**
 * Bottom tab bar — five slots maximum. Active is a navy icon with a semibold
 * label; inactive is gray-400. The gold FAB is the only gold element on the bar,
 * and every target is at least 44px.
 */
export function BottomTabBar({ items = [], active, onSelect, fab = null, onFab, style = {}, ...rest }) {
  return (
    <nav aria-label="Primary" style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
      background: 'var(--white)', borderTop: '1px solid var(--gray-200)',
      padding: '8px 6px 10px', position: 'relative', ...style,
    }} {...rest}>
      {items.slice(0, 5).map((it, i) => {
        const on = it.id === active;
        const isFabSlot = fab && i === Math.floor(Math.min(items.length, 5) / 2);
        return (
          <React.Fragment key={it.id}>
            {isFabSlot && (
              <button onClick={onFab} aria-label={fab.label} style={{
                width: 56, height: 56, borderRadius: '50%', border: 'none', cursor: 'pointer',
                background: 'var(--gradient-gold)', color: 'var(--navy-900)', boxShadow: 'var(--shadow-md)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                marginTop: -22, margin: '-22px 6px 0', flexShrink: 0,
              }}>{fab.icon}</button>
            )}
            <button onClick={() => onSelect && onSelect(it.id)} aria-current={on ? 'page' : undefined} style={{
              flex: '1 1 0', minWidth: 0, minHeight: 44, padding: '0 2px',
              border: 'none', background: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              color: on ? 'var(--navy-900)' : 'var(--gray-400)',
              fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: on ? 600 : 500,
            }}>
              <span style={{ display: 'inline-flex', flexShrink: 0 }}>{it.icon}</span>
              <span style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>
            </button>
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/**
 * Mobile drawer — slides in over a rgba(6,22,47,0.62) scrim in 300ms with the
 * standard easing. Tap the scrim or swipe left to dismiss.
 */
export function Drawer({ open = true, onClose, user = null, items = [], active, onSelect, style = {}, ...rest }) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: open ? 'auto' : 'none', ...style }} {...rest}>
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0, background: 'rgba(6,22,47,0.62)',
        opacity: open ? 1 : 0, transition: 'opacity var(--duration-slow) var(--ease-out)',
      }} />
      <aside style={{
        position: 'absolute', top: 0, bottom: 0, left: 0, width: 'min(280px, 86%)', boxSizing: 'border-box',
        background: 'var(--navy-900)', color: '#fff', padding: 22,
        display: 'flex', flexDirection: 'column', gap: 6,
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform var(--duration-slow) var(--ease-out)',
        boxShadow: 'var(--shadow-lg)',
      }}>
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 20 }}>
            <span style={{
              width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
              background: 'var(--gradient-category-service)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16, color: '#fff',
            }}>{user.initials}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--navy-300)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.meta}</div>
            </div>
          </div>
        )}
        {items.map((it) => {
          const on = it.id === active;
          return (
            <button key={it.id} onClick={() => onSelect && onSelect(it.id)} style={{
              display: 'flex', alignItems: 'center', gap: 14, minHeight: 48, padding: '0 12px',
              border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-lg)',
              background: on ? 'rgba(212,175,55,0.14)' : 'transparent',
              color: on ? '#fff' : '#C9D6E4',
              fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: on ? 600 : 500,
              minWidth: 0, textAlign: 'left',
            }}>
              <span style={{ display: 'inline-flex', flexShrink: 0, color: on ? 'var(--gold-400)' : 'inherit' }}>{it.icon}</span>
              <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>
            </button>
          );
        })}
      </aside>
    </div>
  );
}

/**
 * Sticky action bar — holds exactly one primary action, with at most one
 * secondary icon button beside it.
 */
export function ActionBar({ action, secondary = null, style = {}, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 16px', background: 'var(--white)',
      borderTop: '1px solid var(--gray-200)', ...style,
    }} {...rest}>
      {secondary && (
        <button onClick={secondary.onClick} aria-label={secondary.label} style={{
          width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--gray-300)', background: 'var(--white)', color: 'var(--navy-900)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>{secondary.icon}</button>
      )}
      <button onClick={action.onClick} style={{
        flex: 1, minHeight: 48, border: 'none', borderRadius: 'var(--radius-pill)',
        background: 'var(--gradient-gold)', color: 'var(--navy-900)', cursor: 'pointer',
        fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14,
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>{action.label}</button>
    </div>
  );
}
