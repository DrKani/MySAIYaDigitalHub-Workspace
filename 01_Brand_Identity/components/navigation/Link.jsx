import React from 'react';

/**
 * Text link. Seven roles, one rule: exactly one active pattern per surface.
 * Inline links stay underlined; navigation links earn a gold underline when
 * active; gold is for dark surfaces and active navigation, never body copy.
 */
export function Link({ href = '#', role = 'inline', active = false, visited = false, onDark = false, danger = false, style = {}, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const kind = danger ? 'danger' : role;

  let color = onDark ? 'var(--link-on-dark)' : 'var(--link-default)';
  if (kind === 'danger') color = onDark ? '#FFA3C0' : 'var(--link-danger)';
  else if (visited) color = 'var(--link-visited)';
  if (active) color = onDark ? 'var(--link-on-dark)' : 'var(--link-active)';
  if (hover) color = kind === 'danger' ? 'var(--destructive-700)' : onDark ? 'var(--gold-300)' : 'var(--link-hover)';

  const underline =
    kind === 'inline' || kind === 'footer' || visited ? 'underline'
    : active ? 'underline'
    : hover ? 'underline'
    : 'none';

  return (
    <a
      href={href}
      aria-current={active && (kind === 'nav') ? 'page' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color,
        fontFamily: 'var(--font-ui)',
        fontSize: kind === 'footer' ? 13 : kind === 'utility' ? 13 : 15,
        fontWeight: kind === 'nav' || kind === 'utility' ? 600 : 400,
        textDecoration: underline,
        textDecorationColor: active && !onDark ? 'var(--gold-500)' : undefined,
        textDecorationThickness: active ? '2px' : '1px',
        textUnderlineOffset: '3px',
        transition: 'color var(--duration-fast) var(--ease-out)',
        cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
