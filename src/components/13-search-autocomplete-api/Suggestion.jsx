export default function Suggestions({ data, handleSuggestionClick }) {

   return (
      <ul className="absolute w-full rounded bg-slate-300 opacity-50">
         {
            data.map((suggestion, suggestionIndex) => (

               <li
               className={`text-sky-800 rounded ps-2 font-bold cursor-pointer hover:bg-slate-400`}
               key={suggestionIndex}
               onClick={handleSuggestionClick}>

                  {suggestion}

               </li>
               
            ))
         }
      </ul>
   );
};


