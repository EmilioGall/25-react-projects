// Importing useRef and useState from React
import { useRef, useState } from "react";

// Importing the custom useOnClickOutside hook from the current directory
import useOnClickOutside from ".";

// Main component to test the useOnClickOutside custom hook.
export default function UseOnClickOutsideHookTest() {

   // State to control the visibility of the content
   const [showContent, setShowContent] = useState(false);

   // Create a ref to be passed to the useOnClickOutside hook
   const ref = useRef();

   // Call the useOnClickOutside hook, passing the ref and a function to hide the content
   useOnClickOutside(ref, () => setShowContent(false));

   return (

      // Main container for the hook test implementation.
      <section id="use-on-click-outside" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-rose-950`}>

         {/* Title for the useOnClickOutside test implementation */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>useOnClickOutside Custom Hook</h2>

         {/* Container for displaying content conditionally based on the showContent state */}
         <div className="flex flex-col gap-2 mt-4 px-5 md:px-16 lg:px-32">

            {

               showContent ?

                  // Render content when showContent is true
                  <div
                     className={`bg-slate-300 rounded cursor-default flex flex-col gap-2 text-center py-5`}
                     ref={ref}
                  >

                     <h3 className="text-rose-950 text-xl font-bold">This is a random content</h3>

                     <p className="text-slate-700 text-md font-bold">Click outside to close</p>

                  </div> :

                  // Render button to show content when showContent is false
                  <div className="text-center">

                     <button
                        className={`border border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-rose-950 rounded px-3 py-2`}
                        onClick={() => setShowContent(true)} // Update state to show content when clicked
                     >

                        Show Content

                     </button>

                  </div>

            }

         </div>

      </section>

   );

};