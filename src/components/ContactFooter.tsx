import React, { useState } from 'react'
import { Mail, FileText, Check, Copy, ArrowUp, Sparkles } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'
import { MagneticPhotoCorner } from './MagneticPhotoCorner'

export const ContactFooter: React.FC = () => {
  const { personal } = PORTFOLIO_DATA
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative pt-16 pb-20 px-4 sm:px-6 overflow-hidden bg-[#FFF6EE]/85 backdrop-blur-md border-t border-[#F6A5C4]/35 text-[#29263D]">
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Contact Banner Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/85 backdrop-blur-xl border border-[#F6A5C4]/35 shadow-[0_12px_36px_rgba(41,38,61,0.06)] mb-14 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8A55]/15 border border-[#FF8A55]/30 text-[#FF8A55] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#29263D] tracking-tight mb-3">
              See you around.
            </h2>

            <p className="text-sm sm:text-base text-[#D982A5] font-mono leading-relaxed mb-4">
              “Thanks for spending a little time in my corner of the internet.”
            </p>

            <p className="text-xs sm:text-sm text-[#29263D]/80 font-['Inter',sans-serif] leading-relaxed">
              Always open to discussing backend architectures, information retrieval experiments, open-source work, or software engineering internships.
            </p>
          </div>

          {/* Email Copy Card & Quick Action */}
          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <div className="p-4 rounded-2xl bg-[#FFF6EE] border border-[#FF8A55]/25 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF8A55]" />
                <span className="font-mono text-xs sm:text-sm text-[#29263D] font-medium">
                  {personal.email}
                </span>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#FFD4B8]/40 border border-[#FF8A55]/20 text-xs font-mono text-[#29263D] flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#FF8A55]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Mail Action */}
            <a
              href={`mailto:${personal.email}`}
              className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF8A55] to-[#F6A5C4] text-white font-mono font-bold text-xs uppercase tracking-wider text-center shadow-md shadow-[#FF8A55]/25 hover:shadow-lg hover:brightness-105 transition-all"
            >
              Send an Email
            </a>
          </div>

        </div>

        {/* Clean Footer Grid: Minimal, verified links + Tiny Magnetic Photo in Right Corner */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-12 pb-10 border-b border-[#29263D]/10">
          
          {/* Left Column: Full Name & Core Navigation */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 flex-1">
            
            {/* Identity & Main Title */}
            <div>
              <div className="font-['Sora',sans-serif] text-base font-bold text-[#29263D] tracking-tight mb-2">
                {personal.name}
              </div>
              <p className="text-xs text-[#29263D]/70 font-mono max-w-xs leading-relaxed mb-4">
                Computer Science Undergraduate & Systems Engineer.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A55]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Opportunities</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <div className="font-mono text-xs text-[#D982A5] font-bold uppercase tracking-wider mb-3">
                Navigation
              </div>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <a href="#about" className="text-[#29263D]/75 hover:text-[#FF8A55] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-[#29263D]/75 hover:text-[#FF8A55] transition-colors">
                    Featured Projects
                  </a>
                </li>
                <li>
                  <a href="#opensource" className="text-[#29263D]/75 hover:text-[#FF8A55] transition-colors">
                    Merged PRs
                  </a>
                </li>
                <li>
                  <a href="#mixtape" className="text-[#29263D]/75 hover:text-[#FF8A55] transition-colors">
                    Compact Mixtape
                  </a>
                </li>
              </ul>
            </div>

            {/* Verified Profiles & Contact Links (GitHub, LinkedIn, Email, Resume) */}
            <div>
              <div className="font-mono text-xs text-[#3E6FB0] font-bold uppercase tracking-wider mb-3">
                Verified Profiles
              </div>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <a 
                    href={personal.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-[#29263D]/80 hover:text-[#FF8A55] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#29263D]" />
                    <span>github.com/animesh68</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={personal.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-[#29263D]/80 hover:text-[#3E6FB0] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>linkedin/animesh-srivastava</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-1.5 text-[#29263D]/80 hover:text-[#FF8A55] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF8A55]" />
                    <span>{personal.email}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/Animesh_Srivastava_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-[#29263D]/80 hover:text-[#D982A5] transition-colors font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D982A5]" />
                    <span>Resume (PDF)</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Corner: Miniature Magnet Photograph Slideshow */}
          <div className="shrink-0 self-center lg:self-start pt-2">
            <MagneticPhotoCorner />
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#29263D]/65">
          <div className="flex items-center gap-2">
            <span>© 2026 Animesh Srivastava. Designed with warm pastels & code.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#29263D] transition-colors border border-[#F6A5C4]/40 shadow-xs cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF8A55]" />
          </button>
        </div>

      </div>
    </footer>
  )
}
