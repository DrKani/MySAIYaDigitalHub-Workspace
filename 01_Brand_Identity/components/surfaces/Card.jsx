import React from 'react';

/**
 * Surface card — the workhorse container. White by default with a soft navy-tinted
 * shadow; `dark` flips to navy-800. `accent` adds a category top border. `shiny`
 * is the navy + gold-gradient-border quote/divine-message surface.
 */
export function Card({
  variant = 'default',
  accent = null,
  glass = false,
  hoverable = false,
  style = {},
  children,
  ...rest
}) {
  const accents = {
    leadership: 'var(--purple-700)',
    service: 'var(--teal-500)',
    spiritual: 'var(--purple-lite-600)',
    education: 'var(--gold-500)',
    multimedia: 'var(--navy-500)',
  };

  const base = {
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-6)',
    boxSizing: 'border-box',
    transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out)',
    position: 'relative',
  };

  let look;
  if (variant === 'dark') {
    look = { background: 'var(--navy-800)', color: 'var(--white)', boxShadow: 'var(--shadow-lg)', border: 'none' };
  } else if (variant === 'shiny') {
    look = {
      background: 'var(--navy-900)',
      color: 'var(--white)',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(var(--navy-900),var(--navy-900)), var(--gradient-gold-wordmark)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxShadow: 'var(--shadow-lg)',
    };
  } else {
    look = {
      background: glass ? 'rgba(255,255,255,0.9)' : 'var(--white)',
      backdropFilter: glass ? 'blur(10px)' : 'none',
      color: 'var(--navy-900)',
      border: '1px solid var(--gray-200)',
      boxShadow: 'var(--shadow-card)',
    };
  }

  // Accent rides on top of the variant's own border instead of replacing it, so
  // dark and shiny cards keep their edge treatment.
  const accentBorder = accent
    ? { borderTop: `4px solid ${accents[accent] || accent}`, borderTopLeftRadius: 'var(--radius-2xl)', borderTopRightRadius: 'var(--radius-2xl)' }
    : {};

  const [hover, setHover] = React.useState(false);
  const hoverStyle = hoverable
    ? { cursor: 'pointer', ...(hover ? { transform: 'translateY(-4px)', boxShadow: 'var(--shadow-card-hover)' } : {}) }
    : {};

  return (
    <div
      style={{ ...base, ...look, ...accentBorder, ...hoverStyle, ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </div>
  );
}
