import React from "react";
import MapBody from "./MapBody";

const ImpactBody = () => {
  return (
    <>
      {/* <div className="row text-dark-green">
        
        <div className="col-md-3">
          <h3
            className="bt-dark-green wow fadeInUp font-weight-bold"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <b>Our Impact From AGRA 2.0</b>
          </h3>
        </div>

        
        <div
          className="col-md-9 wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <h3>
            During AGRA 2.0, we built on our achievements during our first 10
            years, strengthening government capacity and agricultural systems
            and helping farmers adopt good agronomic practices and technologies.
            Here's what we achieved:
          </h3>
        </div>
      </div> */}

      {/* Wrapper Div to place two divs side by side */}
      <div className="d-flex align-items-center justify-content-between text-dark-green mb-4">
        <div className="w-25">
          <h3 className="bt-dark-green wow fadeInUp font-weight-bold">
            <b>Our Impact </b>
          </h3>
        </div>

        <div className="w-75">
          <h3>
            During AGRA 2.0, we built on our achievements during our first 10
            years, strengthening government capacity and agricultural systems
            and helping farmers adopt good agronomic practices and technologies.
            Here's what we achieved:
          </h3>
        </div>
      </div>

      <div className="container-fluid min-vh-100 d-flex align-items-center">
        {/* Left: Flexible Map Section */}
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center position-relative"
          style={{ minWidth: "50%", overflow: "visible" }}
        >
          <MapBody />
        </div>

        {/* Right: Statistics Section */}
        <div
          className="d-flex flex-column justify-content-center align-items-start ps-5"
          style={{ minWidth: "40%" }}
        >
          <h2 className="mb-4">Impact Statistics</h2>
          <p>
            <strong>Indexed Journals:</strong> 1,200+
          </p>
          <p>
            <strong>Countries Covered:</strong> 54
          </p>
          <p>
            <strong>Impact Factor Range:</strong> 0.5 - 7.2
          </p>
          <p>
            <strong>Top Cited Journal:</strong> African Science Review
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default ImpactBody;
