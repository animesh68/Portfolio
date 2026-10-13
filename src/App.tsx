import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroScene } from './components/HeroScene'
import { ProjectSection } from './components/ProjectSection'
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal'
import { OpenSourceSection } from './components/OpenSourceSection'
import { MixtapeCorner } from './components/MixtapeCorner'
import { AboutSection } from './components/AboutSection'
import { ContactFooter } from './components/ContactFooter'
import { AmbientControls, SectionDivider } from './components/AmbientBackground'
import type { Project } from './data/portfolio'

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null)
  const [scanlines, setScanlines] = useState(false)

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'work', 'opensource', 'mixtape', 'about', 'contact']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#171725] text-[#FFF6EE] relative selection:bg-[#FF8A55]/30 selection:text-[#FFF6EE]">
      {/* Optional CRT Scanlines Overlay */}
      {scanlines && <div className="fixed inset-0 z-50 scanlines pointer-events-none" />}

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Flow */}
      <main>
        {/* Section 1: Hero Scene */}
        <HeroScene />

        {/* Visual Moment A: Golden clouds behind chain link fence (Reference C) */}
        <SectionDivider
          image="/assets/golden-clouds-fence.jpg"
          alt="Golden clouds glowing behind a chain-link fence at dusk"
          caption="ordinary places, extraordinary skies."
          accentColor="#FF8A55"
        />

        {/* Section 2: Selected Work */}
        <ProjectSection onSelectProject={(project) => setSelectedModalProject(project)} />

        {/* Visual Moment B: Japanese utility poles & twilight sky (Reference D) */}
        <SectionDivider
          image="/assets/utility-poles-sunset.jpg"
          alt="Japanese utility poles, overhead wires and pink-blue twilight sky"
          caption="built somewhere between sunset and midnight."
          accentColor="#F6A5C4"
        />

        {/* Section 3: Open-Source Contributions Ledger */}
        <OpenSourceSection />

        {/* Visual Moment C: Anime countryside at sunset (Reference E) */}
        <SectionDivider
          image="/assets/anime-countryside-landscape.jpg"
          alt="Train crossing water under sunset clouds"
          caption="a little piece of the internet we never quite forgot."
          accentColor="#A8C9F0"
        />

        {/* Section 4: Signature Feature — mixtape.exe */}
        <MixtapeCorner />

        {/* Section 5: About Me & Capabilities */}
        <AboutSection />

        {/* Section 6: Contact & Footer */}
        <ContactFooter />
      </main>

      {/* Accessible Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />

      {/* Floating Ambient Controls */}
      <AmbientControls
        scanlines={scanlines}
        onToggleScanlines={() => setScanlines(!scanlines)}
      />
    </div>
  )
}

export default App
