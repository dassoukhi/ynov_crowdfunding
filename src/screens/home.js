import React from 'react'
import NavvBar from '../components/navBar'
import Footer from '../components/footer'
import Caroussel from '../components/caroussel'
import ProjectCard from '../components/projectCard'
import CrowdfundingBanner from '../components/cowdfundingBanner'

const Home = () => {
  return (
    <div>
      <NavvBar />
      <Caroussel />
      <ProjectCard />
      <CrowdfundingBanner />
      <Footer />
    </div>
  )
}

export default Home
