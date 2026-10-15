import React, { useEffect } from 'react'
import { X, ExternalLink, Terminal, CheckCircle2, Layers, Cpu, Database } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { GithubIcon } from './Icons'

interface ProjectCaseStudyModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#29263D]/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FFFDFB] border border-[#F6A5C4]/40 shadow-[0_20px_60px_rgba(41,38,61,0.18)] text-[#29263D] p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Window Chrome Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#29263D]/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF8A55]" />
            <span className="w-3 h-3 rounded-full bg-[#F6A5C4]" />
            <span className="w-3 h-3 rounded-full bg-[#A8C9F0]" />
            <span className="text-xs font-mono text-[#D982A5] ml-2 uppercase tracking-wider font-semibold">
              CASE_STUDY_INSPECTION_MODE // {project.id}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#FFF6EE] hover:bg-[#FFD4B8]/40 border border-[#29263D]/10 text-[#29263D] transition-colors focus:ring-2 focus:ring-[#FF8A55]"
            aria-label="Close case study dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Header */}
        <div className="mb-6">
          <div className="inline-block px-2.5 py-1 rounded-full bg-[#FF8A55]/15 border border-[#FF8A55]/30 text-[#FF8A55] text-xs font-mono font-semibold mb-2">
            {project.category}
          </div>
          <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold font-['Sora',sans-serif] text-[#29263D] mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[#504A75] font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Verified Metrics / Fact Sheet */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-[#FFF6EE] border border-[#FF8A55]/20">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-mono text-[#29263D]/65 uppercase tracking-wide">
                  {m.label}
                </span>
                <span className="text-sm sm:text-base font-bold font-mono text-[#FF8A55]">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* System Architecture / Summary */}
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xs font-mono text-[#D982A5] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Terminal className="w-3.5 h-3.5" />
              Problem Scope & Architectural Summary
            </h3>
            <p className="text-sm text-[#29263D]/90 leading-relaxed font-['Inter',sans-serif] bg-[#F7F4FB] p-4 rounded-2xl border border-[#B8A8E8]/20">
              {project.fullSummary}
            </p>
          </div>

          {/* Key Engineering Implementations */}
          <div>
            <h3 className="text-xs font-mono text-[#FF8A55] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-bold">
              <Cpu className="w-3.5 h-3.5" />
              Verified Engineering Capabilities & Technical Approach
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29263D]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#3E6FB0] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights & Guardrails */}
          {project.highlights && (
            <div>
              <h3 className="text-xs font-mono text-[#7B68B8] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Layers className="w-3.5 h-3.5" />
                Key Architectural Decisions & Guarantees
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FFF6EE] border border-[#F6A5C4]/30 text-xs font-mono text-[#29263D]/80">
                    <span className="text-[#D982A5] font-bold mr-1.5">▸</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real Screenshots Showcase */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="text-xs font-mono text-[#3E6FB0] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-bold">
                <Database className="w-3.5 h-3.5" />
                Verified Artifacts & Visual Telemetry
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {project.screenshots.map((s, idx) => (
                  <div key={idx} className="group rounded-2xl overflow-hidden border border-[#29263D]/10 bg-[#FFF6EE]">
                    <img
                      src={s.url}
                      alt={s.caption}
                      className="w-full max-h-96 object-contain bg-white p-2"
                      loading="lazy"
                    />
                    <div className="p-3 bg-[#FFF6EE] border-t border-[#29263D]/5 text-xs font-mono text-[#29263D]/80 text-center">
                      <span className="text-[#FF8A55] font-bold mr-1.5">[FIGURE {idx + 1}]</span>
                      {s.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div>
            <h3 className="text-xs font-mono text-[#29263D]/60 uppercase tracking-wider mb-2 font-semibold">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-lg bg-[#FFF6EE] border border-[#29263D]/10 text-xs font-mono text-[#29263D]/85 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#29263D]/10">
          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#FFF6EE] text-xs font-mono text-[#29263D] border border-[#29263D]/15 transition-colors shadow-xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF8A55] to-[#F6A5C4] text-white text-xs font-mono font-semibold transition-all hover:opacity-95 shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#FFF6EE] text-xs font-mono text-[#3E6FB0] border border-[#29263D]/10 transition-colors shadow-xs"
              >
                <span>API Docs</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-[#29263D]/60 hover:text-[#29263D] transition-colors"
          >
            Press ESC or click outside to dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
