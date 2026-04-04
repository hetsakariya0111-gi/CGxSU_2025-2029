import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">
      {/* Global ambient blobs */}
      <div className="blob w-[600px] h-[600px] bg-primary-700 top-[-150px] left-[-200px]" />
      <div className="blob w-[500px] h-[500px] bg-pink-700 top-[40%] right-[-150px]" />
      <div className="blob w-[400px] h-[400px] bg-indigo-700 bottom-[10%] left-[10%]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
