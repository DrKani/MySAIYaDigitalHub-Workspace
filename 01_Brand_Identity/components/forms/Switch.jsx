import React from 'react';

/**
 * On/off toggle for settings that apply immediately. Teal when on (confirmed
 * state), purple while focused, amber for a warning-bearing setting. Never gold.
 */
export function Switch({ label, message, state = 'default', checked, defaultChecked, disabled = false, onChange, id, style = {}, ...rest }) {
  const swId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const track = disabled ? 'var(--gray-200)'
    : !on ? 'var(--gray-300)'
    : state === 'warning' ? 'var(--alert-warning-accent)'
    : state === 'error' ? 'var(--destructive-500)'
    : focus ? 'var(--purple-700)' : 'var(--teal-500)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-ui)', ...style }}>
      <label htmlFor={swId} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', minHeight: 44, cursor: disabled ? 'not-allowed' : 'pointer', color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)', fontSize: 15 }}>
        <span style={{ position: 'relative', width: 46, height: 26, flex: 'none', borderRadius: 'var(--radius-pill)', background: track, transition: 'background var(--duration-standard) var(--ease-out)', boxShadow: focus && !disabled ? '0 0 0 3px rgba(123,36,130,0.22)' : 'none' }}>
          <input
            id={swId} type="checkbox" role="switch" disabled={disabled}
            checked={isControlled ? checked : undefined} defaultChecked={isControlled ? undefined : defaultChecked}
            onChange={(e) => { if (!isControlled) setInner(e.target.checked); onChange?.(e); }}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'inherit' }}
            {...rest}
          />
          <span aria-hidden="true" style={{ position: 'absolute', top: 3, left: on ? 23 : 3, width: 20, height: 20, borderRadius: 'var(--radius-circle)', background: 'var(--white)', boxShadow: 'var(--shadow-sm)', transition: 'left var(--duration-standard) var(--ease-out)' }} />
        </span>
        {label}
      </label>
      {message && <span style={{ paddingLeft: 58, fontSize: 12, fontWeight: 500, color: state === 'error' ? 'var(--destructive-text)' : state === 'warning' ? 'var(--alert-warning-text)' : 'var(--gray-500)' }}>{message}</span>}
    </div>
  );
}
