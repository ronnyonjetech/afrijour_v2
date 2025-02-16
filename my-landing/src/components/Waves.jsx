// import React, { useEffect } from "react";
// import gsap from "gsap";

// const Waves = () => {
//   useEffect(() => {
//     gsap.to(".parallax use", {
//       duration: 4,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//       x: "-=20", // Moves waves left and right
//       stagger: 0.3,
//     });
//   }, []);

//   return (
//     <section className="page-section p-0" id="home-about">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-12 p-0">
//             <div style={{ marginTop: "-15vh", position: "relative", zIndex: 12 }}>
//               <svg
//                 className="waves"
//                 preserveAspectRatio="none"
//                 shapeRendering="auto"
//                 viewBox="0 24 150 28"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <defs>
//                   <path
//                     d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
//                     id="gentle-wave"
//                   />
//                 </defs>
//                 <g className="parallax">
//                   <use fill="rgba(228,229,23,0.7)" x="48" xlinkHref="#gentle-wave" y="0" />
//                   <use fill="rgba(255,255,255,0.5)" x="48" xlinkHref="#gentle-wave" y="3" />
//                   <use fill="rgba(255,255,255,0.3)" x="48" xlinkHref="#gentle-wave" y="5" />
//                   <use fill="#fff" x="48" xlinkHref="#gentle-wave" y="7" />

//                 </g>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Waves;



import React, { useEffect } from "react";
import gsap from "gsap";
import "../css/wave.css"; // Make sure you have this file

const Waves = () => {
  useEffect(() => {
    gsap.to(".parallax use", {
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      x: "-=20", // Moves waves left and right
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="waves-container">
      <svg
        className="waves"
        preserveAspectRatio="none"
        shapeRendering="auto"
        viewBox="0 24 150 28"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            id="gentle-wave"
          />
        </defs>
        <g className="parallax">
          <use fill="rgba(228,229,23,0.7)" x="48" xlinkHref="#gentle-wave" y="0" />
          <use fill="rgba(255,255,255,0.5)" x="48" xlinkHref="#gentle-wave" y="3" />
          <use fill="rgba(255,255,255,0.3)" x="48" xlinkHref="#gentle-wave" y="5" />
          <use fill="#fff" x="48" xlinkHref="#gentle-wave" y="7" />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
