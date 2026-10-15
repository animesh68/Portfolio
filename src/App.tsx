import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroScene } from './components/HeroScene'
import { AboutSection } from './components/AboutSection'
import { ProjectSection } from './components/ProjectSection'
import { AdditionalProjectsSection } from './components/AdditionalProjectsSection'
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal'
import { OpenSourceSection } from './components/OpenSourceSection'
import { MixtapeCorner } from './components/MixtapeCorner'
import { ContactFooter } from './components/ContactFooter'
import { AmbientControls } from './components/AmbientBackground'
import { HitoriSticker } from './components/HitoriSticker'
import type { Project } from './data/portfolio'

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null)
  const [scanlines, setScanlines] = useState(false)

  const isModalOpen = Boolean(selectedModalProject)

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'work', 'experiments', 'opensource', 'mixtape', 'photos', 'contact']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-70px 0px -40% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen text-[#29263D] relative selection:bg-[#FF8A55]/25 selection:text-[#29263D]">
      
      {/* 1. Continuous Persistent Parking-Lot Sunset Atmosphere Layer across the Entire Page */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="/assets/parking-lot-sunset.jpg"
          alt=""
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.03]"
          loading="eager"
        />
        {/* Soft atmospheric gradient wash: protects contrast while letting orange clouds and sunset glow illuminate the whole page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#29263D]/25 via-[#FFF6EE]/30 to-[#FFF6EE]/45" />
        <div className="absolute inset-0 bg-[#FFF6EE]/15 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 film-grain pointer-events-none opacity-30" />
      </div>

      {/* Optional CRT Scanlines Overlay */}
      {scanlines && <div className="fixed inset-0 z-50 scanlines pointer-events-none" />}

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Flow following strict natural order:
          Hero -> About -> Featured Projects -> Additional Projects -> Merged PRs -> Compact Mixtape -> Contact & Footer (with Corner Photo Slideshow) */}
      <main className="relative z-10">
        {/* 1. Hero Scene: The Parking-lot Sunset Entrypoint */}
        <HeroScene />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Featured Projects: Lakers in 5, CRT, Otoichi */}
        <ProjectSection onSelectProject={(project) => setSelectedModalProject(project)} />

        {/* 4. Additional Projects: Filtered ANN Research & Nocturne.ai */}
        <AdditionalProjectsSection onSelectProject={(project) => setSelectedModalProject(project)} />

        {/* 5. Open-Source Contributions Ledger / Merged PRs */}
        <OpenSourceSection />

        {/* 6. Compact Mixtape: 6 Cassettes in ONE row + Player on the right */}
        <MixtapeCorner />

        {/* 7. Contact & Footer: Minimal footer with Magnetic Photo Slideshow in corner */}
        <ContactFooter />
      </main>

      {/* Accessible Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />

      {/* Hitori Gotoh Sticker (Fixed at Bottom-Left of Viewport) */}
      <HitoriSticker isModalOpen={isModalOpen} />

      {/* Floating Retro CRT Controls (Fixed at Bottom-Right of Viewport) */}
      <AmbientControls
        scanlines={scanlines}
        onToggleScanlines={() => setScanlines(!scanlines)}
        isModalOpen={isModalOpen}
      />
    </div>
  )
}

export default App
