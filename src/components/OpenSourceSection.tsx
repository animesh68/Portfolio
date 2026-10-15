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
          color: 'text-[#C75220] bg-[#FFF0E5] border-[#FF8A55]/30'
        }
      case 'core-fix':
        return {
          icon: Bug,
          label: 'CORE ENGINE FIX',
          color: 'text-[#A83D68] bg-[#FCE2EC] border-[#F6A5C4]/40'
        }
      case 'tooling':
        return {
          icon: Cpu,
          label: 'TOOLING & CI',
          color: 'text-[#2B5A8F] bg-[#EBF4FC] border-[#A8C9F0]/40'
        }
      default:
        return {
          icon: BookOpen,
          label: 'DOCUMENTATION',
          color: 'text-emerald-700 bg-emerald-50 border-emerald-300'
        }
    }
  }

  return (
    <section id="opensource" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Section Atmosphere */}
      <div className="absolute top-1/2 -right-10 w-80 h-80 rounded-full bg-[#FFD4B8]/20 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FC] border border-[#A8C9F0]/40 text-[#2B5A8F] text-xs font-mono mb-2.5 shadow-xs">
          <GitPullRequest className="w-3.5 h-3.5 text-[#2B5A8F]" />
          <span>UPSTREAM MERGED CONTRIBUTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#29263D] tracking-tight mb-3">
          Merged PRs
        </h2>
        <p className="text-sm sm:text-base text-[#29263D]/75 font-mono max-w-2xl">
          Understanding existing codebases, investigating edge cases, and contributing practical upstream improvements.
        </p>
      </div>

      {/* Soft Pastel Window / Contribution Ledger */}
      <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#F6A5C4]/35 shadow-sm shadow-[#29263D]/5 overflow-hidden">
        {/* Warm Window Titlebar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#FFF9F5] border-b border-[#F6A5C4]/20">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A55]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6A5C4]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8C9F0]" />
            <span className="text-xs font-mono text-[#29263D] ml-2 font-bold">
              animesh68@upstream-ledger:~$ git log --merges --upstream
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline font-semibold">ALL PRS MERGED / VERIFIED</span>
          </div>
        </div>

        {/* Ledger Items Table / Feed */}
        <div className="divide-y divide-[#F6A5C4]/15">
          {openSourceContributions.map((item) => {
            const cat = getCategoryBadge(item.category)
            const IconComp = cat.icon

            return (
              <div 
                key={item.id} 
                className="p-5 sm:p-6 hover:bg-[#FFF9F5]/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left Column: Repository name & commit metadata */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-base font-bold text-[#29263D]">
                      {item.project}
                    </span>
                    <span className="text-xs font-mono text-[#29263D]/50">
                      ({item.repo})
                    </span>

                    <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${cat.color}`}>
                      <IconComp className="w-3 h-3" />
                      {cat.label}
                    </span>

                    {item.commitHash && (
                      <span className="text-[11px] font-mono bg-[#FFF0E5] px-2 py-0.5 rounded-md border border-[#FF8A55]/25 text-[#C75220] font-semibold">
                        commit {item.commitHash}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#29263D]/85 font-['Inter',sans-serif] mb-2 leading-relaxed">
                    {item.headline}
                  </p>

                  <p className="text-xs text-[#29263D]/70 font-mono">
                    <span className="text-[#D982A5] font-semibold mr-1">↳ Impact:</span>
                    {item.impact}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FFF6EE] text-[#29263D]/75 border border-[#FF8A55]/15"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action: Upstream Link */}
                <div className="shrink-0 flex items-center md:flex-col md:items-end justify-between md:justify-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-[#F6A5C4]/15">
                  <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Merged Upstream
                  </span>

                  {item.prUrl && (
                    <a
                      href={item.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF6EE] hover:bg-[#FFD4B8]/60 text-xs font-mono font-semibold text-[#29263D] border border-[#FF8A55]/25 transition-colors shadow-2xs"
                      title={`Visit ${item.project} repository`}
                    >
                      <span>Inspect Commit</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FF8A55]" />
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Window Footer Status */}
        <div className="p-3.5 bg-[#FFF9F5] border-t border-[#F6A5C4]/20 flex items-center justify-between text-[11px] font-mono text-[#29263D]/60">
          <span>7 canonical contributions indexed across C++, Java, Python, and JavaScript codebases</span>
          <span className="text-[#FF8A55] font-semibold">exit status: 0 (OK)</span>
        </div>
      </div>
    </section>
  )
}
