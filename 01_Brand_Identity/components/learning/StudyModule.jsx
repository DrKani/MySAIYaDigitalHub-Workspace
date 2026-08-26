import React from 'react';

/**
 * Study module — a chapter of Book Club or MySAIYa 101. Gradient masthead
 * (numbered feature gradient), progress bar, then a lesson list where each row
 * shows state: done, current, locked. The current lesson is the only row with a
 * filled marker, so the eye lands on "what do I do next" first.
 */
export function StudyModule({
  gradient = 2, module: moduleLabel, title, description,
  lessons = [], progress = null, action = null, style = {}, ...rest
}) {
  const done = lessons.filter((l) => l.state === 'done').length;
  const pct = progress != null ? progress : (lessons.length ? Math.round((done / lessons.length) * 100) : 0);
  const n = ((Number(gradient) - 1) % 5) + 1;

  return (
    <div style={{
      borderRadius: 'var(--radius-2xl)', overflow: 'hidden', background: 'var(--white)',
      border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-card)',
      display: 'flex', flexDirection: 'column', ...style,
    }} {...rest}>
      <div style={{ position: 'relative', padding: '22px 24px 20px', background: `var(--gradient-feature-${n})`, color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.22)' }} />
        <div style={{ position: 'relative', textShadow: '0 1px 2px rgba(0,0,0,0.28)' }}>
          {moduleLabel && <div style={{ fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.88 }}>{moduleLabel}</div>}
          <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 24, lineHeight: 1.2 }}>{title}</h3>
        </div>
      </div>

      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        {description && <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)' }}>{description}</p>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>
            <span>{done} of {lessons.length} lessons</span><span>{pct}%</span>
          </div>
          <div style={{ height: 8, borderRadius: 'var(--radius-pill)', background: 'var(--gray-200)', overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%', borderRadius: 'var(--radius-pill)', background: 'var(--gradient-gold)' }} />
          </div>
        </div>

        <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {lessons.map((l, i) => {
            const state = l.state || 'todo';
            const locked = state === 'locked';
            const current = state === 'current';
            return (
              <li key={l.id || i} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
                borderRadius: 'var(--radius-md)',
                background: current ? 'var(--navy-50, #EEF3F9)' : 'transparent',
                opacity: locked ? 0.5 : 1,
              }}>
                <span style={{
                  width: 24, height: 24, flexShrink: 0, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-ui)',
                  background: state === 'done' ? 'var(--teal-500)' : current ? 'var(--navy-900)' : 'var(--gray-200)',
                  color: state === 'done' || current ? '#fff' : 'var(--gray-500)',
                }}>{state === 'done' ? '✓' : locked ? '🔒' : i + 1}</span>
                <span style={{
                  flex: 1, minWidth: 0, fontSize: 14, lineHeight: 1.4,
                  fontWeight: current ? 700 : 500,
                  color: current ? 'var(--navy-900)' : 'var(--text-body)',
                }}>{l.title}</span>
                {l.duration && <span style={{ fontSize: 12, color: 'var(--text-muted)', flexShrink: 0 }}>{l.duration}</span>}
              </li>
            );
          })}
        </ol>

        {action && <div style={{ marginTop: 'auto' }}>{action}</div>}
      </div>
    </div>
  );
}
