import React, { useState } from 'react'

interface HitoriStickerProps {
  isModalOpen?: boolean
}

export const HitoriSticker: React.FC<HitoriStickerProps> = ({ isModalOpen = false }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setClicked(true)
    setTimeout(() => setClicked(false), 500)
  }

  return (
    <aside 
      aria-label="Hitori Gotoh sticker"
      className={`fixed bottom-0 left-2 sm:left-4 z-40 select-none pointer-events-none print:hidden transition-opacity duration-200 ${
        isModalOpen ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div 
        className="relative group cursor-pointer pointer-events-auto"
        onClick={handleClick}
        title="Hitori Gotoh (Bocchi)"
      >
        {/* Floating Bocchi Transparent Sticker with subtle interactive tilt */}
        <div 
          className={`relative transition-all duration-300 transform motion-reduce:transform-none hover:scale-105 hover:-translate-y-1 ${
            clicked ? 'animate-bounce' : ''
          }`}
        >
          <img
            src="/assets/bocchi-sticker-transparent.png"
            alt="Hitori Gotoh (Bocchi) sitting at the screen edge"
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto drop-shadow-[0_6px_16px_rgba(41,38,61,0.2)] filter transition-all select-none"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
    </aside>
  )
}
