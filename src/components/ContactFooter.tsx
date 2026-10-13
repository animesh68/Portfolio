import React, { useState } from 'react'
import { Mail, FileText, Check, Copy, ArrowUp, Sparkles } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'

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
    <footer id="contact" className="relative pt-24 pb-12 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#171725] via-[#12121f] to-[#0d0d17] border-t border-white/10">
      
      {/* Background Liminal Sunset Image Slice: Shopping cart under twilight clouds */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/assets/shopping-cart-twilight.jpg"
          alt="Liminal convenience store and shopping cart under pink clouds"
          className="w-full h-full object-cover object-bottom filter blur-[2px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d17] via-[#12121f]/90 to-[#171725]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Contact Banner Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#29263D]/60 backdrop-blur-xl border border-[#F6A5C4]/20 shadow-2xl mb-16 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8A55]/15 border border-[#FF8A55]/30 text-[#FF8A55] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#FFF6EE] tracking-tight mb-3">
              See you around.
            </h2>

            <p className="text-sm sm:text-base text-[#A8C9F0] font-mono leading-relaxed mb-4">
              “Thanks for spending a little time in my corner of the internet.”
            </p>

            <p className="text-xs sm:text-sm text-[#FFF6EE]/75 font-['Inter',sans-serif]">
              Always open to discussing backend architectures, information retrieval experiments, open-source work, or software engineering internships.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <div className="p-4 rounded-2xl bg-[#171725]/90 border border-white/10 flex items-center justify-between gap-3 shadow-inner">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF8A55]" />
                <span className="font-mono text-xs sm:text-sm text-[#FFF6EE]">
                  {personal.email}
                </span>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-[#FFF6EE] flex items-center gap-1.5 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#A8C9F0]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Mail Action */}
            <a
              href={`mailto:${personal.email}`}
              className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF8A55] to-[#F6A5C4] text-[#171725] font-mono font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-[#FF8A55]/20 hover:opacity-95 transition-opacity"
            >
              Send an Email
            </a>
          </div>

        </div>

        {/* Footer Navigation & Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          
          <div>
            <div className="font-mono text-xs text-[#FF8A55] font-bold uppercase mb-3">
              animesh.space
            </div>
            <p className="text-xs text-[#FFF6EE]/60 font-mono leading-relaxed">
              Y2K Dreamcore × Liminal Nostalgia × Moe Internet
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-[#F6A5C4] font-bold uppercase mb-3">
              Direct Links
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#work" className="text-[#FFF6EE]/75 hover:text-[#FFF6EE] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#opensource" className="text-[#FFF6EE]/75 hover:text-[#FFF6EE] transition-colors">
                  Open Source Ledger
                </a>
              </li>
              <li>
                <a href="#mixtape" className="text-[#FFF6EE]/75 hover:text-[#FFF6EE] transition-colors">
                  mixtape.exe
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#FFF6EE]/75 hover:text-[#FFF6EE] transition-colors">
                  Biography & Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs text-[#A8C9F0] font-bold uppercase mb-3">
              Verified Profiles
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-[#FFF6EE]/75 hover:text-[#FF8A55] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub (@animesh68)</span>
                </a>
              </li>
              <li>
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-[#FFF6EE]/75 hover:text-[#A8C9F0] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a 
                  href="/Animesh_Srivastava_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-[#FFF6EE]/75 hover:text-[#F6A5C4] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Verified Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs text-[#B8A8E8] font-bold uppercase mb-3">
              Environment
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono space-y-1.5">
              <div className="flex items-center justify-between text-[#FFF6EE]/70">
                <span>Location:</span>
                <span className="text-[#FFF6EE]">Ghaziabad, IN</span>
              </div>
              <div className="flex items-center justify-between text-[#FFF6EE]/70">
                <span>Coordinates:</span>
                <span className="text-[#A8C9F0]">28.67° N, 77.45° E</span>
              </div>
              <div className="flex items-center justify-between text-[#FFF6EE]/70">
                <span>Timezone:</span>
                <span className="text-[#FF8A55]">IST (UTC+05:30)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#FFF6EE]/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>© 2026 Animesh Srivastava. Built with React & Vite.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#FFF6EE]/80 hover:text-[#FFF6EE] transition-colors border border-white/5"
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
