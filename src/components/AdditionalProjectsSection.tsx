import React from 'react'
import { ExternalLink, ArrowUpRight, FlaskConical } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { GithubIcon } from './Icons'

interface AdditionalProjectsProps {
  onSelectProject: (project: Project) => void
}

export const AdditionalProjectsSection: React.FC<AdditionalProjectsProps> = ({ onSelectProject }) => {
  const { additionalProjects } = PORTFOLIO_DATA

  return (
    <section id="experiments" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FC] border border-[#A8C9F0]/40 text-[#2B5A8F] text-xs font-mono mb-2.5 shadow-xs">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>RESEARCH & QUANTITATIVE EXPERIMENTS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Sora',sans-serif] text-[#29263D] tracking-tight mb-2">
          Other things I've explored.
        </h2>
        <p className="text-sm text-[#29263D]/70 font-mono max-w-xl">
          Deep-dives in high-dimensional vector retrieval trade-offs and multi-model financial signals.
        </p>
      </div>

      {/* 2 Compact Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {additionalProjects.map((project) => {
          const isFanns = project.id === 'fanns-research'

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-[#F6A5C4]/30 hover:border-[#FF8A55]/50 transition-all duration-300 shadow-sm shadow-[#29263D]/5 hover:shadow-md cursor-pointer hover:-translate-y-0.5"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#2B5A8F] bg-[#EBF4FC] px-3 py-1 rounded-full border border-[#A8C9F0]/40 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#29263D]/50 font-medium">
                    EXPERIMENT
                  </span>
                </div>

                <h3 className="text-xl font-bold font-['Sora',sans-serif] text-[#29263D] group-hover:text-[#FF8A55] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#29263D]/80 leading-relaxed mb-4 font-['Inter',sans-serif]">
                  {project.description}
                </p>

                {/* Project Image Treatment */}
                <div className="mb-4 rounded-2xl overflow-hidden border border-black/5 bg-[#FFF9F5] aspect-[16/9] flex items-center justify-center relative shadow-inner">
                  {isFanns ? (
                    // Dedicated FANNS empirical trade-off plot
                    <img
                      src="/assets/projects/fanns-tradeoff.png"
                      alt="Empirical Trade-off: Recall@10 vs Latency Across 11 Filtering Strategies"
                      className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    // Dedicated Nocturne.ai financial analytics overview
                    <img
                      src="/assets/projects/nocturne-ai.jpg"
                      alt="Nocturne.ai Quantitative Research & Market Analytics Overview"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}

                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-[#29263D] bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-[#F6A5C4]/40 shadow-xs">
                    <span>{isFanns ? 'Empirical Recall@10 Trade-off' : 'Market Analytics & Financial Signals'}</span>
                    <span className={isFanns ? 'text-[#3D6E9E] font-semibold' : 'text-[#FF8A55] font-semibold'}>
                      {isFanns ? '16,500 Queries' : 'Live Sentiment Signals'}
                    </span>
                  </div>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full bg-[#FFF6EE] text-[11px] font-mono text-[#29263D] font-medium border border-[#FF8A55]/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3.5 border-t border-black/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1 text-xs font-mono font-bold text-[#29263D] group-hover:text-[#FF8A55] transition-colors"
                >
                  <span>Detailed Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A55]" />
                </button>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#FFF6EE] hover:bg-[#FFD4B8] text-[#29263D]/80 hover:text-[#29263D] transition-colors border border-black/5 shadow-2xs"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#FFF0E5] hover:bg-[#FFD4B8] text-[#FF8A55] hover:text-[#29263D] transition-colors border border-[#FF8A55]/30 shadow-2xs"
                      title="Open Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
