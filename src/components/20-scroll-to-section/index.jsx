// Import necessary React Hooks
import { useEffect, useRef, useState } from "react";

// Define and export the ScrollToSection functional component
export default function ScrollToSection() {

   // Initialize state variable to hold an array of card data
   const [cardsData, setCardsData] = useState([]);

   // Define the index of the card that should be scrolled to
   const chosenCardIndex = 12;

   // Create a reference to the element that should be scrolled to
   const ref = useRef();

   // Define a function to handle the scrolling to the chosen card
   function handleScrollToSection() {

      // Get the position of the element that should be scrolled to and add the page's scroll offset to get the correct position
      let pos = ref.current.getBoundingClientRect().top + window.scrollY;

      // Use the window's scrollTo method to smoothly scroll to the target position
      window.scrollTo({

         top: pos, // Set the top position of the viewport to the calculated target position
         behavior: 'smooth' // Specify the smooth animation behavior for the scrolling

      });

   };

   // Use the useEffect hook to handle side effects (in this case, initializing the card data)
   useEffect(() => {

      // Initialize an array to hold the new card data
      const newCardsData = [];

      // Create 20 card objects with unique labels and background colors
      for (let i = 0; i < 20; i++) {

         // Add a new card object to the array with a unique label and background color
         newCardsData.push({ label: `Card-${i + 1}`, bgColor: 'bg-fuchsia-500' });

      }

      // Update the component's state with the new array of card data
      setCardsData(newCardsData);

   }, []); // The empty dependency array means this effect will only run once after the component is mounted

   // Return the JSX for the ScrollToSection component
   return (

      // Main container for the scrolling implementation
      <section id="scroll-to-section" className={`relative flex flex-col items-center gap-5 min-h-screen w-full py-20 md:py-48 font-mono bg-slate-300`}>

         {/* Title of the component */}
         <h2 className={`text-4xl text-center text-slate-800 font-bold cursor-default`}>Scroll to Section</h2>

         {/* Button to trigger the scrolling to the chosen card */}
         <button
            className="text-xl border border-fuchsia-500 hover:bg-fuchsia-500 hover:text-slate-300 rounded-md px-5 py-1"
            onClick={handleScrollToSection}
         >
            Scroll to Card-{chosenCardIndex + 1}
         </button>

         {/* Container for the card list */}
         <ul className="space-y-5 text-center text-slate-300 cursor-default mt-5 md:px-16 lg:px-32">

            {
               /* Conditionally render the list of cards if the component's state is not empty */
               cardsData && cardsData.length > 0 ?

               // Map over the cardsData array to render each card
                  cardsData.map((cardItem, cardItemIndex) =>
                     // Assign a reference to the current card element if it's the chosen card
                     <li
                        ref={cardItemIndex === chosenCardIndex ? ref : null}
                        key={`card-${cardItemIndex + 1}`}
                        className={`${cardItem.bgColor} rounded-xl text-xl text-slate-800 py-10 px-64`}
                     >
                        {cardItem.label}

                     </li>
                  )

                  : null // Otherwise, don't render anything
            }

         </ul>

      </section>

   );

};