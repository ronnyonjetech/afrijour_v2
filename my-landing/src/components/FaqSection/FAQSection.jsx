import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FAQAccordion from "./FAQAccordion";

const faqs = [
  {
    question: "How can I explore African Journals?",
    answer:
      "You can access African journals through our extensive Journal Directory. Simply search by discipline or browse through our categories to find the journals relevant to your field of interest. Our platform is designed to make finding and accessing research publications easy and intuitive.",
  },
  {
    question: "What are Partner Repositories, and how do they work?",
    answer:
      "Partner Repositories are collaborative platforms that host a wide range of African research publications. Afrika Journals partners with these repositories to ensure comprehensive access to scholarly articles and papers from across the continent. Through our platform, you can seamlessly access research hosted on these partner repositories.",
  },
  {
    question: "How does Afrika Journals's indexing system benefit researchers?",
    answer:
      "Our indexing system categorizes and organizes journals and articles, making it easier for researchers to find relevant content quickly. By improving the discoverability of African research, our indexing system helps users efficiently access the information they need for their studies and academic work.",
  },
  {
    question: "What role do Reviewers play on Afrika Journals?",
    answer:
      "Reviewers are integral to maintaining the quality and credibility of the research featured on Afrika Journals. They are experts in their fields who conduct rigorous peer reviews to ensure that the academic content meets the highest standards of excellence before it is published on our platform.",
  },
];

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="display-5 fw-bold text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted lead">
            We encourage our students, researchers, and professors to ask us any
            questions regarding our journals. Our skilled mentors are ready to
            answer all your questions 24/7.
          </p>
        </motion.div>

        <div className="row g-4">
          <motion.div
            className="col-lg-6 mx-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FAQAccordion faqs={faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
