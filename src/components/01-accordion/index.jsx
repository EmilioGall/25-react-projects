import { useState } from "react";
import data from './data';
import './style.css';

export default function Accordion() {

   const [selected, setSelected] = useState(null);
   const [multiSelection, setMultiSelection] = useState(false);
   const [selectedArray, setSelectedArray] = useState([]);

   function handleSingleSelection(currentId) {

      console.log(currentId);

      setSelected(currentId == selected ? null : currentId);

   }

   function changeSelectionType() {

      multiSelection ? setMultiSelection(false) : setMultiSelection(true);

   }

   function handleMultiSelection(currentId) {

      console.log(currentId);

      const cpySelectedArray = [...selectedArray];

      const currentIdIndex = cpySelectedArray.indexOf(currentId);

      console.log(currentId);

      if (currentIdIndex == -1) {

         cpySelectedArray.push(currentId);

      } else {

         cpySelectedArray.splice(currentIdIndex, 1);

      };

      setSelectedArray(cpySelectedArray);

   }

   return (

      <section className="wrapper flex flex-col justify-center items-center gap-5 h-screen w-full font-mono bg-lime-200">

         <h1 className="text-4xl text-center font-bold">Accordion</h1>

         {

            multiSelection

               ? <button className="border-4 border-lime-700 rounded-lg text-lime-700 text-xl px-5 py-3" onClick={changeSelectionType}>Disable Multi-selection</button>

               : <button className="border-4 border-lime-700 rounded-lg text-lime-700 text-xl px-5 py-3" onClick={() => setMultiSelection(!multiSelection)}>Enable Multi-selection</button>

         }

         <div className="accordion w-4/5">

            {

               data && data.length > 0 ?

                  data.map((dataItem) =>

                     <div key={dataItem.id} className="item bg-lime-400 rounded-lg cursor-pointer mb-5 px-5 py-3" onClick={multiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>

                        <div className="title flex justify-between items-center font-bold text-xl">

                           <h3>{dataItem.question}</h3>

                           <span>+</span>

                        </div>

                        {

                           multiSelection

                              ? selectedArray.indexOf(dataItem.id) != -1

                                 ? <div className="content h-auto w-4/5">

                                    {dataItem.answer}

                                 </div>

                                 : null

                              : selected == dataItem.id

                                 ? <div className="content h-auto w-4/5">

                                    {dataItem.answer}

                                 </div>

                                 : null

                        }

                     </div>

                  ) :

                  <div>No Data found!</div>

            }

         </div>

      </section>

   );

}
