// Import the useState hook from React to manage component state
import { useState } from "react";

import { useStore } from '../../store';

// MenuList for rendering sub-menu items
import MenuList from "./menu-list";

// Import icons for arrow indicators from 'react-icons'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import sideMenu from '../06-tree-view/data';

/**
 * MenuItem component represents an individual menu item and can contain nested menu items.
 * It allows for toggling the visibility of its children if they exist.
 * @param {Object} item - Menu item object containing properties like label, to, and children.
 */
export default function MenuItem({ item }) {

   const { state, dispatch } = useStore();

   // State to manage which children's menus are displayed
   const [displayCurChildren, setDisplayCurChildren] = useState({})

   /**
    * Toggles the display of the children menu items for the current menu item.
    * @param {string} getCurLabel - The label of the current menu item used as the key.
    */
   function handleToogleChildren(getCurLabel) {

      // Update state to flip the display of current item children
      setDisplayCurChildren({ ...displayCurChildren, [getCurLabel]: !displayCurChildren[getCurLabel] });

   }

   /**
    * Toggles the display of the children menu items for the current menu item.
    * @param {string} getCurLabel - The label of the current menu item used as the key.
    */
   function handleToogleVisibility() {

      console.log(`state.scrollIndicator`, state.scrollIndicator);

      dispatch({ type: 'TOGGLE_SCROLL_INDICATOR' });

      console.log(`state.scrollIndicator`, state.scrollIndicator);

   };

   return (

      // List item for the menu
      <li className="md:ml-4">

         {/* Render the link for the menu item with styling and conditional classes based on children visibility */}
         <div className={`flex justify-center md:justify-start gap-2 items-center rounded-lg hover:bg-cyan-600 px-3 py-1 ${displayCurChildren[item.label] ? 'mb-1.5 md:bg-slate-600' : ''}`}>

            <a href={item.to}
               className={`flex justify-center md:justify-start gap-2 items-center`}
            >

               {
                  item && item.number ?

                     // Display item number if available
                     <span className="font-bold text-2xl text-slate-100">{item.number}</span>

                     : null
               }

               {/* Display menu item label */}
               <p className="text-lg leading-none text-slate-100 hidden md:flex">{item.label}</p>

            </a>

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

            {
               // Check if there is a visibility key
               item && (item.visible === false || item.visible === true) ?

                  // Toggle visibility on click
                  <span className="hidden md:flex cursor-pointer" onClick={() => handleToogleVisibility()}>

                     {
                        displayCurChildren[item.label] ?
                           <SlArrowUp className="font-bold text-md text-slate-100" /> // Show upward arrow if children are displayed
                           : <SlArrowDown className="font-bold text-md text-slate-100" /> // Show downward arrow if children are hidden

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