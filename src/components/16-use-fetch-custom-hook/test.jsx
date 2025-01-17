// Importing the useState hook from React.
import { useState } from "react";

// Importing the custom useFetch hook from the current directory.
import useFetch from ".";

// Main component to test the useFetch custom hook.
export default function UseFetchHookTest() {

   // State variables to manage query parameters for the fetch request.
   const [limit, setLimit] = useState(10); // Limit of products to fetch.
   const [skip, setSkip] = useState(2); // Number of products to skip.
   const [order, setOrder] = useState('asc'); // Order of the products (ascending).

   // Call the useFetch hook, passing in the API URL and the options object built from state.
   const { error, loading, data } = useFetch('https://dummyjson.com/products', { limit: limit, skip: skip, order: order });

   return (

      // Main container for the hook test implementation.
      <section id="use-fetch" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-emerald-500`}>

         {/* Title for the useFetch test implementation */}
         <h2 className={`text-4xl text-center text-slate-600 font-bold`}>useFetch Custom Hook</h2>

         {/* Container for displaying the fetched products conditionally */}
         <div className="flex flex-col gap-2 mt-4 px-5 md:px-16 lg:px-32">

            {/* Display a loading message while data is being fetched */}
            {
               loading ?
                  <p className="text-center">Loading data. Please wait...</p>
                  : null
            }

            {/* Conditionally render the products if they are available */}
            {
               data && data.products && data.products.length > 0 ?
                  data.products.map((productItem, productItemIndex) =>
                     <div className="text-center text-slate-600 bg-sky-200 py-2 rounded-xl" key={productItemIndex}>
                        {productItem.title}
                     </div>
                  )
                  : null // If no products exist, render nothing.
            }

         </div>

      </section>

   );

};