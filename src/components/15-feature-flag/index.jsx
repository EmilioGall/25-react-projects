// Import necessary hooks from React
import { useContext, useEffect, useState } from "react";

// Import the feature flag context
import { FeatureFlagContext } from "./context";

// Define the main FeatureFlag component
export default function FeatureFlag() {

   // Local state to store the fetched quotes and the quotes to render based on flags
   const [givenQuotes, setGivenQuotes] = useState([]);
   const [quotesToRender, setQuotesToRender] = useState([]);

   // Use context to access enabled feature flags
   const { enabledFlags } = useContext(FeatureFlagContext)

   // Asynchronous function to fetch quotes from an external API
   async function fetchQuotes() {

      try {

         // Fetch quotes from the API
         const response = await fetch('https://dummyjson.com/quotes?limit=10');

         // Parse JSON response
         const data = await response.json();

         // console.log('data.quotes', typeof data.quotes, data.quotes);

         // Update the local state with the fetched quotes
         setGivenQuotes(data.quotes);

      } catch (error) {

         // Log any errors encountered during the fetch
         console.log(error);

      };

   };

   // Function to map given quotes into a format suitable for rendering
   function getQuotesToRender() {

      if (givenQuotes) {

         // Map through each quote item and create a new object with properties
         setQuotesToRender(givenQuotes.map((quoteItem, quoteItemIndex) => {

            return {

               key: `quote${quoteItemIndex + 1}`, // Unique key for each quote
               content: quoteItem.quote, // Quote text
               author: quoteItem.author // Author of the quote

            };

         }))

      };

   };

   // Function to check if a specific quote key is enabled based on the feature flags
   function checkEnabledFlags(getCurKey) {

      // Returns boolean indicating if the quote is enabled
      return enabledFlags[getCurKey];

   };

   // Use effect to call fetchQuotes when the component mounts
   useEffect(() => {

      fetchQuotes();

   }, []);

   // Use effect to call getQuotesToRender whenever givenQuotes changes
   useEffect(() => {

      getQuotesToRender();

   }, [givenQuotes]);

   // console.log('quotesToRender', quotesToRender);

   return (

      // Main container for the feature flag implementation
      <section id="feature-flag" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-amber-400`}>

         {/* Title for the Feature Flag implementation */}
         <h2 className={`text-4xl text-center text-violet-500 font-bold`}>Feature Flag Implementation</h2>

         {/* Container for displaying the quotes conditionally */}
         <ul className="flex flex-col gap-2 mt-4 px-5 md:px-16 lg:px-32">

            {
               // Map through the prepared quotes and render only those which are enabled by the feature flags
               quotesToRender.map((quoteItem, quoteItemIndex) =>
                  checkEnabledFlags(quoteItem.key) ? // Check if the current quote key is enabled
                     <li
                        className="rounded-lg hover:bg-slate-300 px-5 py-2"
                        key={quoteItemIndex}
                     >

                        {/* Display the quote key */}
                        <span className="rounded bg-slate-200 text-violet-500 px-2 py-1">{quoteItem.key}</span>

                        {/* Display the quote content */}
                        <p className="mt-2 mb-3">{quoteItem.content}</p>

                        {/* Display the author of the quote */}
                        <p className="text-right text-slate-500">{quoteItem.author}</p>

                     </li>

                     : null // If not enabled, do not render anything
               )
            }

         </ul>

      </section>

   );

};