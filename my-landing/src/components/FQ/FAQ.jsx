// import React, { useEffect, useContext } from "react";
// import { useTranslation } from "react-i18next";
// import { useInView } from "react-intersection-observer";
// import { Accordion } from "react-bootstrap";
// import { LanguageContext } from "../../contexts/LanguageContext";
// const FAQ = () => {
//   const { translations } = useContext(LanguageContext);
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const faqs = [
//     {
//       question: "How can I explore African Journals?",
//       answer:
//         "You can explore African Journals through our comprehensive directory, advanced search features, and curated collections. Our platform provides easy navigation and filtering options to help you find relevant journals in your field of interest.",
//     },
//     {
//       question: "What are Partner Repositories, and how do they work?",
//       answer:
//         "Partner Repositories are collaborative platforms that work with Afrika Journals to provide expanded access to research materials. These partnerships ensure broader coverage and easier access to African scholarly content.",
//     },
//     {
//       question: "How does Afrika Journals's indexing system benefit researchers?",
//       answer:
//         "Our innovative indexing system categorizes and organizes research content effectively, making it easier to discover relevant materials. It includes advanced metadata, cross-referencing, and smart search capabilities.",
//     },
//     {
//       question: "What role do Reviewers play on Afrika Journals?",
//       answer:
//         "Reviewers on Afrika Journals play a crucial role in maintaining quality standards. They evaluate submissions, provide feedback, and ensure the academic integrity of published content through our peer review process.",
//     },
//   ];

//   return (
//     <section className="py-5 bg-light" ref={ref}>
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="fw-bold text-dark">Frequently Asked Questions</h2>
//           <p className="text-secondary w-75 mx-auto">
//             We encourage our students, researchers, and professors to ask us any
//             questions regarding our journals. Our skilled mentors are ready to
//             answer all your questions 24/7.
//           </p>
//         </div>

//         <Accordion className="shadow-sm">
//           {faqs.map((faq, index) => (
//             <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border-0">
//               <Accordion.Header className="bg-white p-3 rounded">
//                 <span className="fw-semibold">{faq.question}</span>
//               </Accordion.Header>
//               <Accordion.Body className="text-muted p-3 border-top">{faq.answer}</Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Accordion } from "react-bootstrap";
import { LanguageContext } from "../../contexts/LanguageContext";

const FAQ = () => {
  const { translations } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-5 bg-light" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">{translations.faqSection.title}</h2>
          <p className="text-secondary w-75 mx-auto">
            {translations.faqSection.description}
          </p>
        </div>

        <Accordion className="shadow-sm">
          {translations.faqSection.items.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border-0">
              <Accordion.Header className="bg-white p-3 rounded">
                <span className="fw-semibold">{faq.question}</span>
              </Accordion.Header>
              <Accordion.Body className="text-muted p-3 border-top">{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
