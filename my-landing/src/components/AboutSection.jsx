import React from "react";

const AboutSection = () => {
  return (
    <section className="section-content" id="about">
      <div className="container py-5">
        {/* First Content Block */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2" data-aos="fade-right" data-aos-duration="700">
            <h2 className="fw-bold" style={{ color: "#113541", fontSize: "2.5rem" }}>Discover the Vibrant Tapestry of African Knowledge</h2>
            <p style={{ color: "#08444c", fontSize: "1.25rem" }}>At AfriJour, we believe that African scholarship deserves a prominent place on the global stage. Our platform is committed to showcasing the intellectual richness and diversity emanating from the African continent. Through innovative analytics and dedicated curation, we empower African scholars and researchers, fostering global collaboration and knowledge exchange.</p>
            <p style={{ color: "#08444c", fontSize: "1.25rem" }}>Our innovative indexing system ensures that the wealth of African academic work is organized and easily searchable, facilitating efficient discovery of relevant content. To uphold the integrity and quality of the research we feature, AfriJour relies on a dedicated team of Reviewers who meticulously evaluate each submission.</p>
            <div className="mt-4">
              <a href="https://afrijour.web.app/" className="btn  btn-lg rounded-pill" style={{ backgroundColor: "#76b83d", color: "#ffffff" }}>
              Explore More
              </a>
            </div>
          </div>
          <div className="col-md-6 order-md-1 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="700">
            <img
              className="img-fluid rounded"
              src="/content-img-1.jpeg"
              alt="content-img-1"
              width="600"
              height="600"
            />
          </div>
        </div>
        
        {/* Second Content Block */}
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right" data-aos-duration="700">
            <h2 className="fw-bold" style={{ color: "#113541", fontSize: "2.5rem" }}>Empowering African Scholars, Researchers and Professors.</h2>
            <p style={{ color: "#08444c", fontSize: "1.25rem" }}>At AfriJour, our mission is to elevate and support African scholars, researchers, and professors by providing a platform that amplifies their contributions and enhances their global impact. We offer extensive access to a wide range of African journals and research publications, ensuring that their work gains the visibility it deserves.</p>
            <p style={{ color: "#08444c", fontSize: "1.25rem" }}>In addition to visibility and access, AfriJour fosters collaboration and networking opportunities within the academic community. Our innovative indexing system and rigorous peer review process create an environment where quality research is highlighted and scholarly dialogue is encouraged.</p>
            <div className="mt-4">
              <a href="https://afrijour.web.app/analytics" className="btn  btn-lg rounded-pill" style={{ backgroundColor: "#76b83d", color: "#ffffff" }}>
              Explore More
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="700">
            <img
              className="img-fluid rounded"
              src="/content-img-2.jpeg"
              alt="content-img-2"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
