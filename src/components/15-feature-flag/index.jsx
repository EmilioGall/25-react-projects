import { useContext, useEffect, useState } from "react";
import { FeatureFlagContext } from "./context";

export default function FeatureFlag() {

   const [givenQuotes, setGivenQuotes] = useState([]);

   const [quotesToRender, setQuotesToRender] = useState([]);

   const { enabledFlags } = useContext(FeatureFlagContext)

   async function fetchQuotes() {

      try {

         const response = await fetch('https://dummyjson.com/quotes?limit=10');

         const data = await response.json();

         // console.log('data.quotes', typeof data.quotes, data.quotes);

         setGivenQuotes(data.quotes);

      } catch (error) {

         console.log(error);

      };

   };

   function getQuotesToRender() {

      if (givenQuotes) {

         setQuotesToRender(givenQuotes.map((quoteItem, quoteItemIndex) => {

            return {

               key: `quote${quoteItemIndex + 1}`,
               content: quoteItem.quote,
               author: quoteItem.author

            };

         }))

      };

   };

   function checkEnabledFlags(getCurKey) {

      return enabledFlags[getCurKey];

   };

   useEffect(() => {

      fetchQuotes();

   }, []);

   useEffect(() => {

      getQuotesToRender();

   }, [givenQuotes]);

   // console.log('givenQuotes', givenQuotes);

   console.log('quotesToRender', quotesToRender);


   return (

      // Main container for the TicTacToe component
      <section id="feature-flag" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-amber-400`}>

         {/* Title for the Tic-Tac-Toe component */}
         <h2 className={`text-4xl text-center text-violet-500 font-bold`}>Feature Flag Implementation</h2>

         {/* Game container  */}
         <ul className="flex flex-col gap-2 mt-4 px-5 md:px-16 lg:px-32">

            {
               quotesToRender.map((quoteItem, quoteItemIndex) =>
                  checkEnabledFlags(quoteItem.key) ?
                     <li
                        className="rounded-lg hover:bg-slate-300 px-5 py-2"
                        key={quoteItemIndex}
                     >

                        <span  className="rounded bg-slate-200 text-violet-500 px-2 py-1">{quoteItem.key}</span>

                        <p className="mt-2 mb-3">{quoteItem.content}</p>

                        <p className="text-right text-slate-500">{quoteItem.author}</p>

                     </li>
                     : null
               )
            }

         </ul>

      </section>

   );

};