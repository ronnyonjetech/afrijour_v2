import React, { useEffect } from "react";
import gsap from "gsap";

const AboutSection = () => {
  useEffect(() => {
    gsap.to(".parallax use", {
      duration: 6,
      repeat: -1,
      ease: "linear",
      x: "-=100",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 100),
      },
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="page-section p-0" id="home-about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div style={{ marginTop: "-8vh", position: "relative", zIndex: 12 }}>
              {/* Wave SVG */}
              <svg
                className="waves"
                preserveAspectRatio="none"
                shapeRendering="auto"
                viewBox="0 24 150 28"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  width: "100%",
                  height: "auto",
                  position: "absolute",
                  top: "0", // Raised a little bit more
                  left: "0",
                }}
              >
                <defs>
                  <path
                    d="M-160 44c30 0 58-10 88-10s58 10 88 10 58-10 88-10 58 10 88 10 v44h-352z"
                    id="gentle-wave"
                  ></path>
                </defs>
                <g className="parallax">
                  <use fill="rgba(228,229,23,0.7)" x="0" xlinkHref="#gentle-wave" y="0" />
                  <use fill="rgba(255,255,255,0.5)" x="0" xlinkHref="#gentle-wave" y="3" />
                  <use fill="rgba(255,255,255,0.3)" x="0" xlinkHref="#gentle-wave" y="5" />
                  <use fill="#fff" x="0" xlinkHref="#gentle-wave" y="7" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* About Content */}
      <div className="container">
        <div className="row" style={{ marginTop: "130px" }}>
          <div className="col-md-7">
            <p className="text-uppercase text-yellow text-bold wow fadeInLeft">
              <small>ABOUT US</small>
            </p>
            <h2 className="mt-3 mb-4 text-dark-green text-bold wow fadeInUp">
              AGRA exists to fulfill a vision where Africa can feed itself and
              the world, transforming agriculture from a solitary struggle for
              survival into a thriving business.
            </h2>
            <div className="ms-0 wow fadeInRight">
              <a className="home-find-more" href="https://agra.org/who-we-are/about-us/">
                Find out more
              </a>
            </div>
          </div>
          <div className="col-md-5 d-none d-md-block">
            <div className="position-relative w-100 h-100">
              <div className="home-about-img-wrap">
                <img
                  alt="About Us"
                  className="home-about-img img-fluid w-100"
                  src="https://via.placeholder.com/400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
