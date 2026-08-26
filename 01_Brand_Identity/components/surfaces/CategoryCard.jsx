import React from 'react';

/**
 * Category card — the Programme Directory tile. Header fold carries the
 * category gradient with 40px top corners, an icon chip, an eyebrow label and a
 * Playfair title; the body is a white surface with a one-line description and an
 * optional footer action. One gradient per category, never reused for an
 * unrelated meaning on the same screen. Grid: 3-up desktop, 2-up tablet, 1-up
 * mobile. Hover lifts the card 4px; the header gradient never changes.
 */
export const CATEGORIES = {
  leadership: { label: 'Leadership & governance', icon: 'flag', gradient: 'var(--gradient-category-leadership)', dark: false },
  service:    { label: 'Service',                 icon: 'heart-handshake', gradient: 'var(--gradient-category-service)', dark: false },
  spiritual:  { label: 'Spiritual & cultural',    icon: 'flower-2', gradient: 'var(--gradient-category-spiritual)', dark: false },
  medical:    { label: 'Medical outreach',        icon: 'stethoscope', gradient: 'var(--gradient-category-medical)', dark: false },
  youth:      { label: 'Youth development',       icon: 'graduation-cap', gradient: 'var(--gradient-category-youth)', dark: false },
  learning:   { label: 'Learning & resources',    icon: 'book-open', gradient: 'var(--gradient-category-learning)', dark: true },
  events:     { label: 'Events',                  icon: 'calendar-days', gradient: 'var(--gradient-category-events)', dark: false },
  committee:  { label: 'Committee hub',           icon: 'briefcase-business', gradient: 'var(--gradient-category-committee)', dark: false },
};

export function CategoryCard({ category = 'service', icon = null, eyebrow, title, description, action = null, style = {}, ...rest }) {
  const cat = CATEGORIES[category] || CATEGORIES.service;
  const [hover, setHover] = React.useState(false);
  const fg = cat.dark ? 'var(--navy-900)' : '#fff';
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-3xl)', overflow: 'hidden',
        background: 'var(--white)', border: '1px solid var(--gray-200)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out)',
        display: 'flex', flexDirection: 'column', ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', background: cat.gradient, color: fg, padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--gradient-gold-wordmark)', opacity: cat.dark ? 0.9 : 0.75 }} />
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 38%)', pointerEvents: 'none' }} />
        <span style={{
          position: 'relative', width: 44, height: 44, borderRadius: 'var(--radius-md)', flexShrink: 0,
          background: cat.dark ? 'rgba(10,30,62,0.10)' : 'rgba(255,255,255,0.20)',
          border: cat.dark ? '1px solid rgba(10,30,62,0.14)' : '1px solid rgba(255,255,255,0.26)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>{icon}</span>
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: cat.dark ? 0.7 : 0.88 }}>
            {eyebrow || cat.label}
          </div>
          <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, textShadow: cat.dark ? 'none' : '0 1px 2px rgba(0,0,0,0.24)' }}>{title}</h3>
        </div>
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        {description && <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>{description}</p>}
        {action && <div style={{ marginTop: 'auto' }}>{action}</div>}
      </div>
    </div>
  );
}
