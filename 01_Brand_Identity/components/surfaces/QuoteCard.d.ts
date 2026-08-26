import * as React from 'react';

/**
 * Quote card ("Divine message") — inset frame, organisation lockup, oversized
 * quote glyph, large left-aligned Playfair quote, optional portrait bleeding off
 * the right edge, gold-metallic "— Baba" signature and hashtag watermark.
 */
export interface QuoteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 1-based; cycles the 20 quote gradients. Light ones (4, 7, 19) flip to navy text. @default 1 */
  index?: number;
  quote: string;
  /** Bold clause appended to the quote — the one phrase to carry. */
  emphasis?: string;
  /** Rendered in script after an em dash. @default 'Baba' */
  attribution?: string;
  /** Discourse date, e.g. "18th November 1999". */
  date?: string;
  /** Portrait that bleeds off the right edge, softly masked. */
  portrait?: string;
  /** @default 'Malaysian Sai Young Adults' */
  lockup?: string;
  /** Emblem src — always placed on a white disc. */
  emblem?: string;
  /** @default '#saiquotesallmysaiyashouldknow' */
  hashtag?: string;
  style?: React.CSSProperties;
}
export function QuoteCard(props: QuoteCardProps): JSX.Element;
