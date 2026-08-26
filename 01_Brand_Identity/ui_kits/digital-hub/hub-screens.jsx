/* MySAIYa Digital Hub — UI kit screens.
   Composes the design-system components (window.MySAIYaDesignSystem_*) plus
   product-specific layout. Lucide icons via the global `lucide.createIcons()`. */

const DS = window.MySAIYaDesignSystem_424fc1;
const { Button, Badge, Chip, Card, FeatureCard, QuoteCard, Alert, Input,
        GalleryGrid, PostCard, StudyModule, QuizQuestion, Crossword } = DS;

// Lucide icon helper — re-runs createIcons after each render.
function Icon({ name, size = 20, color = 'currentColor', style = {} }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-flex', ...style }} />;
}
function useLucide(dep) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

/* ---------- Top updates ticker ----------
   Sits ABOVE the header as its own purple bar: an UPDATES pill, then one line
   of live announcement. Purple so it reads as a signal, never as an extension
   of the navy header beneath it. */
function UpdatesTicker({ onDismiss }) {
  return (
    <div style={{
      background: 'var(--gradient-updates)', color: '#fff',
      display: 'flex', alignItems: 'center', gap: 12, padding: '9px 32px',
      fontFamily: 'var(--font-ui)',
    }}>
      <span style={{
        flexShrink: 0, padding: '3px 10px', borderRadius: 'var(--radius-pill)',
        background: 'rgba(255,255,255,0.18)', fontWeight: 600, fontSize: 10,
        lineHeight: 1.6, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>Updates</span>
      <div aria-live="polite" style={{
        flex: 1, minWidth: 0, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
        fontWeight: 500, fontSize: 13, lineHeight: 1.6, letterSpacing: '0.02em', color: '#EADFF3',
      }}>
        Sai Youth Camp 2026 registration opens 20 August &mdash; limited seats
      </div>
      <button onClick={onDismiss} aria-label="Dismiss updates" style={{
        flexShrink: 0, background: 'none', border: 'none', color: 'rgba(255,255,255,0.75)',
        cursor: 'pointer', display: 'flex', padding: 0,
      }}>
        <Icon name="x" size={14} />
      </button>
    </div>
  );
}

/* ---------- Site wordmark ----------
   The site name is one word, "MySAIYa": Playfair 600 with SAI carried in the
   gold wordmark gradient. Never "MySAIYa Digital Hub" as a stacked lockup,
   never a plain white string. */
function Wordmark({ size = 22 }) {
  const gold = {
    background: 'var(--gradient-gold-wordmark)',
    WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
      <span style={{
        width: size * 1.8, height: size * 1.8, borderRadius: '50%', background: '#fff', flexShrink: 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <img src="../../assets/mysaiya-emblem.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
      </span>
      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: size, lineHeight: 1, letterSpacing: '0.01em', color: '#fff', whiteSpace: 'nowrap' }}>
        My<span style={gold}>SAI</span>Ya
      </span>
    </span>
  );
}

/* ---------- Main header ----------
   One row, always: wordmark · nav · search · bell · avatar. Below 1100px the
   nav collapses into a hamburger so the row never wraps. */
function HubHeader({ active = 'Home', onNav }) {
  const links = ['Home', 'MySAIYa 101', 'In Action', 'Resources', 'Events'];
  const [narrow, setNarrow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 1100);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const navButton = (l) => (
    <button key={l} onClick={() => { onNav && onNav(l); setOpen(false); }} style={{
      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
      fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: active === l ? 700 : 500,
      color: '#fff', padding: narrow ? '11px 14px' : '8px 12px', position: 'relative',
      opacity: active === l ? 1 : 0.82, whiteSpace: 'nowrap', borderRadius: 'var(--radius-md)',
    }}>
      {l}
      {active === l && !narrow && <span style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, borderRadius: '50%', background: 'var(--gradient-gold)' }} />}
    </button>
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, boxShadow: 'var(--shadow-md)' }}>
      <div style={{
        background: 'var(--navy-900)', color: '#fff', height: 72,
        display: 'flex', alignItems: 'center', gap: 20, padding: '0 32px',
      }}>
        {narrow && (
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open} style={{
            background: 'none', border: 'none', color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 40, height: 40, borderRadius: 'var(--radius-md)', flexShrink: 0,
          }}>
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        )}
        <Wordmark />
        {!narrow && (
          <nav style={{ display: 'flex', gap: 2, marginLeft: 8 }} aria-label="Main navigation">
            {links.map(navButton)}
          </nav>
        )}
        <div style={{ flex: 1 }} />
        {!narrow && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--gray-500)',
            borderRadius: 'var(--radius-pill)', padding: '0 14px', height: 42, width: 260, flexShrink: 0,
          }}>
            <Icon name="search" size={18} color="var(--gray-700)" />
            <span style={{ fontSize: 14, fontWeight: 500, flex: 1 }}>Search the Hub</span>
            <kbd style={{ fontSize: 11, color: 'var(--navy-900)', background: 'var(--gray-100)', borderRadius: 4, padding: '2px 6px' }}>⌘K</kbd>
          </div>
        )}
        <button aria-label="Notifications" style={{ position: 'relative', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', flexShrink: 0 }}>
          <Icon name="bell" size={22} />
          <span style={{ position: 'absolute', top: -4, right: -4, background: 'var(--red-500)', color: '#fff', fontSize: 9, fontWeight: 700, borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
        </button>
        <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: '50%', background: 'var(--gradient-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-ui)' }}>K</div>
      </div>
      {narrow && open && (
        <nav aria-label="Main navigation" style={{
          background: 'var(--navy-800)', display: 'flex', flexDirection: 'column',
          gap: 2, padding: '10px 24px 16px',
        }}>
          {links.map(navButton)}
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero welcome ---------- */
function HeroWelcome() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-3xl)', padding: '56px 40px', color: '#fff', boxShadow: 'var(--shadow-lg)', backgroundImage: 'linear-gradient(90deg, rgba(10,30,62,0.94) 0%, rgba(13,47,92,0.6) 100%), url(../../assets/photo-youth-group.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: 'var(--gradient-hero-stroke-ii)' }} />
      <Chip tone="navy" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', marginBottom: 16 }}>
        <Icon name="calendar-clock" size={14} /> Week 4 &bull; Solar Dynasty
      </Chip>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 48, lineHeight: 1.1, margin: '0 0 12px', maxWidth: 720 }}>
        Om Sai Ram, Kanichelvan
      </h1>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: 18, lineHeight: 1.6, opacity: 0.9, maxWidth: 560, margin: '0 0 28px' }}>
        Your journey continues. Three reflections this week, one chapter from the Book Club, and a new badge waiting to be unlocked.
      </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Button variant="primary" uppercase iconRight={<Icon name="arrow-right" size={18} />}>Continue Journey</Button>
      </div>
    </div>
  );
}

