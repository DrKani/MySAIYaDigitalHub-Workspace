import React from 'react';

/**
 * Semantic alert — consistent system for banners, inline messages and toasts.
 * Colour is never the only signal: always icon + title. Uses the locked
 * semantic token set (success/info/warning/error/devotional/achievement).
 */
export function Alert({ severity = 'info', title, icon = null, onClose = null, action = null, style = {}, children, ...rest }) {
  const map = {
    success:    { bg: 'var(--alert-success-bg)',    bd: 'var(--alert-success-border)',    ac: 'var(--alert-success-accent)',    tx: 'var(--alert-success-text)' },
    info:       { bg: 'var(--alert-info-bg)',       bd: 'var(--alert-info-border)',       ac: 'var(--alert-info-accent)',       tx: 'var(--alert-info-text)' },
    warning:    { bg: 'var(--alert-warning-bg)',    bd: 'var(--alert-warning-border)',    ac: 'var(--alert-warning-accent)',    tx: 'var(--alert-warning-text)' },
    error:      { bg: 'var(--alert-error-bg)',      bd: 'var(--alert-error-border)',      ac: 'var(--alert-error-accent)',      tx: 'var(--alert-error-text)' },
    progress:   { bg: 'var(--alert-progress-bg)',   bd: 'var(--alert-progress-border)',   ac: 'var(--alert-progress-accent)',   tx: 'var(--alert-progress-text)' },
    devotional: { bg: 'var(--alert-devotional-bg)', bd: 'var(--alert-devotional-border)', ac: 'var(--alert-devotional-accent)', tx: 'var(--alert-devotional-text)' },
    achievement:{ bg: 'var(--alert-achievement-bg)',bd: 'var(--alert-achievement-border)',ac: 'var(--alert-achievement-accent)',tx: 'var(--alert-achievement-text)' },
  };
  const c = map[severity] || map.info;
  const role = severity === 'error' ? 'alert' : 'status';

  return (
    <div
      role={role}
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-md)',
        background: c.bg,
        border: `1px solid ${c.bd}`,
        color: c.tx,
        fontFamily: 'var(--font-ui)',
        ...style,
      }}
      {...rest}
    >
      <span style={{ color: c.ac, flexShrink: 0, display: 'inline-flex', marginTop: 1 }} aria-hidden="true">
        {icon || defaultGlyph(severity)}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontWeight: 700, fontSize: 14, lineHeight: '20px' }}>{title}</div>}
        {children && <div style={{ fontSize: 13, lineHeight: '20px', fontWeight: 400, marginTop: title ? 2 : 0 }}>{children}</div>}
        {action && <div style={{ marginTop: 'var(--space-3)' }}>{action}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          style={{ background: 'none', border: 'none', color: c.tx, cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0, flexShrink: 0 }}
        >
          &times;
        </button>
      )}
    </div>
  );
}

function defaultGlyph(severity) {
  const g = { success: '✓', info: 'ℹ', warning: '⚠', error: '⊘', progress: '◐', devotional: '✦', achievement: '★' };
  return <span style={{ fontWeight: 700, fontSize: 16 }}>{g[severity] || g.info}</span>;
}
