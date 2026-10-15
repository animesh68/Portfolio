import React from 'react'
import { ExternalLink, ArrowUpRight, FolderCode } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { GithubIcon } from './Icons'

interface ProjectSectionProps {
  onSelectProject: (project: Project) => void
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onSelectProject }) => {
  const { featuredProjects } = PORTFOLIO_DATA

  // Custom accent themes for the 3 featured projects
  const getCardTheme = (id: string) => {
    switch (id) {
      case 'lakers-in-5':
        return {
          cardBg: 'bg-[#FFF9F5]/95',
          border: 'border-[#FF8A55]/35 hover:border-[#FF8A55]/60',
          badgeBg: 'bg-[#FFD4B8]/60 text-[#C75220] border-[#FF8A55]/30',
          imageSurround: 'bg-[#FFEEDE]',
          accentText: 'text-[#FF8A55]',
          shadow: 'shadow-[0_12px_32px_-12px_rgba(255,138,85,0.18)]',
          chipBg: 'bg-[#FFF0E5] border-[#FF8A55]/20 text-[#29263D]'
        }
      case 'crt-archaeologist':
        return {
          cardBg: 'bg-[#F6FAFE]/95',
          border: 'border-[#A8C9F0]/45 hover:border-[#A8C9F0]/70',
          badgeBg: 'bg-[#D9EAFE]/70 text-[#2B5A8F] border-[#A8C9F0]/40',
          imageSurround: 'bg-[#EAF2FC]',
          accentText: 'text-[#3D6E9E]',
          shadow: 'shadow-[0_12px_32px_-12px_rgba(168,201,240,0.22)]',
          chipBg: 'bg-[#EEF5FD] border-[#A8C9F0]/30 text-[#29263D]'
        }
      case 'otoichi':
      default:
        return {
          cardBg: 'bg-[#FEF7F9]/95',
          border: 'border-[#F6A5C4]/45 hover:border-[#F6A5C4]/70',
          badgeBg: 'bg-[#FCE2EC]/80 text-[#A83D68] border-[#F6A5C4]/40',
          imageSurround: 'bg-[#FCEEF3]',
          accentText: 'text-[#D982A5]',
          shadow: 'shadow-[0_12px_32px_-12px_rgba(246,165,196,0.22)]',
          chipBg: 'bg-[#FDF0F4] border-[#F6A5C4]/30 text-[#29263D]'
        }
    }
  }

  return (
    <section id="work" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Decorative Blur */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#FFD4B8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#D9D7FA]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] border border-[#FF8A55]/30 text-[#FF8A55] text-xs font-mono mb-3 shadow-xs">
          <FolderCode className="w-3.5 h-3.5" />
          <span>FEATURED ENGINEERING WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#29263D] tracking-tight mb-3">
          Little things I've been building.
        </h2>
        <p className="text-sm sm:text-base text-[#29263D]/75 font-mono max-w-2xl">
          Experiments in prediction, retrieval, and systems that make information useful.
        </p>
      </div>

      {/* Primary Featured Projects — Exactly 3 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {featuredProjects.map((project, idx) => {
          const theme = getCardTheme(project.id)

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group relative flex flex-col justify-between rounded-3xl ${theme.cardBg} backdrop-blur-md border ${theme.border} transition-all duration-300 ${theme.shadow} overflow-hidden cursor-pointer hover:-translate-y-1`}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`font-mono text-xs font-semibold px-3 py-1 rounded-full border ${theme.badgeBg}`}>
                    0{idx + 1} // {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#29263D]/50 font-medium">
                    {project.technologies.slice(0, 2).join(' · ')}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-['Sora',sans-serif] text-[#29263D] group-hover:text-[#FF8A55] transition-colors mb-2.5">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#29263D]/80 font-['Inter',sans-serif] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Dedicated Visual Container */}
              <div className="px-6 mb-4">
                <div className={`relative rounded-2xl overflow-hidden border border-black/5 ${theme.imageSurround} p-2 aspect-video flex items-center justify-center shadow-inner`}>
                  <img
                    src={project.screenshots[0]?.url || '/assets/pastel-dreamcore-horizon.jpg'}
                    alt={project.screenshots[0]?.caption || project.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#29263D] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#F6A5C4]/30 shadow-xs">
                    <span className="truncate max-w-[200px]">{project.screenshots[0]?.caption || 'System Telemetry'}</span>
                    <span className="text-[#FF8A55] font-semibold shrink-0 ml-1">✦ VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Metrics Chips */}
              {project.metrics && (
                <div className="px-6 mb-5 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className={`${theme.chipBg} p-2 rounded-xl border shadow-2xs`}>
                      <div className="text-[#29263D]/60 text-[10px] uppercase truncate font-medium">{m.label}</div>
                      <div className="text-[#29263D] font-bold truncate text-xs">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Actions */}
              <div className="p-6 pt-3.5 border-t border-black/5 flex items-center justify-between gap-2 mt-auto bg-white/40">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#29263D] group-hover:text-[#FF8A55] transition-colors py-1"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF8A55]" />
                </button>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white hover:bg-[#FFF0E5] text-[#29263D]/80 hover:text-[#29263D] transition-colors border border-black/5 shadow-2xs"
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
