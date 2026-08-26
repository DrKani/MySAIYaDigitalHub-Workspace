import React from 'react';

/**
 * Gallery view — the album grid used by Events, Seva and In Action. Photos are
 * the content, so chrome stays minimal: a flush grid, a caption that only
 * appears on hover/focus, and an optional category chip per tile. `featured`
 * promotes the first item to a double-width, double-height hero tile.
 */
export function GalleryGrid({ items = [], columns = 3, featured = false, gap = 12, style = {}, ...rest }) {
  const [active, setActive] = React.useState(-1);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: 168,
        gap,
        ...style,
      }}
      {...rest}
    >
      {items.map((it, i) => {
        const big = featured && i === 0;
        const on = active === i;
        return (
          <figure
            key={it.id || i}
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(-1)}
            style={{
              position: 'relative',
              margin: 0,
              overflow: 'hidden',
              borderRadius: 'var(--radius-lg)',
              gridColumn: big ? 'span 2' : 'span 1',
              gridRow: big ? 'span 2' : 'span 1',
              background: 'var(--navy-800)',
              cursor: 'pointer',
              outline: on ? '2px solid var(--gold-500)' : 'none',
              outlineOffset: 2,
            }}
          >
            <img
              src={it.src}
              alt={it.alt || it.caption || ''}
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                transform: on ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform var(--duration-slow) var(--ease-out)',
              }}
            />
            {it.category && (
              <span style={{
                position: 'absolute', top: 10, left: 10,
                padding: '4px 12px', borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12, lineHeight: '16px',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: 'rgba(10,30,62,0.72)', color: '#fff', backdropFilter: 'blur(6px)',
              }}>{it.category}</span>
            )}
            {it.caption && (
              <figcaption style={{
                position: 'absolute', left: 0, right: 0, bottom: 0,
                padding: big ? '28px 18px 16px' : '22px 12px 12px',
                background: 'linear-gradient(to top, rgba(0,18,36,0.88), rgba(0,18,36,0))',
                color: '#fff', fontFamily: 'var(--font-ui)',
                fontSize: big ? 15 : 13, fontWeight: 600, lineHeight: 1.35,
                opacity: on ? 1 : 0,
                transform: on ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity var(--duration-standard) var(--ease-out), transform var(--duration-standard) var(--ease-out)',
              }}>
                {it.caption}
                {it.meta && <div style={{ fontWeight: 400, fontSize: 12, opacity: 0.8, marginTop: 2 }}>{it.meta}</div>}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
