/* @ds-bundle: {"format":4,"namespace":"MySAIYaDesignSystem_424fc1","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"PostCard","sourcePath":"components/content/PostCard.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Crossword","sourcePath":"components/games/Crossword.jsx"},{"name":"QuizQuestion","sourcePath":"components/learning/QuizQuestion.jsx"},{"name":"StudyModule","sourcePath":"components/learning/StudyModule.jsx"},{"name":"GalleryGrid","sourcePath":"components/media/GalleryGrid.jsx"},{"name":"BottomTabBar","sourcePath":"components/navigation/BottomTabBar.jsx"},{"name":"Drawer","sourcePath":"components/navigation/BottomTabBar.jsx"},{"name":"ActionBar","sourcePath":"components/navigation/BottomTabBar.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"BackLink","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Link","sourcePath":"components/navigation/Link.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"LoadMore","sourcePath":"components/navigation/Pagination.jsx"},{"name":"PrevNext","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/Tabs.jsx"},{"name":"FilterPills","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CATEGORIES","sourcePath":"components/surfaces/CategoryCard.jsx"},{"name":"CategoryCard","sourcePath":"components/surfaces/CategoryCard.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"QuoteCard","sourcePath":"components/surfaces/QuoteCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"6c8f863c0741","components/content/PostCard.jsx":"f4bd087ab970","components/data-display/Badge.jsx":"debf1ddf9d90","components/data-display/Chip.jsx":"b10f9da1d640","components/feedback/Alert.jsx":"ba285e5540d4","components/feedback/Modal.jsx":"0e26ca5f3204","components/forms/Checkbox.jsx":"293ecb91726b","components/forms/Input.jsx":"1b53d171ecbf","components/forms/Radio.jsx":"98fd902c69c2","components/forms/Select.jsx":"90c50c1e5eba","components/forms/Switch.jsx":"04e23802a3a8","components/forms/Textarea.jsx":"c388d6bb78e2","components/games/Crossword.jsx":"bc08cdad5acf","components/learning/QuizQuestion.jsx":"1629e6e6a245","components/learning/StudyModule.jsx":"ade1fed05ca8","components/media/GalleryGrid.jsx":"84b4855c6c46","components/navigation/BottomTabBar.jsx":"d571d50298c1","components/navigation/Breadcrumbs.jsx":"ccafb8c055e4","components/navigation/Link.jsx":"17e7476ea715","components/navigation/Pagination.jsx":"729fc2c690f3","components/navigation/Sidebar.jsx":"fe25eb99c211","components/navigation/Tabs.jsx":"d8bdaad5a9ec","components/surfaces/Card.jsx":"c8a789f419cf","components/surfaces/CategoryCard.jsx":"cd527e27a6fc","components/surfaces/FeatureCard.jsx":"bf8af970e905","components/surfaces/QuoteCard.jsx":"66da8d74820b","guidelines/tweaks-panel.jsx":"d259e3a86f73","ui_kits/digital-hub/hub-screens.jsx":"437c061f1396"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MySAIYaDesignSystem_424fc1 = window.MySAIYaDesignSystem_424fc1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MySAIYa primary action control. Gold gradient = sacred CTA; navy = secondary;
 * tertiary = outline; destructive = red. Never gradient text. Min height 44px.
 */
function Button({
  variant = 'primary',
  size = 'md',
  shape = 'default',
  uppercase = false,
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 16px',
      minHeight: 40,
      fontSize: 14
    },
    md: {
      padding: '0 24px',
      minHeight: 48,
      fontSize: 15
    },
    lg: {
      padding: '0 32px',
      minHeight: 56,
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: 'var(--gradient-gold)',
      color: 'var(--navy-900)',
      border: 'none',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--navy-700)',
      color: 'var(--white)',
      border: 'none'
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--navy-900)',
      border: '2px solid var(--navy-900)'
    },
    'gold-outline': {
      background: 'var(--navy-900)',
      color: 'var(--gold-500)',
      border: '1.5px solid var(--gold-500)'
    },
    destructive: {
      background: 'var(--red-500)',
      color: 'var(--white)',
      border: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--navy-900)',
      border: 'none'
    },
    purple: {
      background: 'var(--gradient-purple-glow)',
      color: 'var(--white)',
      border: 'none'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    letterSpacing: uppercase ? '0.08em' : 'normal',
    textTransform: uppercase ? 'uppercase' : 'none',
    borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-lg)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out), background var(--duration-standard) var(--ease-out)',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...(disabled ? {
      background: 'var(--gray-200)',
      color: 'var(--gray-400)',
      border: 'none',
      boxShadow: 'none'
    } : variants[variant]),
    ...style
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? hoverFor(variant) : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...hoverStyle
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
function hoverFor(variant) {
  switch (variant) {
    case 'primary':
      return {
        transform: 'scale(1.02)',
        boxShadow: 'var(--shadow-gold)'
      };
    case 'secondary':
      return {
        background: 'var(--purple-700)'
      };
    case 'tertiary':
      return {
        borderColor: 'var(--purple-700)',
        color: 'var(--purple-700)'
      };
    case 'gold-outline':
      return {
        background: 'var(--navy-800)',
        borderColor: 'var(--gold-400)',
        color: 'var(--gold-400)'
      };
    case 'ghost':
      return {
        background: 'var(--surface-hover-cool)',
        color: 'var(--purple-700)'
      };
    case 'destructive':
      return {
        filter: 'brightness(0.9)'
      };
    case 'purple':
      return {
        transform: 'scale(1.02)',
        boxShadow: 'var(--shadow-purple)'
      };
    default:
      return {};
  }
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/PostCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blog post card — the unit of the Reflections / In Action feed. Three layouts
 * off one component: `stacked` (grid feed), `horizontal` (list feed) and
 * `feature` (lead story, cover bleeds behind a dark scrim). Category chip,
 * title, dek, then a single meta line: author · date · read time.
 */
function PostCard({
  layout = 'stacked',
  cover,
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  href = '#',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const meta = [author, date, readTime].filter(Boolean).join(' · ');
  const feature = layout === 'feature';
  const horizontal = layout === 'horizontal';
  const chip = category && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: feature ? 'rgba(255,255,255,0.18)' : 'var(--chip-purple-bg)',
      color: feature ? '#fff' : 'var(--chip-purple-text)'
    }
  }, category);
  const body = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: feature ? '40px 36px 32px' : 'var(--space-5)',
      flex: 1,
      minWidth: 0,
      position: 'relative'
    }
  }, chip, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: feature ? 30 : 20,
      lineHeight: 1.25,
      color: feature ? '#fff' : 'var(--navy-900)',
      textWrap: 'pretty'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: feature ? 'rgba(255,255,255,0.86)' : 'var(--text-body)',
      display: '-webkit-box',
      WebkitLineClamp: feature ? 3 : 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, excerpt), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 500,
      color: feature ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)'
    }
  }, meta));
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), cover && /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: feature ? {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.42
    } : horizontal ? {
      width: 200,
      flexShrink: 0,
      objectFit: 'cover',
      display: 'block'
    } : {
      width: '100%',
      height: 176,
      objectFit: 'cover',
      display: 'block'
    }
  }), feature && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,18,36,0.94) 20%, rgba(0,18,36,0.35))'
    }
  }), feature ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      flex: 1
    }
  }, body) : body);
}
Object.assign(__ds_scope, { PostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill — the one shape shared by badges and chips: pill radius, 5×13 padding,
 * 2px border, Poppins 600 at 12/16. Labels of three words or fewer are set in
 * caps at 0.08em. Badges carry the DEEP brand fills because status is loud;
 * chips carry the tinted fills because metadata is quiet. Every border is its
 * own fill one step lighter — a pill never borrows another pill's accent.
 */
function Badge({
  status = 'active',
  icon = null,
  style = {},
  children,
  ...rest
}) {
  const keys = {
    active: 'active',
    admin: 'admin',
    guest: 'guest',
    pending: 'pending',
    suspended: 'suspended',
    points: 'points',
    achievement: 'earned',
    neutral: 'neutral'
  };
  const k = keys[status] || 'active';
  const short = typeof children === 'string' && children.trim().split(/\s+/).length <= 3;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      border: `2px solid var(--badge-${k}-border)`,
      background: `var(--badge-${k}-bg)`,
      color: `var(--badge-${k}-text)`,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: short ? '0.08em' : '0.02em',
      textTransform: short ? 'uppercase' : 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — the tinted half of the pill family, for streaks, week numbers, tags
 * and categories. Identical geometry and type to Badge; only the weight of the
 * fill differs, because metadata should never shout as loudly as status.
 * `level` is the one gradient tone, reserved for game levels 1–10.
 */
function Chip({
  tone = 'neutral',
  level = 5,
  icon = null,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--badge-neutral-bg)',
      borderColor: 'var(--badge-neutral-border)',
      color: 'var(--badge-neutral-text)'
    },
    navy: {
      background: 'var(--chip-navy-bg)',
      borderColor: 'var(--chip-navy-border)',
      color: 'var(--chip-navy-text)'
    },
    gold: {
      background: 'var(--chip-gold-bg)',
      borderColor: 'var(--chip-gold-border)',
      color: 'var(--chip-gold-text)'
    },
    purple: {
      background: 'var(--chip-purple-bg)',
      borderColor: 'var(--chip-purple-border)',
      color: 'var(--chip-purple-text)'
    },
    teal: {
      background: 'var(--chip-teal-bg)',
      borderColor: 'var(--chip-teal-border)',
      color: 'var(--chip-teal-text)'
    },
    orange: {
      background: 'var(--chip-orange-bg)',
      borderColor: 'var(--chip-orange-border)',
      color: 'var(--chip-orange-text)'
    },
    level: {
      background: `var(--gradient-level-${level})`,
      borderColor: 'rgba(255,255,255,0.55)',
      color: [4, 10].includes(Number(level)) ? 'var(--navy-900)' : '#fff'
    }
  };
  const c = tones[tone] || tones.neutral;
  const short = typeof children === 'string' && children.trim().split(/\s+/).length <= 3;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      borderWidth: 2,
      borderStyle: 'solid',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: short ? '0.08em' : '0.02em',
      textTransform: short ? 'uppercase' : 'none',
      whiteSpace: 'nowrap',
      ...c,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Semantic alert — consistent system for banners, inline messages and toasts.
 * Colour is never the only signal: always icon + title. Uses the locked
 * semantic token set (success/info/warning/error/devotional/achievement).
 */
function Alert({
  severity = 'info',
  title,
  icon = null,
  onClose = null,
  action = null,
  style = {},
  children,
  ...rest
}) {
  const map = {
    success: {
      bg: 'var(--alert-success-bg)',
      bd: 'var(--alert-success-border)',
      ac: 'var(--alert-success-accent)',
      tx: 'var(--alert-success-text)'
    },
    info: {
      bg: 'var(--alert-info-bg)',
      bd: 'var(--alert-info-border)',
      ac: 'var(--alert-info-accent)',
      tx: 'var(--alert-info-text)'
    },
    warning: {
      bg: 'var(--alert-warning-bg)',
      bd: 'var(--alert-warning-border)',
      ac: 'var(--alert-warning-accent)',
      tx: 'var(--alert-warning-text)'
    },
    error: {
      bg: 'var(--alert-error-bg)',
      bd: 'var(--alert-error-border)',
      ac: 'var(--alert-error-accent)',
      tx: 'var(--alert-error-text)'
    },
    progress: {
      bg: 'var(--alert-progress-bg)',
      bd: 'var(--alert-progress-border)',
      ac: 'var(--alert-progress-accent)',
      tx: 'var(--alert-progress-text)'
    },
    devotional: {
      bg: 'var(--alert-devotional-bg)',
      bd: 'var(--alert-devotional-border)',
      ac: 'var(--alert-devotional-accent)',
      tx: 'var(--alert-devotional-text)'
    },
    achievement: {
      bg: 'var(--alert-achievement-bg)',
      bd: 'var(--alert-achievement-border)',
      ac: 'var(--alert-achievement-accent)',
      tx: 'var(--alert-achievement-text)'
    }
  };
  const c = map[severity] || map.info;
  const role = severity === 'error' ? 'alert' : 'status';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: role,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      borderRadius: 'var(--radius-md)',
      background: c.bg,
      border: `1px solid ${c.bd}`,
      color: c.tx,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.ac,
      flexShrink: 0,
      display: 'inline-flex',
      marginTop: 1
    },
    "aria-hidden": "true"
  }, icon || defaultGlyph(severity)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '20px'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: '20px',
      fontWeight: 400,
      marginTop: title ? 2 : 0
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: c.tx,
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0,
      flexShrink: 0
    }
  }, "\xD7"));
}
function defaultGlyph(severity) {
  const g = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠',
    error: '⊘',
    progress: '◐',
    devotional: '✦',
    achievement: '★'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, g[severity] || g.info);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal — five locked popup patterns, each with exactly one job:
 *   locked      — feature-locked prompt: white card, gold border, one gold CTA.
 *   consent     — cookie / privacy: purple icon chip, three stacked choices.
 *   achievement — navy card with a gold border and gold Playfair title.
 *   welcome     — game onboarding: navy card, gold title, skip + next.
 *   plain       — anything else: white card, navy title.
 * Never stack two modals, and never put more than one primary action in one.
 */
