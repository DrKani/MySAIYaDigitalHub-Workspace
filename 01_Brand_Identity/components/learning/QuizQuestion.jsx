import React from 'react';

/**
 * Quiz question — the Play It answer card. Navy panel, question in Poppins,
 * options as full-width targets (44px minimum). Answer states are never colour
 * alone: correct and wrong both carry a glyph. Once answered the card locks and
 * reveals the explanation.
 */
export function QuizQuestion({
  index, total, question, options = [], correct = 0,
  explanation, onAnswer, value = null, style = {}, ...rest
}) {
  const [picked, setPicked] = React.useState(value);
  const answered = picked !== null && picked !== undefined;
  const choose = (i) => {
    if (answered) return;
    setPicked(i);
    if (onAnswer) onAnswer(i, i === correct);
  };
  return (
    <div style={{
      background: 'var(--navy-800)', color: '#fff', borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-8)', boxShadow: 'var(--shadow-lg)',
      display: 'flex', flexDirection: 'column', gap: 20, ...style,
    }} {...rest}>
      {(index != null) && (
        <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>
          Question {index}{total ? ` of ${total}` : ''}
        </div>
      )}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 24, lineHeight: 1.35, textWrap: 'pretty' }}>{question}</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {options.map((o, i) => {
          let bg = 'transparent', border = '2px solid var(--navy-500)', color = '#fff', glyph = null;
          if (answered) {
            if (i === correct) { bg = 'rgba(29,201,160,0.22)'; border = '2px solid var(--teal-500)'; glyph = '✓'; }
            else if (i === picked) { bg = 'rgba(240,68,56,0.20)'; border = '2px solid #F04438'; glyph = '✕'; }
            else { color = 'rgba(255,255,255,0.55)'; }
          }
          return (
            <button
              key={i}
              type="button"
              onClick={() => choose(i)}
              disabled={answered}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                minHeight: 52, padding: '12px 18px', textAlign: 'left',
                borderRadius: 'var(--radius-lg)', border, background: bg, color,
                fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 15,
                cursor: answered ? 'default' : 'pointer',
                transition: 'background var(--duration-standard) var(--ease-out), border-color var(--duration-standard) var(--ease-out)',
              }}
            >
              <span style={{
                width: 26, height: 26, flexShrink: 0, borderRadius: '50%',
                background: 'rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
              }}>{glyph || String.fromCharCode(65 + i)}</span>
              <span style={{ flex: 1 }}>{o}</span>
            </button>
          );
        })}
      </div>
      {answered && explanation && (
        <div style={{
          borderRadius: 'var(--radius-md)', padding: 'var(--space-4)',
          background: 'rgba(255,255,255,0.08)', borderLeft: '3px solid var(--gold-500)',
          fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)',
        }}>{explanation}</div>
      )}
    </div>
  );
}
