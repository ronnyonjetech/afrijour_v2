import React, { useContext } from "react";
import Header from "../components/MapSection/Header";
import Footer from "../components/Footer";
// import AboutSection from '../components/AboutSection'
import About1 from "../components/About1";
// import AboutSection from '../components/AboutSection1'
import { LanguageContext } from "../contexts/LanguageContext";
function About() {
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <Header
        imageSrc="https://journalistsresource.org/wp-content/uploads/2021/05/books-2158773_1920-860x466.jpg"
        title={translations.about1.about}
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
              <b>{translations.about1. platform}</b>
            </h3>
          </div>

          {/* Right Column */}
          <div className="col-md-9">
            <h3 className="mb-3" style={{ color: "#08444c" }}>
            {translations.about1.welcomeAbout}
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