function Modal({
  pattern = 'plain',
  open = true,
  onClose,
  icon = null,
  eyebrow,
  title,
  children,
  actions = null,
  width = 460,
  style = {},
  ...rest
}) {
  if (!open) return null;
  const navy = pattern === 'achievement' || pattern === 'welcome';
  const goldBorder = pattern === 'locked' || navy;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      width,
      maxWidth: '100%',
      padding: 'var(--space-8)',
      borderRadius: 'var(--radius-2xl)',
      background: navy ? 'var(--navy-900)' : 'var(--white)',
      border: goldBorder ? '2px solid var(--gold-500)' : '1px solid var(--gray-200)',
      boxShadow: 'var(--shadow-lg)',
      textAlign: pattern === 'consent' ? 'left' : navy || pattern === 'locked' ? 'center' : 'left',
      alignItems: pattern === 'consent' || pattern === 'plain' ? 'stretch' : 'center',
      color: navy ? '#fff' : 'var(--navy-900)',
      ...style
    },
    role: "dialog",
    "aria-modal": "true"
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: pattern === 'consent' ? 'flex-start' : 'center',
      background: pattern === 'consent' ? 'var(--alert-devotional-bg)' : navy ? 'rgba(255,255,255,0.10)' : 'var(--gray-100)',
      color: pattern === 'consent' ? 'var(--purple-700)' : 'var(--gold-500)'
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: pattern === 'consent' ? 'flex-start' : 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--purple-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.25,
      background: navy ? 'var(--gradient-gold-wordmark)' : 'none',
      WebkitBackgroundClip: navy ? 'text' : 'border-box',
      backgroundClip: navy ? 'text' : 'border-box',
      color: navy ? 'transparent' : 'var(--navy-900)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: navy ? 'rgba(255,255,255,0.86)' : 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: pattern === 'consent' ? 'flex-start' : 'center',
      width: '100%'
    }
  }, actions), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 14,
      right: 16,
      background: 'none',
      border: 'none',
      color: navy ? 'rgba(255,255,255,0.6)' : 'var(--gray-400)',
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with a 44px hit area. Checked fill is teal (confirmation), never
 * gold — gold marks milestones, not routine ticks. Consent boxes start empty.
 */
function Checkbox({
  label,
  message,
  state = 'default',
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const border = disabled ? 'var(--gray-300)' : state === 'error' ? 'var(--field-border-error)' : state === 'warning' ? 'var(--field-border-warning)' : focus ? 'var(--field-border-focus)' : on ? 'var(--teal-500)' : 'var(--field-border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${border}`,
      background: on && !disabled ? 'var(--teal-500)' : disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    disabled: disabled,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange?.(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }, rest)), on && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 5,
      top: 2,
      width: 7,
      height: 12,
      borderRight: '2.5px solid #fff',
      borderBottom: '2.5px solid #fff',
      transform: 'rotate(45deg)'
    }
  })), label), message && /*#__PURE__*/React.createElement("span", {
    role: state === 'error' ? 'alert' : undefined,
    style: {
      paddingLeft: 34,
      fontSize: 12,
      fontWeight: 500,
      color: state === 'error' ? 'var(--destructive-text)' : state === 'warning' ? 'var(--alert-warning-text)' : 'var(--gray-500)'
    }
  }, message));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with floating-ready label, helper and error states. Gold border on
 * focus; red border + icon (never red background) on error. Min height honours
 * 48px touch target.
 */
function Input({
  label,
  hint,
  error = null,
  state = 'default',
  message,
  required = false,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const active = error ? 'error' : disabled ? 'disabled' : focus ? 'focus' : state;
  const borderColor = {
    error: 'var(--field-border-error)',
    success: 'var(--field-border-success)',
    warning: 'var(--field-border-warning)',
    focus: 'var(--field-border-focus)',
    disabled: 'var(--field-border-default)',
    default: 'var(--field-border-default)'
  }[active];
  const messageColor = {
    error: 'var(--destructive-text)',
    success: 'var(--alert-success-text)',
    warning: 'var(--alert-warning-text)'
  }[active] || 'var(--gray-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--navy-900)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-label": "required",
    style: {
      color: 'var(--destructive-500)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${inputId}-err` : hint ? `${inputId}-hint` : undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      height: 48,
      padding: '0 var(--space-4)',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("div", {
    id: `${inputId}-err`,
    role: "alert",
    style: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 500,
      color: 'var(--destructive-text)',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u26A0"), " ", error) : message ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 500,
      color: messageColor
    }
  }, message) : hint ? /*#__PURE__*/React.createElement("div", {
    id: `${inputId}-hint`,
    style: {
      fontSize: 12,
      lineHeight: '18px',
      color: 'var(--gray-500)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-choice control. Teal dot when selected; 44px hit area; groups share `name`. */
function Radio({
  label,
  message,
  state = 'default',
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const rId = id || `rd-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const border = disabled ? 'var(--gray-300)' : state === 'error' ? 'var(--field-border-error)' : state === 'warning' ? 'var(--field-border-warning)' : focus ? 'var(--field-border-focus)' : on ? 'var(--teal-500)' : 'var(--field-border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-circle)',
      border: `2px solid ${border}`,
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    disabled: disabled,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange?.(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }, rest)), on && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-circle)',
      background: disabled ? 'var(--gray-400)' : 'var(--teal-500)'
    }
  })), label), message && /*#__PURE__*/React.createElement("span", {
    role: state === 'error' ? 'alert' : undefined,
    style: {
      paddingLeft: 34,
      fontSize: 12,
      fontWeight: 500,
      color: state === 'error' ? 'var(--destructive-text)' : state === 'warning' ? 'var(--alert-warning-text)' : 'var(--gray-500)'
    }
  }, message));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD_STATES = {
  default: {
    border: 'var(--field-border-default)',
    text: 'var(--gray-500)'
  },
  focus: {
    border: 'var(--field-border-focus)',
    text: 'var(--purple-700)'
  },
  success: {
    border: 'var(--field-border-success)',
    text: 'var(--alert-success-text)'
  },
  warning: {
    border: 'var(--field-border-warning)',
    text: 'var(--alert-warning-text)'
  },
  error: {
    border: 'var(--field-border-error)',
    text: 'var(--destructive-text)'
  }
};

/**
 * Native select with the shared field states. Chevron is drawn, not a glyph
 * font, so it inherits the state colour. 48px tall for touch.
 */
function Select({
  label,
  hint,
  message,
  state = 'default',
  required = false,
  disabled = false,
  options = [],
  id,
  style = {},
  children,
  ...rest
}) {
  const selectId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const active = disabled ? 'default' : focus ? 'focus' : state;
  const s = FIELD_STATES[active] || FIELD_STATES.default;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--navy-900)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-label": "required",
    style: {
      color: 'var(--destructive-500)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    "aria-invalid": state === 'error' || undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      height: 48,
      padding: '0 44px 0 var(--space-4)',
      appearance: 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: `2px solid ${disabled ? 'var(--field-border-default)' : s.border}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }, rest), children || options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      width: 9,
      height: 9,
      marginTop: -6,
      borderRight: `2px solid ${disabled ? 'var(--field-text-disabled)' : s.border}`,
      borderBottom: `2px solid ${disabled ? 'var(--field-text-disabled)' : s.border}`,
      transform: 'rotate(45deg)',
      pointerEvents: 'none'
    }
  })), message ? /*#__PURE__*/React.createElement("div", {
    role: state === 'error' ? 'alert' : undefined,
    style: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 500,
      color: s.text
    }
  }, message) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '18px',
      color: 'var(--gray-500)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * On/off toggle for settings that apply immediately. Teal when on (confirmed
 * state), purple while focused, amber for a warning-bearing setting. Never gold.
 */
