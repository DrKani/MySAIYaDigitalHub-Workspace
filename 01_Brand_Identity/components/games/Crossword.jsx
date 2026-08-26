import React from 'react';

/**
 * Crossword — the Play It puzzle board. Entries are declared once as
 * {answer, clue, row, col, dir}; the component derives the grid, the standard
 * row-major numbering and the two clue columns from them, so a puzzle is data,
 * never markup. Cells are 44px so the board is usable by touch.
 */
export function Crossword({ entries = [], cell = 44, reveal = false, title, style = {}, ...rest }) {
  const rows = Math.max(...entries.map((e) => e.dir === 'down' ? e.row + e.answer.length : e.row + 1), 1);
  const cols = Math.max(...entries.map((e) => e.dir === 'across' ? e.col + e.answer.length : e.col + 1), 1);

  // grid[r][c] = { solution } for every letter cell
  const grid = React.useMemo(() => {
    const g = Array.from({ length: rows }, () => Array(cols).fill(null));
    entries.forEach((e) => {
      e.answer.toUpperCase().split('').forEach((ch, i) => {
        const r = e.row + (e.dir === 'down' ? i : 0);
        const c = e.col + (e.dir === 'across' ? i : 0);
        g[r][c] = { solution: ch };
      });
    });
    return g;
  }, [entries, rows, cols]);

  // standard numbering: row-major, a cell is numbered if an entry starts there
  const numbers = React.useMemo(() => {
    const map = {};
    let n = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!grid[r][c]) continue;
        if (entries.some((e) => e.row === r && e.col === c)) map[`${r},${c}`] = ++n;
      }
    }
    return map;
  }, [grid, entries, rows, cols]);

  const [values, setValues] = React.useState({});
  const [focus, setFocus] = React.useState(null);
  const set = (r, c, v) => setValues((s) => ({ ...s, [`${r},${c}`]: v.slice(-1).toUpperCase() }));

  const clues = (dir) => entries
    .filter((e) => e.dir === dir)
    .map((e) => ({ ...e, n: numbers[`${e.row},${e.col}`] }))
    .sort((a, b) => a.n - b.n);

  const ClueList = ({ dir, label }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 200 }}>
      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-600)' }}>{label}</div>
      <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {clues(dir).map((e) => (
          <li key={`${dir}${e.n}`} style={{ display: 'flex', gap: 8, fontFamily: 'var(--font-ui)', fontSize: 13, lineHeight: 1.5, color: 'var(--text-body)' }}>
            <span style={{ fontWeight: 700, color: 'var(--navy-900)', minWidth: 16 }}>{e.n}</span>
            <span style={{ flex: 1, textWrap: 'pretty' }}>{e.clue} <span style={{ color: 'var(--text-muted)' }}>({e.answer.length})</span></span>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, ...style }} {...rest}>
      {title && <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 24, color: 'var(--navy-900)' }}>{title}</h3>}
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
          gridAutoRows: cell,
          gap: 2,
          background: 'var(--navy-900)',
          padding: 2,
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-card)',
        }}>
          {grid.flatMap((row, r) => row.map((c, ci) => {
            if (!c) return <div key={`${r}-${ci}`} style={{ background: 'transparent' }} />;
            const key = `${r},${ci}`;
            const num = numbers[key];
            const on = focus === key;
            return (
              <label key={key} style={{ position: 'relative', display: 'block', background: 'var(--white)', borderRadius: 2, outline: on ? '2px solid var(--gold-500)' : 'none', outlineOffset: -2 }}>
                {num && <span style={{ position: 'absolute', top: 1, left: 3, fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700, color: 'var(--gray-500)', pointerEvents: 'none' }}>{num}</span>}
                <input
                  value={reveal ? c.solution : (values[key] || '')}
                  onChange={(ev) => set(r, ci, ev.target.value)}
                  onFocus={() => setFocus(key)}
                  onBlur={() => setFocus(null)}
                  readOnly={reveal}
                  maxLength={1}
                  aria-label={`Row ${r + 1} column ${ci + 1}`}
                  style={{
                    width: '100%', height: '100%', border: 'none', background: 'transparent',
                    textAlign: 'center', textTransform: 'uppercase',
                    fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 18,
                    color: reveal ? 'var(--purple-700)' : 'var(--navy-900)',
                    padding: 0, outline: 'none', caretColor: 'var(--gold-600)',
                  }}
                />
              </label>
            );
          }))}
        </div>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', flex: 1, minWidth: 220 }}>
          <ClueList dir="across" label="Across" />
          <ClueList dir="down" label="Down" />
        </div>
      </div>
    </div>
  );
}
