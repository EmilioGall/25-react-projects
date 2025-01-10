// Import the useState hook from React to manage component state
import { useState } from "react";

// Import useStore from the context/store to manage global state
import { useStore } from '../../store';

// MenuList for rendering sub-menu items
import MenuList from "./menu-list";

// Import icons for arrow indicators from 'react-icons'
import { SlArrowDown, SlArrowUp, SlArrowRight, SlArrowLeft } from "react-icons/sl";

/**
 * MenuItem component represents an individual menu item and can contain nested menu items.
 * It allows toggling the visibility of its children if they exist.
 * 
 * @param {Object} item - The menu item object with properties like label, `to`, and children.
 * @param {number|string} itemId - The unique identifier for the menu item, useful for styling and logic.
 */
export default function MenuItem({ item, itemId }) {

   // Get global state and dispatch function from the store
   const { state, dispatch } = useStore();

   // State to manage which children's menus are displayed
   const [displayCurChildren, setDisplayCurChildren] = useState({})

   /**
    * Toggles the visibility of the children menu items for the current menu item.
    * Updates the displayCurChildren state with the new visibility status.
    * 
    * @param {string} getCurLabel - The label of the current menu item used as the key.
    */
   function handleToogleChildren(getCurLabel) {

      // Update state to flip the display of current item children
      setDisplayCurChildren({ ...displayCurChildren, [getCurLabel]: !displayCurChildren[getCurLabel] });

   }

   /**
    * Toggles the visibility of a specific element in the UI.
    * Dispatches an action to toggle the global scroll indicator.
    * This function may be used for dynamically showing or hiding UI elements based on the state.
    */
   function handleToogleVisibility() {

      // Dispatch action to toggle the scroll indicator state
      dispatch({ type: 'TOGGLE_SCROLL_INDICATOR' });

      // console.log(`state.scrollIndicator`, state.scrollIndicator);

   };

   return (

      // Render the menu item as a list item
      <li className="md:ml-4">

         {/* Render a container for the link with conditional styling */}
         <div className={`flex justify-center md:justify-start gap-2 items-center hover:bg-cyan-600 px-3 py-1 ${displayCurChildren[item.label] ? 'mb-1.5 md:bg-slate-600' : ''} ${state.scrollIndicator && itemId === 8 ? 'mb-1.5 bg-slate-600 rounded-e-lg' : 'rounded-lg'}`}>

            {/* Anchor element for the menu item with its properties */}
            <a href={item.to}
               className={`flex justify-center md:justify-start gap-2 items-center`}
            >

               {
                  item && item.number && itemId !== 8 ?

                     // Display item number if available
                     <span className="font-bold text-2xl text-slate-100">{item.number}</span>

                     : null
               }

               {
                  item && item.number && itemId === 8 ?

                     // Display item number if available
                     <span onClick={handleToogleVisibility} className="font-bold text-2xl text-slate-100">{item.number}</span>

                     : null
               }

               {/* Render the label of the menu item */}
               <p className="text-lg leading-none text-slate-100 hidden md:flex">{item.label}</p>

            </a>

            {/* Render arrow indicator if this item has children */}
            {
               // Check if there are children
               item && item.children ?

                  // Toggle children on click
                  <span className="hidden md:flex cursor-pointer" onClick={() => handleToogleChildren(item.label)}>

                     {
                        displayCurChildren[item.label] ?
                           <SlArrowUp className="font-bold text-md text-slate-100" /> // Show upward arrow if children are displayed
                           : <SlArrowDown className="font-bold text-md text-slate-100" /> // Show downward arrow if children are hidden

                     }

                  </span>

                  : null
            }

            {/* Render visibility toggle if the item has a visibility property */}
            {
               // Check if there is a visibility key
               item && (item.visible === false || item.visible === true) ?

                  // Toggle visibility on click
                  <span className="hidden md:flex cursor-pointer" onClick={() => handleToogleVisibility()}>

                     {
                        state.scrollIndicator ?
                           <SlArrowLeft className="font-bold text-md text-slate-100" /> // Show left arrow if scroll indicator is active
                           : <SlArrowRight className="font-bold text-md text-slate-100" /> // Show right arrow if scroll indicator is inactive

                     }

                  </span>

                  : null
            }

         </div>


         {
            // Conditionally render child MenuList if there are children and they're supposed to be displayed
            item && item.children && item.children.length > 0 && displayCurChildren[item.label] ?

               <div className="hidden md:block"> {/* Hide in small screens */}

                  {/* Render the nested MenuList for child items */}
                  <MenuList menuList={item.children} />

               </div>

               : null
         }

      </li>

   )

};