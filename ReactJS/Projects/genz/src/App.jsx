import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Nav from "./components/Nav"
import About from "./pages/About"
import Career from "./pages/Career"

export default function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career />} />
        
      </Routes>
    </>
  )
}
