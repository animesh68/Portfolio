import React from 'react'
import { ExternalLink, ArrowUpRight, Terminal, Layers, Sparkles } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { PORTFOLIO_DATA } from '../data/portfolio'
import { GithubIcon } from './Icons'

interface ProjectSectionProps {
  onSelectProject: (project: Project) => void
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onSelectProject }) => {
  const { featuredProjects, additionalProjects } = PORTFOLIO_DATA

  return (
    <section id="work" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A55]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#B8A8E8]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29263D]/80 border border-[#FF8A55]/20 text-[#FF8A55] text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>ENGINEERING CASE STUDIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#FFF6EE] tracking-tight mb-3">
          Little things I've been building.
        </h2>
        <p className="text-sm sm:text-base text-[#A8C9F0] font-mono max-w-2xl">
          Experiments in prediction, retrieval, and systems that make information useful.
        </p>
      </div>

      {/* Primary Featured Projects — 3 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {featuredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#29263D]/60 hover:bg-[#29263D]/90 border border-white/10 hover:border-[#FF8A55]/40 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
          >
            {/* Top Accent Ribbon with Project Index */}
            <div className="p-5 pb-3">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#FF8A55] font-semibold bg-[#FF8A55]/10 px-2.5 py-1 rounded-full border border-[#FF8A55]/20">
                  0{idx + 1} // {project.category.split('/')[0].trim()}
                </span>
                <span className="text-[11px] font-mono text-[#FFF6EE]/40">
                  {project.technologies[0]} · {project.technologies[1]}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-['Sora',sans-serif] text-[#FFF6EE] group-hover:text-[#FF8A55] transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#FFF6EE]/80 font-['Inter',sans-serif] leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>
            </div>

            {/* Visual Preview / Real Diagram Snippet */}
            <div className="relative mx-5 rounded-xl overflow-hidden border border-white/10 bg-[#171725]/80 aspect-video mb-4">
              <img
                src={project.screenshots[0]?.url || '/assets/pastel-dreamcore-horizon.jpg'}
                alt={project.screenshots[0]?.caption || project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171725] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-[#FFF6EE]/80 bg-[#171725]/85 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                <span className="truncate">{project.screenshots[0]?.caption || 'System Telemetry'}</span>
                <span className="text-[#FF8A55] shrink-0 ml-1">VERIFIED</span>
              </div>
            </div>

            {/* Metrics Chips */}
            {project.metrics && (
              <div className="px-5 mb-4 grid grid-cols-2 gap-2 text-[11px] font-mono">
                {project.metrics.slice(0, 2).map((m, mIdx) => (
                  <div key={mIdx} className="bg-[#171725]/60 p-2 rounded-lg border border-white/5">
                    <div className="text-[#FFF6EE]/50 text-[10px] uppercase truncate">{m.label}</div>
                    <div className="text-[#A8C9F0] font-semibold truncate">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Actions */}
            <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto bg-[#171725]/40">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FFF6EE] hover:text-[#FF8A55] transition-colors py-1.5"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF8A55]" />
              </button>

              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#FFF6EE]/80 hover:text-[#FFF6EE] transition-colors border border-white/5"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#FF8A55]/15 hover:bg-[#FF8A55]/25 text-[#FF8A55] transition-colors border border-[#FF8A55]/30"
                    title="Open Live Deployment"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Projects Grid — Otoichi & Nocturne.ai */}
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-mono text-[#F6A5C4] uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Additional Full-Stack & Applied Systems
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-[#29263D]/40 hover:bg-[#29263D]/70 border border-white/10 hover:border-[#A8C9F0]/40 transition-all duration-300 shadow-md cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#A8C9F0] bg-[#A8C9F0]/10 px-2.5 py-0.5 rounded-full border border-[#A8C9F0]/20">
                    {project.category}
                  </span>
                  {project.liveUrl && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE DEPLOYMENT
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-['Sora',sans-serif] text-[#FFF6EE] group-hover:text-[#A8C9F0] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#FFF6EE]/80 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 6).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#171725]/60 text-[11px] font-mono text-[#FFF6EE]/70 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1 text-xs font-mono text-[#FFF6EE]/90 hover:text-[#FF8A55] transition-colors"
                >
                  <span>Detailed Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#FFF6EE]/80 hover:text-[#FFF6EE] transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#FF8A55] text-[#171725] text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
