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
     
    </section>
  );
};

export default AboutSection;
