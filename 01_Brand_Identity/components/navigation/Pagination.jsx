import React from 'react';

/**
 * Pagination — numbered pages for the Programme Directory and Events. The
 * current page is a filled navy square (40px, 12px radius); every other control
 * is a ghost button. First and last page are always shown with an ellipsis gap,
 * and disabled arrows stay in place — the control never changes shape.
 */
export function Pagination({
  page = 1, pageCount = 1, onChange, perPage = null, onPerPageChange,
  perPageOptions = [12, 24, 48], summary, style = {}, ...rest
}) {
  const go = (p) => { if (p >= 1 && p <= pageCount && p !== page && onChange) onChange(p); };

  const pages = React.useMemo(() => {
    if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);
    const out = [1];
    const from = Math.max(2, page - 1);
    const to = Math.min(pageCount - 1, page + 1);
    if (from > 2) out.push('…');
    for (let i = from; i <= to; i++) out.push(i);
    if (to < pageCount - 1) out.push('…');
    out.push(pageCount);
    return out;
  }, [page, pageCount]);

  const ghost = (extra = {}) => ({
    width: 40, height: 40, borderRadius: 12, display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center',
    border: '1px solid var(--gray-200)', background: 'var(--white)',
    fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14,
    color: 'var(--navy-900)', cursor: 'pointer',
    transition: 'all var(--duration-standard) var(--ease-out)', ...extra,
  });

  const Arrow = ({ dir, to, disabled }) => (
    <button onClick={() => go(to)} disabled={disabled} aria-label={dir === 'prev' ? 'Previous page' : 'Next page'}
      style={ghost({ color: disabled ? 'var(--gray-300)' : 'var(--navy-900)', cursor: disabled ? 'default' : 'pointer' })}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={dir === 'prev' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
      </svg>
    </button>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', fontFamily: 'var(--font-ui)', ...style }} {...rest}>
      <div style={{ fontSize: 14, color: 'var(--text-body)' }}>{summary}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Arrow dir="prev" to={page - 1} disabled={page <= 1} />
        {pages.map((p, i) => p === '…'
          ? <span key={`e${i}`} style={{ width: 24, textAlign: 'center', color: 'var(--gray-400)' }}>…</span>
          : (
            <button key={p} onClick={() => go(p)} aria-current={p === page ? 'page' : undefined}
              style={ghost(p === page ? { background: 'var(--navy-900)', borderColor: 'var(--navy-900)', color: '#fff', fontWeight: 700 } : {})}>
              {p}
            </button>
          ))}
        <Arrow dir="next" to={page + 1} disabled={page >= pageCount} />
      </div>
      {perPage != null && (
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-body)' }}>
          Per page
          <select value={perPage} onChange={(e) => onPerPageChange && onPerPageChange(Number(e.target.value))}
            style={{ height: 40, borderRadius: 12, border: '1px solid var(--gray-200)', background: 'var(--white)', padding: '0 10px', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, color: 'var(--navy-900)' }}>
            {perPageOptions.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      )}
    </div>
  );
}

/** Load-more — the Blog alternative to numbered pages. */
export function LoadMore({ shown, total, onClick, label = 'Load more stories', style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, fontFamily: 'var(--font-ui)', ...style }} {...rest}>
      <button onClick={onClick} style={{
        minHeight: 48, padding: '0 28px', borderRadius: 'var(--radius-pill)',
        border: '1.5px solid var(--navy-900)', background: 'transparent', color: 'var(--navy-900)',
        fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em',
        textTransform: 'uppercase', cursor: 'pointer',
      }}>{label}</button>
      {total != null && <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Showing {shown} of {total}</span>}
    </div>
  );
}

/** Prev / next — the article footer pair. */
export function PrevNext({ prev, next, style = {}, ...rest }) {
  const box = (align) => ({
    flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4,
    padding: '16px 22px', borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--gray-200)', background: 'var(--white)',
    textDecoration: 'none', textAlign: align,
  });
  const kicker = { fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' };
  const title = { fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: 'var(--navy-900)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };
  return (
    <div style={{ display: 'flex', gap: 16, ...style }} {...rest}>
      {prev && <a href={prev.href || '#'} style={box('left')}><span style={kicker}>Previous</span><span style={title}>{prev.label}</span></a>}
      {next && <a href={next.href || '#'} style={box('right')}><span style={kicker}>Next</span><span style={title}>{next.label}</span></a>}
    </div>
  );
}
