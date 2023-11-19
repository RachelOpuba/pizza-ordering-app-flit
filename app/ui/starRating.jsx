import  { useState } from 'react';
import {StarIcon} from '@heroicons/react/24/solid';

const StarRating = ({ initialRating = 0, onChange }) => {
    const [rating, setRating] = useState(initialRating);
  
    const handleClick = (newRating) => {
      setRating(newRating);
      onChange && onChange(newRating);
    };
  
    return (
        <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((index) => (
          <span key={index} className="rounded-full ">
            <button
              className={`text-2xl ${
                index <= rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
              onClick={() => handleClick(index)}
            >
            <StarIcon width={20} height={20}/>

            </button>
          </span>
        ))}
      </div>
    );
  };
  
  export default StarRating;