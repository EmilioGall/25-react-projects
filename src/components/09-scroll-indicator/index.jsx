// Importing necessary hooks from React
import { useEffect, useState } from "react"

// Defining a functional component named ScrollIndicator
export default function ScrollIndicator() {

   // Setting up state to track the scroll percentage using React's useState hook
   const [scrollPercentage, setScrollPercentage] = useState(0);

   // Function to handle the calculation of the scroll percentage
   function handleScrollPercentage() {

      // Get the amount scrolled from the top of the document
      const howMuchScrolledFromTop = document.documentElement.scrollTop;

      // Calculate the total scrollable height by subtracting the client height from the total height of the document
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // Calculate the scroll percentage and update the state
      setScrollPercentage((howMuchScrolledFromTop / height) * 100);

   };

   // useEffect hook to add and clean up the scroll event listener
   useEffect(() => {

      // Adding an event listener to the window to listen for scroll events
      window.addEventListener('scroll', handleScrollPercentage);

      // Clean up function to remove the event listener when the component unmounts
      return () => {

         // Remove the scroll event listener
         window.removeEventListener('scroll', () => { });

      };

   }, []); // The empty dependency array ensures the effect runs only once after the initial mount

   // console.log('scrollPercentage =', scrollPercentage);

   return (

      // Main section of the Scroll Indicator component
      <section id="scroll-indicator" className={`h-screen w-4 pt-12 font-mono`}>

         <div className={`h-full py-5`}>

            {/* Outer container for the scroll indicator background */}
            <div className={`h-full w-full bg-slate-600 rounded-full p-1`}>

               {/* Inner container which represents the actual scroll progress, its height is controlled by the scrollPercentage state */}
               <div className={`w-full bg-slate-300 rounded-full`} style={{ height: `${scrollPercentage}%` }}>

               </div>

            </div>

         </div>

      </section>

   )

};