function Switch({
  label,
  message,
  state = 'default',
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const swId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const track = disabled ? 'var(--gray-200)' : !on ? 'var(--gray-300)' : state === 'warning' ? 'var(--alert-warning-accent)' : state === 'error' ? 'var(--destructive-500)' : focus ? 'var(--purple-700)' : 'var(--teal-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: track,
      transition: 'background var(--duration-standard) var(--ease-out)',
      boxShadow: focus && !disabled ? '0 0 0 3px rgba(123,36,130,0.22)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    role: "switch",
    disabled: disabled,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange?.(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-standard) var(--ease-out)'
    }
  })), label), message && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 58,
      fontSize: 12,
      fontWeight: 500,
      color: state === 'error' ? 'var(--destructive-text)' : state === 'warning' ? 'var(--alert-warning-text)' : 'var(--gray-500)'
    }
  }, message));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD_STATES = {
  default: {
    border: 'var(--field-border-default)',
    text: 'var(--gray-500)'
  },
  focus: {
    border: 'var(--field-border-focus)',
    text: 'var(--purple-700)'
  },
  success: {
    border: 'var(--field-border-success)',
    text: 'var(--alert-success-text)'
  },
  warning: {
    border: 'var(--field-border-warning)',
    text: 'var(--alert-warning-text)'
  },
  error: {
    border: 'var(--field-border-error)',
    text: 'var(--destructive-text)'
  }
};

