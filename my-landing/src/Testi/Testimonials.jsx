// import React, { useEffect,useContext } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Quote, Stars } from "lucide-react";
// import { LanguageContext } from "../contexts/LanguageContext";
// const Testimonials = () => {
//   const { translations } = useContext(LanguageContext);
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const testimonials = [
//     {
//       quote:
//         "The platform transformed my research workflow. The comprehensive tools and resources available made my academic journey significantly smoother.",
//       author: "Sarah Chen",
//       title: "Research Scholar, Stanford University",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
//       rating: 5,
//     },
//     {
//       quote:
//         "As an educator, I've seen countless platforms, but this one stands out for its intuitive design and robust features. It's become an essential tool in my teaching arsenal.",
//       author: "Dr. James Wilson",
//       title: "Professor, MIT",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
//       rating: 5,
//     },
//     {
//       quote:
//         "The collaborative features have been invaluable for my research team. We've been able to streamline our workflow and improve our productivity significantly.",
//       author: "Emily Rodriguez",
//       title: "PhD Candidate, Berkeley",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
//       rating: 5,
//     },
//   ];

//   const StarRating = ({ rating }) => (
//     <div className="d-flex gap-1 mb-3">
//       {[...Array(rating)].map((_, i) => (
//         <Stars key={i} className="text-warning" size={20} />
//       ))}
//     </div>
//   );

//   return (
//     <section className="py-5 bg-light" ref={ref}>
//       <div className="container text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mb-4"
//         >
//           <h2 className="fw-bold text-primary">What Our Users Say</h2>
//           <div className="mx-auto mt-2" style={{ width: "80px", height: "4px", backgroundColor: "#007bff" }}></div>
//         </motion.div>

//         <motion.div className="row g-4">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="col-md-4"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="card shadow-sm p-4 border-0">
//                 <div className="d-flex justify-content-center mb-3">
//                   <Quote className="text-primary" size={32} />
//                 </div>
//                 <StarRating rating={testimonial.rating} />
//                 <p className="text-muted">{testimonial.quote}</p>
//                 <div className="d-flex align-items-center mt-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.author}
//                     className="rounded-circle me-3 border border-secondary"
//                     width="50"
//                     height="50"
//                   />
//                   <div>
//                     <h5 className="mb-0">{testimonial.author}</h5>
//                     <p className="text-muted small mb-0">{testimonial.title}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Stars } from "lucide-react";
import { LanguageContext } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { translations } = useContext(LanguageContext);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const testimonials = translations.testimonialsSection.items.map((item, index) => ({
    quote: item.quote,
    author: item.author,
    title: item.title,
    image: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    ][index],
    rating: 5
  }));

  const StarRating = ({ rating }) => (
    <div className="d-flex gap-1 mb-3">
      {[...Array(rating)].map((_, i) => (
        <Stars key={i} className="text-warning" size={20} />
      ))}
    </div>
  );

  return (
    <section className="py-5 bg-light" ref={ref}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="fw-bold text-primary">{translations.testimonialsSection.title}</h2>
          <div className="mx-auto mt-2" style={{ width: "80px", height: "4px", backgroundColor: "#007bff" }}></div>
        </motion.div>

        <motion.div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card shadow-sm p-4 border-0">
                <div className="d-flex justify-content-center mb-3">
                  <Quote className="text-primary" size={32} />
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="text-muted">{testimonial.quote}</p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-circle me-3 border border-secondary"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h5 className="mb-0">{testimonial.author}</h5>
                    <p className="text-muted small mb-0">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
