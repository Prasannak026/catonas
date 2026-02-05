import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  showCount?: boolean;
  count?: number;
}

/**
 * Star rating display component
 */
export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = 16, 
  showCount = false,
  count = 0 
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={star <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      {showCount && <span className="text-sm text-gray-600">({count} reviews)</span>}
    </div>
  );
};
