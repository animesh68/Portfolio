import React, { useState } from 'react'
import { User, GraduationCap, Award, Code, Server, Cpu, Database, Layout, Cloud, Terminal, Sparkles, Smile } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolio'

export const AboutSection: React.FC = () => {
  const { personal, skills, achievements, certifications } = PORTFOLIO_DATA
  const [bocchiMode, setBocchiMode] = useState<'peace' | 'hacker'>('peace')

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4 text-[#FF8A55]" />
      case 'Server': return <Server className="w-4 h-4 text-[#A8C9F0]" />
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#F6A5C4]" />
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />
      case 'Layout': return <Layout className="w-4 h-4 text-[#B8A8E8]" />
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#FF8A55]" />
      default: return <Terminal className="w-4 h-4 text-[#A8C9F0]" />
    }
  }

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Decorative Element */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#B8A8E8]/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29263D]/80 border border-[#B8A8E8]/20 text-[#B8A8E8] text-xs font-mono mb-3">
          <User className="w-3.5 h-3.5" />
          <span>BIOGRAPHY & CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#FFF6EE] tracking-tight mb-3">
          A little about the person behind the commits.
        </h2>
        <p className="text-sm sm:text-base text-[#A8C9F0] font-mono max-w-2xl">
          Connecting rigorous backend engineering and retrieval mechanics with real-world applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Personal Story, Education & Achievements (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Personal Bio Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#29263D]/70 border border-white/10 shadow-xl space-y-4">
            <h3 className="text-lg font-bold font-['Sora',sans-serif] text-[#FFF6EE] flex items-center gap-2">
              <span className="text-[#FF8A55]">✦</span>
              Hello, I'm Animesh.
            </h3>

            <p className="text-sm sm:text-base text-[#FFF6EE]/90 leading-relaxed font-['Inter',sans-serif]">
              I'm a Computer Science undergraduate focused on <strong className="text-[#FFF6EE]">backend engineering, AI/ML systems, information retrieval, and open-source software</strong>. I enjoy taking systems that appear chaotic or data-heavy and engineering clear, verifiable pipelines that solve concrete problems.
            </p>

            <p className="text-xs sm:text-sm text-[#F6A5C4] italic font-mono pt-2 border-t border-white/5">
              "{personal.personalTouch}"
            </p>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-3xl bg-[#29263D]/50 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A8C9F0] uppercase tracking-wider mb-4 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-black/30 border border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-[#FFF6EE] font-['Sora',sans-serif]">
                    {personal.education.institution}
                  </h4>
                  <span className="text-xs font-mono text-[#FF8A55] bg-[#FF8A55]/10 px-2.5 py-0.5 rounded-full border border-[#FF8A55]/20">
                    {personal.education.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A8C9F0] mb-2 font-mono">
                  {personal.education.degree}
                </p>
                <div className="inline-block px-2.5 py-1 rounded bg-white/5 text-xs font-mono text-[#FFF6EE]/90 border border-white/10">
                  Current Cumulative CGPA: <span className="text-[#FF8A55] font-bold">{personal.education.cgpa}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#FFF6EE] font-medium">{personal.education.secondary.school}</span>
                  <div className="text-[#FFF6EE]/50 text-[11px]">{personal.education.secondary.details}</div>
                </div>
                <span className="text-[#FFF6EE]/50">{personal.education.secondary.period}</span>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Certifications */}
            <div className="p-5 rounded-2xl bg-[#29263D]/40 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F6A5C4] uppercase tracking-wider mb-3 font-semibold">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </div>
              <div className="space-y-2.5">
                {certifications.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-black/30 border border-white/5">
                    <div className="text-xs font-bold text-[#FFF6EE] font-mono">{c.name}</div>
                    <div className="text-[11px] text-[#A8C9F0] font-mono">{c.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="p-5 rounded-2xl bg-[#29263D]/40 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Verified Milestones</span>
              </div>
              <div className="space-y-2.5">
                {achievements.map((a, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-black/30 border border-white/5">
                    <div className="text-xs font-bold text-[#FFF6EE] font-mono">{a.title}</div>
                    <div className="text-[11px] text-[#FFF6EE]/70 font-['Inter',sans-serif]">{a.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Skills Spectrum + Tasteful Bocchi Cameo (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Technical Skills Directory */}
          <div className="p-6 rounded-3xl bg-[#29263D]/70 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFF6EE] font-semibold">
                <Code className="w-4 h-4 text-[#FF8A55]" />
                <span>TECHNICAL TOOLKIT</span>
              </div>
              <span className="text-[10px] font-mono text-[#FFF6EE]/40">RESUME VERIFIED</span>
            </div>

            <div className="space-y-4">
              {skills.map((category, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFF6EE] mb-2">
                    {getSkillIcon(category.iconName)}
                    <span>{category.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((s, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-[#FFF6EE]/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tasteful Hitori Gotoh (Bocchi the Rock!) Desk Cameo */}
          <div className="p-5 rounded-3xl bg-[#1d1b2c]/90 border border-[#F6A5C4]/30 shadow-2xl relative overflow-hidden">
            {/* Retro Window Titlebar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F6A5C4] font-semibold">
                <Smile className="w-3.5 h-3.5" />
                <span>DESK COMPANION // HITORI GOTOH</span>
              </div>
              
              <button
                type="button"
                onClick={() => setBocchiMode(bocchiMode === 'peace' ? 'hacker' : 'peace')}
                className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#A8C9F0] hover:bg-white/20 transition-colors"
                title="Toggle Bocchi mood"
              >
                MODE: {bocchiMode.toUpperCase()} ⟳
              </button>
            </div>

            {/* Bocchi Image & Liminal Quote */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#F6A5C4]/40 shrink-0 bg-black/40">
                <img
                  src={bocchiMode === 'peace' ? '/assets/bocchi-peace.jpg' : '/assets/bocchi-hacker.jpg'}
                  alt="Hitori Gotoh cameo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex-1">
                <div className="text-xs font-mono text-[#FF8A55] mb-1">
                  {bocchiMode === 'peace' ? '“Peace sign on a quiet road...”' : '“Hacking at 3:00 AM...”'}
                </div>
                <p className="text-[11px] text-[#FFF6EE]/70 font-mono leading-relaxed">
                  {bocchiMode === 'peace' 
                    ? 'Social battery: 4%. Sunset appreciation: 100%. Listening to Joji on repeat.' 
                    : 'Terminal active. Compiling ML models and fixing memory leaks in JNI layers.'}
                </p>
                <div className="mt-2 text-[10px] font-mono text-[#F6A5C4]/60">
                  ✦ Bocchi the Rock! cameo
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
