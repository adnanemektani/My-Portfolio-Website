import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Project from './components/Project'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: isDark ? '#0d0d0d' : '#ffffff',
        transition: 'background-color 0.3s',
      }}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <div id="home">
        <HeroBanner isDark={isDark} />
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

      {/* sections bach nzidowhom mn b3d */}
      
      <div id="about" />
    </div>
  )
}

export default App 