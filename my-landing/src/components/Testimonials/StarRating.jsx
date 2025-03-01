import { Star } from 'lucide-react';

export function StarRating({ rating }) {
  return (
    <div className="d-flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={index < rating ? 'text-warning' : 'text-secondary'}
          fill={index < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}
