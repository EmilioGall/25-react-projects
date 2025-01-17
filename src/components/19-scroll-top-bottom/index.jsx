// Importing the custom useFetch hook from the current directory.
import { useRef, useState } from "react";
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

   const bottomRef = useRef(null);

   const topRef = useRef(null);

   function handleScrollToBottom() {

      bottomRef.current.scrollIntoView({ behavior: 'smooth' });

   };

   function handleScrollToTop() {

      topRef.current.scrollIntoView({ behavior: 'smooth' });

   };

   if (data) {

      console.log('data.products =', data.products);

   };

   return (

      // Main container for the hook test implementation.
      <section ref={topRef} id="scroll-top-bottom" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-blue-900`}>

         {/* Title for the useWindowResize test implementation */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold cursor-default`}>Scroll to Top and Bottom</h2>

         {/* Container for displaying window size information */}
         <div className="space-y-8 text-center text-slate-300 cursor-default mt-10 px-5 md:px-16 lg:px-32">

            <div className="space-y-2">

               <h3 className="text-2xl font-bold">Top Section</h3>

               <button
                  className="text-xl border border-slate-300 hover:bg-slate-300 hover:text-blue-900 rounded-md px-3 py-1"
                  onClick={handleScrollToBottom}
               >
                  Scroll to Bottom Section
               </button>

            </div>

            <ul>

               {
                  loading ?

                     <li>Loading data. Please wait...</li>

                     : null
               }

               {
                  data && data.products ?

                     data.products.map((productItem, productItemIndex) =>

                        <li key={productItemIndex}>{productItem.title}</li>
                     )

                     : null
               }

            </ul>

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