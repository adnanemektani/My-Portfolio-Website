import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Project from './components/Project'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/footer'
import Contact from './components/Contact'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleOpenContact = () => setIsContactOpen(true)
  const handleBackFromContact = () => setIsContactOpen(false)

  const pageStyle = useMemo(
    () => ({
      minHeight: '100vh',
      backgroundColor: isDark ? '#0d0d0d' : '#ffffff',
      transition: 'background-color 0.3s',
      paddingTop:'145px',
      position: 'relative' as const,
      overflowX: 'hidden' as const,
    }),
    [isDark]
  )

  return (
    <div style={pageStyle}>
      <Navbar isDark={isDark} setIsDark={setIsDark} onContactClick={handleOpenContact} />

      {isContactOpen ? (
        <Contact isDark={isDark} onClose={handleBackFromContact} />
      ) : (
        <>
          <div id="home">
            <HeroBanner isDark={isDark} onContactClick={handleOpenContact} />
          </div>

          <div id="projects">
            <Project isDark={isDark} />
          </div>

          <div id="experience">
            <Experience isDark={isDark} />
          </div>

          <div id="skills">
            <Skills isDark={isDark} />
          </div>

          <div id="about">
            <About isDark={isDark} />
          </div>

          <Footer isDark={isDark} />
        </>
      )}
    </div>
  )
}

export default App

