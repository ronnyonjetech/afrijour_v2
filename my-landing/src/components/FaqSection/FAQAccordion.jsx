import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-4">
      {faqs.map((faq, index) => (
        <div key={index} className="card mb-3 border-primary">
          <div className="card-header bg-primary text-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="btn btn-link text-white text-decoration-none d-flex justify-content-between align-items-center w-100"
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key={`content-${index}`}
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="card-body bg-light text-dark">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
