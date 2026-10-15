import React from 'react'
import { Tv } from 'lucide-react'

interface AmbientControlsProps {
  scanlines: boolean
  onToggleScanlines: () => void
  isModalOpen?: boolean
}

export const AmbientControls: React.FC<AmbientControlsProps> = ({
  scanlines,
  onToggleScanlines,
  isModalOpen = false
}) => {
  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#F6A5C4]/40 shadow-lg text-xs font-mono text-[#29263D] print:hidden transition-opacity duration-200 ${
      isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <button
        type="button"
        onClick={onToggleScanlines}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
          scanlines
            ? 'bg-[#FF8A55] text-white font-bold shadow-xs'
            : 'text-[#29263D]/75 hover:text-[#29263D] hover:bg-[#FFF6EE]'
        }`}
        title="Toggle retro CRT scanlines overlay"
      >
        <Tv className="w-3.5 h-3.5 text-[#FF8A55]" />
        <span className="hidden sm:inline">CRT SCANLINES: {scanlines ? 'ON' : 'OFF'}</span>
      </button>
    </div>
  )
}

export const SectionDivider: React.FC<{ 
  image: string
  alt: string
  caption?: string
  accentColor?: string 
}> = ({ image, alt, caption, accentColor = '#FF8A55' }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-14 px-4 sm:px-6">
      <div className="relative h-44 sm:h-64 rounded-3xl overflow-hidden border border-[#F6A5C4]/30 shadow-[0_12px_32px_rgba(41,38,61,0.08)] group">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover filter brightness-[0.96] group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Soft dreamy sunset tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#29263D]/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A55]/10 via-transparent to-[#F6A5C4]/10" />

        {caption && (
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
            <span className="italic truncate bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 shadow-xs" style={{ color: accentColor }}>
              "{caption}"
            </span>
            <span className="text-[10px] text-[#29263D]/70 bg-white/85 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/40 shadow-xs shrink-0 ml-2">
              LIMINAL_NOSTALGIA
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
