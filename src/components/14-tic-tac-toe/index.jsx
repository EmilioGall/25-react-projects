import { useEffect, useState } from "react";
import CustomGrid from "./CustomGrid";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// Grid values
const gridValues = {
   rows: 3,
   columns: 3,
};

// Create an array of arrays to represent the grid structure
let gridData = Array.from(

   { length: gridValues.rows },

   () => Array.from(

      { length: gridValues.columns },

      () => ''

   )

);

export default function TicTacToe() {


   console.log('gridData =', gridData);

   const [player, setPlayer] = useState('x');
   const [gridSquares, setGridSquares] = useState(gridData);

   console.log('gridSquares =', gridSquares);

   function handleSquareSelection(rowIndex, colIndex) {

      console.log(`Attivata casella col: ${colIndex + 1} row: ${rowIndex + 1}`);

      if (player === 'x') {

         if (gridData[rowIndex][colIndex] === '') {

            gridData[rowIndex][colIndex] = <RxCross2 />;

            setPlayer('o');

         };

      } else if (player === 'o') {

         if (gridData[rowIndex][colIndex] === '') {

            gridData[rowIndex][colIndex] = <FaRegCircle />;

            setPlayer('x')

         };

      };

   };

   function clearBoard() {

      gridData = Array.from(

         { length: gridValues.rows },
      
         (_, rowIndex) => Array.from(
      
            { length: gridValues.columns },
      
            (_, colIndex) => ''
      
         )
      
      );

      setGridSquares(gridData);


   };

   useEffect(() => {

      if (gridSquares !== gridData) {

         setGridSquares(gridData);
      }

   }, [gridData]);

   return (

      // Main container for the SearchAutocomplete component
      <section id="tic-tac-toe" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-violet-400`}>

         {/* Title for the search functionality */}
         <h2 className={`text-4xl text-center text-purple-700 font-bold`}>Tic-Tac-Toe</h2>

         {/* Input container for the search functionality */}
         <div className="flex flex-col justify-center items-center gap-2 mt-4">

            <button
               className={`border px-2`}
               onClick={clearBoard}
            >
               Reset
            </button>

            <CustomGrid data={gridSquares} handleSquareSelection={handleSquareSelection} />

         </div>

      </section>

   );

};