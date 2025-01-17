// Importing the custom useWindowResize hook from the current directory
import useWindowResize from ".";

// Main component to test the useWindowResize custom hook.
export default function UseWindowResizeHookTest() {

   // Call the custom hook to get the current window size.
   const windowSize = useWindowResize();

   // Destructuring width and height from windowSize object
   const { width, height } = windowSize;

   // Main container for the hook test implementation
   return (

      // Main container for the hook test implementation.
      <section id="use-window-resize" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-emerald-400`}>

         {/* Title for the useWindowResize test implementation */}
         <h2 className={`text-4xl text-center text-slate-700 font-bold cursor-default`}>useWindowResize Custom Hook</h2>

         {/* Container for displaying window size information */}
         <div className="text-center text-xl text-slate-300 cursor-default mt-4 px-5 md:px-16 lg:px-32">

            <div className="flex flex-col justify-center gap-5 bg-emerald-600 py-3 rounded-xl">

               <h3 className={`text-2xl text-center text-slate-700 font-bold`}>Window Size</h3>

               <div className="flex justify-center gap-12 text-center text-slate-300">

                  {/* Displaying width and height of the window */}
                  <p className="bg-emerald-600 rounded px-3 py-2"><strong className="text-slate-700">Width:</strong> {width} px</p>

                  <p className="bg-emerald-600 rounded px-3 py-2"><strong className="text-slate-700">Height:</strong> {height} px</p>

               </div>

            </div>

         </div>

      </section>

   );

};