import React from 'react'
import Hero from '../components/Hero.jsx'
import Partner from '../components/Partner.jsx'
import Container from '../components/Container.jsx'
import Team from '../components/Team.jsx'
import Work from '../components/Work.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div>
      <Hero/>
      <Partner/>
      <Container/>
      <Team />
      <Work />
      <Footer />
    </div>
  )
}

export default Home;