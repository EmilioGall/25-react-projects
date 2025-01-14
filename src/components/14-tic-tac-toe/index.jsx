import CustomGrid from "./CustomGrid";

export default function TicTacToe() {

   function handleSquareSelection(rowIndex, colIndex) {

      console.log('Attivata');

      console.log(`Attivata casella x: ${colIndex} y: ${rowIndex}`);
      

   };

   return (

      // Main container for the SearchAutocomplete component
      <section id="tic-tac-toe" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-violet-400`}>

         {/* Title for the search functionality */}
         <h2 className={`text-4xl text-center text-purple-700 font-bold`}>Tic-Tac-Toe</h2>

         {/* Input container for the search functionality */}
         <div className="flex justify-center items-center gap-2 mt-4">

            <CustomGrid rows={3} columns={3} handleSquareSelection={handleSquareSelection} />

         </div>

      </section>

   );

};