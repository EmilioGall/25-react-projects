// Importing the useState hook from React.
import { useRef, useState } from "react";

// Importing the custom useFetch hook from the current directory.
import useOnClickOutside from ".";

// Main component to test the useFetch custom hook.
export default function UseOnClickOutsideHookTest() {

   const [showContent, setShowContent] = useState(false);

   const ref = useRef();

   useOnClickOutside(ref, () => setShowContent(false));

   return (

      // Main container for the hook test implementation.
      <section id="use-on-click-outside" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-rose-950`}>

         {/* Title for the useFetch test implementation */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>useOnClickOutside Custom Hook</h2>

         {/* Container for displaying the fetched products conditionally */}
         <div className="flex flex-col gap-2 mt-4 px-5 md:px-16 lg:px-32">

            {

               showContent ?

                  <div
                     className={`bg-slate-300 rounded cursor-default flex flex-col gap-2 text-center py-5`}
                     ref={ref}
                  >

                     <h3 className="text-rose-950 text-xl font-bold">This is a random content</h3>

                     <p className="text-slate-700 text-md font-bold">Click outside to close</p>

                  </div> :

                  <div className="text-center">

                     <button
                        className={`border border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-rose-950 rounded px-3 py-2`}
                        onClick={() => setShowContent(true)}
                     >

                        Show Content

                     </button>

                  </div>

            }

         </div>

      </section>

   );

};