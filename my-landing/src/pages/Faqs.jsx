// import React from "react";
// import Header from "../components/MapSection/Header";
// import Footer from "../components/Footer";
// import FAQSection from "../components/FaqSection/FAQSection";
// import FAQ from "../components/FaqSection/Faq";
// const Faqs = () => {
//   return (
//     <>
//       <Header />
//       <div className="row  g-0 w-100">
//         <div className="col-md-3 p-0 " style={{ color: "#113541" }}>
//           <h3
//             className="bt-dark-green wow fadeInUp font-weight-bold m-0"
//             style={{ visibility: "visible", animationName: "fadeInUp" }}
//           >
//             <b>Frequently Asked Questions </b>
//           </h3>
//         </div>

//         <div className="col-md-9 p-0" style={{ color: "#08444c" }}>
//           <h3 className="m-0">
//             Welcome to the Afrikajournal
//             FAQ section.Here, you'll find answers to common questions about our
//             platform, including how to access journals, submit publications, and
//             explore research from across Africa. If you need further assistance,
//             feel free to reach out to our support team.
//           </h3>
//           <FAQ />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Faqs;

import React from "react";
import Header from "../components/MapSection/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FaqSection/Faq";

const Faqs = () => {
  return (
    <>
      {/* <Header /> */}
      <Header
        imageSrc="https://innovativegenomics.org/wp-content/uploads/2024/07/FAQ-hero.jpg"
        title="FAQs"
      ></Header>
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
              <b>Frequently Asked Questions</b>
            </h3>
          </div>

          {/* Right Column */}
          <div className="col-md-9">
            <h3 className="mb-3" style={{ color: "#08444c" }}>
              Welcome to the AfrikaJournal FAQ section. Here, you'll find
              answers to common questions about our platform, including how to
              access journals, submit publications, and explore research from
              across Africa. If you need further assistance, feel free to reach
              out to our support team.
            </h3>
            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
