=============================================
PATH: C:\Users\anime\Desktop\work\CRT\README.md
# CRT — AI Internet Archaeologist

[![Build & Tests](https://img.shields.io/badge/pytest-41%20passed%20(100%25)-emerald.svg)](backend/tests/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688.svg)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-19.0-61DAFB.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

> **Autonomous Historical Reconstruction, Multi-Source Evidence Grounding, True Hybrid Retrieval & Knowledge Graph Platform.**

CRT is an **AI Internet Archaeologist** engineered to excavate, normalize, and temporally reconstruct historical lineages, technical evolutions, causal events, and verifiable claim provenance from raw, unstructured web documents.

---

## 🖥️ User Interface & Archaeological Terminal

### 1. Interactive Excavation Terminal (Frutiger Aero + CRT Multiscan 2007)
![CRT Archaeological Terminal](ui_ss/terminal.png)

### 2. Excavation Dossier, Grounding Quality & Telemetry Dashboard
![CRT Excavation Dossier](ui_ss/dossier.png)

### 3. CRT & Display Configuration Matrix
![CRT Display Settings Matrix](ui_ss/crt_config.png)

---

## 🏛️ System Architecture

```mermaid
flowchart TD
    Query([User Query / Target URL]) --> SubjRes[Subject Resolver & Polysemy Disambiguation]
    SubjRes --> QPlan[Subject-Conditioned Query Planner]
    
    subgraph Active Research Loop [Active Iterative Research Loop]
        QPlan --> Disc[Discovery & Crawler Ingestion]
        Disc --> SourceAnalyzer[Source Authority & Syndication Analyzer]
        SourceAnalyzer --> Chunker[Heading-Preserving Structural Chunker]
        Chunker --> Embed[Dense Transformer Embeddings]
        Embed --> VStore[(Vector Store: PGVector / SQLite)]
        
        subgraph Hybrid Retrieval [Multi-Stage Hybrid Retrieval Stack]
            Lexical[BM25Okapi Sparse Lexical Search]
            Dense[Vector Top-K Nearest Neighbor]
            Lexical --> RRF[True Reciprocal Rank Fusion RRF]
            Dense --> RRF
            RRF --> SubjGate[Subject Relevance Gate]
            SubjGate --> CrossEnc[Neural Cross-Encoder Reranker]
        end
        
        CrossEnc --> Extractor[Span-Preserving Multi-Word NER]
        Extractor --> Resolver[Entity Canonicalizer & Alias Clusterer]
        Resolver --> Props[Proposition Extractor SPO Triples]
        Props --> Verifier[Multi-Source Claim Verifier]
        Verifier --> Timeline[Chronological Timeline Builder]
        Timeline --> GapDetect{Temporal Gaps > 3 yrs?}
        
        GapDetect -- Yes & Iteration < Max --> TargetedQ[Targeted Temporal Gap Era Queries]
        TargetedQ --> Disc
    end
    
    GapDetect -- No or Stopping Criteria Met --> Graph[Knowledge Graph Builder & Pruning Service]
    Graph --> Synth[Grounded Report Synthesizer & Quality Metrics]
    Synth --> Dossier([Archaeological Dossier, Trace & UI])
```

---

## ⚡ Core Engineering Capabilities

### 1. Subject Resolution & Polysemy Disambiguation
- Resolves ambiguous polysemous queries (e.g. `mercury`, `python`, `apple`, `the office`, `lord of the rings`) into explicit candidate interpretations with canonical naming, category typing, and aliases.
- Generates subject-type-conditioned query templates with exact phrase quotation (e.g. `"The Lord of the Rings" history timeline overview`).

### 2. Multi-Provider Semantic Embeddings
Modular provider hierarchy (`app.services.nlp.embedding`):
- **`LocalTransformerEmbeddingProvider`**: Local CPU transformer (`all-MiniLM-L6-v2`, 384 dimensions, L2 unit-normalized).
- **`GeminiEmbeddingProvider`**: Remote Google Gemini (`text-embedding-004`).
- **`OpenAIEmbeddingProvider`**: Remote OpenAI (`text-embedding-3-small`).
- **`LexicalHashEmbeddingProvider`**: Deterministic subword/n-gram hash projection baseline.

### 3. Modular Vector Store
- **`SQLiteVectorStore`**: Zero-config local batch matrix dot product search ($Q \cdot C^T$) with NumPy vectorization.
- **`PGVectorStore`**: Production PostgreSQL + `pgvector` HNSW cosine distance search (`<=>` operator).

### 4. True Reciprocal Rank Fusion & Neural Cross-Encoder
- **True Rank-Based RRF**:
  $$RRF(d) = \sum_{m \in \{\text{dense}, \text{lexical}\}} \frac{w_m}{k + \text{rank}_m(d)} \quad (k=60)$$
- **Cross-Encoder Reranker**: Transformer-based cross-encoder (`cross-encoder/ms-marco-TinyBERT-L-2-v2`) scoring query-chunk text pairs with batch inference, backed by heuristic proximity fallback.

### 5. Source Authority, Independence & Syndication Detection
- Classifies sources into `PRIMARY_SOURCE`, `INDEPENDENT_REPORT`, `SECONDARY_REPORT`, `SYNDICATED_CONTENT`, and `COMMUNITY_FORUM`.
- Analyzes 6-gram shingle overlap to identify wire syndication networks and penalize redundant copies.
- Separates dimensions: `subject_relevance`, `source_authority`, `source_independence`, `evidence_quality`.

### 6. Multi-Source Claim Verification Engine
Distinguishes *Evidence Presence* from *Fact Verification*:
- **`VERIFIED`**: Confirmed by $\ge 2$ independent authoritative sources, or 1 primary source.
- **`SUPPORTED`**: Corroborated by credible secondary reporting.
- **`INFERRED`**: Deductive inference derived from chronological event progression.
- **`UNCERTAIN`**: Only community discussion or low-authority source.
- **`CONTRADICTED`**: Disputed with conflicting evidence statements.
- **`INSUFFICIENT_EVIDENCE`**: No valid corroborating evidence.

### 7. Active Iterative Temporal Research Loop
- Identifies evidence-sparse historical periods (> 3 years gap) and actively spawns secondary discovery iterations.
- Enforces strict stopping criteria:
  1. No temporal gaps $> 3$ years.
  2. No high-value unverified entities.
  3. Source budget limit reached ($N \le 30$).
  4. Max iterations reached ($I \le 3$).
  5. Diminishing returns (0 new sources).

### 8. Full Debug Research Telemetry Trace
Every excavation records full step-by-step telemetry:
- Raw query $\to$ Canonical Subject $\to$ Query Plan $\to$ Lexical & Dense Rankings $\to$ RRF Scores $\to$ Cross-Encoder Scores $\to$ Source Syndication Lineage $\to$ Claim Verification Matrix $\to$ Graph Noise Metrics.

---

## 🛠️ Quickstart & Development

### Backend Setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Or .\.venv\Scripts\Activate on Windows
pip install -r requirements.txt

# Run full test suite (41 tests)
pytest -o pythonpath=.

# Run dev server
python -m uvicorn main:app --reload --port 8000
```

### Frontend Setup
```bash
cd frontend
npm install
npm run build
npm run dev
```

---

## 🔬 Regression Benchmark Suite

The regression test suite (`backend/tests/test_retrieval_and_verification.py`, `backend/tests/test_grounding_resolution.py`, `backend/tests/test_graph_pruning.py`) validates:
- `lord of the rings`: Canonical resolution to *The Lord of the Rings*, rejection of *Lord of Mann* and *of the manor*, exact quote proposition extraction.
- `mercury`, `python`, `apple`: Polysemy ambiguity exposure without collapsed context.
- `minecraft`, `pewdiepie`: Chronological milestones, acquisition claim multi-source verification.
- True RRF rank-based mathematics.
- Wire syndication detection across duplicate text.
- Knowledge graph pruning ($\le 100$ nodes, $\le 200$ edges, radial stability).

=============================================
PATH: C:\Users\anime\Desktop\work\Lakers in 5\README.md
# Lakers in 5

> **"Lakers in 5"** is a production-oriented NBA prediction system and MLOps platform engineered to forecast upcoming Los Angeles Lakers games with strict temporal leakage prevention, train/serve feature parity, automated outcome logging, data drift monitoring, and retraining governance.

---

## 1. System Architecture

```text
RAW HISTORICAL NBA DATA (1946–2026)
                ↓
    DuckDB / Parquet Analytical Lakehouse (data/processed/parquet/)
                ↓
    Leakage-Safe Feature Engineering (src/features/)
    ├── Rolling Team Form & Efficiency (L5, L10)
    ├── Chronological Pregame Elo Ratings
    ├── Schedule Density & Rest Days
    └── Canonical Pregame Player Rotation Aggregates
                ↓
    Time-Series Walk-Forward Cross-Validation (10 Folds, 2015–2025)
                ↓
    Champion Production ML Models (models/)
    ├── Logistic Regression (Win Probability)
    └── Ridge Regression (Point Spread)
                ↓
    Production Inference & Feature Service (src/inference/)
    ├── Deterministic SHA-256 Feature Snapshot Hashing
    ├── 2026–27 Schedule & Offseason Roster Ingestion
    └── Fast Pre-Game Prediction Engine
                ↓
    ┌───────────────────────────┴───────────────────────────┐
    ▼                                                       ▼
FastAPI Serving API (src/inference/api.py)     Prediction Store (PostgreSQL / DuckDB)
    │                                                       │
    │                                       ┌───────────────┴───────────────┐
    │                                       ▼                               ▼
    │                            Outcome Settlement Service      Data Drift & PSI Engine
    │                            (src/monitoring/outcomes.py)    (src/monitoring/drift.py)
    │                                       │                               │
    └───────────────────────────────────────┼───────────────────────────────┘
                                            ▼
                                Streamlit MLOps Dashboard
                                  (src/dashboard/app.py)
                                            │
                                            ▼
                              Model Health & Retraining Governance
                                  (src/monitoring/health.py)
```

---

## 2. Directory Structure

```text
Lakers in 5/
│
├── data/
│   ├── raw/                  # Immutable original raw datasets (Games, Box scores, Logs)
│   ├── processed/parquet/    # Analytical Lakehouse (games, team stats, player stats)
│   ├── features/             # ML-ready feature matrices (73,279 rows x 61 cols)
│   ├── evaluation/           # Model validation predictions, calibration, importances
│   └── monitoring/           # Local persistent prediction store (fallback)
│
├── src/
│   ├── ingestion/            # Raw data loading, schema, and Lakehouse converters
│   ├── features/             # Leakage-safe feature pipelines (Elo, form, rotation)
│   ├── models/               # Model factories, preprocessing, evaluation metrics
│   ├── inference/            # Production prediction engine, schedule & roster services
│   ├── monitoring/           # Prediction repository, metrics, PSI drift, health diagnostics
│   ├── dashboard/            # Streamlit interactive UI application
│   └── utils/                # Database engine, connection pool, logging
│
├── models/                   # Serialized champion artifacts (.joblib)
├── tests/                    # 57 automated unit, parity, leakage, and monitoring tests
├── scripts/                  # Executable CLI tools
│   ├── build_features.py     # Feature dataset builder
│   ├── run_experiments.py    # Walk-forward cross-validation trainer
│   ├── predict_game.py       # Pre-game prediction CLI runner
│   ├── update_prediction_outcomes.py # Outcome settlement runner
│   └── run_dashboard.py      # Streamlit dashboard launcher
└── docs/                     # Full architecture & operational documentation
```

---

## 3. Quickstart & Operational Commands

### 3.1. Install Dependencies & Activate Environment
```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

### 3.2. Run Pre-Game Prediction (CLI)
```bash
# Predict next upcoming Lakers game
python scripts/predict_game.py --lakers-next

# Predict with persistent logging to database
python scripts/predict_game.py --lakers-next --persist

# Predict arbitrary matchup
python scripts/predict_game.py --home-team LAL --away-team GSW --date 2026-10-21 --persist
```

### 3.3. Launch FastAPI Prediction & Monitoring Server
```bash
uvicorn src.inference.api:app --host 0.0.0.0 --port 8000 --reload
```
- Interactive Swagger UI: `http://localhost:8000/docs`

### 3.4. Launch Streamlit Monitoring Dashboard
```bash
python scripts/run_dashboard.py
# or: streamlit run src/dashboard/app.py
```

### 3.5. Sync Completed Game Outcomes
```bash
python scripts/update_prediction_outcomes.py
```

### 3.6. Run with Docker Compose (Production Stack)
```bash
# Set database environment variable (optional, falls back to local Parquet)
export DATABASE_URL="postgresql://user:password@ep-cool-lake-12345.us-east-2.aws.neon.tech/neondb?sslmode=require"

# Build and start FastAPI and Streamlit dashboard
docker compose up -d --build

# Access services:
# - API & Healthcheck:  http://localhost:8000 (Docs: http://localhost:8000/docs)
# - Monitoring UI:      http://localhost:8501
```

### 3.7. Run Complete Test Suite
```bash
python -m pytest tests/ -v
# 65 passing tests covering integrity, parity, leakage, inference, monitoring, and containerization
```

---

## 4. Key Documentation Links
- [Feature Engineering & Leakage Guardrails](file:///docs/feature_engineering.md)
- [Model Experimentation & Validation Benchmarks](file:///docs/model_experimentation.md)
- [Production Inference Pipeline](file:///docs/production_inference.md)
- [Monitoring, Drift & Retraining Governance](file:///docs/monitoring.md)
- [Containerization & Deployment Guide](file:///docs/deployment.md)


=============================================
PATH: C:\Users\anime\Desktop\filtered-ann-research\README.md
# Filtered Approximate Nearest Neighbor Search (FANNS) Benchmark & Research Framework

An academic-grade, reproducible research and benchmarking pipeline for **Filtered Approximate Nearest Neighbor Search (FANNS)** on high-dimensional vector embeddings with metadata predicates.

---

## 📌 Project Overview & Research Goals
This repository investigates the empirical performance trade-offs between retrieval accuracy (Recall@K), query latency, throughput (QPS), and index memory across diverse metadata filtering regimes:
- **Exact Match (EM)** (Categorical point queries)
- **Range (R)** (Continuous interval filters on timestamps)
- **Exact Match In Set (EMIS)** (Set containment / categorical membership)

We systematically evaluate and compare 11 search strategies:
1. **Exact Filtered Search** (Mathematical ground-truth reference)
2. **Inverted-Index Pre-Filtering**
3. **Naive HNSW Post-Filtering**
4. **HNSW Overfetching (2x, 5x, 10x, 20x)**
5. **In-Graph Filtered Traversal**
6. **ACORN-style Filter Traversal** (*Paper-inspired approximation*)
7. **SIEVE-style Entry-Point Routing** (*Paper-inspired approximation*)
8. **UNIFY-style Selectivity-Adaptive Traversal** (*Paper-inspired approximation*)

---

## 📂 Repository Structure

```
filtered-ann-research/
├── data/
│   └── arxiv-for-fanns-small/             # Verified benchmark dataset
├── src/
│   ├── dataset_loader.py                   # Standardized fvecs/ivecs/JSONL loader
│   ├── filters.py                          # Predicates & Inverted Metadata Index
│   ├── exact_search.py                     # Ground-truth exact filtered searcher
│   ├── hnsw_index.py                       # Modular HNSW Graph Index with research hooks
│   ├── postfilter.py                       # Naive post-filtering strategy
│   ├── overfetch.py                        # Overfetching candidate multiplier strategy
│   ├── prefilter.py                        # Inverted-index pre-filtering strategy
│   ├── ingraph.py                          # In-graph traversal strategy
│   ├── filter_aware.py                     # ACORN, SIEVE, and UNIFY approximations
│   ├── metrics.py                          # Recall@K, percentile latencies, QPS, logging
│   └── timing.py                           # Nanosecond precision timing harness
├── experiments/
│   ├── 01_dataset_validation.py            # Dataset integrity & format verification
│   ├── 02_exact_search.py                  # Exact search ground-truth benchmark
│   ├── 03_hnsw_postfilter.py               # HNSW baseline & post-filtering
│   ├── 04_hnsw_overfetch.py                # Overfetching factor sweep
│   ├── 05_prefilter.py                     # Pre-filtering benchmark
│   ├── 06_ingraph.py                       # In-graph filtering benchmark
│   ├── 07_filter_aware_comparison.py       # ACORN, SIEVE, UNIFY benchmark
│   ├── 08_controlled_benchmark_all.py      # Comprehensive 16,500-query benchmark
│   └── 09_generate_plots_and_tables.py     # Publication figure generator
├── results/
│   ├── controlled_benchmark/
│   │   ├── all_queries_raw_results.csv     # Granular per-query logs (16,500 rows)
│   │   ├── benchmark_summary.csv           # Aggregated metrics table
│   │   └── stratified_selectivity_summary.csv
│   ├── exact_search/
│   ├── hnsw_postfilter/
│   ├── hnsw_overfetch/
│   ├── prefilter/
│   └── ingraph/
├── reports/
│   ├── research_progress_report.md         # Comprehensive 28-section research report
│   ├── experiment_log.md                   # Systematic experiment log
│   └── figures/                            # Publication-quality plots (PNG, 300 DPI)
│       ├── recall_vs_selectivity.png
│       ├── recall_vs_latency_tradeoff.png
│       └── qps_comparison.png
├── hpc/
│   ├── hpc_checklist.md                    # Supercomputer checklist & memory sizing
│   └── slurm_job_template.sh               # Slurm batch submission script
├── requirements.txt
└── README.md
```

---

## 🚀 Quickstart & Reproduction Guide

### 1. Environment Setup
```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
```

### 2. Verify Dataset
```bash
python experiments/01_dataset_validation.py
```

### 3. Run Full Controlled Comparative Benchmark
```bash
python experiments/08_controlled_benchmark_all.py
```

### 4. Generate Visualizations & Tables
```bash
python experiments/09_generate_plots_and_tables.py
```

---

## 📊 Key Experimental Findings

| Strategy | EM Recall@10 | EM Latency | Range Recall@10 | Range Latency | EMIS Recall@10 | EMIS Latency |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ExactSearch** | 1.0000 | 7.07 ms | 1.0000 | 8.30 ms | 1.0000 | 3.11 ms |
| **PreFilter** | **1.0000** | **6.92 ms** | **1.0000** | **8.20 ms** | **1.0000** | **3.15 ms** |
| **HNSW_PostFilter** | 0.2608 | 2.52 ms | 0.3952 | 2.64 ms | 0.2030 | 2.67 ms |
| **HNSW_Overfetch_5x** | 0.9550 | 2.52 ms | 0.8260 | 2.70 ms | 0.3705 | 2.64 ms |
| **HNSW_Overfetch_20x** | 0.9958 | 5.25 ms | 0.9710 | 5.11 ms | 0.6977 | 5.41 ms |
| **InGraphFilter** | **0.9998** | **4.95 ms** | **0.9984** | **4.64 ms** | **0.9940** | **6.97 ms** |
| **ACORN_Approx** | 0.9998 | 14.93 ms | 0.9998 | 14.13 ms | 0.9948 | 29.24 ms |
| **SIEVE_Approx** | 0.9998 | 5.02 ms | 0.9984 | 5.02 ms | 0.9942 | 6.92 ms |
| **UNIFY_Approx** | 0.9998 | 7.44 ms | 0.9986 | 7.46 ms | 0.9940 | 22.21 ms |

---

## 🖥️ Supercomputer / HPC Deployment
To scale experiments to 100K or 1M vectors on a high-performance computing cluster:
1. Review the [HPC Readiness Checklist](file:///c:/Users/anime/Desktop/filtered-ann-research/hpc/hpc_checklist.md).
2. Submit the Slurm batch script:
```bash
sbatch hpc/slurm_job_template.sh
```

---

## 📄 Documentation & Research Progress
- Detailed academic report: [`reports/research_progress_report.md`](file:///c:/Users/anime/Desktop/filtered-ann-research/reports/research_progress_report.md)
- Complete chronological experiment log: [`reports/experiment_log.md`](file:///c:/Users/anime/Desktop/filtered-ann-research/reports/experiment_log.md)

=============================================
PATH: C:\Users\anime\Desktop\work\Otoichi\README.md
# Otoichi (音市)

> A full-stack vinyl record marketplace engineered for music discovery, streaming audio previews, and idempotent Stripe payment fulfillment.

[![Live Demo](https://img.shields.io/badge/Live_Demo-otoichi.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://otoichi.vercel.app/)
[![API Docs](https://img.shields.io/badge/Swagger_Docs-otoichi.onrender.com-468B62?style=for-the-badge&logo=swagger&logoColor=white)](https://otoichi.onrender.com/docs)
[![GitHub](https://img.shields.io/badge/GitHub-animesh68%2FOtoichi-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/animesh68/Otoichi)

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Python](https://img.shields.io/badge/Python_3.12+-3776AB?style=flat-square&logo=python&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe_SDK-626CD9?style=flat-square&logo=stripe&logoColor=white)
![JWT](https://img.shields.io/badge/JWT_Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

---

### Quick Links
* **Live Web Application (Vercel)**: [https://otoichi.vercel.app/](https://otoichi.vercel.app/)
* **Interactive API Documentation (Swagger)**: [https://otoichi.onrender.com/docs](https://otoichi.onrender.com/docs)
* **Backend REST API (Render)**: [https://otoichi.onrender.com/api/v1](https://otoichi.onrender.com/api/v1)
* **GitHub Repository**: [https://github.com/animesh68/Otoichi](https://github.com/animesh68/Otoichi)

---

## Visual Showcase

### Marketplace Home & 3D Coverflow Hero
![Otoichi Home](./shot/home.png)

### Crate Browsing & Goldmine Grading
![Browse & Filters](./shot/browse.png)

### Master Pressing Details & Side A / Side B Tracklist
![Product Detail](./shot/shop_album.png)

### Persistent 30-Second Streamable Audio Preview
![Audio Player](./shot/track_preview.png)

---

## 1. Overview

**Otoichi (音市)** is a full-stack ecommerce marketplace designed for audiophiles and vinyl collectors. The platform bridges physical crate-digging aesthetics with modern, production-grade web architecture.

Key platform characteristics:
* **Rich Storefront & Audio Discovery**: 3D perspective Coverflow carousel, Goldmine standard grading inspection (Mint, Near Mint, Very Good Plus), vinyl variant badges (180g virgin vinyl, 45 RPM 7" singles, 12" LPs), and streamable 30-second audio previews synchronized with Spotify and Apple iTunes APIs.
* **Service-Oriented Backend**: Async FastAPI application backed by MongoDB Atlas and Beanie ODM, enforcing strict domain boundaries across authentication, catalog indexing, cart synchronization, coupon validation, inventory locks, and order management.
* **Authoritative Payment Architecture**: Official Stripe React Elements integration with server-authoritative price recalculations, PaymentIntent generation with idempotency keys, and asynchronous webhook-driven order fulfillment.

---

## 2. Engineering Highlights

* **Stripe Webhook as the Authoritative Fulfillment Engine**: Payments are never fulfilled directly from client-side state. The backend listens for `payment_intent.succeeded` events, verifies HMAC signatures using raw request payload bytes, deduplicates deliveries using a persistent `StripeWebhookEvent` collection, and commits inventory decrements idempotently.
* **Zero-Trust Pricing Calculation**: Subtotals, coupon discounts, and shipping tiers are calculated server-side from the active database. Client-sent prices and totals are discarded. Free shipping is automatically applied for orders exceeding `$100.00`, with unified flat-rate courier shipping applied otherwise.
* **Promotional Zero-Total Order Handling**: When promotional coupons yield a 100% discount, the system bypasses Stripe PaymentIntent creation entirely and routes through a dedicated `zero-total-order` transaction to prevent invalid `$0.00` payment charges.
* **Concurrency-Safe Inventory Management**: Stock decrements use MongoDB atomic conditional updates (`$gte`) to prevent race conditions and overselling during simultaneous checkout attempts. Cancelled orders automatically restore reserved quantities.
* **Clean State Separation**: Explicit separation between order lifecycle states (`pending`, `paid`, `processing`, `shipped`, `delivered`, `cancelled`, `refunded`) and payment provider states (`requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, `cancelled`, `refunded`, `partially_refunded`).
* **Dual-Source Music Metadata Ingestion**: Ingests master catalog metadata (album art, ISRCs, release years, tracklists) via the Spotify Web API (Client Credentials flow) and pairs each track with 30-second playable AAC preview streams from the Apple iTunes Search API.
* **Custom Themed Stripe Elements**: Embedded Stripe Payment Elements customized via Stripe's Appearance API to match Otoichi's dark lacquer (`#1C1814`), warm ivory (`#F3ECDD`), and brass (`#C89B3C`) design tokens.

---

## 3. System Architecture

```mermaid
flowchart TD
    subgraph Client ["Client Layer (React 19 + Vite)"]
        UI[Storefront UI]
        AudioCtx[AudioContext Preview Player]
        CartCtx[CartContext]
        StripeElem[Stripe Payment Element]
    end

    subgraph Gateway ["API & Router Layer (FastAPI)"]
        Router[REST API v1 Router]
        AuthMW[JWT Auth Middleware & RBAC]
        SigVerify[Stripe Signature Verification]
    end

    subgraph Services ["Service Layer"]
        AuthSvc[AuthService]
        CatalogSvc[Catalog & Sync Service]
        CartSvc[CartService]
        OrderSvc[OrderService]
        InvSvc[InventoryService]
        PaySvc[PaymentService]
        CouponSvc[CouponService]
    end

    subgraph Data ["Persistence (MongoDB Atlas / Beanie ODM)"]
        Users[(Users & Addresses)]
        CatalogDB[(Albums, Tracks, Artists)]
        ProductsDB[(Vinyl Products & Stock)]
        OrdersDB[(Orders & OrderItems)]
        WebhooksDB[(StripeWebhookEvents)]
    end

    subgraph External ["External Services"]
        Spotify[Spotify Web API]
        iTunes[Apple iTunes Search API]
        StripeAPI[Stripe Payment Gateway]
    end

    UI --> Router
    StripeElem --> StripeAPI
    Router --> AuthMW
    Router --> SigVerify
    AuthMW --> AuthSvc
    SigVerify --> PaySvc

    Router --> CatalogSvc
    Router --> CartSvc
    Router --> OrderSvc
    Router --> CouponSvc

    CatalogSvc --> Spotify
    CatalogSvc --> iTunes
    PaySvc --> StripeAPI

    OrderSvc --> InvSvc
    OrderSvc --> CouponSvc

    AuthSvc --> Users
    CatalogSvc --> CatalogDB
    InvSvc --> ProductsDB
    OrderSvc --> OrdersDB
    PaySvc --> WebhooksDB
```

---

## 4. Payment & Order Fulfillment Lifecycle

```mermaid
sequenceDiagram
    autonumber
    actor Customer
    participant Frontend as React Frontend
    participant Backend as FastAPI Server
    participant Stripe as Stripe Gateway
    participant Database as MongoDB Atlas

    Customer->>Frontend: Click "Proceed to Checkout"
    Frontend->>Backend: POST /api/v1/checkout/summary (Cart + Coupon)
    Backend->>Database: Query current product prices & stock availability
    Backend-->>Frontend: Authoritative Summary (Subtotal, Discount, Shipping, Total)
    
    Frontend->>Backend: POST /api/v1/checkout/create-intent
    Backend->>Database: Insert Pending Order (status='pending', payment_status='requires_payment_method')
    Backend->>Stripe: stripe.PaymentIntent.create(amount, currency, idempotency_key, metadata)
    Stripe-->>Backend: Return PaymentIntent (id, client_secret)
    Backend->>Database: Link stripe_payment_intent_id to Order
    Backend-->>Frontend: Return client_secret & authoritative totals
    
    Frontend->>Frontend: Mount Stripe Elements (<PaymentElement />)
    Customer->>Frontend: Enter Card Details & Submit Payment
    Frontend->>Stripe: stripe.confirmPayment({ elements, return_url })
    
    alt 3D Secure / SCA Required
        Stripe-->>Customer: Present 3DS Authentication Modal
        Customer->>Stripe: Complete Biometric / OTP Challenge
    end

    Stripe-->>Frontend: Payment status: 'succeeded' / 'processing'
    
    Note over Stripe,Backend: Asynchronous Authoritative Webhook
    Stripe->>Backend: POST /api/v1/webhooks/stripe (payment_intent.succeeded)
    Backend->>Backend: Verify Stripe signature using raw request bytes
    Backend->>Database: Check StripeWebhookEvent (deduplication check)
    
    alt Event Not Yet Processed
        Backend->>Database: Log event_id in StripeWebhookEvent
        Backend->>Database: Atomic conditional stock decrement (stock >= qty)
        Backend->>Database: Increment coupon usage counter
        Backend->>Database: Update Order (status='paid', payment_status='succeeded', paid_at=now)
        Backend->>Database: Clear User Cart
    end
    
    Backend-->>Stripe: HTTP 200 OK {"received": true}
    Frontend->>Customer: Navigate to /order-success (Display real Order Reference & Status)
```

---

## 5. Data Model

The domain layer is structured using Beanie Document models with indexes on queried and relational fields:

```mermaid
erDiagram
    USER ||--o{ ADDRESS : has
    USER ||--o{ ORDER : places
    USER ||--o{ CART_ITEM : owns
    USER ||--o{ REVIEW : writes
    USER ||--o{ WISHLIST : saves

    ARTIST ||--o{ ALBUM : creates
    ARTIST ||--o{ TRACK : performs
    ALBUM ||--o{ TRACK : contains
    ALBUM ||--o{ VINYL_PRODUCT : "pressed as"
    TRACK ||--o{ VINYL_PRODUCT : "pressed as (7-inch single)"

    ORDER ||--|{ ORDER_ITEM : includes
    VINYL_PRODUCT ||--o{ ORDER_ITEM : "purchased in"
    VINYL_PRODUCT ||--o{ CART_ITEM : "added to"
    COUPON ||--o{ ORDER : "applied to"

    USER {
        uuid id PK
        string email UK
        string hashed_password
        string full_name
        string role "customer | admin"
        datetime created_at
    }

    VINYL_PRODUCT {
        uuid id PK
        string product_type "album | single"
        uuid album_id FK
        uuid track_id FK
        string format "7-inch | 12-inch | LP | EP"
        string vinyl_variant "standard | colored | splatter"
        float price
        int stock_quantity
        string sku UK
    }

    ORDER {
        uuid id PK
        uuid user_id FK
        string status "pending | paid | processing | shipped | delivered | cancelled"
        string payment_status "requires_payment_method | processing | succeeded | failed"
        float subtotal_amount
        float shipping_amount
        float discount_amount
        float total_amount
        string stripe_payment_intent_id UK
        string checkout_id
        datetime paid_at
        datetime created_at
    }

    COUPON {
        uuid id PK
        string code UK
        string discount_type "percent | fixed"
        float value
        int usage_limit
        int times_used
        bool is_active
    }
```

---

## 6. API Overview

The backend exposes a fully typed RESTful API under the `/api/v1` prefix. Interactive Swagger UI is available at `/docs`.

| Module | Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- | :--- |
| **Authentication** | `POST` | `/api/v1/auth/register` | Create customer account | No |
| | `POST` | `/api/v1/auth/login` | Authenticate & retrieve JWT access token | No |
| | `POST` | `/api/v1/auth/refresh` | Rotate access token via refresh token | No |
| | `GET` | `/api/v1/auth/me` | Fetch authenticated user profile & addresses | Yes (Customer) |
| **Products & Catalog** | `GET` | `/api/v1/products/` | Filter products by genre, format, price, stock, query | No |
| | `GET` | `/api/v1/products/{id}` | Retrieve individual vinyl product details | No |
| | `GET` | `/api/v1/albums/` | List all curated vinyl albums | No |
| | `GET` | `/api/v1/albums/{id}` | Retrieve album tracklist & associated pressings | No |
| **Cart** | `GET` | `/api/v1/cart/` | Get active cart items and subtotal | Yes (Session/JWT) |
| | `POST` | `/api/v1/cart/items` | Add product to cart with quantity validation | Yes (Session/JWT) |
| | `PUT` | `/api/v1/cart/items/{id}`| Update cart item quantity | Yes (Session/JWT) |
| | `DELETE`| `/api/v1/cart/items/{id}`| Remove item from cart | Yes (Session/JWT) |
| **Checkout & Payments**| `POST` | `/api/v1/checkout/summary` | Get authoritative server pricing calculation | Yes (Customer) |
| | `POST` | `/api/v1/checkout/create-intent` | Initialize Stripe PaymentIntent & client secret | Yes (Customer) |
| | `POST` | `/api/v1/checkout/zero-total-order` | Complete 100% coupon promotional order | Yes (Customer) |
| | `POST` | `/api/v1/checkout/direct-order` | Internal direct order creation (test mode) | Yes (Customer) |
| **Webhooks** | `POST` | `/api/v1/webhooks/stripe` | Authoritative Stripe event handler (HMAC signature) | No (Stripe Sig) |
| **Orders** | `GET` | `/api/v1/orders/` | List customer order history | Yes (Customer) |
| | `GET` | `/api/v1/orders/{id}` | Get detailed order snapshot & items | Yes (Customer) |
| **Coupons & Promo** | `POST` | `/api/v1/coupons/validate` | Validate coupon code against cart subtotal | No |
| **Newsletter (Resend)**| `POST` | `/api/v1/newsletter/subscribe` | Subscribe email to weekly editorial dispatch | No |
| | `POST` | `/api/v1/newsletter/unsubscribe` | Secure one-click unsubscribe via signed token | No |
| | `POST` | `/api/v1/newsletter/trigger-weekly` | Idempotent Monday campaign scheduler job | Yes (`CRON_SECRET` / Admin) |
| **Admin** | `GET` | `/api/v1/admin/metrics` | System sales, revenue, and inventory analytics | Yes (Admin) |
| | `GET` | `/api/v1/admin/cache/metrics` | Real-time Redis/Memory cache telemetry & hit ratios | Yes (Admin) |
| | `POST` | `/api/v1/admin/cache/flush` | Invalidate all cached data on demand | Yes (Admin) |
| | `GET` | `/api/v1/admin/newsletter/metrics` | Newsletter subscribers & campaign analytics | Yes (Admin) |
| | `GET` | `/api/v1/admin/newsletter/subscribers` | Paginated subscriber management list | Yes (Admin) |
| | `GET` | `/api/v1/admin/newsletter/campaigns` | History of dispatched weekly issues | Yes (Admin) |
| | `PATCH` | `/api/v1/admin/orders/{id}/status`| Update order status with transition validation | Yes (Admin) |
| | `POST` | `/api/v1/admin/sync/spotify`| Trigger Spotify/iTunes metadata sync pipeline | Yes (Admin) |

---

## 7. Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 + Vite 8 | Single Page Application with client-side routing, route-level code splitting |
| **Frontend Routing** | React Router v7 | Dynamic product, category, cart, checkout, and unsubscribe routing |
| **Payment UI** | `@stripe/react-stripe-js` | Stripe Payment Elements with custom theme (lazy-loaded) |
| **Styling** | Vanilla CSS Design Tokens | HSL-tailored palette, brass accents, glassmorphism, responsive grid |
| **Icons & Visuals** | Lucide React + Canvas Confetti | Vector icons and interactive celebration feedback |
| **Backend Framework** | FastAPI (Python 3.12+) | Asynchronous ASGI REST API framework |
| **Database & ODM** | MongoDB Atlas + Beanie ODM | Document database with Motor async driver and batched subdocument resolution |
| **Caching Layer** | Upstash Redis + MemoryCache | Cache-aside architecture with deterministic keys, TTLs, targeted invalidation, and graceful offline fallback |
| **Authentication** | JWT (PyJWT) + Passlib (Bcrypt) | Short-lived access tokens (1h) + Refresh tokens (7d) |
| **Payment Gateway** | Stripe Python SDK | PaymentIntents, Webhook signature verification, SCA/3DS |
| **Email & Newsletter** | Resend API + Jinja/HTML | Editorial weekly dispatch ("Letters from the Listening Room"), tamper-proof signed unsubscribe tokens |
| **External APIs** | Spotify Web API + Apple iTunes API | Album art, track metadata, and 30-second audio stream ingestion with response caching |
| **Scheduler** | Vercel Cron / Serverless | Automated Monday 09:00 UTC dispatch with ISO week database-level idempotency |
| **Testing** | Pytest + `pytest-asyncio` + HTTPX | Automated test suite covering auth, cart, payments, webhooks, newsletter, cache (50 tests) |

---

## 8. Project Structure

```text
Otoichi/
├── app/
│   ├── main.py                     # FastAPI application factory, CORS, exception handlers
│   ├── core/
│   │   ├── config.py               # Pydantic BaseSettings environment configuration
│   │   ├── security.py             # Bcrypt hashing & PyJWT token management
│   │   ├── exceptions.py           # Domain exception classes & error schema handlers
│   │   └── dependencies.py         # DB session, auth providers (get_current_user, require_admin)
│   ├── db/
│   │   ├── mongo.py                # Motor client initialization & Beanie document registration
│   │   └── models/                 # Beanie documents (User, Order, VinylProduct, Album, Track, etc.)
│   ├── schemas/                    # Pydantic request validation and response DTO schemas
│   ├── services/                   # Encapsulated domain business logic:
│   │   ├── auth_service.py         # Registration, authentication, token rotation
│   │   ├── cart_service.py         # Authenticated & guest cart operations
│   │   ├── coupon_service.py       # Discount calculation & usage limits
│   │   ├── inventory_service.py    # Atomic stock decrement and cancellation restoration
│   │   ├── itunes_service.py       # Apple iTunes 30s preview retrieval
│   │   ├── order_service.py        # Order creation, authoritative pricing, state machine
│   │   ├── payment_service.py      # Stripe SDK client & webhook signature verification
│   │   ├── review_service.py       # Verified purchaser review enforcement
│   │   ├── spotify_service.py      # Spotify Web API client (Client Credentials)
│   │   └── sync_service.py         # Catalog sync coordinator
│   └── api/
│       └── v1/                     # Version 1 API route controllers
├── frontend/
│   ├── src/
│   │   ├── api/                    # API client layer & Stripe loader
│   │   ├── components/             # Reusable UI components (CoverflowHero, AudioPlayerBar, StripeCheckoutForm)
│   │   ├── context/                # React Contexts (AudioContext, CartContext, AuthContext)
│   │   ├── pages/                  # Route views (HomePage, BrowsePage, ProductDetailPage, CheckoutPage, etc.)
│   │   ├── utils/                  # Product display normalizers
│   │   ├── App.jsx                 # Application layout and global audio bar
│   │   └── index.css               # Global design tokens and animations
│   ├── package.json
│   └── vite.config.js
├── scripts/                        # Database seeding and metadata sync automation scripts
├── shot/                           # High-resolution application screenshots
├── tests/                          # Automated Pytest suite (34 test cases)
├── .env.example                    # Environment variable template
├── requirements.txt                # Python backend dependencies
└── README.md
```

---

## 9. Local Development Setup

### Prerequisites
* Python 3.12+
* Node.js 18+ and npm
* MongoDB Atlas instance or local MongoDB server (`mongodb://localhost:27017`)
* Stripe developer account (for test API keys)

---

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/animesh68/Otoichi.git
   cd Otoichi
   ```

2. **Create and activate a virtual environment**:
   ```bash
   # Windows:
   python -m venv .venv
   .venv\Scripts\activate

   # Linux / macOS:
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**:
   Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Fill in your `DATABASE_URL`, `JWT_SECRET`, and Stripe test credentials.

5. **Start the FastAPI server**:
   ```bash
   uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
   ```
   API docs will be live at: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install Node dependencies**:
   ```bash
   npm install
   ```

3. **Configure Frontend Environment Variables (Optional)**:
   Create `frontend/.env.local`:
   ```env
   VITE_API_BASE_URL=http://127.0.0.1:8000/api/v1
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
   ```

4. **Start the Vite development server**:
   ```bash
   npm run dev
   ```
   Frontend will be live at: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

---

## 10. Stripe Development & Webhook Setup

To test live asynchronous payment fulfillment locally:

1. Obtain your Stripe test keys (`pk_test_...` and `sk_test_...`) from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).
2. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli).
3. Authenticate the CLI:
   ```bash
   stripe login
   ```
4. Forward incoming webhook events to your local FastAPI backend:
   ```bash
   stripe listen --forward-to 127.0.0.1:8000/api/v1/webhooks/stripe
   ```
5. Copy the printed webhook signing secret (`whsec_...`) into your backend `.env`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
   ```
6. Trigger a test event:
   ```bash
   stripe trigger payment_intent.succeeded
   ```

---

---

## 12. Docker & Containerization

Otoichi is fully containerized with multi-stage Docker builds and Docker Compose orchestration.

### Quick Start with Docker Compose

Run the entire full-stack application (FastAPI backend, React/Vite Nginx frontend, MongoDB, and Redis) with a single command:

```bash
# Build and start all services in detached mode
docker compose up --build -d
```

### Services Overview

| Service | Container Name | Internal Port | Host Port | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Frontend** | `otoichi-frontend` | 80 | **3000** | React 19 + Vite SPA served via Nginx with API reverse proxy |
| **Backend** | `otoichi-backend` | 8000 | **8000** | FastAPI ASGI app with Uvicorn & Beanie ODM |
| **MongoDB** | `otoichi-mongo` | 27017 | **27017** | Document persistence with named volume `mongo_data` |
| **Redis** | `otoichi-redis` | 6379 | **6379** | Low-latency in-memory cache with named volume `redis_data` |

### Accessing Running Containers

* **Frontend Web App**: [http://localhost:3000](http://localhost:3000)
* **Backend API Docs (Swagger)**: [http://localhost:8000/docs](http://localhost:8000/docs)
* **API Healthcheck**: [http://localhost:8000/health](http://localhost:8000/health)

### Useful Docker Commands

```bash
# View real-time logs across all services
docker compose logs -f

# View backend logs only
docker compose logs -f backend

# Seed the database within the container
docker compose exec backend python -m scripts.seed

# Run backend test suite in container
docker compose exec backend pytest tests/ -v

# Stop all running containers
docker compose down

# Stop and remove all containers and volume data
docker compose down -v
```

---

## 12. Automated Testing

The backend includes a comprehensive test suite written with `pytest` and `pytest-asyncio` covering authentication, catalog N+1 batching, cart/checkout, Stripe webhooks, Resend newsletter, and Redis caching (50 passing tests).

```bash
# Run all test suites
pytest tests/ -v
```

### Test Coverage Highlights
* **Authentication**: Registration, duplicate email rejection, JWT creation, token refresh, admin RBAC guards.
* **Cart Operations**: Session carting, authenticated user cart persistence, stock limit boundary enforcement, guest-to-user cart merging.
* **Checkout & Pricing**: Authoritative price calculation, coupon discounts, free shipping thresholds, zero-total promotional order paths.
* **Stripe Webhooks & Idempotency**: Signature verification on raw payload bytes, duplicate event rejection (`already_processed`), stock decrementing on `payment_intent.succeeded`.
* **Inventory Consistency**: Concurrency-safe atomic decrements, oversell rejection (`InsufficientStockException`), inventory restoration on cancelled orders.
* **Integrations**: Spotify URI parsing, iTunes preview normalization, graceful fallback when metadata is partially missing.

---

## 12. Technical Challenges & Design Decisions

### 1. Payment-Inventory Race Conditions
* **Problem**: In conventional ecommerce architectures, deducting stock upon PaymentIntent creation causes abandoned carts to lock up inventory. Deducting stock only after payment confirmation risks overselling if stock depleted during customer 3DS verification.
* **Solution**: Otoichi validates stock availability before generating the Stripe PaymentIntent, but only commits the final atomic decrement upon verified receipt of the `payment_intent.succeeded` webhook. Furthermore, atomic conditional updates (`stock_quantity >= requested_quantity`) guarantee that multiple concurrent purchases cannot oversell a vinyl pressing.

### 2. Webhook Event Idempotency
* **Problem**: Stripe's webhook infrastructure guarantees at-least-once delivery. Network retries can result in duplicate webhook deliveries for the same payment intent.
* **Solution**: Inbound events are deduplicated against a persistent `StripeWebhookEvent` collection before execution. If an `event_id` was previously recorded, the server immediately acknowledges with `{"received": true, "status": "already_processed"}` without re-decrementing inventory or re-incrementing coupon counters.

### 3. Dual Catalog Synchronization & Audio Previews
* **Problem**: Spotify Web API provides rich album metadata but does not offer public 30-second audio stream URLs for non-authenticated web clients.
* **Solution**: A dual-provider pipeline was engineered: Spotify provides album artwork, tracklists, and canonical ISRC metadata, while the Apple iTunes Search API provides high-bitrate 30-second AAC preview streams.

---

## 13. Security Practices

* **No Plaintext Passwords**: Passwords are cryptographically salted and hashed using Bcrypt.
* **Zero Card Data on Application Servers**: Otoichi never accepts or logs raw card numbers, expiration dates, or CVC values. All payment credentials enter directly through iframe-isolated Stripe Elements.
* **HMAC Signature Verification**: Stripe webhook endpoints verify cryptographic signatures against `STRIPE_WEBHOOK_SECRET` before processing.
* **Role-Based Authorization**: Administrative endpoints (`/api/v1/admin/*`) require explicit JWT role validation (`role == "admin"`).
* **Sanitized Secrets**: `.env` and sensitive production credentials are strictly excluded from source control via `.gitignore`.

---

## 14. Future Roadmap

- [ ] Automated transactional email notifications (order receipt, shipment tracking number) via Resend / SendGrid.
- [ ] Integration with carrier shipping APIs (EasyPost / Shippo) for live real-time rate calculation and tracking label generation.
- [ ] Direct automated refund processing via Stripe Refund API triggered from the admin dashboard.
- [ ] User review photo uploads with cloud storage integration (AWS S3 / Cloudinary).
- [ ] High-fidelity audio waveforms for track previews using Web Audio API.

---

## 15. License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

