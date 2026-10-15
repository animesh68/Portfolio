import React, { useState } from 'react'
import { Volume2, VolumeX, AlertCircle } from 'lucide-react'
import type { CassetteTape } from '../data/portfolio'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { soundFx } from '../utils/audio'

export const MixtapeCorner: React.FC = () => {
  const { mixtape } = PORTFOLIO_DATA
  const [selectedTape, setSelectedTape] = useState<CassetteTape>(mixtape.tapes[0])
  const [animatingTapeId, setAnimatingTapeId] = useState<string | null>(null)
  const [slotActive, setSlotActive] = useState(false)
  const [embedError, setEmbedError] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)

  const toggleSound = () => {
    const next = !soundEnabled
    setSoundEnabled(next)
    soundFx.setEnabled(next)
    if (next) {
      soundFx.playCassetteClick()
    }
  }

  const handleSelectTape = (tape: CassetteTape) => {
    // Play sound if enabled
    if (soundEnabled) {
      soundFx.playCassetteClick()
    }

    // Always update selected tape immediately to guarantee responsive playback
    setSelectedTape(tape)
    setEmbedError(false)

    // Check reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      setAnimatingTapeId(tape.id)
      setSlotActive(true)

      const timer = setTimeout(() => {
        setAnimatingTapeId(null)
        setSlotActive(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }

  // 6 delicate pastel palettes for the compact cassette collection
  const tapeStyles: Record<string, { body: string; label: string; text: string; spool: string; border: string; accent: string }> = {
    'tape-1': {
      body: 'bg-[#F9F7FD]',
      label: 'bg-[#EFE8F9]',
      text: 'text-[#5E4382]',
      spool: 'bg-[#D6C7EC]',
      border: 'border-[#B8A8E8]/60',
      accent: '#B8A8E8'
    },
    'tape-2': {
      body: 'bg-[#FFF7F2]',
      label: 'bg-[#FFE9DC]',
      text: 'text-[#B84E1A]',
      spool: 'bg-[#FFCEB2]',
      border: 'border-[#FF8A55]/55',
      accent: '#FF8A55'
    },
    'tape-3': {
      body: 'bg-[#F6FAF6]',
      label: 'bg-[#EAF3EB]',
      text: 'text-[#356B3C]',
      spool: 'bg-[#CCE4CE]',
      border: 'border-[#A3D9A5]/60',
      accent: '#68B36D'
    },
    'tape-4': {
      body: 'bg-[#FFF6F8]',
      label: 'bg-[#FDE7EE]',
      text: 'text-[#9C2E54]',
      spool: 'bg-[#F8BFD1]',
      border: 'border-[#F6A5C4]/60',
      accent: '#F6A5C4'
    },
    'tape-5': {
      body: 'bg-[#F7F6FD]',
      label: 'bg-[#ECEAFB]',
      text: 'text-[#483E8C]',
      spool: 'bg-[#D2CEF5]',
      border: 'border-[#D9D7FA]/70',
      accent: '#8C82DB'
    },
    'tape-6': {
      body: 'bg-[#F2F7FD]',
      label: 'bg-[#E2EEFB]',
      text: 'text-[#264E7E]',
      spool: 'bg-[#BFD9F5]',
      border: 'border-[#A8C9F0]/70',
      accent: '#5E97D4'
    }
  }

  return (
    <section id="mixtape" className="relative py-10 px-4 sm:px-6 max-w-6xl mx-auto select-none">
      {/* Background Subtle Pastel Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-36 bg-gradient-to-r from-[#F6A5C4]/10 via-[#FFD4B8]/15 to-[#A8C9F0]/10 blur-2xl pointer-events-none" />

      {/* Discreet status and sound toggle header bar (No large section headings) */}
      <div className="flex items-center justify-between pb-2 mb-3 text-xs font-mono text-[#29263D]/70 border-b border-[#F6A5C4]/25">
        <div className="flex items-center gap-2">
          <span className="text-[#FF8A55] font-bold">✦</span>
          <span className="font-semibold tracking-wider uppercase text-[11px] text-[#29263D]/80">
            CASSETTE RACK · 6 TAPES
          </span>
          <span className="text-[10px] text-[#FF8A55] bg-[#FFF0E5] px-2 py-0.5 rounded-full border border-[#FF8A55]/20 font-bold hidden sm:inline">
            TAPE #{selectedTape.number} LOADED
          </span>
        </div>

        {/* Unobtrusive Mechanical Click Sound Toggle (Default OFF) */}
        <button
          type="button"
          onClick={toggleSound}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono transition-all border ${
            soundEnabled
              ? 'bg-[#FF8A55] text-white border-[#FF8A55] shadow-xs font-semibold'
              : 'bg-white/80 text-[#29263D]/70 border-black/10 hover:bg-white hover:text-[#29263D]'
          }`}
          title={soundEnabled ? 'Cassette sound FX enabled. Click to mute.' : 'Enable subtle mechanical cassette sound FX.'}
          aria-label="Toggle cassette insertion sound effect"
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 opacity-60" />
          )}
          <span>SFX: {soundEnabled ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Main Single Row: [Tape 1] ... [Tape 6] | [Slot] | [Compact Player] */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3.5">
        
        {/* Left Side: 6 Cassettes in ONE Single Row on Desktop (Horizontally scrollable on narrow screens) */}
        <div className="flex-1 min-w-0 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          <div className="grid grid-flow-col auto-cols-[115px] sm:auto-cols-[125px] lg:auto-cols-auto lg:grid-cols-6 gap-2.5 sm:gap-3">
            {mixtape.tapes.map((tape) => {
              const isSelected = selectedTape.id === tape.id
              const isAnimating = animatingTapeId === tape.id
              const style = tapeStyles[tape.id] || tapeStyles['tape-1']

              return (
                <button
                  key={tape.id}
                  type="button"
                  onClick={() => handleSelectTape(tape)}
                  className={`group relative text-left p-2.5 rounded-2xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#FF8A55] cursor-pointer h-[152px] flex flex-col justify-between ${
                    style.body
                  } ${
                    isSelected
                      ? `shadow-md ${style.border} ring-2 ring-[#FF8A55]/40 scale-[1.02]`
                      : 'hover:scale-[1.01] hover:border-black/20 border-black/10 opacity-90 hover:opacity-100 shadow-2xs'
                  } ${
                    isAnimating
                      ? '-translate-y-2 translate-x-1.5 shadow-lg shadow-[#FF8A55]/25 ring-2 ring-[#FF8A55] z-20'
                      : ''
                  }`}
                  aria-label={`Select Tape ${tape.number}: ${tape.title} by ${tape.artist}`}
                >
                  {/* Cassette Header Bar with Screws & Side Indicator */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#29263D]/65 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29263D]/25" />
                    <span className="text-[#29263D] font-bold">#{tape.number}</span>
                    <span className="text-[8px] opacity-75 font-mono">SIDE A</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29263D]/25" />
                  </div>

                  {/* Cassette Label Strip (Paper Sticker) */}
                  <div className={`p-1.5 rounded-lg border border-black/5 shadow-2xs ${style.label}`}>
                    <div className="font-mono text-[8px] text-[#29263D]/60 uppercase truncate font-medium">
                      {tape.artist}
                    </div>
                    <div className={`font-['Sora',sans-serif] text-[11px] font-bold truncate leading-tight ${style.text}`}>
                      {tape.title}
                    </div>
                  </div>

                  {/* Tape Spool Window (Realistic Dual Cogwheels & Magnetic Ribbon) */}
                  <div className="relative h-9 rounded-lg bg-[#29263D]/10 border border-black/5 flex items-center justify-around px-2 overflow-hidden">
                    {/* Magnetic Tape Ribbon across the center */}
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 h-1.5 bg-[#422c1d]/40 rounded-xs" />

                    {/* Left Spool Reel */}
                    <div 
                      className={`relative z-10 w-5 h-5 rounded-full border border-black/15 flex items-center justify-center shadow-xs ${
                        isSelected ? 'animate-spin-slow' : ''
                      } ${style.spool}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white border border-black/20 flex items-center justify-center">
                        <div className="w-0.5 h-0.5 bg-[#29263D] rounded-full" />
                      </div>
                    </div>

                    {/* Center Tape Window Readout */}
                    <div className="relative z-10 px-1 py-0.2 rounded-xs bg-white/90 text-[7px] font-mono font-bold text-[#29263D]/70 border border-black/5 shadow-2xs">
                      ST
                    </div>

                    {/* Right Spool Reel */}
                    <div 
                      className={`relative z-10 w-5 h-5 rounded-full border border-black/15 flex items-center justify-center shadow-xs ${
                        isSelected ? 'animate-spin-slow' : ''
                      } ${style.spool}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white border border-black/20 flex items-center justify-center">
                        <div className="w-0.5 h-0.5 bg-[#29263D] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Cassette Base Status */}
                  <div className="flex items-center justify-between text-[9px] font-mono">
                    <span className="text-[#29263D]/60 text-[8px] truncate font-medium">
                      {tape.durationStr}
                    </span>
                    {isSelected ? (
                      <span className="text-[#FF8A55] font-bold text-[8px] flex items-center gap-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A55] animate-ping" />
                        PLAY
                      </span>
                    ) : (
                      <span className="text-[#29263D]/40 text-[8px] group-hover:text-[#29263D]">
                        LOAD ↵
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Visual Cassette-Slot Motif (Between tapes and player) */}
        <div className="hidden lg:flex flex-col items-center justify-center px-1">
          <div 
            className={`w-3 h-28 rounded-full border border-black/15 transition-all duration-300 flex items-center justify-center ${
              slotActive 
                ? 'bg-[#FF8A55]/40 border-[#FF8A55] shadow-[0_0_12px_rgba(255,138,85,0.6)]' 
                : 'bg-[#29263D]/10'
            }`}
            title="Cassette insertion bay"
          >
            <div className={`w-1 h-12 rounded-full transition-colors duration-200 ${
              slotActive ? 'bg-[#FF8A55]' : 'bg-[#29263D]/30'
            }`} />
          </div>
        </div>

        {/* Right Side: Full Unclipped Official Spotify Player Embed (152px Height, Strictly On-Site Playback) */}
        <div className="w-full lg:w-[350px] shrink-0">
          <div className="rounded-2xl overflow-hidden border border-[#F6A5C4]/35 shadow-sm bg-black/90 h-[152px] relative">
            {!embedError ? (
              <iframe
                id="spotify-embed-player"
                key={selectedTape.trackId}
                src={`https://open.spotify.com/embed/track/${selectedTape.trackId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Player - ${selectedTape.title} by ${selectedTape.artist}`}
                className="w-full h-[152px] rounded-2xl"
                onError={() => setEmbedError(true)}
              />
            ) : (
              <div className="p-3 text-center text-xs font-mono text-[#FFF6EE] flex items-center justify-center gap-2 h-full bg-[#181818]">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[11px]">Connecting on-site audio player...</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
