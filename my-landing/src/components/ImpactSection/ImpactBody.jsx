// import React, { useEffect, useContext } from "react";
// import MapBody from "./MapBody";
// import { LanguageContext } from "../../contexts/LanguageContext";
// const ImpactBody = () => {
//   const { translations } = useContext(LanguageContext);
//   return (
//     <>
//       <div className="container">
//         <div className="row g-0 w-100">
          
//           <div className="col-md-3 d-flex align-items-start">
//             <h3
//               className="bt-dark-green wow fadeInUp font-weight-bold"
//               style={{
//                 visibility: "visible",
//                 animationName: "fadeInUp",
//                 margin: 0,
//                 color: "#113541",
//               }}
//             >
//               <b>Our Impact From Afrikajournals</b>
//             </h3>
//           </div>

         
//           <div className="col-md-9">
//             <h3 className="mb-3" style={{ color: "#08444c" }}>
//               During Afrikajournal’s journey, we have brought together a vast
//               collection of journals from across Africa, making them more
//               accessible and visible to the global audience. Our platform is
//               dedicated to showcasing the rich academic and research
//               contributions from the continent, ensuring that African
//               scholarship gains the recognition it deserves. Here’s what we have
//               achieved:
//             </h3>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid min-vh-100 d-flex align-items-center">
      
//         <div
//           className="d-flex flex-grow-1 justify-content-center align-items-center position-relative"
//           style={{ minWidth: "50%", overflow: "visible" }}
//         >
//           <MapBody />
//         </div>

//         <div
//           className="d-flex flex-column justify-content-center align-items-start ps-5"
//           style={{
//             minWidth: "40%",
//             backgroundColor: "rgba(0, 0, 0, 0.6)", // Adds contrast for readability
//             padding: "2rem",
//             borderRadius: "10px",
//             color: "#fff", // Ensures text is visible
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <h2
//             className="mb-4"
//             style={{ borderBottom: "2px solid #fff", paddingBottom: "10px" }}
//           >
//             Impact Statistics
//           </h2>
//           <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
//             <strong>Collected Journals:</strong>{" "}
//             <span style={{ color: "#ffdd57" }}>2004+</span>
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
//             <strong>Countries Covered:</strong>{" "}
//             <span style={{ color: "#ffdd57" }}>41</span>
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
//             <strong>Impact Factor Range:</strong>{" "}
//             <span style={{ color: "#ffdd57" }}>0.5 - 7.2</span>
//           </p>
//           <p style={{ fontSize: "1.1rem" }}>
//             <strong>Articles Collected:</strong>{" "}
//             <span style={{ color: "#ffdd57" }}>14,000+</span>
//           </p>
//         </div>
//       </div>
//       <br></br>
//       <br></br>
//     </>
//   );
// };

// export default ImpactBody;

import React, { useContext } from "react";
import MapBody from "./MapBody";
import { LanguageContext } from "../../contexts/LanguageContext";

const ImpactBody = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <>
      <div className="container">
        <div className="row g-0 w-100">
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
              <b>{translations.impactSection.title}</b>
            </h3>
          </div>

          <div className="col-md-9">
            <h3 className="mb-3" style={{ color: "#08444c" }}>
              {translations.impactSection.description}
            </h3>
          </div>
        </div>
      </div>

      <div className="container-fluid min-vh-100 d-flex align-items-center">
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center position-relative"
          style={{ minWidth: "50%", overflow: "visible" }}
        >
          <MapBody />
        </div>

        <div
          className="d-flex flex-column justify-content-center align-items-start ps-5"
          style={{
            minWidth: "40%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "2rem",
            borderRadius: "10px",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="mb-4"
            style={{ borderBottom: "2px solid #fff", paddingBottom: "10px" }}
          >
            {translations.impactSection.statisticsTitle || "Impact Statistics"}
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            <strong>{translations.impactSection.statistics.collectedJournals}</strong>{" "}
            <span style={{ color: "#ffdd57" }}>
              {translations.impactSection.statistics.collectedJournalsValue}
            </span>
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            <strong>{translations.impactSection.statistics.countriesCovered}</strong>{" "}
            <span style={{ color: "#ffdd57" }}>
              {translations.impactSection.statistics.countriesCoveredValue}
            </span>
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            <strong>{translations.impactSection.statistics.impactFactorRange}</strong>{" "}
            <span style={{ color: "#ffdd57" }}>
              {translations.impactSection.statistics.impactFactorRangeValue}
            </span>
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong>{translations.impactSection.statistics.articlesCollected}</strong>{" "}
            <span style={{ color: "#ffdd57" }}>
              {translations.impactSection.statistics.articlesCollectedValue}
            </span>
          </p>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default ImpactBody;
