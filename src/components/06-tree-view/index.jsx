// Import the MenuList component that will display the tree view items
import MenuList from "./menu-list";

// Import the React logo to display on the UI
import reactLogo from '../../assets/react.svg';

/**
 * TreeView component serves as the main container for the side menu.
 * It receives a side menu array and renders it using the MenuList component.
 * @param {Array} sideMenu - An array of menu items to display in the tree view.
 */
export default function TreeView({ sideMenu = [] }) {

   return (

      // Main section of the SideBar Menu component
      <section id="tree-view" className="h-full p-1 font-mono overflow-y-auto overflow-x-hidden">

         {/* Header container for the tree view */}
         <div className="flex gap-2 p-2 items-center justify-center md:justify-start">

            {/* React logo, hidden in small screens */}
            <img className="h-5 hidden md:flex" src={reactLogo} alt="React Logo" />

            {/* Title of the tree view */}
            <h1 className="text-3xl font-bold text-slate-300">Menu</h1>

         </div>

         {/* Render the MenuList component and pass the sideMenu as props */}
         <MenuList menuList={sideMenu} />

      </section>

   )

};