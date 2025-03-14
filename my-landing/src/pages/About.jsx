import React from "react";
import Header from "../components/MapSection/Header";
import Footer from "../components/Footer";
// import AboutSection from '../components/AboutSection'
import About1 from "../components/About1";
// import AboutSection from '../components/AboutSection1'

function About() {
  return (
    <>
      <Header
        imageSrc="https://journalistsresource.org/wp-content/uploads/2021/05/books-2158773_1920-860x466.jpg"
        title="About"
      ></Header>
      {/* <AboutSection/> */}
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
              <b>Afrika journal platform</b>
            </h3>
          </div>

          {/* Right Column */}
          <div className="col-md-9">
            <h3 className="mb-3" style={{ color: "#08444c" }}>
              Welcome to the AfrikaJournal
              Indexing Hub. Our platform is dedicated to increasing the
              visibility and global reach of African journals. We provide
              powerful tools for indexing, citation tracking, and seamless
              integration with international research databases. By enhancing
              discoverability, facilitating open-access integration, and
              supporting metadata standardization, AfrikaJournal ensures that
              African scholarship gains the recognition it deserves on the
              global stage.
            </h3>
          </div>
        </div>
      </div>

      <About1 />
      <Footer />
    </>
  );
}

export default About;
