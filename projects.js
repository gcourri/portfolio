/* =====================================================================
   MY WORK — project list.   EDIT THIS FILE to add / change projects.
   ---------------------------------------------------------------------
   Two lists:  OPEN_WORK (free to watch)  and  CLIENT_WORK (key-locked).
   Each project:
     id      unique slug (letters/numbers/dashes)
     title   shown on the cover + lightbox
     cover   path to the cover image/gif (e.g. 'uploads/gd/xxx-cover.gif')
     videos  list of video paths. FIRST = main, the rest = bonus.
             leave [] if there is no playable video yet.
     locked  true  -> hidden behind the key (client / NDA work)
             false -> plays for everyone
     desc    one-line description (lightbox)
     meta    small print: year · role · tools  (use ' · ' between parts)
   To add a project: copy a block, change the fields, done.
   To reorder: move the block up or down in its list.
   ===================================================================== */

window.GC_PROJECTS = {
  open: [
  {
    id:       'pd-ultrarem',
    title:    'ULTRA REM',
    cover:    'uploads/pd/ultrarem-cover.gif',
    videos:   [],
    locked:   false,
    desc:     'My master graduation film — a bold audiovisual identity blending 3D and design into a single high-energy statement piece.',
    meta:     '2022 · Master graduation · Concept, Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'pd-grasse',
    title:    'LA GRASSE MATINÉE',
    cover:    'uploads/pd/grasse-cover.gif',
    videos:   [],
    locked:   false,
    desc:     'My bachelor graduation film — a personal narrative motion piece, concept to final animation.',
    meta:     '2020 · Bachelor graduation · Concept, Design, Animation · AE · C4D',
  },
  {
    id:       'pd-culturebox',
    title:    'CULTUREBOX',
    cover:    'uploads/pd/culturebox-cover.gif',
    videos:   ['uploads/pd/culturebox-1.mp4', 'uploads/pd/culturebox-2.mp4', 'uploads/pd/culturebox-3.mp4'],
    locked:   false,
    desc:     'A self-initiated ident system for Culturebox — three looping variations (flowers, cube, bubblegum) exploring texture, colour and rhythm.',
    meta:     '2022 · Personal · Concept, Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'pd-m6',
    title:    'M6 CINÉMA',
    cover:    'uploads/pd/m6-cover.gif',
    videos:   ['uploads/pd/m6-1.mp4'],
    locked:   false,
    desc:     'A spec title design for M6 Cinéma — a cinematic opener where light and type set the mood before a film even starts.',
    meta:     '2022 · Personal · Concept, Design, Animation · AE · C4D',
  },
  {
    id:       'pd-christmas',
    title:    'MERRY CHRISTMAS',
    cover:    'uploads/pd/christmas-cover.gif',
    videos:   ['uploads/pd/christmas-1.mp4'],
    locked:   false,
    desc:     'A personal end-of-year piece — a warm, playful take on the holiday season, made for the joy of animating.',
    meta:     '2023 · Personal · Concept, Design, Animation · AE · C4D · Redshift',
  },
  ],
  client: [
  {
    id:       'gd-tf1',
    title:    'STUDIO TF1 — TITLES',
    cover:    'uploads/gd/tf1-cover.gif',
    videos:   [],
    locked:   true,
    desc:     'Title sequence for the production house Studio TF1.',
    meta:     '2025 · Concept, Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'gd-tv5',
    title:    'TV5 MONDE — REBRAND',
    cover:    'uploads/gd/tv5-cover.gif',
    videos:   [],
    locked:   true,
    desc:     'TV5 Monde\'s 2025 rebrand, built on the idea of weaving — the channel that ties French culture to the rest of the world.',
    meta:     '2025 · Animation systems, modules, idents · AE · Cavalry',
  },
  {
    id:       'gd-identf4',
    title:    'FRANCE 4 — CHRISTMAS IDENTS',
    cover:    'uploads/gd/identf4-cover.gif',
    videos:   ['uploads/gd/identf4-1.mp4', 'uploads/gd/identf4-2.mp4', 'uploads/gd/identf4-3.mp4'],
    locked:   true,
    desc:     'Winter-holiday idents for France 4 — one recognisable motion signature across every seasonal variant.',
    meta:     '2025 · Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'gd-biscuit',
    title:    'ARTE — BISCUIT IDENT',
    cover:    'uploads/gd/biscuit-cover.gif',
    videos:   ['uploads/gd/biscuit-1.mp4'],
    locked:   true,
    desc:     'Winter-holiday idents for ARTE, built around a warm handcrafted biscuit world.',
    meta:     '2026 · Concept, Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'gd-fall',
    title:    'ARTE — FALL IDENT',
    cover:    'uploads/gd/fall-cover.gif',
    videos:   ['uploads/gd/fall-1.mp4', 'uploads/gd/fall-2.mp4'],
    locked:   true,
    desc:     'Seasonal idents for ARTE — characters carrying the season across the screen.',
    meta:     '2026 · Concept, Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'gd-antena3',
    title:    'ANTENA 3 — NEWS BRANDING',
    cover:    'uploads/gd/antena3-cover.gif',
    videos:   ['uploads/gd/antena3-1.mp4'],
    locked:   true,
    desc:     'Branding for the flagship news programme of Antena 3, Spain\'s leading news channel.',
    meta:     '2025 · Concept, Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'gd-election',
    title:    'FRANCE TV — ELECTIONS',
    cover:    'uploads/gd/election-cover.gif',
    videos:   ['uploads/gd/election-2.mp4'],
    locked:   true,
    desc:     'Title package for France Télévisions\' presidential-election coverage.',
    meta:     '2026 · Concept, Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'gd-gent18',
    title:    'T18 — SHOW OPENERS',
    cover:    'uploads/gd/gent18-cover.gif',
    videos:   ['uploads/gd/gent18-1.mp4', 'uploads/gd/gent18-2.mp4', 'uploads/gd/gent18-3.mp4'],
    locked:   true,
    desc:     'Show-opener titles for the T18 channel branding, one per programme genre.',
    meta:     '2025 · Design, Animation · AE',
  },
  {
    id:       'gd-bumper',
    title:    'T18 — LOGO BUMPER',
    cover:    'uploads/gd/bumper-cover.gif',
    videos:   ['uploads/gd/bumper-1.mp4', 'uploads/gd/bumper-2.mp4', 'uploads/gd/bumper-3.mp4'],
    locked:   true,
    desc:     'Logo-sting bumpers for the T18 channel branding.',
    meta:     '2025 · Animation · AE',
  },
  {
    id:       'gd-jinglet18',
    title:    'T18 — 1-YEAR JINGLE',
    cover:    'uploads/gd/jinglet18-cover.gif',
    videos:   ['uploads/gd/jinglet18-1.mp4', 'uploads/gd/jinglet18-2.mp4'],
    locked:   true,
    desc:     'Anniversary jingle animations marking T18\'s first year on air.',
    meta:     '2026 · Design, Animation · AE',
  },
  {
    id:       'gd-tv5j',
    title:    'TV5 MONDE — AD JINGLES',
    cover:    'uploads/gd/tv5j-cover.gif',
    videos:   ['uploads/gd/tv5j-1.mp4', 'uploads/gd/tv5j-2.mp4'],
    locked:   true,
    desc:     'Ad-break jingles for TV5 Monde\'s 2025 rebrand.',
    meta:     '2025 · Animation systems · AE · Cavalry',
  },
  {
    id:       'gd-rtl',
    title:    'RTL — CANNES LIONS',
    cover:    'uploads/gd/rtl-cover.gif',
    videos:   ['uploads/gd/rtl-1.mp4', 'uploads/gd/rtl-2.mp4'],
    locked:   true,
    desc:     'Animation loops for RTL Beach at the 2024 Cannes Lions.',
    meta:     '2024 · Design, Animation · AE · C4D · Redshift',
  },
  {
    id:       'gd-aeroport',
    title:    'PARIS-CDG — EXPLAINER',
    cover:    'uploads/gd/aeroport-cover.gif',
    videos:   ['uploads/gd/aeroport-1.mp4'],
    locked:   true,
    desc:     'Concept and animation of an explainer film introducing new passenger tools at Paris-CDG airport.',
    meta:     '2026 · Concept, Design, Animation · AE',
  },
  {
    id:       'gd-newsletter',
    title:    'GEDEON — NEWSLETTERS',
    cover:    'uploads/gd/newsletter-cover.gif',
    videos:   ['uploads/gd/newsletter-1.mp4'],
    locked:   true,
    desc:     'Motion design for Gedeon\'s studio newsletters.',
    meta:     '2026 · Design, Animation · AE',
  },
  {
    id:       'gd-babytv',
    title:    'BABYTV — IDENT',
    cover:    'uploads/gd/babytv-cover.gif',
    videos:   ['uploads/gd/babytv-1.mp4'],
    locked:   true,
    desc:     'Design and rebranding proposal for BabyTV\'s channel idents.',
    meta:     '2026 · Animation · AE',
  },
  ],
};
