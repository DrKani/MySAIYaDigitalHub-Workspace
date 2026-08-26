import React from 'react';

/**
 * Modal — five locked popup patterns, each with exactly one job:
 *   locked      — feature-locked prompt: white card, gold border, one gold CTA.
 *   consent     — cookie / privacy: purple icon chip, three stacked choices.
 *   achievement — navy card with a gold border and gold Playfair title.
 *   welcome     — game onboarding: navy card, gold title, skip + next.
 *   plain       — anything else: white card, navy title.
 * Never stack two modals, and never put more than one primary action in one.
 */
export function Modal({
  pattern = 'plain', open = true, onClose, icon = null,
  eyebrow, title, children, actions = null, width = 460, style = {}, ...rest
}) {
  if (!open) return null;
  const navy = pattern === 'achievement' || pattern === 'welcome';
  const goldBorder = pattern === 'locked' || navy;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 18, width, maxWidth: '100%',
      padding: 'var(--space-8)', borderRadius: 'var(--radius-2xl)',
      background: navy ? 'var(--navy-900)' : 'var(--white)',
      border: goldBorder ? '2px solid var(--gold-500)' : '1px solid var(--gray-200)',
      boxShadow: 'var(--shadow-lg)',
      textAlign: pattern === 'consent' ? 'left' : navy || pattern === 'locked' ? 'center' : 'left',
      alignItems: pattern === 'consent' || pattern === 'plain' ? 'stretch' : 'center',
      color: navy ? '#fff' : 'var(--navy-900)',
      ...style,
    }} role="dialog" aria-modal="true" {...rest}>
      {icon && (
        <span style={{
          width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          alignSelf: pattern === 'consent' ? 'flex-start' : 'center',
          background: pattern === 'consent' ? 'var(--alert-devotional-bg)' : navy ? 'rgba(255,255,255,0.10)' : 'var(--gray-100)',
          color: pattern === 'consent' ? 'var(--purple-700)' : 'var(--gold-500)',
        }}>{icon}</span>
      )}
      {eyebrow && (
        <div style={{ alignSelf: pattern === 'consent' ? 'flex-start' : 'center', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--purple-700)' }}>{eyebrow}</div>
      )}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 600,
        fontSize: 26, lineHeight: 1.25,
        background: navy ? 'var(--gradient-gold-wordmark)' : 'none',
        WebkitBackgroundClip: navy ? 'text' : 'border-box',
        backgroundClip: navy ? 'text' : 'border-box',
        color: navy ? 'transparent' : 'var(--navy-900)',
      }}>{title}</h2>
      {children && (
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: navy ? 'rgba(255,255,255,0.86)' : 'var(--text-body)' }}>{children}</div>
      )}
      {actions && <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: pattern === 'consent' ? 'flex-start' : 'center', width: '100%' }}>{actions}</div>}
      {onClose && (
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 14, right: 16, background: 'none', border: 'none',
          color: navy ? 'rgba(255,255,255,0.6)' : 'var(--gray-400)', fontSize: 20, cursor: 'pointer', lineHeight: 1,
        }}>×</button>
      )}
    </div>
  );
}
