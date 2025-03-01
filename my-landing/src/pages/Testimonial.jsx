import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// import Video from '../components/Video'
import TestimonialImage from '../components/TestimonialImage'
import TestimonialsSection from '../components/Testimonials/TestimonialSection'
const Testimonial = () => {
  return (
    <>
    <Nav/>
    {/* <Video/> */}
    <TestimonialImage/>
   
    <TestimonialsSection/>
    <Footer/>
    </>
  )
}

export default Testimonial