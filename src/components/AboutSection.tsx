import React from 'react'
import { User, GraduationCap, Award, Code, Server, Cpu, Database, Layout, Cloud, Terminal, Sparkles, TerminalSquare } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'

export const AboutSection: React.FC = () => {
  const { personal, skills, achievements, certifications } = PORTFOLIO_DATA

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4 text-[#FF8A55]" />
      case 'Server': return <Server className="w-4 h-4 text-[#A8C9F0]" />
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#D982A5]" />
      case 'Database': return <Database className="w-4 h-4 text-emerald-600" />
      case 'Layout': return <Layout className="w-4 h-4 text-[#B8A8E8]" />
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#FF8A55]" />
      default: return <Terminal className="w-4 h-4 text-[#A8C9F0]" />
    }
  }

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Subtle Atmosphere */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-[#FFD4B8]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#F6A5C4]/20 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] border border-[#FF8A55]/30 text-[#FF8A55] text-xs font-mono mb-3 shadow-xs">
          <User className="w-3.5 h-3.5" />
          <span>PERSONAL INTRODUCTION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#29263D] tracking-tight mb-3">
          A bit about me.
        </h2>
        <p className="text-sm sm:text-base text-[#29263D]/75 font-mono max-w-2xl">
          Computer Science undergraduate exploring backend systems, information retrieval, and open source.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Personal Narrative + Prominent Hitori Gotoh Coding Feature (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Personal Bio Card with Hitori Gotoh Coding Feature */}
          <div className="p-6 sm:p-8 rounded-3xl pastel-card space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              
              {/* Prominent Hitori Gotoh Coding Illustration (Must-Use Asset) */}
              <div className="shrink-0 relative group">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-white shadow-md shadow-[#FF8A55]/15 bg-white p-1.5 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/assets/bocchi-coding.jpg"
                    alt="Hitori Gotoh coding at a laptop with shades - Bocchi the Rock!"
                    className="w-full h-full object-cover rounded-xl"
                    loading="eager"
                  />
                </div>
                {/* Cute tape accent */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#FFD4B8]/80 backdrop-blur-xs border border-white/60 rotate-2 pointer-events-none rounded-xs shadow-xs" />
              </div>

              {/* Bio Copy */}
              <div className="space-y-3 text-center sm:text-left flex-1">
                <h3 className="text-lg sm:text-xl font-bold font-['Sora',sans-serif] text-[#29263D] flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[#FF8A55]">✦</span>
                  Hello, I'm Animesh.
                </h3>

                <p className="text-sm sm:text-base text-[#29263D]/85 leading-relaxed font-['Inter',sans-serif]">
                  I am a Computer Science undergraduate interested in <strong className="text-[#29263D] font-semibold">backend engineering</strong>, <strong className="text-[#29263D] font-semibold">AI/ML systems</strong>, <strong className="text-[#29263D] font-semibold">information retrieval</strong>, and <strong className="text-[#29263D] font-semibold">open-source software</strong>.
                </p>

                <p className="text-sm text-[#29263D]/80 leading-relaxed font-['Inter',sans-serif]">
                  I enjoy building systems that make complex information more useful, investigating technical problems, and contributing improvements to software used by others.
                </p>

                <p className="text-xs text-[#D982A5] italic font-mono pt-2 border-t border-[#F6A5C4]/25">
                  "{personal.personalTouch}"
                </p>
              </div>

            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-3xl pastel-card-cream">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A55] uppercase tracking-wider mb-4 font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#FF8A55]/20 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-[#29263D] font-['Sora',sans-serif]">
                    {personal.education.institution}
                  </h4>
                  <span className="text-xs font-mono text-[#29263D] bg-[#FFD4B8]/60 px-2.5 py-0.5 rounded-full border border-[#FF8A55]/30 font-semibold">
                    {personal.education.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#29263D]/75 mb-2.5 font-mono">
                  {personal.education.degree}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-[#FFF0E5] text-xs font-mono text-[#29263D] border border-[#FF8A55]/25">
                  Current Cumulative CGPA: <span className="text-[#FF8A55] font-bold text-sm">{personal.education.cgpa}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/60 border border-[#F6A5C4]/25 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#29263D] font-semibold">{personal.education.secondary.school}</span>
                  <div className="text-[#29263D]/65 text-[11px]">{personal.education.secondary.details}</div>
                </div>
                <span className="text-[#29263D]/60">{personal.education.secondary.period}</span>
              </div>
            </div>
          </div>

          {/* Certifications & Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Certifications */}
            <div className="p-5 rounded-2xl pastel-card-pink">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D982A5] uppercase tracking-wider mb-3 font-bold">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </div>
              <div className="space-y-2">
                {certifications.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/80 border border-[#F6A5C4]/30 shadow-2xs">
                    <div className="text-xs font-bold text-[#29263D] font-mono">{c.name}</div>
                    <div className="text-[11px] text-[#29263D]/70 font-mono">{c.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="p-5 rounded-2xl pastel-card-blue">
              <div className="flex items-center gap-2 text-xs font-mono text-[#3D6E9E] uppercase tracking-wider mb-3 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Verified Milestones</span>
              </div>
              <div className="space-y-2">
                {achievements.map((a, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/80 border border-[#A8C9F0]/40 shadow-2xs">
                    <div className="text-xs font-bold text-[#29263D] font-mono">{a.title}</div>
                    <div className="text-[11px] text-[#29263D]/75 font-['Inter',sans-serif]">{a.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Skills Directory (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-6 rounded-3xl pastel-card">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F6A5C4]/20">
              <div className="flex items-center gap-2 text-xs font-mono text-[#29263D] font-bold">
                <TerminalSquare className="w-4 h-4 text-[#FF8A55]" />
                <span>TECHNICAL TOOLKIT</span>
              </div>
              <span className="text-[10px] font-mono text-[#29263D]/60 bg-[#FFD4B8]/40 px-2 py-0.5 rounded border border-[#FF8A55]/20">
                VERIFIED SKILLS
              </span>
            </div>

            <div className="space-y-3.5">
              {skills.map((category, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/70 border border-[#F6A5C4]/25 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#29263D] mb-1.5">
                    {getSkillIcon(category.iconName)}
                    <span>{category.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((s, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full bg-[#FFF6EE] border border-[#FF8A55]/20 text-[11px] font-mono text-[#29263D] font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
