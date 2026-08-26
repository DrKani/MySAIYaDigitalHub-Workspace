import React from 'react';

/**
 * Quote card ("Divine message") — the shareable Sai quote surface, built on the
 * MySAIYa quote-card artwork: an inset hairline frame, the organisation lockup
 * top-left, an oversized quotation glyph, the quote large and LEFT-aligned in
 * Playfair with an optional bold emphasis clause, an optional portrait bleeding
 * off the right edge, then the gold-metallic "— Baba" signature and the date.
 * The hashtag sits as a watermark along the bottom. `index` cycles the 20 quote
 * gradients; light ones flip the text to navy.
 */
export function QuoteCard({
  index = 1, quote, emphasis, attribution = 'Baba', date,
  portrait, lockup = 'Malaysian Sai Young Adults', emblem,
  hashtag = '#saiquotesallmysaiyashouldknow', style = {}, ...rest
}) {
  const n = ((index - 1) % 20) + 1;
  const pad = String(n).padStart(2, '0');
  const darkText = [4, 7, 19].includes(n);
  const fg = darkText ? 'var(--navy-900)' : '#fff';
  const soft = darkText ? 'rgba(10,30,62,0.62)' : 'rgba(255,255,255,0.70)';
  const hair = darkText ? 'rgba(10,30,62,0.22)' : 'rgba(255,255,255,0.34)';

  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)', minHeight: 380,
        padding: 'var(--space-10)',
        background: `var(--gradient-quote-${pad})`,
        color: fg, isolation: 'isolate',
        ...style,
      }}
      {...rest}
    >
      {!darkText && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.16)', pointerEvents: 'none' }} />}

      {portrait && (
        <img
          src={portrait}
          alt=""
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%',
            objectFit: 'cover', objectPosition: 'center top', opacity: 0.9,
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.65) 34%, #000 78%)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.65) 34%, #000 78%)',
            mixBlendMode: darkText ? 'multiply' : 'luminosity',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* inset hairline frame */}
      <div style={{ position: 'absolute', inset: 18, border: `1px solid ${hair}`, borderRadius: 'var(--radius-lg)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: portrait ? '62%' : '100%', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {emblem && (
            <span style={{ width: 34, height: 34, borderRadius: '50%', background: '#fff', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={emblem} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </span>
          )}
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, letterSpacing: '0.01em', color: soft }}>{lockup}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <span aria-hidden="true" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 76, lineHeight: 0.5, color: hair, userSelect: 'none' }}>&rdquo;</span>
          <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(1.5rem, 2.3vw, 2.15rem)', lineHeight: 1.35, textWrap: 'pretty' }}>
            {quote}
            {emphasis && <strong style={{ fontWeight: 800 }}> {emphasis}</strong>}
          </p>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          {date && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 13, color: soft }}>{date}</span>}
          <span style={{
            marginLeft: 'auto',
            fontFamily: 'var(--font-signature)',
            fontSize: 'clamp(2rem, 2.7vw, 2.8rem)', lineHeight: 1, paddingRight: 2,
            background: 'var(--gradient-gold-metallic)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.35))',
          }}>&mdash; {attribution}</span>
        </div>
      </div>

      <span aria-hidden="true" style={{
        position: 'absolute', bottom: 26, left: 0, right: 0, textAlign: 'center',
        fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11, letterSpacing: '0.06em',
        color: darkText ? 'rgba(10,30,62,0.26)' : 'rgba(255,255,255,0.30)', pointerEvents: 'none',
      }}>{hashtag}</span>
    </div>
  );
}