/** Multi-line field sharing the Input state borders. Min 96px, vertical resize only. */
function Textarea({
  label,
  hint,
  message,
  state = 'default',
  required = false,
  disabled = false,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const taId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const active = disabled ? 'default' : focus ? 'focus' : state;
  const s = FIELD_STATES[active] || FIELD_STATES.default;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--navy-900)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-label": "required",
    style: {
      color: 'var(--destructive-500)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    disabled: disabled,
    "aria-invalid": state === 'error' || undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      minHeight: 96,
      padding: 'var(--space-3) var(--space-4)',
      resize: 'vertical',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.6,
      color: disabled ? 'var(--field-text-disabled)' : 'var(--navy-900)',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: `2px solid ${disabled ? 'var(--field-border-default)' : s.border}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }, rest)), message ? /*#__PURE__*/React.createElement("div", {
    role: state === 'error' ? 'alert' : undefined,
    style: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 500,
      color: s.text
    }
  }, message) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '18px',
      color: 'var(--gray-500)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/games/Crossword.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crossword — the Play It puzzle board. Entries are declared once as
 * {answer, clue, row, col, dir}; the component derives the grid, the standard
 * row-major numbering and the two clue columns from them, so a puzzle is data,
 * never markup. Cells are 44px so the board is usable by touch.
 */
function Crossword({
  entries = [],
  cell = 44,
  reveal = false,
  title,
  style = {},
  ...rest
}) {
  const rows = Math.max(...entries.map(e => e.dir === 'down' ? e.row + e.answer.length : e.row + 1), 1);
  const cols = Math.max(...entries.map(e => e.dir === 'across' ? e.col + e.answer.length : e.col + 1), 1);

  // grid[r][c] = { solution } for every letter cell
  const grid = React.useMemo(() => {
    const g = Array.from({
      length: rows
    }, () => Array(cols).fill(null));
    entries.forEach(e => {
      e.answer.toUpperCase().split('').forEach((ch, i) => {
        const r = e.row + (e.dir === 'down' ? i : 0);
        const c = e.col + (e.dir === 'across' ? i : 0);
        g[r][c] = {
          solution: ch
        };
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
        if (entries.some(e => e.row === r && e.col === c)) map[`${r},${c}`] = ++n;
      }
    }
    return map;
  }, [grid, entries, rows, cols]);
  const [values, setValues] = React.useState({});
  const [focus, setFocus] = React.useState(null);
  const set = (r, c, v) => setValues(s => ({
    ...s,
    [`${r},${c}`]: v.slice(-1).toUpperCase()
  }));
  const clues = dir => entries.filter(e => e.dir === dir).map(e => ({
    ...e,
    n: numbers[`${e.row},${e.col}`]
  })).sort((a, b) => a.n - b.n);
  const ClueList = ({
    dir,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, label), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, clues(dir).map(e => /*#__PURE__*/React.createElement("li", {
    key: `${dir}${e.n}`,
    style: {
      display: 'flex',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--navy-900)',
      minWidth: 16
    }
  }, e.n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textWrap: 'pretty'
    }
  }, e.clue, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "(", e.answer.length, ")"))))));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--navy-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
      gridAutoRows: cell,
      gap: 2,
      background: 'var(--navy-900)',
      padding: 2,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)'
    }
  }, grid.flatMap((row, r) => row.map((c, ci) => {
    if (!c) return /*#__PURE__*/React.createElement("div", {
      key: `${r}-${ci}`,
      style: {
        background: 'transparent'
      }
    });
    const key = `${r},${ci}`;
    const num = numbers[key];
    const on = focus === key;
    return /*#__PURE__*/React.createElement("label", {
      key: key,
      style: {
        position: 'relative',
        display: 'block',
        background: 'var(--white)',
        borderRadius: 2,
        outline: on ? '2px solid var(--gold-500)' : 'none',
        outlineOffset: -2
      }
    }, num && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 1,
        left: 3,
        fontFamily: 'var(--font-ui)',
        fontSize: 9,
        fontWeight: 700,
        color: 'var(--gray-500)',
        pointerEvents: 'none'
      }
    }, num), /*#__PURE__*/React.createElement("input", {
      value: reveal ? c.solution : values[key] || '',
      onChange: ev => set(r, ci, ev.target.value),
      onFocus: () => setFocus(key),
      onBlur: () => setFocus(null),
      readOnly: reveal,
      maxLength: 1,
      "aria-label": `Row ${r + 1} column ${ci + 1}`,
      style: {
        width: '100%',
        height: '100%',
        border: 'none',
        background: 'transparent',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 18,
        color: reveal ? 'var(--purple-700)' : 'var(--navy-900)',
        padding: 0,
        outline: 'none',
        caretColor: 'var(--gold-600)'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(ClueList, {
    dir: "across",
    label: "Across"
  }), /*#__PURE__*/React.createElement(ClueList, {
    dir: "down",
    label: "Down"
  }))));
}
Object.assign(__ds_scope, { Crossword });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/games/Crossword.jsx", error: String((e && e.message) || e) }); }

// components/learning/QuizQuestion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quiz question — the Play It answer card. Navy panel, question in Poppins,
 * options as full-width targets (44px minimum). Answer states are never colour
 * alone: correct and wrong both carry a glyph. Once answered the card locks and
 * reveals the explanation.
 */
function QuizQuestion({
  index,
  total,
  question,
  options = [],
  correct = 0,
  explanation,
  onAnswer,
  value = null,
  style = {},
  ...rest
}) {
  const [picked, setPicked] = React.useState(value);
  const answered = picked !== null && picked !== undefined;
  const choose = i => {
    if (answered) return;
    setPicked(i);
    if (onAnswer) onAnswer(i, i === correct);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--navy-800)',
      color: '#fff',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, "Question ", index, total ? ` of ${total}` : ''), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.35,
      textWrap: 'pretty'
    }
  }, question), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, options.map((o, i) => {
    let bg = 'transparent',
      border = '2px solid var(--navy-500)',
      color = '#fff',
      glyph = null;
    if (answered) {
      if (i === correct) {
        bg = 'rgba(29,201,160,0.22)';
        border = '2px solid var(--teal-500)';
        glyph = '✓';
      } else if (i === picked) {
        bg = 'rgba(240,68,56,0.20)';
        border = '2px solid #F04438';
        glyph = '✕';
      } else {
        color = 'rgba(255,255,255,0.55)';
      }
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => choose(i),
      disabled: answered,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 52,
        padding: '12px 18px',
        textAlign: 'left',
        borderRadius: 'var(--radius-lg)',
        border,
        background: bg,
        color,
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        fontSize: 15,
        cursor: answered ? 'default' : 'pointer',
        transition: 'background var(--duration-standard) var(--ease-out), border-color var(--duration-standard) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.14)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700
      }
    }, glyph || String.fromCharCode(65 + i)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, o));
  })), answered && explanation && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      background: 'rgba(255,255,255,0.08)',
      borderLeft: '3px solid var(--gold-500)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.9)'
    }
  }, explanation));
}
Object.assign(__ds_scope, { QuizQuestion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/QuizQuestion.jsx", error: String((e && e.message) || e) }); }

// components/learning/StudyModule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Study module — a chapter of Book Club or MySAIYa 101. Gradient masthead
 * (numbered feature gradient), progress bar, then a lesson list where each row
 * shows state: done, current, locked. The current lesson is the only row with a
 * filled marker, so the eye lands on "what do I do next" first.
 */
function StudyModule({
  gradient = 2,
  module: moduleLabel,
  title,
  description,
  lessons = [],
  progress = null,
  action = null,
  style = {},
  ...rest
}) {
  const done = lessons.filter(l => l.state === 'done').length;
  const pct = progress != null ? progress : lessons.length ? Math.round(done / lessons.length * 100) : 0;
  const n = (Number(gradient) - 1) % 5 + 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      background: 'var(--white)',
      border: '1px solid var(--gray-200)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '22px 24px 20px',
      background: `var(--gradient-feature-${n})`,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.22)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textShadow: '0 1px 2px rgba(0,0,0,0.28)'
    }
  }, moduleLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.88
    }
  }, moduleLabel), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.2
    }
  }, title))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: 1
    }
  }, description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, done, " of ", lessons.length, " lessons"), /*#__PURE__*/React.createElement("span", null, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gray-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gradient-gold)'
    }
  }))), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, lessons.map((l, i) => {
    const state = l.state || 'todo';
    const locked = state === 'locked';
    const current = state === 'current';
    return /*#__PURE__*/React.createElement("li", {
      key: l.id || i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        background: current ? 'var(--navy-50, #EEF3F9)' : 'transparent',
        opacity: locked ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flexShrink: 0,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 700,
        fontFamily: 'var(--font-ui)',
        background: state === 'done' ? 'var(--teal-500)' : current ? 'var(--navy-900)' : 'var(--gray-200)',
        color: state === 'done' || current ? '#fff' : 'var(--gray-500)'
      }
    }, state === 'done' ? '✓' : locked ? '🔒' : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 14,
        lineHeight: 1.4,
        fontWeight: current ? 700 : 500,
        color: current ? 'var(--navy-900)' : 'var(--text-body)'
      }
    }, l.title), l.duration && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        flexShrink: 0
      }
    }, l.duration));
  })), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, action)));
}
Object.assign(__ds_scope, { StudyModule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/StudyModule.jsx", error: String((e && e.message) || e) }); }

// components/media/GalleryGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gallery view — the album grid used by Events, Seva and In Action. Photos are
 * the content, so chrome stays minimal: a flush grid, a caption that only
 * appears on hover/focus, and an optional category chip per tile. `featured`
 * promotes the first item to a double-width, double-height hero tile.
 */
function GalleryGrid({
  items = [],
  columns = 3,
  featured = false,
  gap = 12,
  style = {},
  ...rest
}) {
  const [active, setActive] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridAutoRows: 168,
      gap,
      ...style
    }
  }, rest), items.map((it, i) => {
    const big = featured && i === 0;
    const on = active === i;
    return /*#__PURE__*/React.createElement("figure", {
      key: it.id || i,
      tabIndex: 0,
      onMouseEnter: () => setActive(i),
      onMouseLeave: () => setActive(-1),
      onFocus: () => setActive(i),
      onBlur: () => setActive(-1),
      style: {
        position: 'relative',
        margin: 0,
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        gridColumn: big ? 'span 2' : 'span 1',
        gridRow: big ? 'span 2' : 'span 1',
        background: 'var(--navy-800)',
        cursor: 'pointer',
        outline: on ? '2px solid var(--gold-500)' : 'none',
        outlineOffset: 2
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: it.src,
      alt: it.alt || it.caption || '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transform: on ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform var(--duration-slow) var(--ease-out)'
      }
    }), it.category && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: '4px 12px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: 'rgba(10,30,62,0.72)',
        color: '#fff',
        backdropFilter: 'blur(6px)'
      }
    }, it.category), it.caption && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: big ? '28px 18px 16px' : '22px 12px 12px',
        background: 'linear-gradient(to top, rgba(0,18,36,0.88), rgba(0,18,36,0))',
        color: '#fff',
        fontFamily: 'var(--font-ui)',
        fontSize: big ? 15 : 13,
        fontWeight: 600,
        lineHeight: 1.35,
        opacity: on ? 1 : 0,
        transform: on ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity var(--duration-standard) var(--ease-out), transform var(--duration-standard) var(--ease-out)'
      }
    }, it.caption, it.meta && /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 400,
        fontSize: 12,
        opacity: 0.8,
        marginTop: 2
      }
    }, it.meta)));
  }));
}
Object.assign(__ds_scope, { GalleryGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/GalleryGrid.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomTabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bottom tab bar — five slots maximum. Active is a navy icon with a semibold
 * label; inactive is gray-400. The gold FAB is the only gold element on the bar,
 * and every target is at least 44px.
 */
function BottomTabBar({
  items = [],
  active,
  onSelect,
  fab = null,
  onFab,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Primary",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      background: 'var(--white)',
      borderTop: '1px solid var(--gray-200)',
      padding: '8px 6px 10px',
      position: 'relative',
      ...style
    }
  }, rest), items.slice(0, 5).map((it, i) => {
    const on = it.id === active;
    const isFabSlot = fab && i === Math.floor(Math.min(items.length, 5) / 2);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.id
    }, isFabSlot && /*#__PURE__*/React.createElement("button", {
      onClick: onFab,
      "aria-label": fab.label,
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        background: 'var(--gradient-gold)',
        color: 'var(--navy-900)',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -22,
        margin: '-22px 6px 0',
        flexShrink: 0
      }
    }, fab.icon), /*#__PURE__*/React.createElement("button", {
      onClick: () => onSelect && onSelect(it.id),
      "aria-current": on ? 'page' : undefined,
      style: {
        flex: '1 1 0',
        minWidth: 0,
        minHeight: 44,
        padding: '0 2px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        color: on ? 'var(--navy-900)' : 'var(--gray-400)',
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: on ? 600 : 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexShrink: 0
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label)));
  }));
}

/**
 * Mobile drawer — slides in over a rgba(6,22,47,0.62) scrim in 300ms with the
 * standard easing. Tap the scrim or swipe left to dismiss.
 */
function Drawer({
  open = true,
  onClose,
  user = null,
  items = [],
  active,
  onSelect,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: open ? 'auto' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(6,22,47,0.62)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--duration-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 'min(280px, 86%)',
      boxSizing: 'border-box',
      background: 'var(--navy-900)',
      color: '#fff',
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, user && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--gradient-category-service)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 16,
      color: '#fff'
    }
  }, user.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--navy-300)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.meta))), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        minHeight: 48,
        padding: '0 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-lg)',
        background: on ? 'rgba(212,175,55,0.14)' : 'transparent',
        color: on ? '#fff' : '#C9D6E4',
        fontFamily: 'var(--font-ui)',
        fontSize: 15,
        fontWeight: on ? 600 : 500,
        minWidth: 0,
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexShrink: 0,
        color: on ? 'var(--gold-400)' : 'inherit'
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label));
  })));
}

/**
 * Sticky action bar — holds exactly one primary action, with at most one
 * secondary icon button beside it.
 */
function ActionBar({
  action,
  secondary = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      background: 'var(--white)',
      borderTop: '1px solid var(--gray-200)',
      ...style
    }
  }, rest), secondary && /*#__PURE__*/React.createElement("button", {
    onClick: secondary.onClick,
    "aria-label": secondary.label,
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--gray-300)',
      background: 'var(--white)',
      color: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, secondary.icon), /*#__PURE__*/React.createElement("button", {
    onClick: action.onClick,
    style: {
      flex: 1,
      minHeight: 48,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gradient-gold)',
      color: 'var(--navy-900)',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, action.label));
}
Object.assign(__ds_scope, { BottomTabBar, Drawer, ActionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumbs — third level and deeper only, one line, never wrapped. Separator
 * is always a chevron, one step lighter than the links. The current page is
 * never a link and never gold: gold is reserved for actions. Maximum four
 * levels — collapse the middle behind an expandable "…" button.
 */
function Breadcrumbs({
  items = [],
  tone = 'light',
  maxItems = 4,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const dark = tone === 'dark';
  const linkColor = dark ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)';
  const leafColor = dark ? '#fff' : 'var(--navy-900)';
  const sepColor = dark ? 'rgba(255,255,255,0.38)' : 'var(--gray-300)';
  const collapsed = !open && items.length > maxItems;
  const shown = collapsed ? [items[0], {
    collapsed: true
  }, items[items.length - 1]] : items;
  const Sep = () => /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: sepColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }));
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      ...style
    }
  }, rest), shown.map((it, i) => {
    const last = i === shown.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.collapsed ? 'ell' : (it.href || it.label) + i
    }, it.collapsed ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(true),
      "aria-label": "Show all levels",
      style: {
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        background: dark ? 'rgba(255,255,255,0.12)' : 'var(--gray-100)',
        color: linkColor,
        padding: '3px 9px',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 13,
        lineHeight: 1.4
      }
    }, "\u2026") : last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        fontWeight: 600,
        color: leafColor,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: linkColor,
        textDecoration: 'none',
        fontWeight: 500
      }
    }, it.icon, i === 0 && !it.icon ? it.label : it.label), !last && /*#__PURE__*/React.createElement(Sep, null));
  }));
}

/**
 * Back link — the article and detail-page alternative to a full trail. One
 * arrow, one destination, no chevrons.
 */
function BackLink({
  href = '#',
  children = 'Back',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--navy-700)',
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  })), children);
}
Object.assign(__ds_scope, { Breadcrumbs, BackLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text link. Seven roles, one rule: exactly one active pattern per surface.
 * Inline links stay underlined; navigation links earn a gold underline when
 * active; gold is for dark surfaces and active navigation, never body copy.
 */
function Link({
  href = '#',
  role = 'inline',
  active = false,
  visited = false,
  onDark = false,
  danger = false,
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const kind = danger ? 'danger' : role;
  let color = onDark ? 'var(--link-on-dark)' : 'var(--link-default)';
  if (kind === 'danger') color = onDark ? '#FFA3C0' : 'var(--link-danger)';else if (visited) color = 'var(--link-visited)';
  if (active) color = onDark ? 'var(--link-on-dark)' : 'var(--link-active)';
  if (hover) color = kind === 'danger' ? 'var(--destructive-700)' : onDark ? 'var(--gold-300)' : 'var(--link-hover)';
  const underline = kind === 'inline' || kind === 'footer' || visited ? 'underline' : active ? 'underline' : hover ? 'underline' : 'none';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-current": active && kind === 'nav' ? 'page' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Link.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pagination — numbered pages for the Programme Directory and Events. The
 * current page is a filled navy square (40px, 12px radius); every other control
 * is a ghost button. First and last page are always shown with an ellipsis gap,
 * and disabled arrows stay in place — the control never changes shape.
 */
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  perPage = null,
  onPerPageChange,
  perPageOptions = [12, 24, 48],
  summary,
  style = {},
  ...rest
}) {
  const go = p => {
    if (p >= 1 && p <= pageCount && p !== page && onChange) onChange(p);
  };
  const pages = React.useMemo(() => {
    if (pageCount <= 7) return Array.from({
      length: pageCount
    }, (_, i) => i + 1);
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
    width: 40,
    height: 40,
    borderRadius: 12,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--gray-200)',
    background: 'var(--white)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--navy-900)',
    cursor: 'pointer',
    transition: 'all var(--duration-standard) var(--ease-out)',
    ...extra
  });
  const Arrow = ({
    dir,
    to,
    disabled
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => go(to),
    disabled: disabled,
    "aria-label": dir === 'prev' ? 'Previous page' : 'Next page',
    style: ghost({
      color: disabled ? 'var(--gray-300)' : 'var(--navy-900)',
      cursor: disabled ? 'default' : 'pointer'
    })
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'prev' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'
  })));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "prev",
    to: page - 1,
    disabled: page <= 1
  }), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      width: 24,
      textAlign: 'center',
      color: 'var(--gray-400)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    "aria-current": p === page ? 'page' : undefined,
    style: ghost(p === page ? {
      background: 'var(--navy-900)',
      borderColor: 'var(--navy-900)',
      color: '#fff',
      fontWeight: 700
    } : {})
  }, p)), /*#__PURE__*/React.createElement(Arrow, {
    dir: "next",
    to: page + 1,
    disabled: page >= pageCount
  })), perPage != null && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Per page", /*#__PURE__*/React.createElement("select", {
    value: perPage,
    onChange: e => onPerPageChange && onPerPageChange(Number(e.target.value)),
    style: {
      height: 40,
      borderRadius: 12,
      border: '1px solid var(--gray-200)',
      background: 'var(--white)',
      padding: '0 10px',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--navy-900)'
    }
  }, perPageOptions.map(n => /*#__PURE__*/React.createElement("option", {
    key: n,
    value: n
  }, n)))));
}

/** Load-more — the Blog alternative to numbered pages. */
function LoadMore({
  shown,
  total,
  onClick,
  label = 'Load more stories',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      minHeight: 48,
      padding: '0 28px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--navy-900)',
      background: 'transparent',
      color: 'var(--navy-900)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, label), total != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Showing ", shown, " of ", total));
}

/** Prev / next — the article footer pair. */
function PrevNext({
  prev,
  next,
  style = {},
  ...rest
}) {
  const box = align => ({
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: '16px 22px',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--gray-200)',
    background: 'var(--white)',
    textDecoration: 'none',
    textAlign: align
  });
  const kicker = {
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: 11,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const title = {
    fontFamily: 'var(--font-ui)',
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--navy-900)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 16,
      ...style
    }
  }, rest), prev && /*#__PURE__*/React.createElement("a", {
    href: prev.href || '#',
    style: box('left')
  }, /*#__PURE__*/React.createElement("span", {
    style: kicker
  }, "Previous"), /*#__PURE__*/React.createElement("span", {
    style: title
  }, prev.label)), next && /*#__PURE__*/React.createElement("a", {
    href: next.href || '#',
    style: box('right')
  }, /*#__PURE__*/React.createElement("span", {
    style: kicker
  }, "Next"), /*#__PURE__*/React.createElement("span", {
    style: title
  }, next.label)));
}
Object.assign(__ds_scope, { Pagination, LoadMore, PrevNext });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hub sidebar — member-only navigation. 264px expanded / 76px collapsed.
 * Items are grouped in labelled clusters (Main, Journey, Community, Committee),
 * max six per group. Active item: 3px gold left rule, 14% gold wash, gold icon,
 * white semibold label — only ever one at a time. Hover is an 8% white wash with
 * no movement. Counts use the semantic accent for their area (orange for live
 * activity, red only for errors). The progress footer is pinned to the bottom.
 */
function Sidebar({
  groups = [],
  active,
  onSelect,
  collapsed = false,
  brand = 'MySAIYa Hub',
  logo,
  progress = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const width = collapsed ? 76 : 264;
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Hub navigation",
    style: {
      width,
      flexShrink: 0,
      background: 'var(--navy-900)',
      borderRadius: 'var(--radius-2xl)',
      padding: collapsed ? '20px 12px' : '20px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minHeight: 520,
      transition: 'width var(--duration-standard) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? '6px 0 18px' : '6px 12px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: collapsed ? 'center' : 'flex-start',
      gap: 10
    }
  }, logo, !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1,
      background: 'var(--gradient-gold-wordmark)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      whiteSpace: 'nowrap'
    }
  }, brand)), groups.map(grp => /*#__PURE__*/React.createElement(React.Fragment, {
    key: grp.label
  }, !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 12px 6px',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--navy-300)'
    }
  }, grp.label), grp.items.slice(0, 6).map(it => {
    const on = it.id === active;
    const hot = hover === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      title: collapsed ? it.label : undefined,
      "aria-current": on ? 'page' : undefined,
      style: {
        position: 'relative',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 44,
        padding: collapsed ? '0 12px' : '0 14px',
        justifyContent: collapsed ? 'center' : 'flex-start',
        borderRadius: 'var(--radius-lg)',
        background: on ? 'rgba(212,175,55,0.14)' : hot ? 'rgba(255,255,255,0.08)' : 'transparent',
        color: on ? '#fff' : '#C9D6E4',
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        transition: 'background var(--duration-standard) var(--ease-out)',
        overflow: 'hidden'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        borderRadius: 3,
        background: 'var(--gold-500)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexShrink: 0,
        color: on ? 'var(--gold-400)' : 'inherit'
      }
    }, it.icon), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: 'left',
        whiteSpace: 'nowrap'
      }
    }, it.label), !collapsed && it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        minWidth: 22,
        height: 22,
        padding: '0 7px',
        borderRadius: 'var(--radius-pill)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: it.tone === 'error' ? 'var(--red-500)' : 'var(--orange-500)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 700
      }
    }, it.count));
  }))), progress && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 16,
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, collapsed ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.14)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${progress.percent}%`,
      height: '100%',
      background: 'var(--gradient-gold)'
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '0 4px 8px',
      fontFamily: 'var(--font-ui)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-300)'
    }
  }, progress.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 700
    }
  }, progress.points)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.14)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${progress.percent}%`,
      height: '100%',
      background: 'var(--gradient-gold)'
    }
  })))));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — single-select, never removable. Three locked variants:
 *   underline (default) — navy semibold label with a 3px navy underline sitting
 *     on the 1px gray-200 rule; the quiet default for content switching.
 *   elevated — the selected tab lifts onto a navy surface with white bold text
 *     and a gold gradient stroke across its top edge. Use where tabs are the
 *     primary control on the screen.
 *   section — the same underline in purple, for page-section navigation.
 * Counts are neutral pills: they describe, they never alert. Panels swap with a
 * 150ms crossfade and nothing else.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  children,
  style = {},
  ...rest
}) {
  const ids = tabs.map(t => typeof t === 'string' ? t : t.id);
  const [inner, setInner] = React.useState(defaultValue ?? ids[0]);
  const active = value !== undefined ? value : inner;
  const [fade, setFade] = React.useState(1);
  const select = id => {
    if (id === active) return;
    setFade(0);
    setTimeout(() => {
      if (value === undefined) setInner(id);
      if (onChange) onChange(id);
      setFade(1);
    }, 150);
  };
  const rule = variant === 'elevated' ? 'none' : '1px solid var(--gray-200)';
  const line = variant === 'section' ? 'var(--purple-700)' : 'var(--navy-900)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'elevated' ? 6 : 4,
      borderBottom: rule,
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      paddingTop: variant === 'elevated' ? 6 : 0,
      boxShadow: variant === 'elevated' ? '0 1px 0 var(--navy-900)' : 'none'
    }
  }, tabs.map(t => {
    const tab = typeof t === 'string' ? {
      id: t,
      label: t
    } : t;
    const on = tab.id === active;
    if (variant === 'elevated') {
      return /*#__PURE__*/React.createElement("button", {
        key: tab.id,
        role: "tab",
        "aria-selected": on,
        onClick: () => select(tab.id),
        style: {
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          minHeight: 48,
          padding: on ? '14px 24px' : '12px 20px',
          borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
          fontFamily: 'var(--font-ui)',
          fontSize: 14,
          fontWeight: on ? 700 : 500,
          background: on ? 'linear-gradient(180deg, #123B76 0%, #002E5B 42%, #001224 100%)' : 'linear-gradient(180deg, #FFFFFF 0%, #EDEFF3 100%)',
          border: on ? '1px solid #001224' : '1px solid var(--gray-300)',
          borderBottom: 'none',
          color: on ? '#fff' : 'var(--text-muted)',
          boxShadow: on ? '0 1px 0 rgba(255,255,255,0.14) inset, 0 -10px 22px -8px rgba(0,18,36,0.45), 0 10px 20px -10px rgba(0,18,36,0.55)' : 'inset 0 -3px 6px -3px rgba(10,30,62,0.16)',
          transform: on ? 'translateY(-4px)' : 'translateY(2px)',
          zIndex: on ? 2 : 1,
          transition: 'all var(--duration-standard) var(--ease-out)'
        }
      }, on && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'var(--gradient-gold-wordmark)'
        }
      }), tab.icon, tab.label, tab.count != null && /*#__PURE__*/React.createElement(Count, {
        on: on,
        elevated: true
      }, tab.count));
    }
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(tab.id),
      style: {
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        minHeight: 44,
        padding: '10px 14px 12px',
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? variant === 'section' ? 'var(--purple-700)' : 'var(--navy-900)' : 'var(--text-muted)',
        transition: 'color var(--duration-standard) var(--ease-out)'
      }
    }, tab.icon, tab.label, tab.count != null && /*#__PURE__*/React.createElement(Count, {
      on: on
    }, tab.count), on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: line
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      opacity: fade,
      transition: 'opacity 150ms var(--ease-out)'
    }
  }, typeof children === 'function' ? children(active) : children));
}

/* Counts describe, they do not alert — always the neutral pill. */
function Count({
  children,
  on,
  elevated
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 11,
      lineHeight: '16px',
      background: elevated && on ? 'rgba(255,255,255,0.18)' : 'var(--badge-neutral-bg)',
      color: elevated && on ? '#fff' : 'var(--badge-neutral-text)'
    }
  }, children);
}

/**
 * Segmented control — compact switch for three or more mutually exclusive
 * options with one- or two-word labels. Selected pill is white with
 * --shadow-sm on the gray-100 track. Not a filter: it is always single-select.
 */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const ids = options.map(o => typeof o === 'string' ? o : o.id);
  const [inner, setInner] = React.useState(defaultValue ?? ids[0]);
  const active = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      id: o,
      label: o
    } : o;
    const on = opt.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.id,
      role: "radio",
      "aria-checked": on,
      onClick: () => {
        if (value === undefined) setInner(opt.id);
        if (onChange) onChange(opt.id);
      },
      style: {
        border: 'none',
        cursor: 'pointer',
        minHeight: 36,
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-ui)',
        fontSize: 13,
        fontWeight: on ? 700 : 500,
        background: on ? 'var(--white)' : 'transparent',
        color: on ? 'var(--navy-900)' : 'var(--text-body)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--duration-standard) var(--ease-out)'
      }
    }, opt.label);
  }));
}

/**
 * Filter pills — multi-select and removable, the opposite role to Tabs. Never
 * put filter pills and tabs in the same row: one narrows a set, the other
 * switches a view.
 */
function FilterPills({
  options = [],
  value = [],
  onChange,
  style = {},
  ...rest
}) {
  const toggle = id => {
    const next = value.includes(id) ? value.filter(v => v !== id) : [...value, id];
    if (onChange) onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center',
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      id: o,
      label: o
    } : o;
    const on = value.includes(opt.id);
    return /*#__PURE__*/React.createElement("button", {
      key: opt.id,
      type: "button",
      "aria-pressed": on,
      onClick: () => toggle(opt.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        minHeight: 36,
        padding: on ? '7px 10px 7px 14px' : '7px 14px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        fontSize: 13,
        border: on ? '1px solid var(--navy-900)' : '1px solid var(--gray-300)',
        background: on ? 'var(--navy-900)' : 'var(--white)',
        color: on ? '#fff' : 'var(--text-body)',
        transition: 'all var(--duration-standard) var(--ease-out)'
      }
    }, opt.label, on && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.22)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11,
        lineHeight: 1
      }
    }, "\xD7"));
  }));
}
Object.assign(__ds_scope, { Tabs, SegmentedControl, FilterPills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card — the workhorse container. White by default with a soft navy-tinted
 * shadow; `dark` flips to navy-800. `accent` adds a category top border. `shiny`
 * is the navy + gold-gradient-border quote/divine-message surface.
 */
function Card({
  variant = 'default',
  accent = null,
  glass = false,
  hoverable = false,
  style = {},
  children,
  ...rest
}) {
  const accents = {
    leadership: 'var(--purple-700)',
    service: 'var(--teal-500)',
    spiritual: 'var(--purple-lite-600)',
    education: 'var(--gold-500)',
    multimedia: 'var(--navy-500)'
  };
  const base = {
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-6)',
    boxSizing: 'border-box',
    transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out)',
    position: 'relative'
  };
  let look;
  if (variant === 'dark') {
    look = {
      background: 'var(--navy-800)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-lg)',
      border: 'none'
    };
  } else if (variant === 'shiny') {
    look = {
      background: 'var(--navy-900)',
      color: 'var(--white)',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(var(--navy-900),var(--navy-900)), var(--gradient-gold-wordmark)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxShadow: 'var(--shadow-lg)'
    };
  } else {
    look = {
      background: glass ? 'rgba(255,255,255,0.9)' : 'var(--white)',
      backdropFilter: glass ? 'blur(10px)' : 'none',
      color: 'var(--navy-900)',
      border: '1px solid var(--gray-200)',
      boxShadow: 'var(--shadow-card)'
    };
  }

  // Accent rides on top of the variant's own border instead of replacing it, so
  // dark and shiny cards keep their edge treatment.
  const accentBorder = accent ? {
    borderTop: `4px solid ${accents[accent] || accent}`,
    borderTopLeftRadius: 'var(--radius-2xl)',
    borderTopRightRadius: 'var(--radius-2xl)'
  } : {};
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hoverable ? {
    cursor: 'pointer',
    ...(hover ? {
      transform: 'translateY(-4px)',
      boxShadow: 'var(--shadow-card-hover)'
    } : {})
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...look,
      ...accentBorder,
      ...hoverStyle,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category card — the Programme Directory tile. Header fold carries the
 * category gradient with 40px top corners, an icon chip, an eyebrow label and a
 * Playfair title; the body is a white surface with a one-line description and an
 * optional footer action. One gradient per category, never reused for an
 * unrelated meaning on the same screen. Grid: 3-up desktop, 2-up tablet, 1-up
 * mobile. Hover lifts the card 4px; the header gradient never changes.
 */
const CATEGORIES = {
  leadership: {
    label: 'Leadership & governance',
    icon: 'flag',
    gradient: 'var(--gradient-category-leadership)',
    dark: false
  },
  service: {
    label: 'Service',
    icon: 'heart-handshake',
    gradient: 'var(--gradient-category-service)',
    dark: false
  },
  spiritual: {
    label: 'Spiritual & cultural',
    icon: 'flower-2',
    gradient: 'var(--gradient-category-spiritual)',
    dark: false
  },
  medical: {
    label: 'Medical outreach',
    icon: 'stethoscope',
    gradient: 'var(--gradient-category-medical)',
    dark: false
  },
  youth: {
    label: 'Youth development',
    icon: 'graduation-cap',
    gradient: 'var(--gradient-category-youth)',
    dark: false
  },
  learning: {
    label: 'Learning & resources',
    icon: 'book-open',
    gradient: 'var(--gradient-category-learning)',
    dark: true
  },
  events: {
    label: 'Events',
    icon: 'calendar-days',
    gradient: 'var(--gradient-category-events)',
    dark: false
  },
  committee: {
    label: 'Committee hub',
    icon: 'briefcase-business',
    gradient: 'var(--gradient-category-committee)',
    dark: false
  }
};
function CategoryCard({
  category = 'service',
  icon = null,
  eyebrow,
  title,
  description,
  action = null,
  style = {},
  ...rest
}) {
  const cat = CATEGORIES[category] || CATEGORIES.service;
  const [hover, setHover] = React.useState(false);
  const fg = cat.dark ? 'var(--navy-900)' : '#fff';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-3xl)',
      overflow: 'hidden',
      background: 'var(--white)',
      border: '1px solid var(--gray-200)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: cat.gradient,
      color: fg,
      padding: '22px 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'var(--gradient-gold-wordmark)',
      opacity: cat.dark ? 0.9 : 0.75
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 38%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      flexShrink: 0,
      background: cat.dark ? 'rgba(10,30,62,0.10)' : 'rgba(255,255,255,0.20)',
      border: cat.dark ? '1px solid rgba(10,30,62,0.14)' : '1px solid rgba(255,255,255,0.26)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: cat.dark ? 0.7 : 0.88
    }
  }, eyebrow || cat.label), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2,
      textShadow: cat.dark ? 'none' : '0 1px 2px rgba(0,0,0,0.24)'
    }
  }, title))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, action)));
}
Object.assign(__ds_scope, { CATEGORIES, CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Feature dashboard card — a gradient module tile that routes into a major area.
 * Gradients are numbered, never named after a module: assign 1–5 in layout order
 * so any module can occupy any slot. Five tiles is the maximum on screen at once.
 * A dark overlay stabilises white text on the gradient.
 */
function FeatureCard({
  gradient = 1,
  icon = null,
  eyebrow = null,
  title,
  description,
  style = {},
  children,
  ...rest
}) {
  const n = (Number(gradient) - 1) % 5 + 1;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-6)',
      minHeight: 160,
      background: `var(--gradient-feature-${n})`,
      color: '#fff',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-md)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--duration-standard) var(--ease-out), box-shadow var(--duration-standard) var(--ease-out)',
      cursor: 'pointer',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.22)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      height: '100%',
      textShadow: '0 1px 2px rgba(0,0,0,0.28)'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-lg)',
      background: 'rgba(255,255,255,0.18)',
      flexShrink: 0
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1.2
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      opacity: 0.92,
      color: '#EEEEEF'
    }
  }, description), children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quote card ("Divine message") — the shareable Sai quote surface, built on the
 * MySAIYa quote-card artwork: an inset hairline frame, the organisation lockup
 * top-left, an oversized quotation glyph, the quote large and LEFT-aligned in
 * Playfair with an optional bold emphasis clause, an optional portrait bleeding
 * off the right edge, then the gold-metallic "— Baba" signature and the date.
 * The hashtag sits as a watermark along the bottom. `index` cycles the 20 quote
 * gradients; light ones flip the text to navy.
 */
function QuoteCard({
  index = 1,
  quote,
  emphasis,
  attribution = 'Baba',
  date,
  portrait,
  lockup = 'Malaysian Sai Young Adults',
  emblem,
  hashtag = '#saiquotesallmysaiyashouldknow',
  style = {},
  ...rest
}) {
  const n = (index - 1) % 20 + 1;
  const pad = String(n).padStart(2, '0');
  const darkText = [4, 7, 19].includes(n);
  const fg = darkText ? 'var(--navy-900)' : '#fff';
  const soft = darkText ? 'rgba(10,30,62,0.62)' : 'rgba(255,255,255,0.70)';
  const hair = darkText ? 'rgba(10,30,62,0.22)' : 'rgba(255,255,255,0.34)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      minHeight: 380,
      padding: 'var(--space-10)',
      background: `var(--gradient-quote-${pad})`,
      color: fg,
      isolation: 'isolate',
      ...style
    }
  }, rest), portrait && /*#__PURE__*/React.createElement("img", {
    src: portrait,
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '42%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top',
      opacity: 0.9,
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.65) 34%, #000 78%)',
      maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.65) 34%, #000 78%)',
      mixBlendMode: darkText ? 'multiply' : 'luminosity',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 18,
      border: `1px solid ${hair}`,
      borderRadius: 'var(--radius-lg)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: portrait ? '62%' : '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, emblem && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: '#fff',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: emblem,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '0.01em',
      color: soft
    }
  }, lockup)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 76,
      lineHeight: 0.5,
      color: hair,
      userSelect: 'none'
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(1.5rem, 2.3vw, 2.15rem)',
      lineHeight: 1.35,
      textWrap: 'pretty'
    }
  }, quote, emphasis && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800
    }
  }, " ", emphasis))), date && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13,
      color: soft
    }
  }, date))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 40,
      bottom: 54,
      fontFamily: 'var(--font-signature)',
      fontWeight: 700,
      fontSize: 'clamp(2rem, 2.7vw, 2.8rem)',
      lineHeight: 1,
      paddingRight: 2,
      color: darkText ? 'rgba(135,30,30,0.9)' : 'rgba(246,231,231,0.9)',
      filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.35))',
      pointerEvents: 'none'
    }
  }, "\u2014 ", attribution), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 26,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.06em',
      color: darkText ? 'rgba(10,30,62,0.26)' : 'rgba(255,255,255,0.30)',
      pointerEvents: 'none'
    }
  }, hashtag));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// guidelines/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/digital-hub/hub-screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MySAIYa Digital Hub — UI kit screens.
   Composes the design-system components (window.MySAIYaDesignSystem_*) plus
   product-specific layout. Lucide icons via the global `lucide.createIcons()`. */

const DS = window.MySAIYaDesignSystem_424fc1;
const {
  Button,
  Badge,
  Chip,
  Card,
  FeatureCard,
  QuoteCard,
  Alert,
  Input,
  GalleryGrid,
  PostCard,
  StudyModule,
  QuizQuestion,
  Crossword
} = DS;

// Lucide icon helper — re-runs createIcons after each render.
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: 'inline-flex',
      ...style
    }
  });
}
function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

/* ---------- Top updates ticker ----------
   Sits ABOVE the header as its own purple bar: an UPDATES pill, then one line
   of live announcement. Purple so it reads as a signal, never as an extension
   of the navy header beneath it. */
function UpdatesTicker({
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-updates)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '9px 32px',
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.18)',
      fontWeight: 600,
      fontSize: 10,
      lineHeight: 1.6,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Updates"), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.6,
      letterSpacing: '0.02em',
      color: '#EADFF3'
    }
  }, "Sai Youth Camp 2026 registration opens 20 August \u2014 limited seats"), /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss updates",
    style: {
      flexShrink: 0,
      background: 'none',
      border: 'none',
      color: 'rgba(255,255,255,0.75)',
      cursor: 'pointer',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  })));
}

/* ---------- Site wordmark ----------
   The site name is one word, "MySAIYa": Playfair 600 with SAI carried in the
   gold wordmark gradient. Never "MySAIYa Digital Hub" as a stacked lockup,
   never a plain white string. */
function Wordmark({
  size = 22
}) {
  const gold = {
    background: 'var(--gradient-gold-wordmark)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 1.8,
      height: size * 1.8,
      borderRadius: '50%',
      background: '#fff',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mysaiya-emblem.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '0.01em',
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, "My", /*#__PURE__*/React.createElement("span", {
    style: gold
  }, "SAI"), "Ya"));
}

/* ---------- Main header ----------
   One row, always: wordmark · nav · search · bell · avatar. Below 1100px the
   nav collapses into a hamburger so the row never wraps. */
function HubHeader({
  active = 'Home',
  onNav
}) {
  const links = ['Home', 'MySAIYa 101', 'In Action', 'Resources', 'Events'];
  const [narrow, setNarrow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 1100);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const navButton = l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => {
      onNav && onNav(l);
      setOpen(false);
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: active === l ? 700 : 500,
      color: '#fff',
      padding: narrow ? '11px 14px' : '8px 12px',
      position: 'relative',
      opacity: active === l ? 1 : 0.82,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-md)'
    }
  }, l, active === l && !narrow && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 2,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--gradient-gold)'
    }
  }));
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      color: '#fff',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '0 32px'
    }
  }, narrow && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open,
    style: {
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 22
  })), /*#__PURE__*/React.createElement(Wordmark, null), !narrow && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 2,
      marginLeft: 8
    },
    "aria-label": "Main navigation"
  }, links.map(navButton)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), !narrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff',
      color: 'var(--gray-500)',
      borderRadius: 'var(--radius-pill)',
      padding: '0 14px',
      height: 42,
      width: 260,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--gray-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      flex: 1
    }
  }, "Search the Hub"), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontSize: 11,
      color: 'var(--navy-900)',
      background: 'var(--gray-100)',
      borderRadius: 4,
      padding: '2px 6px'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifications",
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      background: 'var(--red-500)',
      color: '#fff',
      fontSize: 9,
      fontWeight: 700,
      borderRadius: '50%',
      width: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "3")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'var(--gradient-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      color: 'var(--navy-900)',
      fontFamily: 'var(--font-ui)'
    }
  }, "K")), narrow && open && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main navigation",
    style: {
      background: 'var(--navy-800)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '10px 24px 16px'
    }
  }, links.map(navButton)));
}

/* ---------- Hero welcome ---------- */
function HeroWelcome() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-3xl)',
      padding: '56px 40px',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
      backgroundImage: 'linear-gradient(90deg, rgba(10,30,62,0.94) 0%, rgba(13,47,92,0.6) 100%), url(../../assets/photo-youth-group.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      background: 'var(--gradient-hero-stroke-ii)'
    }
  }), /*#__PURE__*/React.createElement(Chip, {
    tone: "navy",
    style: {
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-clock",
    size: 14
  }), " Week 4 \u2022 Solar Dynasty"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.1,
      margin: '0 0 12px',
      maxWidth: 720
    }
  }, "Om Sai Ram, Kanichelvan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 18,
      lineHeight: 1.6,
      opacity: 0.9,
      maxWidth: 560,
      margin: '0 0 28px'
    }
  }, "Your journey continues. Three reflections this week, one chapter from the Book Club, and a new badge waiting to be unlocked."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    uppercase: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Continue Journey")));
}

/* ---------- Feature grid ----------
   Five tiles maximum, gradients assigned by slot (1–5) in layout order — never
   by module, so any module can sit in any slot. */
function FeatureGrid({
  onOpen
}) {
  const feats = [{
    key: 'play-it',
    icon: 'dice-5',
    eyebrow: 'Interactive games',
    title: 'Play It',
    description: 'Quizzes, crosswords and puzzles that grow your wisdom.'
  }, {
    key: 'book-club',
    icon: 'book-open',
    eyebrow: 'Ramakatha 2026',
    title: 'Book Club',
    description: 'The national reading journey, one chapter a week.'
  }, {
    key: 'journal',
    icon: 'feather',
    eyebrow: 'My journal',
    title: 'Reflections',
    description: 'Record and revisit your sadhana privately.'
  }, {
    key: 'gallery',
    icon: 'images',
    eyebrow: 'In action',
    title: 'Gallery',
    description: 'Photos from centres and camps across Malaysia.'
  }, {
    key: 'events',
    icon: 'calendar-days',
    eyebrow: 'Upcoming',
    title: 'Events',
    description: 'The national spiritual calendar in one place.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, feats.map((f, i) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: f.key,
    gradient: i + 1,
    eyebrow: f.eyebrow,
    title: f.title,
    description: f.description,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: f.icon,
      size: 24,
      color: "#fff"
    }),
    onClick: () => onOpen && onOpen(f.key)
  })));
}

/* ---------- Progress / streak panel ---------- */
function ProgressPanel() {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--navy-900)'
    }
  }, "Your progress"), /*#__PURE__*/React.createElement(Chip, {
    tone: "level",
    level: 5
  }, "Level 5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "flame",
    tint: "var(--orange-500)",
    value: "12",
    label: "Day streak"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "coins",
    tint: "var(--gold-600)",
    value: "340",
    label: "Points"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "trophy",
    tint: "var(--purple-700)",
    value: "8",
    label: "Badges"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--gray-500)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Next milestone"), /*#__PURE__*/React.createElement("span", null, "340 / 500")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gray-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '68%',
      height: '100%',
      background: 'var(--gradient-level-5)'
    }
  }))), /*#__PURE__*/React.createElement(Alert, {
    severity: "achievement",
    title: "Almost there"
  }, "160 points to unlock the Seva Star badge."));
}
function Stat({
  icon,
  tint,
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--off-white)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: tint
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--navy-900)',
      lineHeight: 1.1,
      marginTop: 4
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--gray-500)'
    }
  }, label));
}

/* ---------- Quote slider (auto-rotating crossfade) ---------- */
function QuoteSlider() {
  const quotes = ['Love all, serve all.', 'Help ever, hurt never.', 'Start the day with love. Fill the day with love. End the day with love.', 'Hands that help are holier than lips that pray.', 'The end of wisdom is freedom. The end of education is character.'];
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI(x => (x + 1) % quotes.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    index: i + 1,
    quote: quotes[i],
    emblem: "../../assets/mysaiya-emblem.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CircleBtn, {
    icon: "heart"
  }), /*#__PURE__*/React.createElement(CircleBtn, {
    icon: "share-2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 14
    }
  }, quotes.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-label": `Quote ${k + 1}`,
    onClick: () => setI(k),
    style: {
      width: k === i ? 24 : 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: k === i ? 'var(--gold-500)' : 'var(--gray-300)',
      transition: 'all var(--duration-standard) var(--ease-out)'
    }
  }))));
}
function CircleBtn({
  icon
}) {
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": icon,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(6px)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }));
}

/* ---------- Screen chrome ---------- */
function ScreenHeader({
  onBack,
  eyebrow,
  title,
  chips = null
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      alignSelf: 'flex-start',
      background: 'none',
      border: 'none',
      color: 'var(--navy-700)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), " Back to Home"), /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: eyebrow,
    title: title
  }), chips && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, chips));
}

/* ---------- Play It: quiz + crossword ---------- */
function PlayItScreen({
  onBack
}) {
  const [tab, setTab] = React.useState('quiz');
  const [result, setResult] = React.useState(null);
  const entries = [{
    answer: 'SATHYA',
    clue: 'Truth — the first of the five human values',
    row: 0,
    col: 0,
    dir: 'across'
  }, {
    answer: 'PREMA',
    clue: 'Love, the value that flows from truth',
    row: 3,
    col: 2,
    dir: 'across'
  }, {
    answer: 'ATMA',
    clue: 'The indwelling self',
    row: 5,
    col: 5,
    dir: 'across'
  }, {
    answer: 'AUM',
    clue: 'The primordial sound',
    row: 6,
    col: 2,
    dir: 'across'
  }, {
    answer: 'SEVA',
    clue: 'Selfless service',
    row: 0,
    col: 0,
    dir: 'down'
  }, {
    answer: 'AHIMSA',
    clue: 'Non-violence in thought, word and deed',
    row: 0,
    col: 5,
    dir: 'down'
  }, {
    answer: 'PUJA',
    clue: 'Ritual worship at the shrine',
    row: 3,
    col: 2,
    dir: 'down'
  }];
  const Tab = ({
    id,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab(id),
    style: {
      background: tab === id ? 'var(--navy-900)' : 'transparent',
      color: tab === id ? '#fff' : 'var(--text-body)',
      border: tab === id ? 'none' : '1px solid var(--gray-300)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 18px',
      minHeight: 40,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    onBack: onBack,
    eyebrow: "Play It",
    title: "Life is a game \u2014 play it",
    chips: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chip, {
      tone: "level",
      level: 1
    }, "Level 1"), /*#__PURE__*/React.createElement(Chip, {
      tone: "gold"
    }, "340 points"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    id: "quiz",
    label: "Weekly quiz"
  }), /*#__PURE__*/React.createElement(Tab, {
    id: "crossword",
    label: "Crossword"
  })), tab === 'quiz' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(QuizQuestion, {
    index: 3,
    total: 12,
    question: "Which of the five human values means \u201CTruth\u201D?",
    options: ['Prema (Love)', 'Sathya (Truth)', 'Dharma (Right Conduct)', 'Shanti (Peace)'],
    correct: 1,
    explanation: "Sathya is truth \u2014 the value Swami placed first, because the other four rest on it.",
    onAnswer: (i, ok) => setResult(ok)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    uppercase: true,
    disabled: result === null,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Next"))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Crossword, {
    title: "Week 4 \xB7 Five human values",
    entries: entries
  })));
}

/* ---------- Gallery screen ---------- */
function GalleryScreen({
  onBack
}) {
  const items = [{
    src: '../../assets/photo-youth-group.jpg',
    caption: 'National Sai Youth Camp 2026',
    meta: 'Kuala Lumpur · 14 Mar',
    category: 'Events'
  }, {
    src: '../../assets/photo-service.jpg',
    caption: 'Klang Valley Seva Saturday',
    meta: 'Selangor · 22 Feb',
    category: 'Seva'
  }, {
    src: '../../assets/sai-portrait-1.png',
    caption: 'Bhajan evening, Petaling Jaya',
    meta: '08 Feb',
    category: 'Bhajan'
  }, {
    src: '../../assets/sai-portrait-2.png',
    caption: 'Study circle, Penang',
    meta: '30 Jan',
    category: 'Study'
  }, {
    src: '../../assets/sai-portrait-3.png',
    caption: 'Ladies wing offering',
    meta: '19 Jan',
    category: 'Seva'
  }, {
    src: '../../assets/sai-illustration.png',
    caption: 'Aradhana Mahotsavam',
    meta: '24 Apr',
    category: 'Festival'
  }, {
    src: '../../assets/sample-quote-card.png',
    caption: 'Thought of the day, week 4',
    meta: '02 Feb',
    category: 'Wisdom'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    onBack: onBack,
    eyebrow: "In action",
    title: "Gallery",
    chips: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chip, {
      tone: "navy"
    }, "All"), /*#__PURE__*/React.createElement(Chip, {
      tone: "teal"
    }, "Seva"), /*#__PURE__*/React.createElement(Chip, {
      tone: "purple"
    }, "Bhajan"), /*#__PURE__*/React.createElement(Chip, {
      tone: "orange"
    }, "Events"))
  }), /*#__PURE__*/React.createElement(GalleryGrid, {
    items: items,
    columns: 4,
    featured: true
  }));
}

/* ---------- Blog / reflections screen ---------- */
function BlogScreen({
  onBack
}) {
  const posts = [{
    category: 'Reflections',
    title: 'What a week of silence taught me about listening',
    excerpt: 'Three days into the retreat I stopped rehearsing my answers. What came next surprised me more than anything I had planned to say.',
    author: 'Anand Kumaran',
    date: '4 Aug 2026',
    readTime: '6 min read',
    cover: '../../assets/photo-youth-group.jpg'
  }, {
    category: 'Seva',
    title: 'Feeding 400 in Sentul: how the Saturday kitchen runs',
    excerpt: 'A look inside the rota, the shopping list and the volunteers who show up before sunrise every week.',
    author: 'Devi Rajan',
    date: '28 Jul 2026',
    readTime: '4 min read',
    cover: '../../assets/photo-service.jpg'
  }, {
    category: 'Study',
    title: 'Ramakatha Rasavahini, week 4: the exile begins',
    excerpt: 'Notes from the national reading circle, with the three questions our group could not agree on.',
    author: 'Book Club',
    date: '21 Jul 2026',
    readTime: '8 min read',
    cover: '../../assets/sai-portrait-2.png'
  }, {
    category: 'Bhajan',
    title: 'Learning this month\u2019s bhajan, line by line',
    excerpt: 'A slow walkthrough of the raga, the meaning of each line, and where most of us go wrong on the third repetition.',
    author: 'Music wing',
    date: '14 Jul 2026',
    readTime: '5 min read',
    cover: '../../assets/sai-portrait-1.png'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    onBack: onBack,
    eyebrow: "Journal",
    title: "Reflections from the community"
  }), /*#__PURE__*/React.createElement(PostCard, _extends({
    layout: "feature"
  }, posts[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, posts.slice(1).map(p => /*#__PURE__*/React.createElement(PostCard, _extends({
    key: p.title
  }, p)))));
}

/* ---------- Book Club / study screen ---------- */
function StudyScreen({
  onBack
}) {
  const modules = [{
    gradient: 2,
    module: 'Module 3 · Book Club',
    title: 'Ramakatha Rasavahini',
    description: 'The national reading journey. One chapter a week, with a reflection prompt at the end of each module.',
    lessons: [{
      title: 'Who was Ramakatha written for?',
      state: 'done',
      duration: '8 min'
    }, {
      title: 'The kingdom of Ayodhya',
      state: 'done',
      duration: '12 min'
    }, {
      title: 'The exile begins',
      state: 'current',
      duration: '14 min'
    }, {
      title: 'Bharata returns',
      state: 'todo',
      duration: '11 min'
    }, {
      title: 'Week 4 reflection',
      state: 'locked',
      duration: '5 min'
    }]
  }, {
    gradient: 3,
    module: 'Module 1 · MySAIYa 101',
    title: 'The five human values',
    description: 'Where Sathya, Dharma, Shanti, Prema and Ahimsa come from, and how they hold each other up.',
    lessons: [{
      title: 'Sathya — truth',
      state: 'done',
      duration: '9 min'
    }, {
      title: 'Dharma — right conduct',
      state: 'current',
      duration: '10 min'
    }, {
      title: 'Shanti — peace',
      state: 'todo',
      duration: '9 min'
    }, {
      title: 'Prema — love',
      state: 'locked',
      duration: '11 min'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    onBack: onBack,
    eyebrow: "Learn",
    title: "Your study modules",
    chips: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chip, {
      tone: "teal"
    }, "2 in progress"), /*#__PURE__*/React.createElement(Chip, {
      tone: "gold"
    }, "1 certificate"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24,
      alignItems: 'start'
    }
  }, modules.map(m => /*#__PURE__*/React.createElement(StudyModule, _extends({
    key: m.title
  }, m, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      shape: "pill",
      style: {
        width: '100%'
      }
    }, "Continue")
  })))));
}

/* ---------- Home screen ---------- */
function HomeScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(HeroWelcome, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Explore",
    title: "Jump back in"
  }), /*#__PURE__*/React.createElement(FeatureGrid, {
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement(ProgressPanel, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "This week's wisdom",
    title: "Sai quotes for reflection"
  }), /*#__PURE__*/React.createElement(QuoteSlider, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "In action",
    title: "From centres across Malaysia"
  }), /*#__PURE__*/React.createElement(GalleryGrid, {
    columns: 4,
    items: [{
      src: '../../assets/photo-youth-group.jpg',
      caption: 'National Sai Youth Camp 2026',
      meta: 'Kuala Lumpur · 14 Mar',
      category: 'Events'
    }, {
      src: '../../assets/photo-service.jpg',
      caption: 'Klang Valley Seva Saturday',
      meta: 'Selangor · 22 Feb',
      category: 'Seva'
    }, {
      src: '../../assets/sai-portrait-1.png',
      caption: 'Bhajan evening, Petaling Jaya',
      meta: '08 Feb',
      category: 'Bhajan'
    }, {
      src: '../../assets/sai-portrait-2.png',
      caption: 'Study circle, Penang',
      meta: '30 Jan',
      category: 'Study'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Journal",
    title: "Latest reflections"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PostCard, {
    category: "Reflections",
    title: "What a week of silence taught me about listening",
    excerpt: "Three days into the retreat I stopped rehearsing my answers.",
    author: "Anand Kumaran",
    date: "4 Aug 2026",
    readTime: "6 min read",
    cover: "../../assets/photo-youth-group.jpg"
  }), /*#__PURE__*/React.createElement(PostCard, {
    category: "Seva",
    title: "Feeding 400 in Sentul: how the Saturday kitchen runs",
    excerpt: "Inside the rota, the shopping list and the volunteers who show up before sunrise.",
    author: "Devi Rajan",
    date: "28 Jul 2026",
    readTime: "4 min read",
    cover: "../../assets/photo-service.jpg"
  }), /*#__PURE__*/React.createElement(PostCard, {
    category: "Study",
    title: "Ramakatha Rasavahini, week 4: the exile begins",
    excerpt: "Notes from the national reading circle, with three questions we could not agree on.",
    author: "Book Club",
    date: "21 Jul 2026",
    readTime: "8 min read",
    cover: "../../assets/sai-portrait-2.png"
  }))), /*#__PURE__*/React.createElement(DevotionalBanner, null));
}

/* ---------- Devotional "His Message" banner ---------- */
function DevotionalBanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-3xl)',
      background: 'var(--navy-900)',
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      alignItems: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      marginBottom: 12
    }
  }, "His message"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 1.4,
      color: '#fff',
      margin: '0 0 18px',
      maxWidth: 540
    }
  }, "\u201CLess luggage, more comfort makes travel a pleasure. Our desires are our luggage.\u201D"), /*#__PURE__*/React.createElement("cite", {
    style: {
      fontFamily: 'var(--font-signature)',
      fontStyle: 'normal',
      fontSize: 38,
      lineHeight: 1,
      background: 'var(--gradient-gold-metallic)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'block'
    }
  }, "\u2014 Baba")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      backgroundImage: 'url(../../assets/sai-portrait-3.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      minHeight: 280
    }
  }));
}
function SectionTitle({
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--navy-900)',
      margin: '4px 0 0'
    }
  }, title));
}

/* ---------- App shell ---------- */
const routes = {
  'play-it': 'play',
  gallery: 'gallery',
  journal: 'blog',
  'book-club': 'study',
  events: 'gallery'
};
function HubApp() {
  const [screen, setScreen] = React.useState('home');
  const home = () => setScreen('home');
  useLucide([screen]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--off-white)'
    }
  }, /*#__PURE__*/React.createElement(UpdatesTicker, null), /*#__PURE__*/React.createElement(HubHeader, {
    active: screen === 'home' ? 'Home' : 'In Action',
    onNav: l => setScreen(l === 'In Action' ? 'gallery' : l === 'Resources' ? 'study' : 'home')
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px 32px 80px'
    }
  }, screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onOpen: f => setScreen(routes[f] || 'home')
  }), screen === 'play' && /*#__PURE__*/React.createElement(PlayItScreen, {
    onBack: home
  }), screen === 'gallery' && /*#__PURE__*/React.createElement(GalleryScreen, {
    onBack: home
  }), screen === 'blog' && /*#__PURE__*/React.createElement(BlogScreen, {
    onBack: home
  }), screen === 'study' && /*#__PURE__*/React.createElement(StudyScreen, {
    onBack: home
  })));
}
window.HubApp = HubApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/digital-hub/hub-screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PostCard = __ds_scope.PostCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Crossword = __ds_scope.Crossword;

__ds_ns.QuizQuestion = __ds_scope.QuizQuestion;

__ds_ns.StudyModule = __ds_scope.StudyModule;

__ds_ns.GalleryGrid = __ds_scope.GalleryGrid;

__ds_ns.BottomTabBar = __ds_scope.BottomTabBar;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.ActionBar = __ds_scope.ActionBar;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.BackLink = __ds_scope.BackLink;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.LoadMore = __ds_scope.LoadMore;

__ds_ns.PrevNext = __ds_scope.PrevNext;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.FilterPills = __ds_scope.FilterPills;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CATEGORIES = __ds_scope.CATEGORIES;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

})();
