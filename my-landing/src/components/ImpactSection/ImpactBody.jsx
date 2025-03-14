import React from "react";
import MapBody from "./MapBody";

const ImpactBody = () => {
  return (
    <>
      {/* <div className="row text-dark-green">
        
        <div className="col-md-3 mr-0">
          <h3
            className="bt-dark-green wow fadeInUp font-weight-bold"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <b>Our Impact From Afrikajournals</b>
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

      {/* <div className="row  g-0 w-100">
        <div className="col-md-3 p-0 " style={{ color: "#113541" }}>
          <h3
            className="bt-dark-green wow fadeInUp font-weight-bold m-0"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <b>Our Impact From Afrikajournals</b>
          </h3>
        </div>

        <div className="col-md-9 p-0" style={{ color: "#08444c" }}>
          <h3 className="m-0">
            During Afrikajournal’s journey, we have brought together a vast
            collection of journals from across Africa, making them more
            accessible and visible to the global audience. Our platform is
            dedicated to showcasing the rich academic and research contributions
            from the continent, ensuring that African scholarship gains the
            recognition it deserves. Here’s what we have achieved:
          </h3>
        </div>
      </div> */}
      <div className="container">
        <div className="row g-0 w-100">
          {/* Left Column */}
          <div className="col-md-3 d-flex align-items-start">
            <h3
              className="bt-dark-green wow fadeInUp font-weight-bold"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
                margin: 0,
                color: "#113541",
              }}
            >
              <b>Our Impact From Afrikajournals</b>
            </h3>
          </div>

          {/* Right Column */}
          <div className="col-md-9">
            <h3 className="mb-3" style={{ color: "#08444c" }}>
              During Afrikajournal’s journey, we have brought together a vast
              collection of journals from across Africa, making them more
              accessible and visible to the global audience. Our platform is
              dedicated to showcasing the rich academic and research
              contributions from the continent, ensuring that African
              scholarship gains the recognition it deserves. Here’s what we have
              achieved:
            </h3>
          </div>
        </div>
      </div>

      {/* Wrapper Div to place two divs side by side */}
      {/* <div className="d-flex align-items-center justify-content-between text-dark-green mb-4">
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
      </div> */}

      <div className="container-fluid min-vh-100 d-flex align-items-center">
        {/* Left: Flexible Map Section */}
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center position-relative"
          style={{ minWidth: "50%", overflow: "visible" }}
        >
          <MapBody />
        </div>

        {/* Right: Statistics Section */}
        {/* <div
          className="d-flex flex-column justify-content-center align-items-start ps-5"
          style={{ minWidth: "40%" }}
        >
          <h2 className="mb-4">Impact Statistics</h2>
          <p>
            <strong>Collected Journals:</strong> 2004+
          </p>
          <p>
            <strong>Countries Covered:</strong> 41
          </p>
          <p>
            <strong>Impact Factor Range:</strong> 0.5 - 7.2
          </p>
          <p>
            <strong>Articles Collected:</strong> 14,000+
          </p>
        </div> */}

<div
  className="d-flex flex-column justify-content-center align-items-start ps-5"
  style={{
    minWidth: "40%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adds contrast for readability
    padding: "2rem",
    borderRadius: "10px",
    color: "#fff", // Ensures text is visible
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }}
>
  <h2 className="mb-4" style={{ borderBottom: "2px solid #fff", paddingBottom: "10px" }}>
    Impact Statistics
  </h2>
  <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
    <strong>Collected Journals:</strong> <span style={{ color: "#ffdd57" }}>2004+</span>
  </p>
  <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
    <strong>Countries Covered:</strong> <span style={{ color: "#ffdd57" }}>41</span>
  </p>
  <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
    <strong>Impact Factor Range:</strong> <span style={{ color: "#ffdd57" }}>0.5 - 7.2</span>
  </p>
  <p style={{ fontSize: "1.1rem" }}>
    <strong>Articles Collected:</strong> <span style={{ color: "#ffdd57" }}>14,000+</span>
  </p>
</div>

      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default ImpactBody;
