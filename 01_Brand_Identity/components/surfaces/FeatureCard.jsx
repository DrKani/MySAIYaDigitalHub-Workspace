import React from 'react';

/**
 * Feature dashboard card — a gradient module tile that routes into a major area.
 * Gradients are numbered, never named after a module: assign 1–5 in layout order
 * so any module can occupy any slot. Five tiles is the maximum on screen at once.
 * A dark overlay stabilises white text on the gradient.
 */
export function FeatureCard({ gradient = 1, icon = null, eyebrow = null, title, description, style = {}, children, ...rest }) {
  const n = ((Number(gradient) - 1) % 5) + 1;
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6)',
        minHeight: 160,
        background: `var(--gradient-feature-${n})`,
        color: '#fff',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-md)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out)',
        cursor: 'pointer',
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.22)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%', textShadow: '0 1px 2px rgba(0,0,0,0.28)' }}>
        {icon && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.18)', flexShrink: 0 }}>
            {icon}
          </div>
        )}
        {eyebrow && (
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>{eyebrow}</div>
        )}
        <h3 style={{ margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 22, lineHeight: 1.2 }}>{title}</h3>
        {description && (
          <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 14, lineHeight: 1.5, opacity: 0.92 }}>{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}
