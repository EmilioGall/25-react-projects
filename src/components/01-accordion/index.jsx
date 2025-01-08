// Import the useState hook from React to manage component state
import { useState } from "react";

// Import the data containing questions and answers for the accordion
import data from './data';

// Import external CSS styles for the accordion
import './style.css';

/**
 * Description: Accordion component show a simple accordion template.
 */
export default function Accordion() {

   // State to track the currently selected item (for single selection mode)
   const [selected, setSelected] = useState(null);

   // State to track whether multi-selection mode is enabled or not
   const [multiSelection, setMultiSelection] = useState(false);

   // State to keep an array of selected items (for multi-selection mode)
   const [selectedArray, setSelectedArray] = useState([]);

   // Function to handle single selection of an accordion item
   function handleSingleSelection(currentId) {

      // console.log(currentId);

      // Toggle selection; if currently selected, deselect it, otherwise select it
      setSelected(currentId == selected ? null : currentId);

   };

   // Function to change the selection mode between single and multi-selection
   function changeSelectionType() {

      // Toggle the multiSelection state
      multiSelection ? setMultiSelection(false) : setMultiSelection(true);

   };

   // Function to handle multi-selection of accordion items
   function handleMultiSelection(currentId) {

      // console.log(currentId);

      // Create a copy of the selected array
      const cpySelectedArray = [...selectedArray];

      // Find the index of the current ID in the selected array
      const currentIdIndex = cpySelectedArray.indexOf(currentId);

      // console.log(currentId);

      // If ID not found, add it to the selected array; otherwise, remove it
      if (currentIdIndex == -1) {

         // Add the current ID
         cpySelectedArray.push(currentId);

      } else {

         // Remove the current ID
         cpySelectedArray.splice(currentIdIndex, 1);

      };

      // Update the state with the new selected array
      setSelectedArray(cpySelectedArray);

   };

   return (

      // Main section for the accordion component
      <section id="accordion" className="wrapper flex flex-col justify-center items-center gap-5 h-screen w-full font-mono bg-lime-200">

         {/* Accordion component Title */}
         <h2 className="text-4xl text-center font-bold">Accordion</h2>

         {/* Button to toggle multi-selection mode */}
         {
            multiSelection ?

               <button className="border-4 border-lime-700 rounded-lg text-lime-700 text-xl px-5 py-3" onClick={changeSelectionType}>Disable Multi-selection</button>

               : <button className="border-4 border-lime-700 rounded-lg text-lime-700 text-xl px-5 py-3" onClick={() => setMultiSelection(!multiSelection)}>Enable Multi-selection</button>
         }

         <div className="accordion w-4/5">

            {/* Check if data is available and has items to display */}
            {
               data && data.length > 0 ?

                  // Map through the data and create an accordion item for each entry
                  data.map((dataItem) =>

                     <div key={dataItem.id} className="item bg-lime-400 rounded-lg cursor-pointer mb-5 px-5 py-3" onClick={multiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>

                        <div className="title flex justify-between items-center font-bold text-xl">

                           <h3>{dataItem.question}</h3>

                           {/* Display a plus sign to indicate expandable content */}
                           <span>+</span>

                        </div>

                        {/* Conditional rendering based on selection type */}
                        {
                           multiSelection ? // If in multi-selection mode, show answer if the item is selected

                              selectedArray.indexOf(dataItem.id) != -1 ?

                                 <div className="content h-auto w-4/5">

                                    {dataItem.answer}

                                 </div>

                                 : null

                              : selected == dataItem.id ? // If in single selection mode, show answer for the selected item

                                 <div className="content h-auto w-4/5">

                                    {dataItem.answer}

                                 </div>

                                 : null
                        }

                     </div>

                  )

                  : <div>No Data found!</div> // Display a message if no data is found
            }

         </div>

      </section>

   );

}
