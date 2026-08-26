import React from 'react';

/**
 * Chip — the tinted half of the pill family, for streaks, week numbers, tags
 * and categories. Identical geometry and type to Badge; only the weight of the
 * fill differs, because metadata should never shout as loudly as status.
 * `level` is the one gradient tone, reserved for game levels 1–10.
 */
export function Chip({ tone = 'neutral', level = 5, icon = null, style = {}, children, ...rest }) {
  const tones = {
    neutral: { background: 'var(--badge-neutral-bg)', borderColor: 'var(--badge-neutral-border)', color: 'var(--badge-neutral-text)' },
    navy:    { background: 'var(--chip-navy-bg)',     borderColor: 'var(--chip-navy-border)',     color: 'var(--chip-navy-text)' },
    gold:    { background: 'var(--chip-gold-bg)',     borderColor: 'var(--chip-gold-border)',     color: 'var(--chip-gold-text)' },
    purple:  { background: 'var(--chip-purple-bg)',   borderColor: 'var(--chip-purple-border)',   color: 'var(--chip-purple-text)' },
    teal:    { background: 'var(--chip-teal-bg)',     borderColor: 'var(--chip-teal-border)',     color: 'var(--chip-teal-text)' },
    orange:  { background: 'var(--chip-orange-bg)',   borderColor: 'var(--chip-orange-border)',   color: 'var(--chip-orange-text)' },
    level:   { background: `var(--gradient-level-${level})`, borderColor: 'rgba(255,255,255,0.55)', color: [4, 10].includes(Number(level)) ? 'var(--navy-900)' : '#fff' },
  };
  const c = tones[tone] || tones.neutral;
  const short = typeof children === 'string' && children.trim().split(/\s+/).length <= 3;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 13px', borderRadius: 'var(--radius-pill)',
        borderWidth: 2, borderStyle: 'solid',
        fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12, lineHeight: '16px',
        letterSpacing: short ? '0.08em' : '0.02em',
        textTransform: short ? 'uppercase' : 'none',
        whiteSpace: 'nowrap',
        ...c,
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
