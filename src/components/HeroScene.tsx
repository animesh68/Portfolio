import React from 'react'
import { ArrowDown, Mail, FileText, Terminal } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'

export const HeroScene: React.FC = () => {
  const { personal } = PORTFOLIO_DATA

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-20 px-4 sm:px-6"
    >
      {/* Hero Environmental Atmosphere Overlay for Crisp Text Contrast over Continuous Sunset */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#29263D]/25 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
      </div>

      {/* Environmental Lighting Effects */}
      <div 
        className="absolute top-[10%] right-[25%] w-40 h-40 rounded-full bg-[#FF8A55]/25 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div 
        className="absolute top-[45%] left-[35%] w-28 h-28 rounded-full bg-[#F6A5C4]/20 blur-2xl pointer-events-none"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center sm:text-left flex flex-col items-center sm:items-start mt-6 sm:mt-0">
        
        {/* Retro Y2K Status Pill - Warm translucent pastel */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF6EE]/90 backdrop-blur-md border border-[#F6A5C4]/50 shadow-md shadow-[#FF8A55]/10 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A55] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A55]" />
          </span>
          <span className="font-mono text-xs text-[#29263D] font-semibold tracking-wide">
            ORDINARY PLACES · EXTRAORDINARY SKIES
          </span>
          <span className="text-[#D982A5] text-xs">✦</span>
        </div>

        {/* Name Title */}
        <div className="relative mb-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFF6EE] font-['Sora',sans-serif] drop-shadow-lg">
            {personal.name}
          </h1>
          <div className="flex items-center gap-2 mt-1.5 justify-center sm:justify-start">
            <span className="text-xs font-mono text-[#FFD4B8] uppercase tracking-wider font-semibold drop-shadow">
              B.Tech CSE (AI) · KIET Ghaziabad (2024–2028)
            </span>
            <span className="text-xs text-[#A8C9F0]">·</span>
            <span className="text-xs font-mono text-[#FFF6EE] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
              CGPA: 7.96/10
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FFF6EE] leading-tight mb-4 font-['Sora',sans-serif] max-w-2xl drop-shadow-md">
          "{personal.headline}"
        </p>

        {/* Supporting Summary Text */}
        <p className="text-sm sm:text-base text-[#FFF6EE]/95 font-normal leading-relaxed max-w-2xl mb-2 font-['Inter',sans-serif] drop-shadow">
          Computer Science undergraduate exploring <strong className="text-[#FFF6EE] font-semibold underline decoration-[#FF8A55]/60 underline-offset-4">backend engineering</strong>, <strong className="text-[#FFF6EE] font-semibold underline decoration-[#F6A5C4]/60 underline-offset-4">AI/ML systems</strong>, <strong className="text-[#FFF6EE] font-semibold underline decoration-[#A8C9F0]/60 underline-offset-4">information retrieval</strong>, and <strong className="text-[#FFF6EE] font-semibold underline decoration-[#B8A8E8]/60 underline-offset-4">open-source software</strong>.
        </p>

        {/* Artistic Supporting Line */}
        <p className="text-xs sm:text-sm text-[#FFD4B8] italic font-mono mb-8 max-w-xl drop-shadow">
          ~ {personal.supportingLine}
        </p>

        {/* Call to Action Buttons - Warm Cream, Peach, and Dusty Pink */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 mb-10 w-full sm:w-auto">
          <a
            href="#work"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF8A55] via-[#FFD4B8] to-[#F6A5C4] text-[#29263D] font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF8A55]/25 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all border border-white/60"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-[#29263D]" />
          </a>

          <a
            href="#opensource"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#FFF6EE]/90 backdrop-blur-md text-[#29263D] border border-[#F6A5C4]/50 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white hover:border-[#FF8A55]/60 transition-all active:scale-95 shadow-md shadow-[#29263D]/10"
          >
            <Terminal className="w-4 h-4 text-[#D982A5]" />
            <span>Open Source</span>
          </a>

          <a
            href="/Animesh_Srivastava_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 backdrop-blur-md text-[#29263D] border border-[#B8A8E8]/50 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-all active:scale-95 shadow-md shadow-[#29263D]/10"
            title="View verified resume PDF"
          >
            <FileText className="w-4 h-4 text-[#FF8A55]" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Social Links & Fast Contact Bar */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2 w-full max-w-2xl text-xs font-mono">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/25 hover:bg-black/40 backdrop-blur-md text-[#FFF6EE] hover:text-[#FFD4B8] border border-white/25 transition-all shadow-xs"
            title="Open GitHub Profile (@animesh68)"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/25 hover:bg-black/40 backdrop-blur-md text-[#FFF6EE] hover:text-[#A8C9F0] border border-white/25 transition-all shadow-xs"
            title="Open LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/25 hover:bg-black/40 backdrop-blur-md text-[#FFF6EE] hover:text-[#F6A5C4] border border-white/25 transition-all shadow-xs"
            title="Send email to animeshyt68@gmail.com"
          >
            <Mail className="w-3.5 h-3.5 text-[#FF8A55]" />
            <span>{personal.email}</span>
          </a>
        </div>
      </div>

      {/* Bottom Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#29263D]/80 font-mono text-[10px] animate-bounce">
        <span>ABOUT ANIMESH</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#FF8A55]" />
      </div>
    </section>
  )
}
