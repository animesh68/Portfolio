import React, { useState, useEffect } from 'react'
import { FileText, Menu, X, Sparkles, Terminal, Disc, FolderCode, User, Camera } from 'lucide-react'

interface NavbarProps {
  activeSection: string
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Sparkles },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Work', href: '#work', id: 'work', icon: FolderCode },
    { label: 'Open Source', href: '#opensource', id: 'opensource', icon: Terminal },
    { label: 'Music', href: '#mixtape', id: 'mixtape', icon: Disc },
    { label: 'Camera', href: '#photos', id: 'photos', icon: Camera },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand: Full Name */}
        <a 
          href="#home"
          className="flex items-center px-4 py-1.5 rounded-full bg-[#FFF6EE]/90 backdrop-blur-md border border-[#F6A5C4]/40 hover:border-[#FF8A55]/60 transition-all shadow-sm shadow-[#FF8A55]/10"
          aria-label="Animesh Srivastava home"
        >
          <span className="font-['Sora',sans-serif] text-xs sm:text-sm tracking-tight text-[#29263D] font-bold">
            Animesh Srivastava
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm ${
            scrolled 
              ? 'bg-[#FFF6EE]/90 backdrop-blur-md border border-[#F6A5C4]/40 shadow-md shadow-[#FF8A55]/5' 
              : 'bg-[#FFF6EE]/75 backdrop-blur-sm border border-[#F6A5C4]/25'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            const IconComponent = link.icon
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'text-[#29263D] bg-gradient-to-r from-[#FFD4B8]/80 to-[#F6A5C4]/50 border border-[#FF8A55]/50 font-semibold shadow-xs'
                    : 'text-[#29263D]/75 hover:text-[#29263D] hover:bg-white/60'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#FF8A55]' : 'opacity-60'}`} />
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#FF8A55] rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Action Button: Resume PDF */}
        <div className="flex items-center gap-2">
          <a
            href="/Animesh_Srivastava_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-[#29263D] bg-gradient-to-r from-[#FFD4B8] via-[#F6A5C4] to-[#B8A8E8] hover:opacity-95 active:scale-95 transition-all shadow-sm shadow-[#FF8A55]/20 border border-white/60"
            title="View verified resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-[#29263D]" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#FFF6EE]/90 border border-[#F6A5C4]/40 text-[#29263D] hover:bg-[#FFF6EE] focus:outline-none focus:ring-2 focus:ring-[#FF8A55]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto p-3 rounded-2xl bg-[#FFF6EE]/95 backdrop-blur-xl border border-[#F6A5C4]/40 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              const IconComponent = link.icon
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-mono transition-all ${
                    isActive
                      ? 'text-[#29263D] bg-[#FFD4B8]/60 border border-[#FF8A55]/40 font-semibold'
                      : 'text-[#29263D]/80 hover:bg-white/60'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#FF8A55]' : 'opacity-60'}`} />
                  <span>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