/* ---------- Feature grid ----------
   Five tiles maximum, gradients assigned by slot (1–5) in layout order — never
   by module, so any module can sit in any slot. */
function FeatureGrid({ onOpen }) {
  const feats = [
    { key: 'play-it',    icon: 'dice-5',       eyebrow: 'Interactive games', title: 'Play It',    description: 'Quizzes, crosswords and puzzles that grow your wisdom.' },
    { key: 'book-club',  icon: 'book-open',    eyebrow: 'Ramakatha 2026',    title: 'Book Club',  description: 'The national reading journey, one chapter a week.' },
    { key: 'journal',    icon: 'feather',      eyebrow: 'My journal',        title: 'Reflections',description: 'Record and revisit your sadhana privately.' },
    { key: 'gallery',    icon: 'images',       eyebrow: 'In action',         title: 'Gallery',    description: 'Photos from centres and camps across Malaysia.' },
    { key: 'events',     icon: 'calendar-days',eyebrow: 'Upcoming',          title: 'Events',     description: 'The national spiritual calendar in one place.' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {feats.map((f, i) => (
        <FeatureCard
          key={f.key}
          gradient={i + 1}
          eyebrow={f.eyebrow}
          title={f.title}
          description={f.description}
          icon={<Icon name={f.icon} size={24} color="#fff" />}
          onClick={() => onOpen && onOpen(f.key)}
        />
      ))}
    </div>
  );
}

/* ---------- Progress / streak panel ---------- */
function ProgressPanel() {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 20, color: 'var(--navy-900)' }}>Your progress</h3>
        <Chip tone="level" level={5}>Level 5</Chip>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Stat icon="flame" tint="var(--orange-500)" value="12" label="Day streak" />
        <Stat icon="coins" tint="var(--gold-600)" value="340" label="Points" />
        <Stat icon="trophy" tint="var(--purple-700)" value="8" label="Badges" />
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--gray-500)', marginBottom: 8 }}>
          <span>Next milestone</span><span>340 / 500</span>
        </div>
        <div style={{ height: 10, borderRadius: 'var(--radius-pill)', background: 'var(--gray-100)', overflow: 'hidden' }}>
          <div style={{ width: '68%', height: '100%', background: 'var(--gradient-level-5)' }} />
        </div>
      </div>
      <Alert severity="achievement" title="Almost there">160 points to unlock the Seva Star badge.</Alert>
    </Card>
  );
}
function Stat({ icon, tint, value, label }) {
  return (
    <div style={{ flex: 1, background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: 16, textAlign: 'center' }}>
      <Icon name={icon} size={22} color={tint} />
      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 28, color: 'var(--navy-900)', lineHeight: 1.1, marginTop: 4 }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--gray-500)' }}>{label}</div>
    </div>
  );
}

