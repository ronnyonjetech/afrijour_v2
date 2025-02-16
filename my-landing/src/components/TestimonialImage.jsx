import React from 'react';
import Waves from './Waves';
import "../css/testimonial_image.css"
const TestimonialImage = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-image-container">
        <img
          src="https://www.sender.net/wp-content/uploads/2023/04/b0147-testimonial-advertising-small.webp"
          alt="Testimonial"
          className="testimonial-image"
        />
        <div className="testimonial-image-bg-cover"></div>
        <div className="testimonial-text">
          <h2>What Our Clients Say</h2>
          <p>"This platform has changed the way we work for the better!"</p>
        </div>
      </div>
      <Waves />
    </div>
  );
};

export default TestimonialImage;
