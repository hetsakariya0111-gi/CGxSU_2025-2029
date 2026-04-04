import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Nav from "./components/Nav"
import About from "./pages/About"
import Career from "./pages/Career"
import Support from "./pages/Support"

import MusicPlayer from "./components/MusicPlayer"

export default function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <MusicPlayer />
    </>
  )
}
