import React, { useState, useEffect } from 'react'
import { FileText, Menu, X, Sparkles, Terminal, Disc, FolderCode, User } from 'lucide-react'

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
    { label: 'Work', href: '#work', id: 'work', icon: FolderCode },
    { label: 'Open Source', href: '#opensource', id: 'opensource', icon: Terminal },
    { label: 'Mixtape', href: '#mixtape', id: 'mixtape', icon: Disc },
    { label: 'About', href: '#about', id: 'about', icon: User },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home"
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#29263D]/80 backdrop-blur-md border border-[#F6A5C4]/20 hover:border-[#FF8A55]/50 transition-all shadow-lg"
          aria-label="animesh.space home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A55] animate-pulse group-hover:bg-[#F6A5C4] transition-colors" />
          <span className="font-mono text-xs tracking-wider text-[#FFF6EE] uppercase font-semibold">
            animesh<span className="text-[#F6A5C4]">.space</span>
          </span>
          <span className="text-[10px] font-mono text-[#A8C9F0]/80 bg-[#171725]/60 px-1.5 py-0.5 rounded border border-[#A8C9F0]/20 hidden sm:inline-block">
            v2.4
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 shadow-xl ${
            scrolled 
              ? 'bg-[#171725]/85 backdrop-blur-md border border-[#B8A8E8]/20 shadow-2xl' 
              : 'bg-[#29263D]/70 backdrop-blur-sm border border-[#FFF6EE]/10'
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
                    ? 'text-[#FFF6EE] bg-gradient-to-r from-[#FF8A55]/30 to-[#F6A5C4]/30 border border-[#FF8A55]/40 shadow-sm'
                    : 'text-[#FFF6EE]/75 hover:text-[#FFF6EE] hover:bg-white/5'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#FF8A55]' : 'opacity-60'}`} />
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#FF8A55] rounded-full" />
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#FFF6EE] bg-gradient-to-r from-[#FF8A55] to-[#F6A5C4] hover:opacity-90 active:scale-95 transition-all shadow-md shadow-[#FF8A55]/20 border border-white/20"
            title="View verified resume PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#29263D]/80 border border-[#F6A5C4]/20 text-[#FFF6EE] hover:bg-[#29263D] focus:outline-none focus:ring-2 focus:ring-[#FF8A55]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto p-3 rounded-2xl bg-[#171725]/95 backdrop-blur-xl border border-[#F6A5C4]/30 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
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
                      ? 'text-[#FFF6EE] bg-[#FF8A55]/20 border border-[#FF8A55]/40 font-semibold'
                      : 'text-[#FFF6EE]/80 hover:bg-white/5'
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
