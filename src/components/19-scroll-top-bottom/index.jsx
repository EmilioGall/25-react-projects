// Importing necessary hooks from React and the custom useFetch hook.
import { useRef, useState } from "react";

// Importing the custom useFetch hook from the specified path
import useFetch from "../16-use-fetch-custom-hook/index";

export default function ScrollTopBottom() {

   // State variables to manage query parameters for the fetch request.
   const [limit, setLimit] = useState(100); // Limit of products to fetch.
   const [skip, setSkip] = useState(0); // Number of products to skip.
   const [order, setOrder] = useState('asc'); // Order of the products (ascending).

   // Call the useFetch hook, passing in the API URL and the options object built from state.
   const { error, loading, data } = useFetch(

      'https://dummyjson.com/products',
      { limit: limit, skip: skip, order: order }

   );

   // Creating a ref for the bottom section for scrolling
   const bottomRef = useRef(null);

   // Creating a ref for the top section for scrolling
   const topRef = useRef(null);

   // Function to smoothly scroll the viewport to the bottom section
   function handleScrollToBottom() {

      // Using scrollIntoView to bring the bottom section into view
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });

   };

   // Function to smoothly scroll the viewport to the top section
   function handleScrollToTop() {

      // Using scrollIntoView to bring the top section into view
      topRef.current.scrollIntoView({ behavior: 'smooth' });

   };

   return (

      // Main container for the scrolling implementation.
      <section ref={topRef} id="scroll-top-bottom" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-blue-900`}>

         {/* Title of the component */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold cursor-default`}>Scroll to Top and Bottom</h2>

         {/* Container for the top and bottom sections with controls */}
         <div className="space-y-8 text-center text-slate-300 cursor-default mt-10 px-5 md:px-16 lg:px-32">

            {/* Top Section with a button to scroll to the bottom */}
            <div className="space-y-2">

               <h3 className="text-2xl font-bold">Top Section</h3>

               <button
                  className="text-xl border border-slate-300 hover:bg-slate-300 hover:text-blue-900 rounded-md px-3 py-1"
                  onClick={handleScrollToBottom}
               >
                  Scroll to Bottom Section
               </button>

            </div>

            {/* List of products or loading status */}
            <ul>

               {
                  // Display loading message if data is being fetched
                  loading ?

                     <li>Loading data. Please wait...</li>

                     : null
               }

               {
                  // If data is available and contains products, map through them to create list items
                  data && data.products ?

                     data.products.map((productItem, productItemIndex) =>

                        <li key={productItemIndex}>{productItem.title}</li>
                     )

                     : null
               }

            </ul>

{/* Bottom Section with a button to scroll to the top */}
            <div
               className="space-y-2"
               ref={bottomRef}
            >

               <h3 className="text-2xl font-bold">Bottom Section</h3>

               <button
                  className="text-xl border border-slate-300 hover:bg-slate-300 hover:text-blue-900 rounded-md px-3 py-1"
                  onClick={handleScrollToTop}
               >
                  Scroll to Top Section

               </button>

            </div>

         </div>

      </section>

   );

};