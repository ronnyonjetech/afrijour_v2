// import React from 'react'
// import Waves from '../../Waves'
// const MapBackgorund = () => {
//   return (
//     <div className="testimonial-section">
//       <div className="testimonial-image-container">
//         <img
//           src="https://journals.openedition.org/factsreports/docannexe/image/6233/img-1-small580.jpg"
//           alt="Testimonial"
//           className="testimonial-image"
//         />
//         <div className="testimonial-image-bg-cover"></div>
//         <div className="testimonial-text">
//           <h2>Map</h2>
        
//         </div>
//       </div>
//       <Waves />
    
//     </div>
//   )
// }

// export default MapBackgorund

import React from 'react';
import Waves from '../../Waves';

const MapBackground = ({ imageSrc, title }) => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-image-container">
        <img
          src={imageSrc}
          alt="Testimonial"
          className="testimonial-image"
        />
        <div className="testimonial-image-bg-cover"></div>
        <div className="testimonial-text">
          <h2>{title}</h2>
        </div>
      </div>
      <Waves />
    </div>
  );
};

export default MapBackground;
