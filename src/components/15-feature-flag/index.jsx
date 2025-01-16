import { useEffect, useState } from "react";

export default function FeatureFlag() {

   const [givenQuotes, setGivenQuotes] = useState([]);

   const [quotesToRender, setQuotesToRender] = useState([]);

   async function fetchQuotes() {

      try {

         const response = await fetch('https://dummyjson.com/quotes?limit=10');

         const data = await response.json();

         console.log('data.quotes', typeof data.quotes, data.quotes);

         setGivenQuotes(data.quotes);

      } catch (error) {

         console.log(error);

      };

   };

   function getQuotesToRender() {

      if (givenQuotes) {

         setQuotesToRender(givenQuotes.map((quoteItem, quoteItemIndex) => { 

            return {

               key: `quote${quoteItemIndex+1}`,
               content: quoteItem.quote,
               author: quoteItem.author

            };

         }))

      };

   };

   useEffect(() => {

      fetchQuotes();

   }, []);

   useEffect(() => {

      getQuotesToRender();

   }, [givenQuotes]);

   console.log('givenQuotes', givenQuotes);

   console.log('quotesToRender', quotesToRender);


   return (

      // Main container for the TicTacToe component
      <section id="feature-flag" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-amber-400`}>

         {/* Title for the Tic-Tac-Toe component */}
         <h2 className={`text-4xl text-center text-violet-500 font-bold`}>Feature Flag Implementation</h2>

         {/* Game container  */}
         <div className="flex flex-col justify-center items-center gap-2 mt-4">

         </div>

      </section>

   );

};