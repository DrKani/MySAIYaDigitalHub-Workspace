import React from 'react';

/** Single-choice control. Teal dot when selected; 44px hit area; groups share `name`. */
export function Radio({ label, message, state = 'default', checked, defaultChecked, disabled = false, onChange, id, style = {}, ...rest }) {
  const rId = id || `rd-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const border = disabled ? 'var(--gray-300)'
    : state === 'error' ? 'var(--field-border-error)'
    : state === 'warning' ? 'var(--field-border-warning)'
    : focus ? 'var(--field-border-focus)'
    : on ? 'var(--teal-500)' : 'var(--field-border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-ui)', ...style }}>
      <label htmlFor={rId} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', minHeight: 44, cursor: disabled ? 'not-allowed' : 'pointer', color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)', fontSize: 15 }}>
        <span style={{ position: 'relative', width: 22, height: 22, flex: 'none', borderRadius: 'var(--radius-circle)', border: `2px solid ${border}`, background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            id={rId} type="radio" disabled={disabled}
            checked={isControlled ? checked : undefined} defaultChecked={isControlled ? undefined : defaultChecked}
            onChange={(e) => { if (!isControlled) setInner(e.target.checked); onChange?.(e); }}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'inherit' }}
            {...rest}
          />
          {on && <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 'var(--radius-circle)', background: disabled ? 'var(--gray-400)' : 'var(--teal-500)' }} />}
        </span>
        {label}
      </label>
      {message && <span role={state === 'error' ? 'alert' : undefined} style={{ paddingLeft: 34, fontSize: 12, fontWeight: 500, color: state === 'error' ? 'var(--destructive-text)' : state === 'warning' ? 'var(--alert-warning-text)' : 'var(--gray-500)' }}>{message}</span>}
    </div>
  );
}
