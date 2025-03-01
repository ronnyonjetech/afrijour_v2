import React from 'react'
import Waves from '../../Waves'
const MapBackgorund = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-image-container">
        <img
          src="https://journals.openedition.org/factsreports/docannexe/image/6233/img-1-small580.jpg"
          alt="Testimonial"
          className="testimonial-image"
        />
        <div className="testimonial-image-bg-cover"></div>
        <div className="testimonial-text">
          <h2>Map</h2>
          {/* <p>"This platform has changed the way we work for the better!"</p> */}
        </div>
      </div>
      <Waves />
      {/* <TestimonialsSection/> */}
    </div>
  )
}

export default MapBackgorund