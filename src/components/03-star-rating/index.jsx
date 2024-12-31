import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './style.css';

export default function StarRating({ starsNum = 5 }) {

   const [rating, setRating] = useState(0);
   const [hoverRating, setHoverRating] = useState(0);

   function handleClick(currentStarIndex) {

      console.log(currentStarIndex);

      setRating(currentStarIndex);

   }

   function handleMouseHover(currentStarIndex) {

      console.log(currentStarIndex);

      setHoverRating(currentStarIndex);

   }

   function handleMouseLeave(currentStarIndex) {

      console.log(currentStarIndex);

      setHoverRating(rating);

   }

   return (

      <div className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-red-800">
         {

            [...Array(starsNum)].map((value, index) => {

               const starNum = index + 1;

               return <FaStar
                  key={index}
                  className={starNum <= (hoverRating || rating) ? 'text-yellow-500' : 'text-slate-500'}
                  onClick={() => { handleClick(starNum) }}
                  onMouseMove={() => { handleMouseHover(starNum) }}
                  onMouseLeave={() => { handleMouseLeave(starNum) }}
                  size={40}
               />
            })

         }
      </div>

   );

}
