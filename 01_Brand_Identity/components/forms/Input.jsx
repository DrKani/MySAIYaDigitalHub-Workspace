import React from 'react';

/**
 * Text input with floating-ready label, helper and error states. Gold border on
 * focus; red border + icon (never red background) on error. Min height honours
 * 48px touch target.
 */
export function Input({ label, hint, error = null, required = false, id, style = {}, ...rest }) {
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--gold-500)' : 'var(--gray-300)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-ui)', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy-900)' }}>
          {label}
          {required && <span aria-label="required" style={{ color: 'var(--red-500)', marginLeft: 4 }}>*</span>}
        </label>
      )}
      <input
        id={inputId}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-err` : hint ? `${inputId}-hint` : undefined}
        onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
        style={{
          height: 48,
          padding: '0 var(--space-4)',
          fontFamily: 'var(--font-ui)',
          fontSize: 15,
          color: 'var(--navy-900)',
          background: 'var(--white)',
          border: `2px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          transition: 'border-color var(--duration-fast) var(--ease-out)',
        }}
        {...rest}
      />
      {error ? (
        <div id={`${inputId}-err`} role="alert" style={{ fontSize: 12, lineHeight: '18px', fontWeight: 500, color: 'var(--alert-error-text)', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span aria-hidden="true">⚠</span> {error}
        </div>
      ) : hint ? (
        <div id={`${inputId}-hint`} style={{ fontSize: 12, lineHeight: '18px', color: 'var(--gray-500)' }}>{hint}</div>
      ) : null}
    </div>
  );
}
