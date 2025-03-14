import React from 'react'
import Header from '../components/MapSection/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ConferenceSection from '../components/Conferences/ConferenceSection'
const Conferences = () => {
  return (
    <>
    {/* <Nav/>
    <Header/> */}
     <Header
        imageSrc="https://www.eventsmadesimple.co.uk/uploads/148-pexels-christina-morillo-1181395-w1150-h0.jpg"
        title="Conferences"
      ></Header>
    <ConferenceSection/>
    <Footer/>
    </>
  )
}

export default Conferences