import React from "react";
import Header from "../components/MapSection/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConferenceSection from "../components/Conferences/ConferenceSection";
import ConferenceCarousel from "../components/Conferences/ConferenceCard";
import ConferenceCard from "../components/Conferences/ConferenceCard";
const Conferences = () => {
  return (
    <>
      {/* <Nav/>
    <Header/> */}
      <Header
        imageSrc="https://www.eventsmadesimple.co.uk/uploads/148-pexels-christina-morillo-1181395-w1150-h0.jpg"
        title="Conferences"
      ></Header>
      {/* <div className="container">
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
              <b>Conferences</b>
            </h3>
          </div>

          
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
      </div> */}
      <ConferenceCard/>
      {/* <ConferenceCarousel/> */}
      <Footer />
    </>
  );
};

export default Conferences;
