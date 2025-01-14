// Define and export the Suggestions functional component
// It accepts two props: 'data' (an array of suggestions) and 'handleSuggestionClick' (a function to handle suggestion click events)
export default function Suggestions({ data, handleSuggestionClick }) {

   return (

      // Render an unordered list to contain the suggestions
      <ul className="absolute w-full rounded bg-slate-300 opacity-50">
         {
            // Map over the data array to create a list item for each suggestion
            data.map((suggestion, suggestionIndex) => (

               <li
               className={`text-sky-800 rounded ps-2 font-bold cursor-pointer hover:bg-slate-400`}
               key={suggestionIndex}
               onClick={handleSuggestionClick} // Attach the click event handler to each list item
               >

                  {suggestion} 

               </li>

            ))
         }
      </ul>
   );
};


