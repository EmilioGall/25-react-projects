export default function Suggestions({ data }) {

   return (
      <ul className="absolute w-full ps-2 rounded bg-slate-300 opacity-50">
         {
            data.map((suggestion, suggestionIndex) => <li className={`text-sky-800 font-bold`} key={suggestionIndex}>{suggestion}</li>)
         }
      </ul>
   );
};


