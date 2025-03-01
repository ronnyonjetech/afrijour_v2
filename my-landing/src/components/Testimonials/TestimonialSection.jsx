import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-5 bg-white" >
      <div className="container text-center">
       
        <div className="position-relative" style={{ height: '300px' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="position-absolute w-100 transition-opacity"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                pointerEvents: currentIndex === index ? 'auto' : 'none',
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <TestimonialCard testimonial={testimonial} isVisible={currentIndex === index} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-3 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`btn rounded-circle p-1 ${currentIndex === index ? 'bg-primary' : 'bg-secondary'}`}
              style={{ width: '10px', height: '10px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
