import React, { useState, useEffect, useRef, useCallback } from 'react'
import slideshowData from '../data/slideshowImages.json'

// Standard Fisher-Yates shuffle ensuring no repeat between cycle boundaries
function generateShuffledDeck(length: number, previousLastIndex: number | null): number[] {
  if (length <= 0) return []
  const deck = Array.from({ length }, (_, i) => i)

  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }

  // Ensure first element of new cycle is never the same as the last element of previous cycle
  if (previousLastIndex !== null && deck.length > 1 && deck[0] === previousLastIndex) {
    const swapTarget = Math.floor(Math.random() * (deck.length - 1)) + 1
    const temp = deck[0]
    deck[0] = deck[swapTarget]
    deck[swapTarget] = temp
  }

  return deck
}

export const MagneticPhotoCorner: React.FC = () => {
  const images = slideshowData
  const [currentIdx, setCurrentIdx] = useState<number>(() => Math.floor(Math.random() * (images.length || 1)))
  const [prevIdx, setPrevIdx] = useState<number | null>(null)
  const [isCrossfading, setIsCrossfading] = useState<boolean>(false)

  // Track the shuffled deck and position
  const deckRef = useRef<number[]>([])
  const deckPosRef = useRef<number>(0)
  const timerRef = useRef<number | null>(null)

  // Initialize deck once
  useEffect(() => {
    if (images.length > 0) {
      deckRef.current = generateShuffledDeck(images.length, currentIdx)
      deckPosRef.current = 0
    }
  }, [images.length, currentIdx])

  const advanceSlide = useCallback(() => {
    if (images.length <= 1) return

    let deck = deckRef.current
    let pos = deckPosRef.current

    if (pos >= deck.length) {
      const lastSelected = deck[deck.length - 1]
      deck = generateShuffledDeck(images.length, lastSelected)
      deckRef.current = deck
      pos = 0
    }

    const nextIndex = deck[pos]
    deckPosRef.current = pos + 1

    // Preload next image after this one to ensure instant render
    const upcomingDeckIndex = deckPosRef.current < deck.length ? deck[deckPosRef.current] : null
    if (upcomingDeckIndex !== null && images[upcomingDeckIndex]) {
      const preloadImg = new Image()
      preloadImg.src = images[upcomingDeckIndex].path
    }

    // Trigger crossfade transition
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setCurrentIdx(nextIndex)
    } else {
      setPrevIdx(currentIdx)
      setCurrentIdx(nextIndex)
      setIsCrossfading(true)

      setTimeout(() => {
        setIsCrossfading(false)
        setPrevIdx(null)
      }, 700)
    }
  }, [images, currentIdx])

  // Automatic slideshow timer: 7.5s interval, paused when tab is inactive
  useEffect(() => {
    if (images.length <= 1) return

    const scheduleNext = () => {
      if (document.hidden) return
      timerRef.current = window.setTimeout(() => {
        advanceSlide()
      }, 7500)
    }

    scheduleNext()

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timerRef.current) {
          clearTimeout(timerRef.current)
          timerRef.current = null
        }
      } else {
        if (!timerRef.current) {
          scheduleNext()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [advanceSlide, images.length])

  // Gracefully inactive if no images found
  if (!images || images.length === 0) {
    return null
  }

  const currentPhoto = images[currentIdx]
  const previousPhoto = prevIdx !== null ? images[prevIdx] : null

  return (
    <aside
      id="photos"
      aria-label="Personal film photograph corner piece"
      className="relative select-none group focus:outline-none"
    >
      {/* Screen-reader description only (No visible captions or UI text) */}
      <span className="sr-only">
        Casual photograph from personal archives pinned with a magnet.
      </span>

      {/* Tiny Magnetic Polaroid Photo Card */}
      <div 
        className="relative w-[190px] sm:w-[210px] md:w-[220px] p-2.5 pb-6 sm:p-3 sm:pb-7 rounded-sm bg-[#FFFDF9] border border-black/10 shadow-[0_10px_26px_rgba(41,38,61,0.18)] rotate-[2deg] hover:rotate-0 transition-transform duration-500 ease-out"
        style={{
          boxShadow: '0 12px 28px -4px rgba(41, 38, 61, 0.22), 0 4px 10px -2px rgba(41, 38, 61, 0.12)'
        }}
      >
        {/* Subtle Decorative Magnet at Top Center (Inspired by blue-and-cream camera aesthetic) */}
        <div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none drop-shadow-md"
          aria-hidden="true"
        >
          {/* Circular pastel-blue button magnet with cream rim and metallic core */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E2EEFB] via-[#A8C9F0] to-[#5E97D4] border-2 border-white flex items-center justify-center shadow-inner">
            <div className="w-2 h-2 rounded-full bg-[#29263D]/40 shadow-xs" />
          </div>
        </div>

        {/* Photograph Window */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] overflow-hidden rounded-xs bg-[#29263D]/5 border border-black/5">
          {/* Previous image during crossfade */}
          {previousPhoto && (
            <img
              src={previousPhoto.path}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.98] transition-opacity duration-700 ease-in-out ${
                isCrossfading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}

          {/* Current Active Image */}
          {currentPhoto && (
            <img
              key={currentPhoto.path}
              src={currentPhoto.path}
              alt="Personal photograph on film"
              className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.98] transition-opacity duration-700 ease-in-out ${
                isCrossfading ? 'opacity-100' : 'opacity-100'
              }`}
              loading="lazy"
            />
          )}

          {/* Subtle warm film light overlay */}
          <div 
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#FF8A55]/10 via-transparent to-[#F6A5C4]/10 mix-blend-soft-light" 
            aria-hidden="true" 
          />
        </div>
      </div>
    </aside>
  )
}
