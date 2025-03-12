import React from "react";
import "../css/hero.css"
const HeroSection = ({ translation }) => {
  return (
    <section className="section-hero position-relative">
      <div className="position-relative z-1">
        <div
          className="bg-gradient"
          style={{
            background: "linear-gradient(to right, #9baed1, #f5f7fa)",
          }}
        >
          {/* Hero Space */}
          <div className="py-5 py-lg-7">
            {/* Section Container */}
            <div className="container">
              {/* Hero Area Block */}
              <div className="row align-items-center g-5">
                {/* Hero Content Block */}
                <div className="col-lg-7 text-center text-lg-start">
                  <h1 className="mb-3 fw-bold display-3" style={{ color: "#113541" }}>
                  Spotlighting African Journals
                  </h1>
                  <p className="mb-4 fw-bold" style={{ color: "#08444c", fontSize: "1.25rem" }}>Welcome to AfriJour, your gateway to the rich and diverse world of African scholarship. We are dedicated to amplifying the voices of African journals, offering a platform where their unique narratives and perspectives can shine brightly.</p>
                  <a
                    href="https://afrijour.web.app/"
                    className="btn  btn-lg text-center rounded-pill"
                    style={{ backgroundColor: "#76b83d", color: "#ffffff" }}
                  >
                   Get Started Now
                  </a>
                </div>
                {/* Hero Image Block */}
                <div className="col-lg-5 text-center text-lg-start">
                  <div className="position-relative d-inline-block">
                    <img
                      src="/hero1.jpeg"
                      alt="hero-img"
                      width={600}
                      height={600}
                      className="img-fluid rounded-circle"
                    />
                    {/* Hero Image Shape */}
                    <div
                      className="position-absolute top-0 end-0 d-flex align-items-center justify-content-center"
                      style={{ height: "180px", width: "180px" }}
                    >
                      <img
                        src="/hero-4-start-shape-1.svg"
                        alt="hero-4-start-shape"
                        width={180}
                        height={180}
                        className="rotate-360"
                      />
                      <span
                        className="position-absolute text-center fw-bold"
                        style={{ maxWidth: "100px" }}
                      >
                        Latest Journals are available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero Area Block */}
            </div>
            {/* Section Container */}
          </div>
          {/* Hero Space */}
        </div>
        {/* Hero Background Shape */}
        <img
          src="/hero-4-bg-shape.svg"
          alt="hero-4-bg-shape"
          height={1038}
          width={1038}
          className="position-absolute top-0 end-0 z-n1"
        />
      </div>
    </section>
  );
};

export default HeroSection;
