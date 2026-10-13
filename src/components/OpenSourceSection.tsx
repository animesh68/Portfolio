import React from 'react'
import { GitPullRequest, ExternalLink, ShieldCheck, Bug, Cpu, BookOpen } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'

export const OpenSourceSection: React.FC = () => {
  const { openSourceContributions } = PORTFOLIO_DATA

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'memory-leak':
        return {
          icon: ShieldCheck,
          label: 'MEMORY LEAK RESOLVED',
          color: 'text-amber-400 bg-amber-400/10 border-amber-400/30'
        }
      case 'core-fix':
        return {
          icon: Bug,
          label: 'CORE ENGINE FIX',
          color: 'text-[#F6A5C4] bg-[#F6A5C4]/10 border-[#F6A5C4]/30'
        }
      case 'tooling':
        return {
          icon: Cpu,
          label: 'TOOLING & CI',
          color: 'text-[#A8C9F0] bg-[#A8C9F0]/10 border-[#A8C9F0]/30'
        }
      default:
        return {
          icon: BookOpen,
          label: 'DOCUMENTATION',
          color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
        }
    }
  }

  return (
    <section id="opensource" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Section Atmosphere */}
      <div className="absolute top-1/2 -right-10 w-80 h-80 rounded-full bg-[#FF8A55]/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29263D]/80 border border-[#A8C9F0]/20 text-[#A8C9F0] text-xs font-mono mb-3">
          <GitPullRequest className="w-3.5 h-3.5 text-[#A8C9F0]" />
          <span>UPSTREAM MERGED CONTRIBUTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#FFF6EE] tracking-tight mb-3">
          Small fixes. Real impact.
        </h2>
        <p className="text-sm sm:text-base text-[#A8C9F0] font-mono max-w-2xl">
          Contributing to the tools and projects other developers rely on.
        </p>
      </div>

      {/* Retro System Window Chrome / Contribution Ledger */}
      <div className="rounded-2xl bg-[#1d1b2c]/90 border border-[#F6A5C4]/25 shadow-2xl overflow-hidden">
        {/* Retro Terminal Titlebar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#29263D]/90 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#FF8A55]" />
            <span className="w-3 h-3 rounded-full bg-[#F6A5C4]" />
            <span className="w-3 h-3 rounded-full bg-[#A8C9F0]" />
            <span className="text-xs font-mono text-[#FFF6EE]/80 ml-2 font-semibold">
              animesh68@upstream-ledger:~$ git log --merges --upstream
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-[#A8C9F0]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">ALL PRS MERGED / VERIFIED</span>
          </div>
        </div>

        {/* Ledger Items Table / Feed */}
        <div className="divide-y divide-white/5">
          {openSourceContributions.map((item) => {
            const cat = getCategoryBadge(item.category)
            const IconComp = cat.icon

            return (
              <div 
                key={item.id} 
                className="p-5 sm:p-6 hover:bg-[#29263D]/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left Column: Repository name & commit metadata */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#FFF6EE]">
                      {item.project}
                    </span>
                    <span className="text-xs font-mono text-[#FFF6EE]/40">
                      ({item.repo})
                    </span>

                    <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${cat.color}`}>
                      <IconComp className="w-3 h-3" />
                      {cat.label}
                    </span>

                    {item.commitHash && (
                      <span className="text-[11px] font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10 text-[#FF8A55]">
                        commit {item.commitHash}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#FFF6EE]/90 font-['Inter',sans-serif] mb-2 leading-relaxed">
                    {item.headline}
                  </p>

                  <p className="text-xs text-[#A8C9F0]/80 font-mono">
                    <span className="text-[#F6A5C4] mr-1">↳ Result:</span>
                    {item.impact}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#FFF6EE]/60 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action: Upstream Link */}
                <div className="shrink-0 flex items-center md:flex-col md:items-end justify-between md:justify-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Merged upstream
                  </span>

                  {item.prUrl && (
                    <a
                      href={item.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono text-[#FFF6EE] border border-white/10 transition-colors"
                      title={`Visit ${item.project} repository`}
                    >
                      <span>Inspect</span>
                      <ExternalLink className="w-3 h-3 text-[#A8C9F0]" />
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Window Footer Status */}
        <div className="p-3 bg-[#171725] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#FFF6EE]/50">
          <span>7 canonical contributions indexed across C++, Java, Python, and JavaScript codebases</span>
          <span className="text-[#FF8A55]">exit status: 0 (OK)</span>
        </div>
      </div>
    </section>
  )
}
