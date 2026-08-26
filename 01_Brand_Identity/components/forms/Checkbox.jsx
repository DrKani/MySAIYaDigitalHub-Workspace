import React from 'react';

/**
 * Checkbox with a 44px hit area. Checked fill is teal (confirmation), never
 * gold — gold marks milestones, not routine ticks. Consent boxes start empty.
 */
export function Checkbox({ label, message, state = 'default', checked, defaultChecked, disabled = false, onChange, id, style = {}, ...rest }) {
  const cbId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
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
      <label htmlFor={cbId} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', minHeight: 44, cursor: disabled ? 'not-allowed' : 'pointer', color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)', fontSize: 15 }}>
        <span style={{ position: 'relative', width: 22, height: 22, flex: 'none', borderRadius: 'var(--radius-sm)', border: `2px solid ${border}`, background: on && !disabled ? 'var(--teal-500)' : disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)', transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)' }}>
          <input
            id={cbId} type="checkbox" disabled={disabled}
            checked={isControlled ? checked : undefined} defaultChecked={isControlled ? undefined : defaultChecked}
            onChange={(e) => { if (!isControlled) setInner(e.target.checked); onChange?.(e); }}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'inherit' }}
            {...rest}
          />
          {on && <span aria-hidden="true" style={{ position: 'absolute', left: 5, top: 2, width: 7, height: 12, borderRight: '2.5px solid #fff', borderBottom: '2.5px solid #fff', transform: 'rotate(45deg)' }} />}
        </span>
        {label}
      </label>
      {message && <span role={state === 'error' ? 'alert' : undefined} style={{ paddingLeft: 34, fontSize: 12, fontWeight: 500, color: state === 'error' ? 'var(--destructive-text)' : state === 'warning' ? 'var(--alert-warning-text)' : 'var(--gray-500)' }}>{message}</span>}
    </div>
  );
}
