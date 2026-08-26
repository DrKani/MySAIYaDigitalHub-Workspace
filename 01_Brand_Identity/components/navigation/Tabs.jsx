import React from 'react';

/**
 * Tabs — single-select, never removable. Three locked variants:
 *   underline (default) — navy semibold label with a 3px navy underline sitting
 *     on the 1px gray-200 rule; the quiet default for content switching.
 *   elevated — the selected tab lifts onto a navy surface with white bold text
 *     and a gold gradient stroke across its top edge. Use where tabs are the
 *     primary control on the screen.
 *   section — the same underline in purple, for page-section navigation.
 * Counts are neutral pills: they describe, they never alert. Panels swap with a
 * 150ms crossfade and nothing else.
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, variant = 'underline', children, style = {}, ...rest }) {
  const ids = tabs.map((t) => (typeof t === 'string' ? t : t.id));
  const [inner, setInner] = React.useState(defaultValue ?? ids[0]);
  const active = value !== undefined ? value : inner;
  const [fade, setFade] = React.useState(1);

  const select = (id) => {
    if (id === active) return;
    setFade(0);
    setTimeout(() => {
      if (value === undefined) setInner(id);
      if (onChange) onChange(id);
      setFade(1);
    }, 150);
  };

  const rule = variant === 'elevated' ? 'none' : '1px solid var(--gray-200)';
  const line = variant === 'section' ? 'var(--purple-700)' : 'var(--navy-900)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, ...style }} {...rest}>
      <div role="tablist" style={{
        display: 'flex', gap: variant === 'elevated' ? 6 : 4,
        borderBottom: rule, alignItems: 'flex-end', flexWrap: 'wrap',
        paddingTop: variant === 'elevated' ? 6 : 0,
        boxShadow: variant === 'elevated' ? '0 1px 0 var(--navy-900)' : 'none',
      }}>
        {tabs.map((t) => {
          const tab = typeof t === 'string' ? { id: t, label: t } : t;
          const on = tab.id === active;
          if (variant === 'elevated') {
            return (
              <button key={tab.id} role="tab" aria-selected={on} onClick={() => select(tab.id)} style={{
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 48,
                padding: on ? '14px 24px' : '12px 20px',
                borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                fontFamily: 'var(--font-ui)', fontSize: 14,
                fontWeight: on ? 700 : 500,
                background: on
                  ? 'linear-gradient(180deg, #123B76 0%, #002E5B 42%, #001224 100%)'
                  : 'linear-gradient(180deg, #FFFFFF 0%, #EDEFF3 100%)',
                border: on ? '1px solid #001224' : '1px solid var(--gray-300)',
                borderBottom: 'none',
                color: on ? '#fff' : 'var(--text-muted)',
                boxShadow: on
                  ? '0 1px 0 rgba(255,255,255,0.14) inset, 0 -10px 22px -8px rgba(0,18,36,0.45), 0 10px 20px -10px rgba(0,18,36,0.55)'
                  : 'inset 0 -3px 6px -3px rgba(10,30,62,0.16)',
                transform: on ? 'translateY(-4px)' : 'translateY(2px)',
                zIndex: on ? 2 : 1,
                transition: 'all var(--duration-standard) var(--ease-out)',
              }}>
                {on && <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--gradient-gold-wordmark)' }} />}
                {tab.icon}
                {tab.label}
                {tab.count != null && <Count on={on} elevated>{tab.count}</Count>}
              </button>
            );
          }
          return (
            <button key={tab.id} role="tab" aria-selected={on} onClick={() => select(tab.id)} style={{
              position: 'relative', background: 'none', border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44,
              padding: '10px 14px 12px',
              fontFamily: 'var(--font-ui)', fontSize: 14,
              fontWeight: on ? 600 : 500,
              color: on ? (variant === 'section' ? 'var(--purple-700)' : 'var(--navy-900)') : 'var(--text-muted)',
              transition: 'color var(--duration-standard) var(--ease-out)',
            }}>
              {tab.icon}
              {tab.label}
              {tab.count != null && <Count on={on}>{tab.count}</Count>}
              {on && <span style={{ position: 'absolute', left: 8, right: 8, bottom: -1, height: 3, borderRadius: '3px 3px 0 0', background: line }} />}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" style={{ opacity: fade, transition: 'opacity 150ms var(--ease-out)' }}>
        {typeof children === 'function' ? children(active) : children}
      </div>
    </div>
  );
}

/* Counts describe, they do not alert — always the neutral pill. */
function Count({ children, on, elevated }) {
  return (
    <span style={{
      padding: '2px 8px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11, lineHeight: '16px',
      background: elevated && on ? 'rgba(255,255,255,0.18)' : 'var(--badge-neutral-bg)',
      color: elevated && on ? '#fff' : 'var(--badge-neutral-text)',
    }}>{children}</span>
  );
}

/**
 * Segmented control — compact switch for three or more mutually exclusive
 * options with one- or two-word labels. Selected pill is white with
 * --shadow-sm on the gray-100 track. Not a filter: it is always single-select.
 */
export function SegmentedControl({ options = [], value, defaultValue, onChange, style = {}, ...rest }) {
  const ids = options.map((o) => (typeof o === 'string' ? o : o.id));
  const [inner, setInner] = React.useState(defaultValue ?? ids[0]);
  const active = value !== undefined ? value : inner;
  return (
    <div role="radiogroup" style={{
      display: 'inline-flex', gap: 4, padding: 4,
      background: 'var(--gray-100)', borderRadius: 'var(--radius-pill)', ...style,
    }} {...rest}>
      {options.map((o) => {
        const opt = typeof o === 'string' ? { id: o, label: o } : o;
        const on = opt.id === active;
        return (
          <button key={opt.id} role="radio" aria-checked={on}
            onClick={() => { if (value === undefined) setInner(opt.id); if (onChange) onChange(opt.id); }}
            style={{
              border: 'none', cursor: 'pointer', minHeight: 36, padding: '8px 16px',
              borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: on ? 700 : 500,
              background: on ? 'var(--white)' : 'transparent',
              color: on ? 'var(--navy-900)' : 'var(--text-body)',
              boxShadow: on ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--duration-standard) var(--ease-out)',
            }}>{opt.label}</button>
        );
      })}
    </div>
  );
}

/**
 * Filter pills — multi-select and removable, the opposite role to Tabs. Never
 * put filter pills and tabs in the same row: one narrows a set, the other
 * switches a view.
 */
export function FilterPills({ options = [], value = [], onChange, style = {}, ...rest }) {
  const toggle = (id) => {
    const next = value.includes(id) ? value.filter((v) => v !== id) : [...value, id];
    if (onChange) onChange(next);
  };
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', ...style }} {...rest}>
      {options.map((o) => {
        const opt = typeof o === 'string' ? { id: o, label: o } : o;
        const on = value.includes(opt.id);
        return (
          <button key={opt.id} type="button" aria-pressed={on} onClick={() => toggle(opt.id)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 36,
            padding: on ? '7px 10px 7px 14px' : '7px 14px',
            borderRadius: 'var(--radius-pill)', cursor: 'pointer',
            fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13,
            border: on ? '1px solid var(--navy-900)' : '1px solid var(--gray-300)',
            background: on ? 'var(--navy-900)' : 'var(--white)',
            color: on ? '#fff' : 'var(--text-body)',
            transition: 'all var(--duration-standard) var(--ease-out)',
          }}>
            {opt.label}
            {on && <span aria-hidden="true" style={{
              width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.22)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, lineHeight: 1,
            }}>×</span>}
          </button>
        );
      })}
    </div>
  );
}