/* ---------- Quote slider (auto-rotating crossfade) ---------- */
function QuoteSlider() {
  const quotes = [
    'Love all, serve all.',
    'Help ever, hurt never.',
    'Start the day with love. Fill the day with love. End the day with love.',
    'Hands that help are holier than lips that pray.',
    'The end of wisdom is freedom. The end of education is character.',
  ];
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((x) => (x + 1) % quotes.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ position: 'relative' }}>
      <QuoteCard index={i + 1} quote={quotes[i]} emblem="../../assets/mysaiya-emblem.png" />
      <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 8 }}>
        <CircleBtn icon="heart" />
        <CircleBtn icon="share-2" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>
        {quotes.map((_, k) => (
          <button key={k} aria-label={`Quote ${k + 1}`} onClick={() => setI(k)} style={{ width: k === i ? 24 : 8, height: 8, borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer', background: k === i ? 'var(--gold-500)' : 'var(--gray-300)', transition: 'all var(--duration-standard) var(--ease-out)' }} />
        ))}
      </div>
    </div>
  );
}
function CircleBtn({ icon }) {
  return (
    <button aria-label={icon} style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon name={icon} size={18} />
    </button>
  );
}

/* ---------- Screen chrome ---------- */
function ScreenHeader({ onBack, eyebrow, title, chips = null }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <button onClick={onBack} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: 'var(--navy-700)', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>
        <Icon name="arrow-left" size={18} /> Back to Home
      </button>
      <SectionTitle eyebrow={eyebrow} title={title} />
      {chips && <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>{chips}</div>}
    </div>
  );
}

