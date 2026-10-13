import React, { useState } from 'react'
import { Disc, ExternalLink, Music2, AlertCircle } from 'lucide-react'
import type { CassetteTape } from '../data/portfolio'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { soundFx } from '../utils/audio'
import { SpotifyIcon } from './Icons'

export const MixtapeCorner: React.FC = () => {
  const { mixtape } = PORTFOLIO_DATA
  const [selectedTape, setSelectedTape] = useState<CassetteTape>(mixtape.tapes[0])
  const [embedError, setEmbedError] = useState(false)
  const [isPlayingVisual, setIsPlayingVisual] = useState(false)

  const handleSelectTape = (tape: CassetteTape) => {
    soundFx.playCassetteClick()
    setSelectedTape(tape)
    setEmbedError(false)
    setIsPlayingVisual(true)
  }

  return (
    <section id="mixtape" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Section Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#B8A8E8]/10 via-[#F6A5C4]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#29263D]/80 border border-[#F6A5C4]/30 text-[#F6A5C4] text-xs font-mono mb-3 shadow-lg">
          <Disc className="w-4 h-4 text-[#FF8A55] animate-spin-slow" />
          <span className="font-semibold tracking-wider">{mixtape.sectionName}</span>
          <span className="text-[#A8C9F0] text-xs">✦</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#FFF6EE] tracking-tight mb-3">
          mixtape.exe
        </h2>
        <p className="text-sm sm:text-base text-[#A8C9F0] font-mono max-w-xl mx-auto">
          "{mixtape.subtitle}"
        </p>
      </div>

      {/* Main Interactive Cassette Deck & Player Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 5 Selectable Cassette Tapes Rack (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono text-[#FFF6EE]/60">
            <span>SELECT A TAPE TO LOAD INTO DECK:</span>
            <span className="text-[#FF8A55]">{selectedTape.number} / 05 LOADED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mixtape.tapes.map((tape) => {
              const isSelected = selectedTape.id === tape.id

              return (
                <button
                  key={tape.id}
                  type="button"
                  onClick={() => handleSelectTape(tape)}
                  className={`group relative text-left p-4 rounded-2xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#FF8A55] ${
                    isSelected
                      ? 'scale-[1.02] shadow-2xl border-[#FF8A55] ring-1 ring-[#FF8A55]/50'
                      : 'hover:scale-[1.01] hover:border-white/30 border-white/10 opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: tape.palette.bg,
                    boxShadow: isSelected ? `0 12px 30px ${tape.palette.glow}` : undefined
                  }}
                  aria-label={`Select Tape ${tape.number}: ${tape.title} by ${tape.artist}`}
                >
                  {/* Cassette Header Bar with Screws */}
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-white/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="font-bold text-[#FFF6EE]">TAPE {tape.number}</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] border border-white/10">
                      SIDE A · {tape.durationStr}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>

                  {/* Cassette Label Strip (Paper Sticker) */}
                  <div 
                    className="p-3 rounded-lg mb-3 shadow-inner border border-black/20"
                    style={{ backgroundColor: tape.palette.label }}
                  >
                    <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-0.5">
                      {tape.artist}
                    </div>
                    <div className="font-['Sora',sans-serif] text-sm font-bold truncate text-[#FFF6EE]">
                      {tape.title}
                    </div>
                  </div>

                  {/* Tape Spool Window (Realistic Dual Cogwheels & Magnetic Ribbon) */}
                  <div className="relative h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-around px-4 overflow-hidden">
                    {/* Magnetic Tape Ribbon across the center */}
                    <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-2.5 bg-[#422c1d]/90 rounded-sm" />

                    {/* Left Spool Reel */}
                    <div 
                      className={`relative z-10 w-7 h-7 rounded-full border-2 border-white/30 flex items-center justify-center ${
                        isSelected && isPlayingVisual ? 'animate-spin-slow' : ''
                      }`}
                      style={{ backgroundColor: tape.palette.spool }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-black/60 border border-white/40 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Center Tape Window Readout */}
                    <div className="relative z-10 px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white/60">
                      STEREO
                    </div>

                    {/* Right Spool Reel */}
                    <div 
                      className={`relative z-10 w-7 h-7 rounded-full border-2 border-white/30 flex items-center justify-center ${
                        isSelected && isPlayingVisual ? 'animate-spin-slow' : ''
                      }`}
                      style={{ backgroundColor: tape.palette.spool }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-black/60 border border-white/40 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Mood Tag */}
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="italic truncate" style={{ color: tape.palette.text }}>
                      "{tape.mood}"
                    </span>
                    {isSelected && (
                      <span className="shrink-0 ml-1 text-[#FF8A55] text-xs font-bold">
                        ACTIVE ▶
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Active Deck & Official Spotify Embed Player (5 cols on lg) */}
        <div className="lg:col-span-5">
          <div className="p-5 sm:p-6 rounded-3xl bg-[#29263D]/80 backdrop-blur-xl border border-[#F6A5C4]/30 shadow-2xl">
            
            {/* Deck Header Chrome */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A55] animate-ping" />
                <span className="text-xs font-mono font-bold text-[#FFF6EE]">
                  DECK_01 // ACTIVE_CARTRIDGE
                </span>
              </div>
              <span className="text-xs font-mono text-[#A8C9F0] bg-white/5 px-2 py-0.5 rounded">
                TAPE #{selectedTape.number}
              </span>
            </div>

            {/* Currently Playing Track Metadata Card */}
            <div className="mb-4 p-4 rounded-2xl bg-black/40 border border-white/10">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[10px] font-mono text-[#F6A5C4] uppercase tracking-wider">
                    {selectedTape.artist}
                  </span>
                  <h3 className="text-lg font-bold font-['Sora',sans-serif] text-[#FFF6EE]">
                    {selectedTape.title}
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-[#FF8A55]/20 text-[#FF8A55]">
                  <Music2 className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs font-mono text-[#A8C9F0] italic mb-3">
                "{selectedTape.mood}"
              </p>

              <div className="p-2.5 rounded-lg bg-white/5 text-[11px] font-mono text-[#FFF6EE]/75 border border-white/5">
                <span className="text-[#FF8A55] mr-1.5">LYRIC:</span>
                "{selectedTape.quote}"
              </div>
            </div>

            {/* Official Spotify Embed iFrame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#171725] border border-white/10 shadow-lg min-h-[152px]">
              {!embedError ? (
                <iframe
                  key={selectedTape.trackId}
                  src={selectedTape.embedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify Player - ${selectedTape.title} by ${selectedTape.artist}`}
                  className="rounded-2xl"
                  onError={() => setEmbedError(true)}
                />
              ) : (
                <div className="p-6 text-center text-xs font-mono text-[#FFF6EE]/80 flex flex-col items-center justify-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  <span>Spotify Embed restricted in this browser session.</span>
                  <a
                    href={selectedTape.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1DB954] text-black font-semibold text-xs mt-1"
                  >
                    <span>Open directly in Spotify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Direct Spotify Actions Bar */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <a
                href={selectedTape.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#1DB954] hover:underline"
              >
                <SpotifyIcon className="w-4 h-4" />
                <span>Listen on Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-[#FFF6EE]/40 text-[11px]">
                OFFICIAL SPOTIFY EMBED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
