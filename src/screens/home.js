import React from 'react'

import NavvBar from '../components/navBar'
import Caroussel from '../components/caroussel'
import ProjectCard from '../components/projectCard'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <NavvBar />

      <Caroussel />
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Home