/* ---------- Play It: quiz + crossword ---------- */
function PlayItScreen({ onBack }) {
  const [tab, setTab] = React.useState('quiz');
  const [result, setResult] = React.useState(null);
  const entries = [
    { answer: 'SATHYA', clue: 'Truth — the first of the five human values', row: 0, col: 0, dir: 'across' },
    { answer: 'PREMA',  clue: 'Love, the value that flows from truth',      row: 3, col: 2, dir: 'across' },
    { answer: 'ATMA',   clue: 'The indwelling self',                        row: 5, col: 5, dir: 'across' },
    { answer: 'AUM',    clue: 'The primordial sound',                       row: 6, col: 2, dir: 'across' },
    { answer: 'SEVA',   clue: 'Selfless service',                           row: 0, col: 0, dir: 'down' },
    { answer: 'AHIMSA', clue: 'Non-violence in thought, word and deed',     row: 0, col: 5, dir: 'down' },
    { answer: 'PUJA',   clue: 'Ritual worship at the shrine',               row: 3, col: 2, dir: 'down' },
  ];
  const Tab = ({ id, label }) => (
    <button onClick={() => setTab(id)} style={{
      background: tab === id ? 'var(--navy-900)' : 'transparent',
      color: tab === id ? '#fff' : 'var(--text-body)',
      border: tab === id ? 'none' : '1px solid var(--gray-300)',
      borderRadius: 'var(--radius-pill)', padding: '9px 18px', minHeight: 40,
      fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
    }}>{label}</button>
  );
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 26 }}>
      <ScreenHeader onBack={onBack} eyebrow="Play It" title="Life is a game — play it"
        chips={<React.Fragment><Chip tone="level" level={1}>Level 1</Chip><Chip tone="gold">340 points</Chip></React.Fragment>} />
      <div style={{ display: 'flex', gap: 10 }}><Tab id="quiz" label="Weekly quiz" /><Tab id="crossword" label="Crossword" /></div>
      {tab === 'quiz' ? (
        <React.Fragment>
          <QuizQuestion
            index={3} total={12}
            question="Which of the five human values means &ldquo;Truth&rdquo;?"
            options={['Prema (Love)', 'Sathya (Truth)', 'Dharma (Right Conduct)', 'Shanti (Peace)']}
            correct={1}
            explanation="Sathya is truth — the value Swami placed first, because the other four rest on it."
            onAnswer={(i, ok) => setResult(ok)}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="primary" uppercase disabled={result === null} iconRight={<Icon name="arrow-right" size={18} />}>Next</Button>
          </div>
        </React.Fragment>
      ) : (
        <Card><Crossword title="Week 4 · Five human values" entries={entries} /></Card>
      )}
    </div>
  );
}

