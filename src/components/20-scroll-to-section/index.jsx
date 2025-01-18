import { useEffect, useRef, useState } from "react";

export default function ScrollToSection() {

   const [cardsData, setCardsData] = useState([]);

   const chosenCardIndex = 12;

   const ref = useRef();

   // Function to smoothly scroll the viewport to the top section
   function handleScrollToSection() {

      let pos = ref.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({

         top: pos,
         behavior: 'smooth'

      });

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
      <section id="scroll-to-section" className={`relative flex flex-col items-center gap-5 min-h-screen w-full py-20 md:py-48 font-mono bg-slate-300`}>

         {/* Title of the component */}
         <h2 className={`text-4xl text-center text-slate-800 font-bold cursor-default`}>Scroll to Section</h2>

         <button
            className="text-xl border border-fuchsia-500 hover:bg-fuchsia-500 hover:text-slate-300 rounded-md px-5 py-1"
            onClick={handleScrollToSection}
         >
            Scroll to Card-{chosenCardIndex+1}
         </button>

         {/* Container for the top and bottom sections with controls */}
         <ul className="space-y-5 text-center text-slate-300 cursor-default mt-5 md:px-16 lg:px-32">

            {

               cardsData && cardsData.length > 0 ?

                  cardsData.map((cardItem, cardItemIndex) =>
                     <li
                        ref={cardItemIndex === chosenCardIndex ? ref : null}
                        key={`card-${cardItemIndex + 1}`}
                        className={`${cardItem.bgColor} rounded-xl text-xl text-slate-800 py-10 px-64`}
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