# ANIMESH.SPACE — Personal Portfolio

> **Y2K Dreamcore × Liminal Nostalgia × Moe Internet**  
> Complete personal engineering portfolio for **Animesh Srivastava**.

---

## 🌅 Vision & Aesthetic Concept

Ordinary places. Extraordinary skies. Little pieces of the internet we never quite forgot.
The site blends:
- **Liminal Nostalgia**: Real sunset photographs across supermarket parking lots, empty roads, streetlights, and powerlines.
- **Y2K Translucency**: Restrained glassmorphic panels, window chrome headers, retro terminal status reads, and tactile cassette reels.
- **Moe / Anime Warmth**: Subtle, tasteful Hitori Gotoh (*Bocchi the Rock!*) desk companion cameo.
- **Engineering Credibility**: Detailed case studies with verified architectures, metrics, and upstream open-source contributions.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Typography**: Google Fonts (*Sora*, *Inter*, *JetBrains Mono*, *VT323*)
- **Audio Synthesizer**: Web Audio API for tactile mechanical cassette latch clicks
- **Music Embed**: Official [Spotify Embed iFrame API](https://developer.spotify.com/documentation/embeds)

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── assets/
│   │   ├── parking-lot-sunset.jpg            # Reference A: Supermarket parking lot sunset
│   │   ├── shopping-cart-twilight.jpg        # Reference B: Shopping cart under pink clouds
│   │   ├── golden-clouds-fence.jpg           # Reference C: Clouds behind chain-link fence
│   │   ├── utility-poles-sunset.jpg          # Reference D: Japanese utility poles & sky
│   │   ├── anime-countryside-landscape.jpg   # Reference E: Anime countryside at sunset
│   │   ├── bocchi-peace.jpg                  # Hitori Gotoh cameo (peace)
│   │   ├── bocchi-hacker.jpg                 # Hitori Gotoh cameo (terminal mode)
│   │   └── projects/                         # Real project screenshots & benchmarks
│   ├── Animesh_Srivastava_Resume.pdf         # Verified resume PDF asset
│   └── favicon.svg                           # Custom sunset pixel favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                        # Floating glass navigation & drawer
│   │   ├── HeroScene.tsx                     # Cinematic opening scene
│   │   ├── ProjectSection.tsx                # Featured case studies & secondary grid
│   │   ├── ProjectCaseStudyModal.tsx         # Detailed architecture inspection modal
│   │   ├── OpenSourceSection.tsx             # Upstream contribution ledger
│   │   ├── MixtapeCorner.tsx                 # mixtape.exe 5-cassette deck & Spotify embed
│   │   ├── AboutSection.tsx                  # Biography, education, skills & Bocchi cameo
│   │   ├── ContactFooter.tsx                 # Twilight horizon, copyable email & links
│   │   ├── AmbientBackground.tsx             # Scanlines overlay toggle & image dividers
│   │   └── Icons.tsx                         # Crisp brand SVG icons
│   ├── data/
│   │   └── portfolio.ts                      # Centralized configuration data source
│   ├── utils/
│   │   └── audio.ts                          # Web Audio mechanical cassette click synthesizer
│   ├── App.tsx                               # Page assembly & section observer
│   ├── main.tsx                              # Application entry point
│   └── index.css                             # Design tokens, CRT scanlines & glass utilities
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Quickstart & Local Setup

### 1. Prerequisites
- Node.js `v18+` (Tested on `v24.18.0`)
- npm `v9+` (Tested on `v11.16.0`)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/animesh68/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 5. Lint & Type Check
```bash
npm run lint
```

---

## 🌐 Deployment to Vercel

The portfolio is preconfigured for zero-config deployment on [Vercel](https://vercel.com/):

```bash
# Using Vercel CLI
npx vercel --prod
```

Or connect the repository on the Vercel dashboard:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or newer

---

## 📼 mixtape.exe Tracklist

1. **Tape 01**: *SLOW DANCING IN THE DARK* — Joji (*"the last song before you go home"*)
2. **Tape 02**: *Reminder* — The Weeknd (*"city lights after dark"*)
3. **Tape 03**: *Lemon Tree* — Fool's Garden (*"a strangely sunny afternoon"*)
4. **Tape 04**: *Come On Eileen* — Dexys Midnight Runners (*"the song playing while everyone gets ready"*)
5. **Tape 05**: *About You* — The 1975 (*"the memory you can't quite shake"*)

---

## 📜 License

Created with care by **Animesh Srivastava**.  
Code under MIT License.
