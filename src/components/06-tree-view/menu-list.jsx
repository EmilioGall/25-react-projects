// Import MenuItem component that will display individual menu items within the list
import MenuItem from "./menu-item";

/**
 * MenuList component renders a list of menu items.
 * It takes an array of menu items as a prop and maps over it to create MenuItem components.
 * @param {Array} menuList - An array of menu item objects to be displayed.
 */
export default function MenuList({ menuList = [] }) {

   return (

      // Flex container for menu items
      <ul className="flex flex-col justify-center gap-2">

         {
            // Check if menuList has items; if so, map over the array to render MenuItem for each
            menuList && menuList.length > 0 ?

               // Pass each menu item to MenuItem component
               menuList.map((menuItem, menuItemId) => <MenuItem key={menuItem.label} item={menuItem} itemId={menuItemId} />)

               : null // Render nothing if no items are present

         }

      </ul>

   )

};