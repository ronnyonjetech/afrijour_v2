// import React from 'react'
// import Nav from '../Nav'
// import MapBackgorund from './MapBackground/MapBackgorund'
// function Header() {
//   return (
//     <>
//     <Nav/>
//     <MapBackgorund/>
//     </>
//   )
// }

// export default Header



import React from 'react';
import Nav from '../Nav';
import MapBackground from './MapBackground/MapBackgorund';

function Header({ imageSrc, title, children }) {
  return (
    <>
      <Nav />
      <MapBackground imageSrc={imageSrc} title={title}>
        {children}
      </MapBackground>
    </>
  );
}

export default Header;