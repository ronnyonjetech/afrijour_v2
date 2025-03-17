// import React, { useState } from "react";
// import { useContext } from "react";

// import {
//   ArrowLeft,
//   ArrowRight,
//   BookOpen,
//   Users,
//   Search,
//   Network,
//   Award,
//   BarChart as ChartBar,
//   Globe2,
// } from "lucide-react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { LanguageContext } from "../contexts/LanguageContext";
// const About = () => {
//   const [currentSection, setCurrentSection] = useState(0);
//   const { translations } = useContext(LanguageContext);

//   const sections = [
//     {
//       title: "Research Excellence",
//       description:
//         "Empowering researchers, scholars, and institutions across Africa through innovative digital publishing solutions and worldwide academic visibility.",
//       features: [
//         {
//           icon: <BookOpen className="text-warning" size={24} />,
//           title: "Comprehensive Research Repository",
//           description:
//             "Leveraging advanced analytics and meticulous curation to empower scholars and researchers through cutting-edge indexing and intuitive search frameworks.",
//         },
//         {
//           icon: <Users className="text-warning" size={24} />,
//           title: "Expert Peer Review Process",
//           description:
//             "Rigorous evaluation led by distinguished expert reviewers, ensuring only impactful and high-quality research is featured.",
//         },
//         {
//           icon: <Search className="text-warning" size={24} />,
//           title: "Enhanced Visibility",
//           description:
//             "Unparalleled access to African journals and research publications, elevating scholars' contributions to global academia.",
//         },
//         {
//           icon: <Network className="text-warning" size={24} />,
//           title: "Global Collaboration Network",
//           description:
//             "Fostering meaningful networking opportunities for scholars to collaborate, exchange ideas, and shape academic discourse.",
//         },
//       ],
//     },
//     {
//       title: "Academic Impact",
//       description:
//         "Leading the transformation of African academic publishing through technological innovation and global collaboration.",
//       features: [
//         {
//           icon: <Award className="text-warning" size={24} />,
//           title: "Citation Impact",
//           description:
//             "Track and enhance your research impact with comprehensive citation metrics and analytics tools.",
//         },
//         {
//           icon: <Globe2 className="text-warning" size={24} />,
//           title: "International Reach",
//           description:
//             "Connect with researchers worldwide and expand the reach of African scholarship across continents.",
//         },
//         {
//           icon: <Network className="text-warning" size={24} />,
//           title: "Research Networks",
//           description:
//             "Build and maintain valuable connections within your field through our extensive academic network.",
//         },
//         {
//           icon: <Search className="text-warning" size={24} />,
//           title: "Discovery Tools",
//           description:
//             "Access advanced search and discovery tools to find relevant research and potential collaborators.",
//         },
//       ],
//     },
//   ];

//   const handlePrevious = () => {
//     setCurrentSection((current) =>
//       current > 0 ? current - 1 : sections.length - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentSection((current) =>
//       current < sections.length - 1 ? current + 1 : 0
//     );
//   };

//   const currentContent = sections[currentSection];

//   return (
//     <div className="container my-5">
//       <div className="text-center mb-5">
//         <h1 className="fw-bold display-5 " style={{ color: "#113541" }}>
//           WHY AFRIKA JOURNALS?
//         </h1>
//         <p className=" lead" style={{ color: "#113541" }}>
//           {currentContent.description}
//         </p>
//       </div>

