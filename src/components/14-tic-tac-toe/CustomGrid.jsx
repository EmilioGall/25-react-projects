import { useState } from "react";

export default function CustomGrid({ rows, columns }) {

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

      <div className={`flex gap-2 border p-2`}>

         {
         gridData.map((row, rowIndex) => (
            <div className="grid-row" key={rowIndex}>

               {
               row.map((item, colIndex) => (
                  <div className="grid-item" key={colIndex}>

                     {item}

                  </div>
               ))
               }

            </div>
         ))
         }

      </div>

   );

};