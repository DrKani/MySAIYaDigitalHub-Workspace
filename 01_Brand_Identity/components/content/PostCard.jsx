import React from 'react';

/**
 * Blog post card — the unit of the Reflections / In Action feed. Three layouts
 * off one component: `stacked` (grid feed), `horizontal` (list feed) and
 * `feature` (lead story, cover bleeds behind a dark scrim). Category chip,
 * title, dek, then a single meta line: author · date · read time.
 */
export function PostCard({
  layout = 'stacked', cover, category, title, excerpt,
  author, date, readTime, href = '#', style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const meta = [author, date, readTime].filter(Boolean).join(' · ');
  const feature = layout === 'feature';
  const horizontal = layout === 'horizontal';

  const chip = category && (
    <span style={{
      alignSelf: 'flex-start', padding: '4px 12px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12, lineHeight: '16px',
      letterSpacing: '0.08em', textTransform: 'uppercase',
      background: feature ? 'rgba(255,255,255,0.18)' : 'var(--chip-purple-bg)',
      color: feature ? '#fff' : 'var(--chip-purple-text)',
    }}>{category}</span>
  );

  const body = (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 10,
      padding: feature ? '40px 36px 32px' : 'var(--space-5)',
      flex: 1, minWidth: 0, position: 'relative',
    }}>
      {chip}
      <h3 style={{
        margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 600,
        fontSize: feature ? 30 : 20, lineHeight: 1.25,
        color: feature ? '#fff' : 'var(--navy-900)', textWrap: 'pretty',
      }}>{title}</h3>
      {excerpt && (
        <p style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6,
          color: feature ? 'rgba(255,255,255,0.86)' : 'var(--text-body)',
          display: '-webkit-box', WebkitLineClamp: feature ? 3 : 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{excerpt}</p>
      )}
      {meta && (
        <div style={{
          marginTop: 'auto', paddingTop: 8, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 500,
          color: feature ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)',
        }}>{meta}</div>
      )}
    </div>
  );

  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        alignItems: 'stretch',
        textDecoration: 'none',
        overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)',
        background: feature ? 'var(--navy-900)' : 'var(--white)',
        border: feature ? 'none' : '1px solid var(--gray-200)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out)',
        position: 'relative',
        minHeight: feature ? 320 : 'auto',
        ...style,
      }}
      {...rest}
    >
      {cover && (
        <img
          src={cover}
          alt=""
          style={feature
            ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.42 }
            : horizontal
              ? { width: 200, flexShrink: 0, objectFit: 'cover', display: 'block' }
              : { width: '100%', height: 176, objectFit: 'cover', display: 'block' }}
        />
      )}
      {feature && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,18,36,0.94) 20%, rgba(0,18,36,0.35))' }} />}
      {feature ? <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>{body}</div> : body}
    </a>
  );
}
