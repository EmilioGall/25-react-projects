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

      <div className="bg-lime-200">

         <h1 className="text-red-500 text-3xl font-bold underline">Accordion</h1>

         {

            multiSelection

               ? <button className="ms-btn" onClick={changeSelectionType}>Disable Multi-selection</button>

               : <button className="ms-btn" onClick={() => setMultiSelection(!multiSelection)}>Enable Multi-selection</button>

         }

         <div className="accordion">

            {

               data && data.length > 0 ?

                  data.map((dataItem) =>

                     <div key={dataItem.id} className="item">

                        <div className="title" onClick={multiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>

                           <h3>{dataItem.question}</h3>

                           <span>+</span>

                        </div>

                        {

                           multiSelection

                              ? selectedArray.indexOf(dataItem.id) != -1

                                 ? <div className="content">

                                    {dataItem.answer}

                                 </div>

                                 : null

                              : selected == dataItem.id

                                 ? <div className="content">

                                    {dataItem.answer}

                                 </div>

                                 : null

                        }

                     </div>

                  ) :

                  <div>No Data found!</div>

            }

         </div>

      </div>

   );

}
