import { motion } from 'framer-motion';
import { StarRating } from './StarRating';

export function TestimonialCard({ testimonial, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded shadow p-4 mx-auto text-center"
      style={{ maxWidth: '600px' }}
    >
      <StarRating rating={testimonial.rating} />
      
      <p className="mt-3 text-muted fst-italic">"{testimonial.content}"</p> 

      <div className="mt-4 d-flex align-items-center justify-content-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name} 
          width={48} 
          height={48} 
          className="rounded-circle object-fit-cover"
        />
        <div>
          <h3 className="fw-semibold text-dark mb-0">{testimonial.name}</h3>
          <p className="text-secondary small mb-0">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
