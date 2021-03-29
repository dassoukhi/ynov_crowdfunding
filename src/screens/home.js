import React from 'react'

import NavvBar from '../components/navBar'
import Caroussel from '../components/caroussel'
import ProjectCard from '../components/projectCard'
import Banner from '../components/cowdfundingBanner'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <NavvBar />

      <Caroussel />
      <ProjectCard />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
