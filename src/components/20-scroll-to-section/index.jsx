import { useEffect, useRef, useState } from "react";

export default function ScrollToSection() {

   const [cardsData, setCardsData] = useState([]);

   const ref = useRef();

   // Function to smoothly scroll the viewport to the top section
   function handleScrollToSection() {

      // Using scrollIntoView to bring the top section into view
      topRef.current.scrollIntoView({ behavior: 'smooth' });

   };

   function printDataCards() {



   };

   useEffect(() => {

      // Initialize an array to hold the new card data
      const newCardsData = [];

      for (let i = 0; i < 20; i++) {

         // Add new card objects to the array
         newCardsData.push({ label: `Card-${i + 1}`, bgColor: 'bg-fuchsia-500' });

      }

      // Set the entire new array as the state
      setCardsData(newCardsData);

   }, []);

   console.log('cardsData =', cardsData);


   return (

      // Main container for the scrolling implementation.
      <section id="scroll-to-section" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-slate-300`}>

         {/* Title of the component */}
         <h2 className={`text-4xl text-center text-slate-800 font-bold cursor-default`}>Scroll to Section</h2>

         {/* Container for the top and bottom sections with controls */}
         <ul className="space-y-5 text-center text-slate-300 cursor-default mt-10 px-5 md:px-16 lg:px-32">

            {

               cardsData && cardsData.length > 0 ?

                  cardsData.map((cardItem, cardItemIndex) =>
                     <li
                        key={`card-${cardItemIndex + 1}`}
                        className={`${cardItem.bgColor} rounded-xl text-xl text-slate-800 py-10`}
                     >
                        {cardItem.label}

                     </li>
                  )

                  : null
            }

         </ul>

      </section>

   );

};