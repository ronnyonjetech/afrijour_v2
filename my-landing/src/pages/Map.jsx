import React from "react";
import Header from "../components/MapSection/Header";
import Footer from "../components/Footer";
import MapBody from "../components/MapSection/MapBody";
const Map = () => {
  return (
    <>
      
   <MapBody/>
  {/* <div className="position-relative">
  <h1 className="position-absolute top-0 start-50 translate-middle-x text-white bg-dark p-3 rounded shadow" 
      style={{ zIndex: 10, width: '100%', textAlign: 'center' }}>
    Click to View Journals
  </h1>
  <div className="mt-5">
    <MapBody />
  </div>
</div> */}


    </>
  );
};

export default Map;
