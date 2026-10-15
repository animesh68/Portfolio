export interface Project {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  fullSummary: string
  repoUrl: string
  liveUrl?: string
  docsUrl?: string
  technologies: string[]
  keyFeatures: string[]
  metrics?: { label: string; value: string }[]
  architectureDiagram?: string
  screenshots: { url: string; caption: string }[]
  highlights: string[]
  featured: boolean
}

export interface OpenSourceContribution {
  id: string
  project: string
  repo: string
  headline: string
  impact: string
  prUrl?: string
  commitHash?: string
  tags: string[]
  category: 'core-fix' | 'memory-leak' | 'tooling' | 'docs'
}

export interface CassetteTape {
  id: string
  number: string
  title: string
  artist: string
  mood: string
  quote: string
  palette: {
    bg: string
    accent: string
    spool: string
    label: string
    text: string
    glow: string
  }
  trackId: string
  spotifyUrl: string
  embedUrl: string
  durationStr: string
}

export interface SkillCategory {
  title: string
  iconName: string
  skills: string[]
}

export interface DreamPhoto {
  id: string
  number: string
  title: string
  location: string
  timestamp: string
  url: string
  alt: string
  mood: string
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Animesh Srivastava',
    domain: 'animesh.space',
    role: 'Computer Science Undergraduate & Systems Engineer',
    headline: 'I build systems that turn complexity into clarity.',
    supportingLine: 'Backend engineering, AI systems, and open-source experiments — built somewhere between sunset and midnight.',
    summary: 'Computer Science undergraduate focused on backend engineering, AI/ML systems, and open-source software, with contributions merged into projects including TensorFlow, bpftrace, and CyberChef. Experienced in building production-oriented APIs, retrieval systems, data pipelines, and full-stack applications.',
    personalTouch: 'Outside the code, you\'ll probably find me listening to music, reading, or getting distracted by a particularly good sky.',
    location: 'Ghaziabad, India',
    email: 'animeshyt68@gmail.com',
    github: 'https://github.com/animesh68',
    linkedin: 'https://www.linkedin.com/in/animesh-srivastava-52856a329/',
    resumePdf: '/Animesh_Srivastava_Resume.pdf',
    education: {
      degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)',
      institution: 'KIET Group of Institutions, Ghaziabad',
      period: '2024 – 2028',
      cgpa: '7.96 / 10',
      secondary: {
        school: 'Oxford Public School, Gorakhpur',
        period: '2022 – 2024',
        details: 'Class XII (CBSE) — 87.8%'
      }
    }
  },

  theme: {
    colors: {
      skyBlue: '#A8C9F0',
      sakuraPink: '#F6A5C4',
      sunsetOrange: '#FF8A55',
      lavenderDusk: '#B8A8E8',
      warmCream: '#FFF6EE',
      dustyRose: '#D982A5',
      twilightNavy: '#29263D',
      deepNight: '#171725'
    }
  },

  featuredProjects: [
    {
      id: 'lakers-in-5',
      title: 'Lakers in 5',
      category: 'Machine Learning',
      tagline: 'Production-grade NBA forecasting pipeline exploring historical performance and engineered features.',
      description: 'An end-to-end NBA forecasting pipeline exploring historical performance, engineered features, and careful model evaluation.',
      fullSummary: 'Lakers in 5 is a production-oriented NBA prediction system and MLOps platform engineered to forecast upcoming Los Angeles Lakers games. Built with strict temporal leakage prevention, train/serve feature parity, automated outcome logging, Population Stability Index (PSI) data drift monitoring, and retraining governance.',
      repoUrl: 'https://github.com/animesh68/Lakers-in-5',
      technologies: ['Python', 'DuckDB', 'PostgreSQL', 'MLflow', 'FastAPI'],
      metrics: [
        { label: 'Historical Scope', value: '1946–2026' },
        { label: 'Feature Matrix', value: '73,279 × 61' },
        { label: 'Validation Strategy', value: '10-Fold Walk-Forward' },
        { label: 'Automated Tests', value: '65 Passing' }
      ],
      keyFeatures: [
        'DuckDB & Parquet Analytical Lakehouse for high-performance vectorized feature transformations across decades of game logs.',
        'Leakage-safe feature engineering computing rolling team form (L5, L10), chronological pregame Elo ratings, schedule density, and canonical pregame player rotation aggregates.',
        '10-fold walk-forward time-series cross validation across 2015–2025 seasons preventing future-data contamination.',
        'Production FastAPI serving engine with deterministic SHA-256 feature snapshot hashing for reproducible inferences.',
        'Automated outcome settlement service paired with a PSI drift monitoring engine and Streamlit health dashboard.'
      ],
      highlights: [
        'Strict temporal boundary enforcement eliminating lookahead bias',
        'Dual champion architecture: Logistic Regression (win probability) and Ridge Regression (point spread)',
        'Fully containerized multi-container Docker Compose production stack'
      ],
      screenshots: [
        { url: '/assets/projects/lakersIn5.png', caption: 'Lakers in 5 Pre-Game Inference Engine and Matchup Dashboard' },
        { url: '/assets/projects/lakers-logo.png', caption: 'Lakers in 5 Architectural Identity & Brand' }
      ],
      featured: true
    },
    {
      id: 'crt-archaeologist',
      title: 'CRT — AI Internet Archaeologist',
      category: 'AI Research',
      tagline: 'Connects historical claims with supporting evidence, uncovers missing context, and builds grounded timelines.',
      description: 'An AI research system that connects historical claims with supporting evidence, uncovers missing context, and builds grounded timelines from web sources.',
      fullSummary: 'CRT is an AI Internet Archaeologist engineered to excavate, normalize, and temporally reconstruct historical lineages, technical evolutions, and verifiable claim provenance from raw, unstructured web documents. Combines hybrid lexical/dense retrieval, cross-encoder reranking, and epistemic verification.',
      repoUrl: 'https://github.com/animesh68/CRT',
      technologies: ['Python', 'FastAPI', 'PostgreSQL/pgvector', 'NLP', 'hybrid retrieval'],
      metrics: [
        { label: 'Regression Tests', value: '41 Passed (100%)' },
        { label: 'RRF Hyperparameter', value: 'k = 60' },
        { label: 'Cross-Encoder', value: 'TinyBERT-L-2' },
        { label: 'Claim Classifications', value: '6 Rigorous States' }
      ],
      keyFeatures: [
        'Subject Resolution & Polysemy Disambiguation resolving ambiguous entities into canonical typed candidates.',
        'Multi-stage Hybrid Retrieval: True Reciprocal Rank Fusion (RRF, k=60) combining BM25Okapi sparse lexical search and dense transformer embeddings.',
        'Neural Cross-Encoder reranking using cross-encoder/ms-marco-TinyBERT-L-2-v2 with heuristic proximity fallback for fast, accurate text-pair scoring.',
        'Source Authority & Syndication Analyzer measuring 6-gram shingle overlap to penalize redundant wire network duplication.',
        'Multi-Source Claim Verification engine classifying statements into VERIFIED (>=2 independent sources), SUPPORTED, INFERRED, UNCERTAIN, or CONTRADICTED.',
        'Active iterative temporal research loop detecting historical coverage gaps (> 3 years) and spawning bounded follow-up excavation queries.'
      ],
      highlights: [
        'Full step-by-step debug research telemetry trace for every historical excavation',
        'Dual vector store: zero-config NumPy-vectorized SQLite & production PostgreSQL + pgvector HNSW',
        'Distinctive Frutiger Aero + CRT Multiscan 2007 archaeological terminal UI'
      ],
      screenshots: [
        { url: '/assets/projects/crt-terminal.png', caption: 'Interactive Archaeological Terminal (CRT Multiscan 2007 Aesthetic)' },
        { url: '/assets/projects/crt-dossier.png', caption: 'Excavation Dossier: Grounding Quality Metrics, Claim Verification & Telemetry' },
        { url: '/assets/projects/crt-config.png', caption: 'CRT Display Configuration & Shading Matrix' }
      ],
      featured: true
    },
    {
      id: 'otoichi',
      title: 'Otoichi (音市)',
      category: 'Full-Stack Development',
      tagline: 'Full-stack vinyl marketplace with streaming previews, cache-aside Redis, and Stripe checkout.',
      description: 'A full-stack vinyl marketplace built around music discovery, secure checkout, and a complete shopping experience.',
      fullSummary: 'Otoichi (音市) is a full-stack ecommerce platform engineered for audiophiles and vinyl collectors. Features 30-second persistent audio previews, Goldmine grading, atomic MongoDB inventory operations to prevent overselling, and server-authoritative Stripe PaymentIntents.',
      repoUrl: 'https://github.com/animesh68/Otoichi',
      liveUrl: 'https://otoichi.vercel.app/',
      docsUrl: 'https://otoichi.onrender.com/docs',
      technologies: ['React', 'FastAPI', 'MongoDB', 'Redis', 'Stripe'],
      metrics: [
        { label: 'Pytest Suite', value: '50 Tests' },
        { label: 'Payment Pattern', value: 'Stripe Intents + HMAC' },
        { label: 'Inventory Safety', value: 'Atomic Conditional Ops' }
      ],
      keyFeatures: [
        'Server-authoritative checkout with Stripe PaymentIntents & HMAC-verified webhooks.',
        'Atomic conditional MongoDB operations ensuring concurrency-safe inventory and preventing overselling.',
        'Redis cache-aside architecture with graceful in-memory dictionary fallback.',
        'Persistent 30-second streamable audio preview player and Goldmine grading filter.'
      ],
      highlights: ['Live deployment on Vercel & Render', 'Comprehensive 50-test Pytest/HTTPX suite'],
      screenshots: [
        { url: '/assets/projects/otoichi-home.png', caption: 'Otoichi Vinyl Marketplace Hero & Crate Display' },
        { url: '/assets/projects/otoichi-browse.png', caption: 'Crate Browsing & Goldmine Grading Filters' },
        { url: '/assets/projects/otoichi-album.png', caption: 'Master Pressing Details & Tracklist' },
        { url: '/assets/projects/otoichi-preview.png', caption: 'Persistent Streamable Audio Preview Bar' }
      ],
      featured: true
    }
  ] as Project[],

  additionalProjects: [
    {
      id: 'fanns-research',
      title: 'Filtered ANN Research',
      category: 'Information Retrieval / Research',
      tagline: 'Academic-grade benchmarking framework evaluating retrieval trade-offs in filtered nearest-neighbor search.',
      description: 'Investigating the trade-offs between retrieval quality, filtering constraints, and search performance in approximate nearest-neighbor search.',
      fullSummary: 'An academic-grade, reproducible research and benchmarking framework for Filtered Approximate Nearest Neighbor Search (FANNS) on high-dimensional vector embeddings with metadata predicates. Evaluates 11 search strategies across Exact Match, continuous Range, and Set-containment filtering regimes.',
      repoUrl: 'https://github.com/animesh68/filtered_ann_arxiv_for_fanns_small',
      technologies: ['Python', 'HNSW', 'Slurm HPC', 'Slurm', 'NumPy', 'Vector Embeddings'],
      metrics: [
        { label: 'Controlled Queries', value: '16,500' },
        { label: 'Evaluated Strategies', value: '11 Implementations' },
        { label: 'PreFilter EM Recall@10', value: '1.0000 (6.92ms)' },
        { label: 'InGraph EM Recall@10', value: '0.9998 (4.95ms)' }
      ],
      keyFeatures: [
        'Controlled evaluation across 3 predicate modalities: Exact Match (EM), Range (R continuous timestamps), and Exact Match In Set (EMIS).',
        'Systematic comparison of 11 strategies: Exact Search ground truth, Inverted-Index Pre-Filtering, Naive HNSW Post-Filtering, HNSW Overfetching (2x–20x), In-Graph Filtered Traversal, and approximations of ACORN, SIEVE, and UNIFY.',
        'Nanosecond-precision timing harness measuring percentile latencies (p50, p95, p99), QPS throughput, and memory scaling.',
        'Demonstrated failure modes of naive post-filtering: recall collapses to 0.20–0.39 under restrictive selectivity regimes, whereas InGraph traversal maintains >0.994 recall at sub-7ms latency.'
      ],
      highlights: [
        'Empirical trade-off curves for Recall@10 vs. Selectivity & Latency',
        'Reproducible pipeline with automated figure generation (300 DPI)'
      ],
      screenshots: [
        { url: '/assets/projects/fanns-tradeoff.png', caption: 'Empirical Trade-off: Recall@10 vs. Latency Across 11 Filtering Strategies' },
        { url: '/assets/projects/fanns-selectivity.png', caption: 'Recall Degradation Curves Across Selectivity Strata' },
        { url: '/assets/projects/fanns-qps.png', caption: 'Throughput (QPS) Comparison Across Exact Match, Range, and EMIS Filters' }
      ],
      featured: false
    },
    {
      id: 'nocturne-ai',
      title: 'Nocturne.ai',
      category: 'Quantitative Research Platform',
      tagline: 'Market analytics, social sentiment ingestion, and AI-generated insights.',
      description: 'A quantitative research platform bringing together market analytics, social sentiment, and AI-generated insights.',
      fullSummary: 'Nocturne.ai (Nova) is a quantitative research platform combining financial market data with social sentiment extracted from Reddit financial communities. Integrates Gemini and Amazon Nova for ticker-level financial summaries and interactive dashboards.',
      repoUrl: 'https://github.com/animesh68/Nova',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Amazon Nova'],
      metrics: [
        { label: 'Ingestion Pipeline', value: 'Reddit Subreddits' },
        { label: 'AI Summaries', value: 'Gemini + Amazon Nova' },
        { label: 'Authentication', value: 'JWT + Bcrypt' }
      ],
      keyFeatures: [
        'Reddit ingestion pipeline extracting sentiment trends, mention velocity, and engagement scores.',
        'Authenticated REST API endpoints structured with modular service layers.',
        'Multi-model financial intelligence synthesizing ticker-level reports with Google Gemini and Amazon Nova.'
      ],
      highlights: ['Ticker-level sentiment tracking', 'Interactive financial intelligence dashboards'],
      screenshots: [
        { url: '/assets/projects/nocturne-ai.jpg', caption: 'Nocturne.ai Quantitative Research & Market Analytics Overview' }
      ],
      featured: false
    }
  ] as Project[],

  openSourceContributions: [
    {
      id: 'tensorflow',
      project: 'TensorFlow',
      repo: 'tensorflow/tensorflow',
      headline: 'Merged PR with reviewer approval & passing TAP tests in core runtime comments & documentation.',
      impact: 'Improved precision in core runtime documentation and comments, validating build pipelines across Google TAP test matrix.',
      commitHash: '56c4dc9956e',
      prUrl: 'https://github.com/tensorflow/tensorflow',
      tags: ['C++', 'Core Runtime', 'TAP CI'],
      category: 'tooling'
    },
    {
      id: 'bpftrace',
      project: 'bpftrace',
      repo: 'bpftrace/bpftrace',
      headline: 'Fixed incorrect func builtin resolution for session probe return and exit branches.',
      impact: 'Prevented invalid symbol address lookups during eBPF kernel tracing when unwinding probe exit points.',
      prUrl: 'https://github.com/bpftrace/bpftrace',
      tags: ['C++', 'eBPF', 'Linux Tracing'],
      category: 'core-fix'
    },
    {
      id: 'cyberchef',
      project: 'CyberChef',
      repo: 'gchq/CyberChef',
      headline: 'Landed 4 merged PRs: error handling, duplicate operation cleanup, async API docs, and HTML rendering.',
      impact: 'Resolved anchor tag target attributes in Markdown rendering (commit 346d314c), hardened error states, and documented async API invocation.',
      commitHash: '346d314c',
      prUrl: 'https://github.com/gchq/CyberChef',
      tags: ['JavaScript', 'Web Operations', 'Render Engine'],
      category: 'core-fix'
    },
    {
      id: 'openseadragon',
      project: 'OpenSeadragon',
      repo: 'openseadragon/openseadragon',
      headline: 'Resolved Object URL resource leak in ImageBitmap worker path — shipped in v6.1.1.',
      impact: 'Eliminated memory leakage during high-frequency deep-zoom tile rendering in Web Worker threads (fixes #2969, unit test #2970).',
      commitHash: 'eb963af7',
      prUrl: 'https://github.com/openseadragon/openseadragon',
      tags: ['JavaScript', 'Memory Leak', 'Web Workers', 'v6.1.1'],
      category: 'memory-leak'
    },
    {
      id: 'catboost',
      project: 'CatBoost',
      repo: 'catboost/catboost',
      headline: 'Eliminated JNI local reference leak in exception handling (RethrowExceptionFromJavaToCpp).',
      impact: 'Prevented JVM crashes from JNI local reference table exhaustion during exception transitions between Java and C++ (fixes #3190).',
      commitHash: 'ab4396c918',
      prUrl: 'https://github.com/catboost/catboost',
      tags: ['C++', 'Java/JNI', 'Core ML', 'Fix #3190'],
      category: 'memory-leak'
    },
    {
      id: 'refined-github',
      project: 'Refined GitHub',
      repo: 'refined-github/refined-github',
      headline: 'Fixed pr-from-branch selector bug breaking on forks with "Sync fork" button.',
      impact: 'Replaced brittle selector with an icon observer (commits d2fa165e, 0975e8b9) to ensure seamless branch navigation on upstream forks.',
      commitHash: 'd2fa165e',
      prUrl: 'https://github.com/refined-github/refined-github',
      tags: ['TypeScript', 'Browser Extension', 'DOM Observer'],
      category: 'tooling'
    },
    {
      id: 'newpipe',
      project: 'NewPipe',
      repo: 'TeamNewPipe/NewPipe',
      headline: 'Fixed intermittent IllegalStateException crash during ViewPager state restoration (#13740).',
      impact: 'Addressed fragment lifecycle synchronization bug during rapid activity orientation and state restoration.',
      prUrl: 'https://github.com/TeamNewPipe/NewPipe',
      tags: ['Java', 'Android', 'Lifecycle'],
      category: 'core-fix'
    }
  ] as OpenSourceContribution[],

  mixtape: {
    sectionName: 'mixtape.exe',
    subtitle: 'Six songs. Six little worlds. Pick a tape and stay a while.',
    tapes: [
      {
        id: 'tape-1',
        number: '01',
        title: 'SLOW DANCING IN THE DARK',
        artist: 'Joji',
        mood: 'the last song before you go home',
        quote: 'Give me reasons we should be complete...',
        durationStr: '3:29',
        trackId: '0rKtyWc8bvkriBthvHKY8d',
        spotifyUrl: 'https://open.spotify.com/track/0rKtyWc8bvkriBthvHKY8d',
        embedUrl: 'https://open.spotify.com/embed/track/0rKtyWc8bvkriBthvHKY8d?utm_source=generator&theme=0',
        palette: {
          bg: '#211d33',
          accent: '#B8A8E8',
          spool: '#373252',
          label: '#2d2845',
          text: '#F6A5C4',
          glow: 'rgba(184, 168, 232, 0.45)'
        }
      },
      {
        id: 'tape-2',
        number: '02',
        title: 'Reminder',
        artist: 'The Weeknd',
        mood: 'city lights after dark',
        quote: 'Every time you try to forget who I am...',
        durationStr: '3:38',
        trackId: '4zHa39io9pjsiAE6LwM2NH',
        spotifyUrl: 'https://open.spotify.com/track/4zHa39io9pjsiAE6LwM2NH',
        embedUrl: 'https://open.spotify.com/embed/track/4zHa39io9pjsiAE6LwM2NH?utm_source=generator&theme=0',
        palette: {
          bg: '#1b1c2b',
          accent: '#FF8A55',
          spool: '#2c2940',
          label: '#242337',
          text: '#D982A5',
          glow: 'rgba(255, 138, 85, 0.45)'
        }
      },
      {
        id: 'tape-3',
        number: '03',
        title: 'Lemon Tree',
        artist: "Fool's Garden",
        mood: 'a strangely sunny afternoon',
        quote: 'I\'m sitting here in a boring room...',
        durationStr: '3:11',
        trackId: '1yr9HpAu3prvxmq783ZELn',
        spotifyUrl: 'https://open.spotify.com/track/1yr9HpAu3prvxmq783ZELn',
        embedUrl: 'https://open.spotify.com/embed/track/1yr9HpAu3prvxmq783ZELn?utm_source=generator&theme=0',
        palette: {
          bg: '#1d2729',
          accent: '#A8C9F0',
          spool: '#283c3e',
          label: '#203436',
          text: '#FFE382',
          glow: 'rgba(168, 201, 240, 0.45)'
        }
      },
      {
        id: 'tape-4',
        number: '04',
        title: 'Come On Eileen',
        artist: 'Dexys Midnight Runners',
        mood: 'the song playing while everyone gets ready',
        quote: 'Poor old Johnny Ray sounded sad upon the radio...',
        durationStr: '4:47',
        trackId: '3MrWxJaD2AT0W9DjWF64Vm',
        spotifyUrl: 'https://open.spotify.com/track/3MrWxJaD2AT0W9DjWF64Vm',
        embedUrl: 'https://open.spotify.com/embed/track/3MrWxJaD2AT0W9DjWF64Vm?utm_source=generator&theme=0',
        palette: {
          bg: '#2b211d',
          accent: '#FF8A55',
          spool: '#403028',
          label: '#382820',
          text: '#FFF6EE',
          glow: 'rgba(255, 138, 85, 0.5)'
        }
      },
      {
        id: 'tape-5',
        number: '05',
        title: 'About You',
        artist: 'The 1975',
        mood: 'the memory you can\'t quite shake',
        quote: 'Do you think I have forgotten? About you...',
        durationStr: '5:26',
        trackId: '3hEfpBHxgieRLz4t3kLNEg',
        spotifyUrl: 'https://open.spotify.com/track/3hEfpBHxgieRLz4t3kLNEg',
        embedUrl: 'https://open.spotify.com/embed/track/3hEfpBHxgieRLz4t3kLNEg?utm_source=generator&theme=0',
        palette: {
          bg: '#261e30',
          accent: '#F6A5C4',
          spool: '#3a2d48',
          label: '#322540',
          text: '#A8C9F0',
          glow: 'rgba(246, 165, 196, 0.5)'
        }
      },
      {
        id: 'tape-6',
        number: '06',
        title: 'Tum Se Hi',
        artist: 'Mohit Chauhan',
        mood: 'warm evening breeze & raindrops',
        quote: 'Aadha sa vaada kabhi, aadhe se zyaada kabhi...',
        durationStr: '5:21',
        trackId: '7eQl3Yqv35ioqUfveKHitE',
        spotifyUrl: 'https://open.spotify.com/track/7eQl3Yqv35ioqUfveKHitE',
        embedUrl: 'https://open.spotify.com/embed/track/7eQl3Yqv35ioqUfveKHitE?utm_source=generator&theme=0',
        palette: {
          bg: '#1b2230',
          accent: '#A8C9F0',
          spool: '#2d3b52',
          label: '#222d40',
          text: '#B8A8E8',
          glow: 'rgba(168, 201, 240, 0.45)'
        }
      }
    ] as CassetteTape[]
  },

  camera: {
    heading: 'Little moments, kept forever.',
    subheading: 'Somewhere between a photograph and a feeling.',
    photos: [
      {
        id: 'photo-1',
        number: '01',
        title: 'Late Night Convenience',
        location: 'Parking Lot Dusk',
        timestamp: '08:14 PM',
        url: '/assets/shopping-cart-twilight.jpg',
        alt: 'Liminal convenience store and empty shopping cart under purple-pink sunset clouds',
        mood: 'twilight glow & distant traffic'
      },
      {
        id: 'photo-2',
        number: '02',
        title: 'Towering Gold',
        location: 'Perimeter Chain-Link',
        timestamp: '06:42 PM',
        url: '/assets/golden-clouds-fence.jpg',
        alt: 'Golden clouds glowing behind a chain-link fence at dusk',
        mood: 'ordinary places, extraordinary skies'
      },
      {
        id: 'photo-3',
        number: '03',
        title: 'Overhead Wires & Twilight',
        location: 'Neighborhood Crossing',
        timestamp: '07:05 PM',
        url: '/assets/utility-poles-sunset.jpg',
        alt: 'Utility poles and overhead wires silhouetted against a pink-blue twilight sky',
        mood: 'built somewhere between sunset and midnight'
      },
      {
        id: 'photo-4',
        number: '04',
        title: 'The Train Across the Water',
        location: 'Coastal Horizon',
        timestamp: '06:18 PM',
        url: '/assets/anime-countryside-landscape.jpg',
        alt: 'Train tracks over coastal water under soft pastel sunset clouds',
        mood: 'a little piece of the internet we never quite forgot'
      },
      {
        id: 'photo-5',
        number: '05',
        title: 'Soft Horizon',
        location: 'Infinite Dusk',
        timestamp: '07:30 PM',
        url: '/assets/pastel-dreamcore-horizon.jpg',
        alt: 'Dreamcore pastel pink and lavender clouds over quiet horizon',
        mood: 'pastel skies & quiet memories'
      }
    ] as DreamPhoto[]
  },

  skills: [
    {
      title: 'Languages',
      iconName: 'Code',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL']
    },
    {
      title: 'Backend Systems',
      iconName: 'Server',
      skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC']
    },
    {
      title: 'AI & Information Retrieval',
      iconName: 'Cpu',
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'NLP', 'Vector Embeddings', 'Hybrid Retrieval (BM25 + Dense)', 'Cross-Encoder Reranking']
    },
    {
      title: 'Databases & Storage',
      iconName: 'Database',
      skills: ['PostgreSQL / pgvector', 'MongoDB Atlas', 'Redis', 'MySQL', 'DuckDB & Parquet']
    },
    {
      title: 'Frontend & UI',
      iconName: 'Layout',
      skills: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'React Router']
    },
    {
      title: 'DevOps & Cloud',
      iconName: 'Cloud',
      skills: ['AWS', 'Docker', 'Git', 'GitHub Actions', 'Vercel']
    },
    {
      title: 'Engineering Tools & Testing',
      iconName: 'Terminal',
      skills: ['Linux', 'GitHub', 'MLflow', 'Pytest / HTTPX', 'Swagger / OpenAPI']
    }
  ] as SkillCategory[],

  achievements: [
    {
      title: 'Data Structures & Algorithms',
      description: 'Solved 200+ DSA problems across LeetCode and GeeksforGeeks.'
    },
    {
      title: 'Public Speaking & Debate',
      description: 'Earned Best Delegate awards across multiple Model United Nations (MUN) conferences.'
    }
  ],

  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      badge: 'AWS Certified'
    },
    {
      name: 'Machine Learning',
      issuer: 'Infosys Springboard',
      badge: 'ML Specialization'
    }
  ]
}
