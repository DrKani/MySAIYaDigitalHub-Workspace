import React from 'react';

const FIELD_STATES = {
  default: { border: 'var(--field-border-default)', text: 'var(--gray-500)' },
  focus: { border: 'var(--field-border-focus)', text: 'var(--purple-700)' },
  success: { border: 'var(--field-border-success)', text: 'var(--alert-success-text)' },
  warning: { border: 'var(--field-border-warning)', text: 'var(--alert-warning-text)' },
  error: { border: 'var(--field-border-error)', text: 'var(--destructive-text)' },
};

/** Multi-line field sharing the Input state borders. Min 96px, vertical resize only. */
export function Textarea({ label, hint, message, state = 'default', required = false, disabled = false, rows = 4, id, style = {}, ...rest }) {
  const taId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const active = disabled ? 'default' : focus ? 'focus' : state;
  const s = FIELD_STATES[active] || FIELD_STATES.default;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-ui)', ...style }}>
      {label && (
        <label htmlFor={taId} style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy-900)' }}>
          {label}{required && <span aria-label="required" style={{ color: 'var(--destructive-500)', marginLeft: 4 }}>*</span>}
        </label>
      )}
      <textarea
        id={taId}
        rows={rows}
        disabled={disabled}
        aria-invalid={state === 'error' || undefined}
        onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
        style={{
          minHeight: 96, padding: 'var(--space-3) var(--space-4)', resize: 'vertical',
          fontFamily: 'var(--font-ui)', fontSize: 15, lineHeight: 1.6,
          color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
          background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
          border: `2px solid ${disabled ? 'var(--field-border-default)' : s.border}`,
          borderRadius: 'var(--radius-md)', outline: 'none',
          transition: 'border-color var(--duration-fast) var(--ease-out)',
        }}
        {...rest}
      />
      {message ? (
        <div role={state === 'error' ? 'alert' : undefined} style={{ fontSize: 12, lineHeight: '18px', fontWeight: 500, color: s.text }}>{message}</div>
      ) : hint ? (
        <div style={{ fontSize: 12, lineHeight: '18px', color: 'var(--gray-500)' }}>{hint}</div>
      ) : null}
    </div>
  );
}
