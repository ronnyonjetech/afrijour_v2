import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/MapSection/Header";
import ResearchHub from "../components/ResearchSection/ResearchHub";
const Research = () => {
  return (
    <>
      {/* <Nav />
      <Header /> */}
      <Header
        imageSrc="https://healthpolicy-watch.news/wp-content/uploads/2023/04/BMRI7_LAB1-scaled.jpeg"
        title="Research"
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
              <b>Research Hub & Resources</b>
            </h3>
          </div>

          {/* Right Column */}
          <div className="col-md-9">
            <h3 className="mb-3" style={{ color: "#08444c" }}>
              Welcome to the AfrikaJournal Research Tools section. Our platform
              offers a suite of resources designed to enhance your research
              workflow. Explore powerful tools for literature discovery,
              citation management, data analysis, and collaboration. Whether
              you're organizing references, accessing open-access journals, or
              utilizing advanced indexing features, AfrikaJournal equips you
              with everything you need for efficient and impactful research.
            </h3>
          </div>
        </div>
      </div>
      <ResearchHub/>
      <Footer />
    </>
  );
};

export default Research;
