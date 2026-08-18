'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { projects, aboutContent } from '../lib/content.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import IndexView from './views/IndexView.jsx'
import AboutView from './views/AboutView.jsx'
import ProjectView from './views/ProjectView.jsx'

export default function Portfolio() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentView, setCurrentView] = useState('index')

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.includes('about')) {
      setCurrentView('about')
    } else if (segments[0] === 'work' && segments[1]) {
      setCurrentView(segments[1])
    } else {
      setCurrentView('index')
    }
  }, [pathname])

  const navigateTo = (view) => {
    if (view === 'index') {
      router.push('/')
    } else if (view === 'about') {
      router.push('/about')
    } else {
      router.push(`/work/${view}`)
    }
    window.scrollTo(0, 0)
  }

  const currentProject = projects.find((p) => p.slug === currentView)

  return (
    <div
      style={{
        background: '#000',
        minHeight: '100vh',
        position: 'relative',
        fontFamily: 'var(--font-diatype)',
        color: 'rgba(255,255,255,0.85)',
      }}
    >
      <Header currentView={currentView} onNavigate={navigateTo} />

      <main style={{ padding: '1rem 3rem 4rem' }}>
        {currentView === 'index' && <IndexView projects={projects} onProjectClick={navigateTo} />}
        {currentView === 'about' && <AboutView about={aboutContent} onNavigate={navigateTo} />}
        {currentProject && <ProjectView project={currentProject} onNavigate={navigateTo} />}
      </main>

      <Footer />
    </div>
  )
}