/* ---------- Gallery screen ---------- */
function GalleryScreen({ onBack }) {
  const items = [
    { src: '../../assets/photo-youth-group.jpg', caption: 'National Sai Youth Camp 2026', meta: 'Kuala Lumpur · 14 Mar', category: 'Events' },
    { src: '../../assets/photo-service.jpg', caption: 'Klang Valley Seva Saturday', meta: 'Selangor · 22 Feb', category: 'Seva' },
    { src: '../../assets/sai-portrait-1.png', caption: 'Bhajan evening, Petaling Jaya', meta: '08 Feb', category: 'Bhajan' },
    { src: '../../assets/sai-portrait-2.png', caption: 'Study circle, Penang', meta: '30 Jan', category: 'Study' },
    { src: '../../assets/sai-portrait-3.png', caption: 'Ladies wing offering', meta: '19 Jan', category: 'Seva' },
    { src: '../../assets/sai-illustration.png', caption: 'Aradhana Mahotsavam', meta: '24 Apr', category: 'Festival' },
    { src: '../../assets/sample-quote-card.png', caption: 'Thought of the day, week 4', meta: '02 Feb', category: 'Wisdom' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <ScreenHeader onBack={onBack} eyebrow="In action" title="Gallery"
        chips={<React.Fragment><Chip tone="navy">All</Chip><Chip tone="teal">Seva</Chip><Chip tone="purple">Bhajan</Chip><Chip tone="orange">Events</Chip></React.Fragment>} />
      <GalleryGrid items={items} columns={4} featured />
    </div>
  );
}

/* ---------- Blog / reflections screen ---------- */
function BlogScreen({ onBack }) {
  const posts = [
    { category: 'Reflections', title: 'What a week of silence taught me about listening', excerpt: 'Three days into the retreat I stopped rehearsing my answers. What came next surprised me more than anything I had planned to say.', author: 'Anand Kumaran', date: '4 Aug 2026', readTime: '6 min read', cover: '../../assets/photo-youth-group.jpg' },
    { category: 'Seva', title: 'Feeding 400 in Sentul: how the Saturday kitchen runs', excerpt: 'A look inside the rota, the shopping list and the volunteers who show up before sunrise every week.', author: 'Devi Rajan', date: '28 Jul 2026', readTime: '4 min read', cover: '../../assets/photo-service.jpg' },
    { category: 'Study', title: 'Ramakatha Rasavahini, week 4: the exile begins', excerpt: 'Notes from the national reading circle, with the three questions our group could not agree on.', author: 'Book Club', date: '21 Jul 2026', readTime: '8 min read', cover: '../../assets/sai-portrait-2.png' },
    { category: 'Bhajan', title: 'Learning this month\u2019s bhajan, line by line', excerpt: 'A slow walkthrough of the raga, the meaning of each line, and where most of us go wrong on the third repetition.', author: 'Music wing', date: '14 Jul 2026', readTime: '5 min read', cover: '../../assets/sai-portrait-1.png' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <ScreenHeader onBack={onBack} eyebrow="Journal" title="Reflections from the community" />
      <PostCard layout="feature" {...posts[0]} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {posts.slice(1).map((p) => <PostCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}

/* ---------- Book Club / study screen ---------- */
function StudyScreen({ onBack }) {
  const modules = [
    { gradient: 2, module: 'Module 3 · Book Club', title: 'Ramakatha Rasavahini', description: 'The national reading journey. One chapter a week, with a reflection prompt at the end of each module.', lessons: [
      { title: 'Who was Ramakatha written for?', state: 'done', duration: '8 min' },
      { title: 'The kingdom of Ayodhya', state: 'done', duration: '12 min' },
      { title: 'The exile begins', state: 'current', duration: '14 min' },
      { title: 'Bharata returns', state: 'todo', duration: '11 min' },
      { title: 'Week 4 reflection', state: 'locked', duration: '5 min' },
    ] },
    { gradient: 3, module: 'Module 1 · MySAIYa 101', title: 'The five human values', description: 'Where Sathya, Dharma, Shanti, Prema and Ahimsa come from, and how they hold each other up.', lessons: [
      { title: 'Sathya — truth', state: 'done', duration: '9 min' },
      { title: 'Dharma — right conduct', state: 'current', duration: '10 min' },
      { title: 'Shanti — peace', state: 'todo', duration: '9 min' },
      { title: 'Prema — love', state: 'locked', duration: '11 min' },
    ] },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <ScreenHeader onBack={onBack} eyebrow="Learn" title="Your study modules"
        chips={<React.Fragment><Chip tone="teal">2 in progress</Chip><Chip tone="gold">1 certificate</Chip></React.Fragment>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, alignItems: 'start' }}>
        {modules.map((m) => (
          <StudyModule key={m.title} {...m} action={<Button variant="primary" shape="pill" style={{ width: '100%' }}>Continue</Button>} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Home screen ---------- */
function HomeScreen({ onOpen }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
      <HeroWelcome />
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <SectionTitle eyebrow="Explore" title="Jump back in" />
          <FeatureGrid onOpen={onOpen} />
        </div>
        <ProgressPanel />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionTitle eyebrow="This week's wisdom" title="Sai quotes for reflection" />
        <QuoteSlider />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionTitle eyebrow="In action" title="From centres across Malaysia" />
        <GalleryGrid columns={4} items={[
          { src: '../../assets/photo-youth-group.jpg', caption: 'National Sai Youth Camp 2026', meta: 'Kuala Lumpur · 14 Mar', category: 'Events' },
          { src: '../../assets/photo-service.jpg', caption: 'Klang Valley Seva Saturday', meta: 'Selangor · 22 Feb', category: 'Seva' },
          { src: '../../assets/sai-portrait-1.png', caption: 'Bhajan evening, Petaling Jaya', meta: '08 Feb', category: 'Bhajan' },
          { src: '../../assets/sai-portrait-2.png', caption: 'Study circle, Penang', meta: '30 Jan', category: 'Study' },
        ]} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionTitle eyebrow="Journal" title="Latest reflections" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <PostCard category="Reflections" title="What a week of silence taught me about listening" excerpt="Three days into the retreat I stopped rehearsing my answers." author="Anand Kumaran" date="4 Aug 2026" readTime="6 min read" cover="../../assets/photo-youth-group.jpg" />
          <PostCard category="Seva" title="Feeding 400 in Sentul: how the Saturday kitchen runs" excerpt="Inside the rota, the shopping list and the volunteers who show up before sunrise." author="Devi Rajan" date="28 Jul 2026" readTime="4 min read" cover="../../assets/photo-service.jpg" />
          <PostCard category="Study" title="Ramakatha Rasavahini, week 4: the exile begins" excerpt="Notes from the national reading circle, with three questions we could not agree on." author="Book Club" date="21 Jul 2026" readTime="8 min read" cover="../../assets/sai-portrait-2.png" />
        </div>
      </div>
      <DevotionalBanner />
    </div>
  );
}

/* ---------- Devotional "His Message" banner ---------- */
function DevotionalBanner() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-3xl)', background: 'var(--navy-900)', display: 'grid', gridTemplateColumns: '1fr 280px', alignItems: 'center', boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ padding: '40px 44px' }}>
        <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 12 }}>His message</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 30, lineHeight: 1.4, color: '#fff', margin: '0 0 18px', maxWidth: 540 }}>
          &ldquo;Less luggage, more comfort makes travel a pleasure. Our desires are our luggage.&rdquo;
        </p>
        <cite style={{ fontFamily: 'var(--font-signature)', fontStyle: 'normal', fontSize: 38, lineHeight: 1, background: 'var(--gradient-gold-metallic)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block' }}>
          &mdash; Baba
        </cite>
      </div>
      <div style={{ alignSelf: 'stretch', backgroundImage: 'url(../../assets/sai-portrait-3.png)', backgroundSize: 'cover', backgroundPosition: 'center top', minHeight: 280 }} />
    </div>
  );
}
function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-600)' }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 28, color: 'var(--navy-900)', margin: '4px 0 0' }}>{title}</h2>
    </div>
  );
}

/* ---------- App shell ---------- */
const routes = { 'play-it': 'play', gallery: 'gallery', journal: 'blog', 'book-club': 'study', events: 'gallery' };

function HubApp() {
  const [screen, setScreen] = React.useState('home');
  const home = () => setScreen('home');
  useLucide([screen]);
  return (
    <div style={{ minHeight: '100vh', background: 'var(--off-white)' }}>
      <UpdatesTicker />
      <HubHeader active={screen === 'home' ? 'Home' : 'In Action'} onNav={(l) => setScreen(l === 'In Action' ? 'gallery' : l === 'Resources' ? 'study' : 'home')} />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px 80px' }}>
        {screen === 'home' && <HomeScreen onOpen={(f) => setScreen(routes[f] || 'home')} />}
        {screen === 'play' && <PlayItScreen onBack={home} />}
        {screen === 'gallery' && <GalleryScreen onBack={home} />}
        {screen === 'blog' && <BlogScreen onBack={home} />}
        {screen === 'study' && <StudyScreen onBack={home} />}
      </main>
    </div>
  );
}

window.HubApp = HubApp;
