
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/wave.css"; // Ensure this file is correctly imported

const Waves = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax use", {
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        x: "-=20", // Moves waves left and right
        stagger: 0.3,
      });
    }, waveRef);

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  return (
    <div className="waves-container" ref={waveRef}>
      <svg
        className="waves"
        preserveAspectRatio="none"
        shapeRendering="auto"
        viewBox="0 24 150 28"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use x="48" xlinkHref="#gentle-wave" y="0" className="wave wave1" />
          <use x="48" xlinkHref="#gentle-wave" y="3" className="wave wave2" />
          <use x="48" xlinkHref="#gentle-wave" y="5" className="wave wave3" />
          <use x="48" xlinkHref="#gentle-wave" y="7" className="wave wave4" />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
