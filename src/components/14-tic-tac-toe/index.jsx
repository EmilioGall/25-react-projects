import CustomGrid from "./CustomGrid";

export default function TicTacToe() {

   return (

      // Main container for the SearchAutocomplete component
      <section id="tic-tac-toe" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-violet-400`}>

         {/* Title for the search functionality */}
         <h2 className={`text-4xl text-center text-purple-700 font-bold`}>Tic-Tac-Toe</h2>

         {/* Input container for the search functionality */}
         <div className="flex flex-col justify-center items-center gap-2">

            <CustomGrid rows={3} columns={3} />

         </div>

      </section>

   );

};