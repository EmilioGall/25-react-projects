import { useRef, useState } from "react";

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

   return (

      // Main container for the scrolling implementation.
      <section id="scroll-to-section" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-slate-300`}>

         {/* Title of the component */}
         <h2 className={`text-4xl text-center text-slate-800 font-bold cursor-default`}>Scroll to Section</h2>

         {/* Container for the top and bottom sections with controls */}
         <div className="space-y-2 text-center text-slate-300 cursor-default mt-10 px-5 md:px-16 lg:px-32">

            {
            }

         </div>

      </section>

   );

};