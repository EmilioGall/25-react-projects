// Importing a circle icon from react-icons
import { FaRegCircle } from "react-icons/fa";

// Importing a cross icon from react-icons
import { RxCross2 } from "react-icons/rx";

export default function CustomGrid({ data, handleSquareSelection }) {

   return (

      <div className={`flex flex-col gap-2 bg-purple-700 opacity-50 rounded-lg p-2 w-60 h-60`}>

         {
            data.map((row, rowIndex) => (
               <div className={`flex gap-2`} key={rowIndex}>

                  {
                     row.map((item, colIndex) => (
                        <button
                           id={`Square-col${colIndex + 1}-row${rowIndex + 1}`}
                           className={`aspect-square h-max w-full rounded-lg flex justify-center items-center text-center p-2 ${item.winnerCell ? 'bg-lime-500' : 'bg-violet-400'}`}
                           key={colIndex}
                           onClick={() => handleSquareSelection(rowIndex, colIndex)}
                        >
                           {
                              item.cell && item.cell === 'x' ?

                                 <RxCross2
                                    size={40}
                                    className={`text-purple-700`}
                                 />

                                 : ''

                           }
                           {
                              item.cell && item.cell === 'o' ?

                                 <FaRegCircle
                                    size={30}
                                    className={`text-purple-700`}
                                 />

                                 : ''

                           }
                        </button>
                     ))
                  }

               </div>
            ))
         }

      </div>

   );

};