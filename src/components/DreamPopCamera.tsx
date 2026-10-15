import React, { useState, useEffect, useCallback } from 'react'
import { Camera, ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Sparkles, MapPin, Clock, Film } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'
import type { DreamPhoto } from '../data/portfolio'

interface DreamPopCameraProps {
  onOpenModal?: (isOpen: boolean) => void
}

export const DreamPopCamera: React.FC<DreamPopCameraProps> = ({ onOpenModal }) => {
  const { camera } = PORTFOLIO_DATA
  const photos = camera.photos
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [fullViewPhoto, setFullViewPhoto] = useState<DreamPhoto | null>(null)
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('cover')

  const currentPhoto = photos[currentIndex] || photos[0]

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true)
    setCurrentIndex((index + photos.length) % photos.length)
    const timer = setTimeout(() => setIsTransitioning(false), 250)
    return () => clearTimeout(timer)
  }, [photos.length])

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  // Optional Gentle Autoplay (5s interval, pauses on user interaction, respects reduced motion)
  useEffect(() => {
    if (!isAutoPlaying) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsAutoPlaying(false)
      return
    }

    const interval = setInterval(() => {
      goToSlide(currentIndex + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex, goToSlide])

  // Keyboard navigation when section is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullViewPhoto) {
        if (e.key === 'Escape') {
          setFullViewPhoto(null)
          onOpenModal?.(false)
        }
        if (e.key === 'ArrowRight') nextSlide()
        if (e.key === 'ArrowLeft') prevSlide()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [fullViewPhoto, nextSlide, prevSlide, onOpenModal])

  const handleOpenFullView = (photo: DreamPhoto) => {
    setFullViewPhoto(photo)
    onOpenModal?.(true)
  }

  const handleCloseFullView = () => {
    setFullViewPhoto(null)
    onOpenModal?.(false)
  }

  return (
    <section id="photos" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E5] border border-[#FF8A55]/30 text-[#FF8A55] text-xs font-mono mb-3 shadow-xs">
          <Camera className="w-4 h-4 text-[#FF8A55]" />
          <span className="font-bold tracking-wider">DREAM-POP CAMERA // 35MM NOSTALGIA</span>
          <span className="text-[#D982A5] text-xs">✦</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#29263D] tracking-tight mb-3">
          {camera.heading}
        </h2>
        <p className="text-sm sm:text-base text-[#29263D]/75 font-mono max-w-xl mx-auto">
          “{camera.subheading}”
        </p>
      </div>

      {/* Retro Digital Camera Chassis Frame */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F5] to-[#FBF4FE] border border-[#F6A5C4]/40 shadow-[0_20px_50px_rgba(41,38,61,0.08)] p-5 sm:p-8 backdrop-blur-xl">
        
        {/* Decorative Camera Accents: Corner Screws & Champagne Trim */}
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#29263D]/20 border border-white" />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#29263D]/20 border border-white" />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#29263D]/20 border border-white" />
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#29263D]/20 border border-white" />

        {/* Camera Top Bar: Lens Bezel Accent, Mode Indicator & Status Lights */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#29263D]/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            {/* Shutter Ring Motif */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFD4B8] via-white to-[#F6A5C4] border border-[#FF8A55]/40 flex items-center justify-center shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-[#29263D]/80" />
              </div>
              <span className="font-bold text-[#29263D] uppercase tracking-wider text-[11px]">
                LUMINA DREAM-2000
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF3EB] text-[#3E7445] text-[10px] font-semibold border border-[#A3D9A5]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7445] animate-pulse" />
              <span>READY</span>
            </div>
          </div>

          {/* Right Status Badges */}
          <div className="flex items-center gap-2 text-[11px] text-[#29263D]/70 font-mono">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFF0E5] text-[#FF8A55] border border-[#FF8A55]/25 font-bold">
              REC ●
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded-full bg-white/80 border border-black/5">
              DREAM MODE // 24-BIT
            </span>
            <span className="font-bold text-[#29263D] bg-white/90 px-2.5 py-0.5 rounded-full border border-black/10">
              {currentPhoto.number} / {String(photos.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Camera LCD Display Screen */}
        <div className="relative rounded-2xl overflow-hidden bg-[#1E1B29] border border-[#29263D]/20 shadow-inner group">
          
          {/* Main Photo Canvas */}
          <div className="relative w-full h-72 sm:h-96 md:h-[460px] flex items-center justify-center overflow-hidden bg-black/40">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.alt}
              className={`w-full h-full ${
                fitMode === 'cover' ? 'object-cover' : 'object-contain'
              } object-center transition-all duration-300 ${
                isTransitioning ? 'opacity-40 scale-102 blur-[1px]' : 'opacity-100 scale-100 blur-0'
              }`}
              loading="lazy"
            />

            {/* Subtle Retro Viewfinder Grid Lines */}
            <div className="absolute inset-4 pointer-events-none border border-white/10 rounded-xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none border border-white/25 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white/60 rounded-full" />
            </div>

            {/* On-Screen Display (OSD) Overlays */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 drop-shadow pointer-events-none">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                <Clock className="w-3 h-3 text-[#FF8A55]" />
                <span>{currentPhoto.timestamp}</span>
              </div>

              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                <MapPin className="w-3 h-3 text-[#A8C9F0]" />
                <span>{currentPhoto.location}</span>
              </div>
            </div>

            {/* Bottom Caption Pill on LCD */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 max-w-md">
                <h3 className="font-['Sora',sans-serif] text-xs sm:text-sm font-bold text-white tracking-wide">
                  {currentPhoto.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#FFD4B8] font-mono truncate">
                  ~ {currentPhoto.mood}
                </p>
              </div>

              {/* Shutter Quick-Actions */}
              <div className="flex items-center gap-1.5 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setFitMode(fitMode === 'cover' ? 'contain' : 'cover')}
                  className="p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/15 text-[10px] font-mono transition-all"
                  title={`Toggle Fit: currently ${fitMode}`}
                >
                  {fitMode === 'cover' ? 'FIT' : 'FILL'}
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenFullView(currentPhoto)}
                  className="p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all"
                  title="Expand to Full Resolution"
                  aria-label="View photograph in full resolution"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Camera Physical Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-2 border-t border-[#29263D]/10">
          
          {/* Left: Previous / Next Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FFF0E5] border border-[#29263D]/15 text-xs font-mono font-bold text-[#29263D] shadow-xs active:scale-95 transition-all"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-4 h-4 text-[#FF8A55]" />
              <span>PREV</span>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FFF0E5] border border-[#29263D]/15 text-xs font-mono font-bold text-[#29263D] shadow-xs active:scale-95 transition-all"
              aria-label="Next photograph"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4 text-[#FF8A55]" />
            </button>
          </div>

          {/* Center: Slide Indicators */}
          <div className="flex items-center gap-1.5">
            {photos.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-6 h-2 bg-[#FF8A55] shadow-xs'
                    : 'w-2 h-2 bg-[#29263D]/20 hover:bg-[#29263D]/40'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right: Autoplay Toggle Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                isAutoPlaying
                  ? 'bg-[#FF8A55] text-white border-[#FF8A55] font-semibold shadow-xs'
                  : 'bg-white hover:bg-[#FFF6EE] text-[#29263D]/80 border-[#29263D]/15'
              }`}
              title="Toggle automatic slideshow (5s interval)"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-white" />
                  <span>SLIDESHOW: ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#FF8A55]" />
                  <span>AUTO SLIDES</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filmstrip Thumbnail Rail */}
        <div className="mt-6 pt-5 border-t border-[#29263D]/10">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#29263D]/70 font-semibold">
            <Film className="w-3.5 h-3.5 text-[#D982A5]" />
            <span>35MM FILMSTRIP // SELECT TO VIEW:</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-3.5">
            {photos.map((p, idx) => {
              const isSelected = currentIndex === idx
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group relative text-left rounded-xl overflow-hidden p-1 bg-white border transition-all duration-300 shadow-2xs ${
                    isSelected
                      ? 'border-[#FF8A55] ring-2 ring-[#FF8A55]/40 scale-[1.03] shadow-sm'
                      : 'border-black/10 opacity-75 hover:opacity-100 hover:border-[#F6A5C4]'
                  }`}
                  aria-label={`Select photo ${p.number}: ${p.title}`}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/20 relative">
                    <img
                      src={p.url}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-sm bg-black/60 text-white text-[9px] font-mono">
                      #{p.number}
                    </div>
                  </div>
                  <div className="pt-1.5 px-0.5">
                    <div className="text-[10px] font-mono font-bold text-[#29263D] truncate">
                      {p.title}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

      </div>

      {/* Full-Screen Photo Inspection Modal */}
      {fullViewPhoto && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseFullView}
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-modal-title"
        >
          <div 
            className="relative max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#FFFDFB] border border-[#F6A5C4]/40 shadow-2xl p-4 sm:p-6 text-[#29263D]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#29263D]/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF8A55]" />
                <span id="photo-modal-title" className="text-sm font-bold font-['Sora',sans-serif] text-[#29263D]">
                  {fullViewPhoto.title}
                </span>
                <span className="text-xs font-mono text-[#D982A5]">
                  // {fullViewPhoto.location} ({fullViewPhoto.timestamp})
                </span>
              </div>

              <button
                type="button"
                onClick={handleCloseFullView}
                className="p-1.5 rounded-xl bg-[#FFF6EE] hover:bg-[#FFD4B8]/40 border border-[#29263D]/10 text-[#29263D] transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Image Container */}
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-black/90 flex items-center justify-center max-h-[75vh]">
              <img
                src={fullViewPhoto.url}
                alt={fullViewPhoto.alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Modal Footer with Dismiss Hint */}
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#29263D]/10 text-xs font-mono text-[#29263D]/65">
              <span>{fullViewPhoto.mood}</span>
              <span>Press ESC or click outside to dismiss</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
