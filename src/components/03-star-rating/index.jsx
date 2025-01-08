// Import the useState hook from React to manage component state
import { useState } from "react";

// Importing star icon from 'react-icons'
import { FaStar } from 'react-icons/fa';

/**
 * Description: StarRating component allows users to rate items using star ratings.
 * @param {number} {starsNum=5} - The number of stars to display (default is 5).
 */
export default function StarRating({ starsNum = 5 }) {

   // State to track the currently selected star rating
   const [rating, setRating] = useState(0);

   // State to track the star rating currently being hovered over
   const [hoverRating, setHoverRating] = useState(0);

   // Handles the click event on a star to set the rating.
   function handleClick(currentStarIndex) {

      // console.log(currentStarIndex);

      // Update rating state to the clicked star's index
      setRating(currentStarIndex);

   }

   // Handles the mouse hover event on a star to visually indicate which star will be selected.
   function handleMouseHover(currentStarIndex) {

      // console.log(currentStarIndex);

      // Update hoverRating state to the hovered star's index
      setHoverRating(currentStarIndex);

   }

   // Handles the mouse leave event, resetting the hover effect back to the current rating.
   function handleMouseLeave() {

      // Reset hoverRating back to the currently set rating
      setHoverRating(rating);

   }

   return (

      // Main section of the star rating component
      <section id="star-rating" className="h-screen w-full flex flex-col justify-center items-center gap-10 p-10 font-mono bg-red-800">

         {/* Star Rating component Title */}
         <h2 className="text-4xl text-center font-bold">Star rating</h2>

         <div className="flex justify-center items-center gap-1 sm:gap-2">

            {
               // Creating an array based on the number of stars to render
               [...Array(starsNum)].map((value, index) => {

                  // Calculate the current star number (1-based index)
                  const starNum = index + 1;

                  // Return a star icon for each star in the array
                  return <FaStar
                     key={index} // Unique key for each star element
                     className={`size-6 sm:size-8 lg:size-10 ${starNum <= (hoverRating || rating) ? 'text-yellow-500' : 'text-slate-500'}`} // Determine color based on rating and hover
                     onClick={() => { handleClick(starNum) }} // Handle star click to set rating
                     onMouseMove={() => { handleMouseHover(starNum) }} // Handle mouse move to set hover rating
                     onMouseLeave={() => { handleMouseLeave(starNum) }} // Handle mouse leave to reset hover rating
                  />
               })

            }

         </div>

      </section>

   );

}
