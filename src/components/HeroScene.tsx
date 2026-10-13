import React from 'react'
import { ArrowDown, Mail, FileText, Sparkles, Terminal } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'

export const HeroScene: React.FC = () => {
  const { personal } = PORTFOLIO_DATA

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6"
    >
      {/* Background Photograph: Parking lot sunset with streetlights & dramatic orange clouds */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/parking-lot-sunset.jpg"
          alt="Cinematic orange sunset over a quiet supermarket parking lot with streetlights and cars"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
          loading="eager"
        />
        
        {/* Soft Vignette & Color Grading Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171725] via-[#171725]/50 to-[#171725]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171725]/75 via-transparent to-[#171725]/60" />
        
        {/* Film grain layer */}
        <div className="absolute inset-0 film-grain pointer-events-none" />
      </div>

      {/* Environmental Lighting Effects */}
      <div 
        className="absolute top-[8%] right-[28%] w-32 h-32 rounded-full bg-[#FF8A55]/30 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div 
        className="absolute top-[48%] left-[38%] w-20 h-20 rounded-full bg-[#FF8A55]/25 blur-2xl pointer-events-none"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center sm:text-left flex flex-col items-center sm:items-start mt-8 sm:mt-0">
        
        {/* Retro Y2K Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#29263D]/80 backdrop-blur-md border border-[#F6A5C4]/30 shadow-lg mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A55] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A55]" />
          </span>
          <span className="font-mono text-xs text-[#FFF6EE]/90">
            ORDINARY PLACES · EXTRAORDINARY SKIES
          </span>
          <span className="text-[#F6A5C4] text-xs">✦</span>
        </div>

        {/* Name Title */}
        <div className="relative mb-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFF6EE] font-['Sora',sans-serif] drop-shadow-md">
            {personal.name}
          </h1>
          <div className="flex items-center gap-2 mt-1 justify-center sm:justify-start">
            <span className="text-xs font-mono text-[#F6A5C4] uppercase tracking-wider font-semibold">
              B.Tech CSE (AI) · KIET Ghaziabad (2024–2028)
            </span>
            <span className="text-xs text-[#A8C9F0]">·</span>
            <span className="text-xs font-mono text-[#A8C9F0]">CGPA: 7.96/10</span>
          </div>
        </div>

        {/* Hero Headline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#FFF6EE] leading-tight mb-4 font-['Sora',sans-serif] max-w-2xl text-glow-orange">
          "{personal.headline}"
        </p>

        {/* Supporting Summary Text */}
        <p className="text-sm sm:text-base text-[#FFF6EE]/90 font-normal leading-relaxed max-w-2xl mb-2 font-['Inter',sans-serif] drop-shadow">
          Computer Science undergraduate exploring <strong className="text-[#FFF6EE] font-semibold">backend engineering</strong>, <strong className="text-[#FFF6EE] font-semibold">AI/ML systems</strong>, <strong className="text-[#FFF6EE] font-semibold">information retrieval</strong>, and <strong className="text-[#FFF6EE] font-semibold">open-source software</strong>.
        </p>

        {/* Artistic Supporting Line */}
        <p className="text-xs sm:text-sm text-[#F6A5C4]/90 italic font-mono mb-8 max-w-xl">
          ~ {personal.supportingLine}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 mb-10 w-full sm:w-auto">
          <a
            href="#work"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF8A55] to-[#F6A5C4] text-[#171725] font-mono font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[#FF8A55]/30 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/Animesh_Srivastava_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#29263D]/80 backdrop-blur-md text-[#FFF6EE] border border-[#F6A5C4]/30 font-mono text-xs uppercase tracking-wider hover:bg-[#29263D] hover:border-[#FF8A55]/60 transition-all active:scale-95 shadow-md"
          >
            <FileText className="w-4 h-4 text-[#F6A5C4]" />
            <span>View Resume</span>
          </a>

          <a
            href="#mixtape"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#171725]/60 backdrop-blur-md text-[#A8C9F0] border border-[#A8C9F0]/20 font-mono text-xs hover:text-[#FFF6EE] hover:border-[#A8C9F0]/50 transition-all"
            title="Jump to mixtape.exe"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A8C9F0]" />
            <span>mixtape.exe</span>
          </a>
        </div>

        {/* Social Links & Fast Readout Bar */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4 border-t border-white/10 w-full max-w-2xl">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#FFF6EE]/80 hover:text-[#FF8A55] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/animesh68</span>
          </a>

          <span className="text-[#FFF6EE]/20 hidden sm:inline">•</span>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#FFF6EE]/80 hover:text-[#A8C9F0] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>linkedin/animesh-srivastava</span>
          </a>

          <span className="text-[#FFF6EE]/20 hidden sm:inline">•</span>

          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-1.5 text-xs font-mono text-[#FFF6EE]/80 hover:text-[#F6A5C4] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{personal.email}</span>
          </a>
        </div>

        {/* Verified Contributions Snapshot Badge */}
        <div className="mt-6 flex items-center gap-2 text-[11px] font-mono text-[#FFF6EE]/70 bg-[#171725]/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
          <Terminal className="w-3.5 h-3.5 text-[#FF8A55]" />
          <span>Merged contributions:</span>
          <span className="text-[#F6A5C4] font-semibold">TensorFlow</span> · 
          <span className="text-[#A8C9F0] font-semibold">bpftrace</span> · 
          <span className="text-[#FF8A55] font-semibold">CyberChef</span> · 
          <span className="text-[#B8A8E8] font-semibold">CatBoost</span> · 
          <span className="text-[#FFF6EE] font-semibold">OpenSeadragon (v6.1.1)</span>
        </div>
      </div>

      {/* Bottom Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#FFF6EE]/60 font-mono text-[10px] animate-bounce">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#FF8A55]" />
      </div>
    </section>
  )
}
