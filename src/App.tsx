import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AnalystTrack } from './pages/AnalystTrack'
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { NotFound } from './pages/NotFound'
import { Program } from './pages/Program'
import { StudioTrack } from './pages/StudioTrack'
import { Team } from './pages/Team'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/analyst" element={<AnalystTrack />} />
        <Route path="/studio" element={<StudioTrack />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
