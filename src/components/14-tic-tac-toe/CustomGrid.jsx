import { useState } from "react";

export default function CustomGrid({ rows, columns, handleSquareSelection }) {

   // Create an array of arrays to represent the grid structure
   const gridData = Array.from(

      { length: columns },

      (_, rowIndex) => Array.from(

         { length: rows },

         (_, colIndex) => `Item ${rowIndex * columns + colIndex + 1}`

      )

   );

   console.log('gridData =', gridData);

   return (

      <div className={`flex gap-2 border rounded-lg p-4`}>

         {
            gridData.map((row, rowIndex) => (
               <div className={`flex flex-col gap-2`} key={rowIndex}>

                  {
                     row.map((item, colIndex) => (
                        <div className={`aspect-square border border-black rounded-lg flex items-center text-center p-2`} key={colIndex}>

                           <button onClick={() => handleSquareSelection(rowIndex, colIndex)}>

                              {item}

                           </button>

                        </div>
                     ))
                  }

               </div>
            ))
         }

      </div>

   );

};