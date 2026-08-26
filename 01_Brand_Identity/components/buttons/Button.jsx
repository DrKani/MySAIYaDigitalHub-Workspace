import React from 'react';

/**
 * MySAIYa primary action control. Gold gradient = sacred CTA; navy = secondary;
 * tertiary = outline; destructive = red. Never gradient text. Min height 44px.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  shape = 'default',
  uppercase = false,
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: { padding: '0 16px', minHeight: 40, fontSize: 14 },
    md: { padding: '0 24px', minHeight: 48, fontSize: 15 },
    lg: { padding: '0 32px', minHeight: 56, fontSize: 16 },
  };

  const variants = {
    primary: {
      background: 'var(--gradient-gold)',
      color: 'var(--navy-900)',
      border: 'none',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'var(--navy-700)',
      color: 'var(--white)',
      border: 'none',
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--navy-900)',
      border: '2px solid var(--navy-900)',
    },
    'gold-outline': {
      background: 'var(--navy-900)',
      color: 'var(--gold-500)',
      border: '1.5px solid var(--gold-500)',
    },
    destructive: {
      background: 'var(--red-500)',
      color: 'var(--white)',
      border: 'none',
    },
    purple: {
      background: 'var(--gradient-purple-glow)',
      color: 'var(--white)',
      border: 'none',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    letterSpacing: uppercase ? '0.08em' : 'normal',
    textTransform: uppercase ? 'uppercase' : 'none',
    borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-lg)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out), background var(--duration-standard) var(--ease-out)',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...(disabled
      ? { background: 'var(--gray-200)', color: 'var(--gray-400)', border: 'none', boxShadow: 'none' }
      : variants[variant]),
    ...style,
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? hoverFor(variant) : {};

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...hoverStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

function hoverFor(variant) {
  switch (variant) {
    case 'primary':
      return { transform: 'scale(1.02)', boxShadow: 'var(--shadow-gold)' };
    case 'secondary':
      return { background: 'var(--purple-700)' };
    case 'tertiary':
      return { borderColor: 'var(--purple-700)', color: 'var(--purple-700)' };
    case 'gold-outline':
      return { background: 'var(--navy-800)', borderColor: 'var(--gold-400)', color: 'var(--gold-400)' };
    case 'destructive':
      return { filter: 'brightness(0.9)' };
    case 'purple':
      return { transform: 'scale(1.02)', boxShadow: 'var(--shadow-purple)' };
    default:
      return {};
  }
}
