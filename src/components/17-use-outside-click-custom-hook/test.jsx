// Importing the useState hook from React.
import { useState } from "react";

// Importing the custom useFetch hook from the current directory.
import useOnClickOutside from ".";

// Main component to test the useFetch custom hook.
export default function UseOnClickOutsideHookTest() {

   const [showContent, setShowContent] = useState(false);

   return (

      // Main container for the hook test implementation.
      <section id="use-on-click-outside" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-rose-950`}>

         {/* Title for the useFetch test implementation */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>useOnClickOutside Custom Hook</h2>

         {/* Container for displaying the fetched products conditionally */}
         <div className="flex flex-col gap-2 mt-4 px-5 md:px-16 lg:px-32">

            {

               showContent ?

                  <div>

                     <h3>This is a random content</h3>

                     <p>Please click outside to close</p>

                  </div> :

                  <button onClick={()=> setShowContent(true)}>Show Content</button>

            }

         </div>

      </section>

   );

};