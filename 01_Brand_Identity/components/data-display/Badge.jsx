import React from 'react';

/**
 * Pill — the one shape shared by badges and chips: pill radius, 5×13 padding,
 * 2px border, Poppins 600 at 12/16. Labels of three words or fewer are set in
 * caps at 0.08em. Badges carry the DEEP brand fills because status is loud;
 * chips carry the tinted fills because metadata is quiet. Every border is its
 * own fill one step lighter — a pill never borrows another pill's accent.
 */
export function Badge({ status = 'active', icon = null, style = {}, children, ...rest }) {
  const keys = { active: 'active', admin: 'admin', guest: 'guest', pending: 'pending',
    suspended: 'suspended', points: 'points', achievement: 'earned', neutral: 'neutral' };
  const k = keys[status] || 'active';
  const short = typeof children === 'string' && children.trim().split(/\s+/).length <= 3;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 13px', borderRadius: 'var(--radius-pill)',
        border: `2px solid var(--badge-${k}-border)`,
        background: `var(--badge-${k}-bg)`,
        color: `var(--badge-${k}-text)`,
        fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12, lineHeight: '16px',
        letterSpacing: short ? '0.08em' : '0.02em',
        textTransform: short ? 'uppercase' : 'none',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
