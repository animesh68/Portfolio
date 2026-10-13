import React from 'react'
import { Tv } from 'lucide-react'

interface AmbientControlsProps {
  scanlines: boolean
  onToggleScanlines: () => void
}

export const AmbientControls: React.FC<AmbientControlsProps> = ({
  scanlines,
  onToggleScanlines
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#171725]/85 backdrop-blur-md border border-[#F6A5C4]/30 shadow-xl text-xs font-mono">
      <button
        type="button"
        onClick={onToggleScanlines}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
          scanlines
            ? 'bg-[#FF8A55] text-[#171725] font-bold shadow-md shadow-[#FF8A55]/30'
            : 'text-[#FFF6EE]/70 hover:text-[#FFF6EE] hover:bg-white/5'
        }`}
        title="Toggle retro CRT scanlines overlay"
      >
        <Tv className="w-3.5 h-3.5" />
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
    <div className="relative w-full max-w-5xl mx-auto my-12 px-4 sm:px-6">
      <div className="relative h-44 sm:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171725] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171725]/60 via-transparent to-[#171725]/60" />

        {caption && (
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#FFF6EE]/80">
            <span className="italic truncate" style={{ color: accentColor }}>
              "{caption}"
            </span>
            <span className="text-[10px] text-[#FFF6EE]/50 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 shrink-0 ml-2">
              LIMINAL_NOSTALGIA
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