//       <div className="row g-4">
//         <div className="col-lg-6">
//           {currentContent.features.map((feature, index) => (
//             <div key={index} className="d-flex align-items-start mb-3">
//               <div className="me-3">{feature.icon}</div>
//               <div>
//                 <h4 className="fw-semibold" style={{ color: "#113541" }}>
//                   {feature.title}
//                 </h4>
//                 <p className="text-muted" style={{ color: "#113541" }}>
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="col-lg-6 bg-light p-4 rounded">
//           <h2 className="fw-medium mb-3" style={{ color: "#113541" }}>
//             Join Our Academic Community
//           </h2>
//           <p className="text-muted">
//             Be part of our mission to amplify African voices in academia.
//             Explore our platform and discover the wealth of knowledge and
//             innovation emerging from the continent.
//           </p>
//           <ul className="list-unstyled">
//             <li className="d-flex align-items-center mb-2">
//               <Award className="text-warning me-2" size={24} />
//               Internationally recognized publications
//             </li>
//             <li className="d-flex align-items-center mb-2">
//               <ChartBar className="text-warning me-2" size={24} />
//               Impact factor tracking
//             </li>
//             <li className="d-flex align-items-center">
//               <Globe2 className="text-warning me-2" size={24} />
//               Global research visibility
//             </li>
//           </ul>
//           <div className="d-flex gap-3 mt-3">
//             <button
//               className="btn  d-flex align-items-center"
//               style={{ backgroundColor: "#113541", color: "white" }}
//               onClick={handlePrevious}
//             >
//               <ArrowLeft size={20} className="me-2" /> Previous
//             </button>
//             <button
//               className="btn  d-flex align-items-center"
//               style={{ backgroundColor: "#113541", color: "white" }}
//               onClick={handleNext}
//             >
//               Next <ArrowRight size={20} className="ms-2" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-5">
//         <h2 className="mb-3">Ready to Contribute?</h2>
//         <p className="text-muted">
//           Join thousands of researchers and institutions who are already part of
//           our growing academic community.
//         </p>
//         <button
//           className="btn "
//           style={{ backgroundColor: "#113541", color: "white" }}
//           onClick={() => (window.location.href = "https://afrijour.web.app/upload")}
//         >
//           Submit Your Research
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState, useContext } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  Search,
  Network,
  Award,
  BarChart as ChartBar,
  Globe2,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../contexts/LanguageContext";

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const { translations } = useContext(LanguageContext);

  const sections = translations.about1.sections.map((section) => ({
    ...section,
    features: section.features.map((feature, index) => ({
      ...feature,
      icon: [
        <BookOpen className="text-warning" size={24} />,
        <Users className="text-warning" size={24} />,
        <Search className="text-warning" size={24} />,
        <Network className="text-warning" size={24} />,
        <Award className="text-warning" size={24} />,
        <Globe2 className="text-warning" size={24} />,
      ][index],
    })),
  }));

  const handlePrevious = () => {
    setCurrentSection((current) =>
      current > 0 ? current - 1 : sections.length - 1
    );
  };

  const handleNext = () => {
    setCurrentSection((current) =>
      current < sections.length - 1 ? current + 1 : 0
    );
  };

  const currentContent = sections[currentSection];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 " style={{ color: "#113541" }}>
          {translations.about1.title}
        </h1>
        <p className="lead" style={{ color: "#113541" }}>
          {currentContent.description}
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="d-flex align-items-start mb-3">
              <div className="me-3">{feature.icon}</div>
              <div>
                <h4 className="fw-semibold" style={{ color: "#113541" }}>
                  {feature.title}
                </h4>
                <p className="text-muted" style={{ color: "#113541" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-6 bg-light p-4 rounded">
          <h2 className="fw-medium mb-3" style={{ color: "#113541" }}>
            {translations.about1.joinCommunity.title}
          </h2>
          <p className="text-muted">{translations.about1.joinCommunity.description}</p>
          <ul className="list-unstyled">
            {translations.about1.joinCommunity.benefits.map((benefit, index) => (
              <li key={index} className="d-flex align-items-center mb-2">
                {[<Award />, <ChartBar />, <Globe2 />][index]}
                <span className="ms-2">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-3 mt-3">
            <button
              className="btn d-flex align-items-center"
              style={{ backgroundColor: "#113541", color: "white" }}
              onClick={handlePrevious}
            >
              <ArrowLeft size={20} className="me-2" /> {translations.about1.joinCommunity.buttons.previous}
            </button>
            <button
              className="btn d-flex align-items-center"
              style={{ backgroundColor: "#113541", color: "white" }}
              onClick={handleNext}
            >
              {translations.about1.joinCommunity.buttons.next} <ArrowRight size={20} className="ms-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h2 className="mb-3">{translations.about1.contribute.title}</h2>
        <p className="text-muted">{translations.about1.contribute.description}</p>
        <button
          className="btn"
          style={{ backgroundColor: "#113541", color: "white" }}
          onClick={() => (window.location.href = "https://afrijour.web.app/upload")}
        >
          {translations.about1.contribute.buttonText}
        </button>
      </div>
    </div>
  );
};

export default About;
