export default function CustomGrid({ data, handleSquareSelection }) {

   // console.log('data =', data);

   return (

      <div className={`flex flex-col gap-2 border rounded-lg p-2 w-60 h-60`}>

         {
            data.map((row, rowIndex) => (
               <div className={`flex gap-2`} key={rowIndex}>

                  {
                     row.map((item, colIndex) => (
                        <button
                           id={`Square-col${colIndex + 1}-row${rowIndex + 1}`}
                           className={`aspect-square h-max w-full border border-black rounded-lg flex justify-center items-center text-center p-2`}
                           key={colIndex}
                           onClick={() => handleSquareSelection(rowIndex, colIndex)}
                        >

                           {item}

                        </button>
                     ))
                  }

               </div>
            ))
         }

      </div>

   );

};