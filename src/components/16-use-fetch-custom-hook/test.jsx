import { useState } from "react";
import useFetch from ".";

export default function UseFetchHookTest() {

   const [limit, setLimit] = useState(10);
   const [skip, setSkip] = useState(2);
   const [order, setOrder] = useState('asc');

   const { error, loading, data } = useFetch('https://dummyjson.com/products', { limit: limit, skip: skip, order: order });

   console.log('error =', error);
   console.log('loading =', loading);
   console.log('data =', data);


   return (

      // Main container for the feature flag implementation
      <section id="use-fetch" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-emerald-500`}>

         {/* Title for the Feature Flag implementation */}
         <h2 className={`text-4xl text-center text-slate-600 font-bold`}>useFetch Custom Hook</h2>

         {/* Container for displaying the quotes conditionally */}
         <div className="flex flex-col gap-2 mt-4 px-5 md:px-16 lg:px-32">

            {
               loading ?
                  <p className="text-center">Loading data. Please wait...</p>
                  : null
            }

            {
               data && data.products && data.products.length > 0 ?
                  data.products.map((productItem, productItemIndex) =>
                     <div className="text-center text-slate-600 bg-sky-200 py-2 rounded-xl" key={productItemIndex}>
                        {productItem.title}
                     </div>
                  )
                  : null
            }

         </div>

      </section>

   );

};