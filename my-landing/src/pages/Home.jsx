import React from 'react'
import Nav from '../components/Nav'
import Video from '../components/Video'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import StatisticsSection from '../components/StatisticsSection'
const Home = () => {
  return (
   <>
      <Nav/>
      <Video/>
     
      <HeroSection style={{ marginBottom: "1050px" }}/>
     
      {/* <StatisticsSection/> */}
      <StatisticsSection/>
      <Footer/>
   </>
  )
}

export default Home