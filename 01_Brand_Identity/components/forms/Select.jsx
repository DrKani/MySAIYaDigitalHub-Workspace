import React from 'react';

const FIELD_STATES = {
  default: { border: 'var(--field-border-default)', text: 'var(--gray-500)' },
  focus: { border: 'var(--field-border-focus)', text: 'var(--purple-700)' },
  success: { border: 'var(--field-border-success)', text: 'var(--alert-success-text)' },
  warning: { border: 'var(--field-border-warning)', text: 'var(--alert-warning-text)' },
  error: { border: 'var(--field-border-error)', text: 'var(--destructive-text)' },
};

/**
 * Native select with the shared field states. Chevron is drawn, not a glyph
 * font, so it inherits the state colour. 48px tall for touch.
 */
export function Select({ label, hint, message, state = 'default', required = false, disabled = false, options = [], id, style = {}, children, ...rest }) {
  const selectId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const active = disabled ? 'default' : focus ? 'focus' : state;
  const s = FIELD_STATES[active] || FIELD_STATES.default;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-ui)', ...style }}>
      {label && (
        <label htmlFor={selectId} style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy-900)' }}>
          {label}{required && <span aria-label="required" style={{ color: 'var(--destructive-500)', marginLeft: 4 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={selectId}
          disabled={disabled}
          aria-invalid={state === 'error' || undefined}
          onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
          style={{
            width: '100%', height: 48, padding: '0 44px 0 var(--space-4)', appearance: 'none',
            fontFamily: 'var(--font-ui)', fontSize: 15,
            color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
            background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
            border: `2px solid ${disabled ? 'var(--field-border-default)' : s.border}`,
            borderRadius: 'var(--radius-md)', outline: 'none',
            transition: 'border-color var(--duration-fast) var(--ease-out)',
          }}
          {...rest}
        >
          {children || options.map((o) => (typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>))}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: 18, top: '50%', width: 9, height: 9, marginTop: -6, borderRight: `2px solid ${disabled ? 'var(--field-text-disabled)' : s.border}`, borderBottom: `2px solid ${disabled ? 'var(--field-text-disabled)' : s.border}`, transform: 'rotate(45deg)', pointerEvents: 'none' }} />
      </div>
      {message ? (
        <div role={state === 'error' ? 'alert' : undefined} style={{ fontSize: 12, lineHeight: '18px', fontWeight: 500, color: s.text }}>{message}</div>
      ) : hint ? (
        <div style={{ fontSize: 12, lineHeight: '18px', color: 'var(--gray-500)' }}>{hint}</div>
      ) : null}
    </div>
  );
}
