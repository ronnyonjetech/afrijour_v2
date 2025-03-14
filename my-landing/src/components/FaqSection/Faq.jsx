import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: "white" }}>
      <div className="container mt-0 ms-0" style={{ backgroundColor: "white" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="card mb-3 border-0">
                <div className="card-header border-0 p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFAQ(index);
                      }
                    }}
                    className="btn btn-link text-decoration-none d-flex justify-content-between align-items-center px-3 py-2 w-100"
                    style={{
                      color: "#08444c",
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="me-2">
                      <strong>{index + 1}. </strong> {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} color="#08444c" />
                    </motion.div>
                  </button>
                </div>

                {/* Collapsible Content */}
                <motion.div
                  id={`faq-content-${index}`}
                  initial={{ height: 0 }}
                  animate={isOpen ? { height: "auto" } : { height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="card-body"
                    style={{ color: "#08444c", backgroundColor: "white" }}
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
