import MenuList from "./menu-list";

export default function TreeView({ sideMenu = [] }) {

   return <div>

      <h1>Menu</h1>

      <MenuList menuList={sideMenu} />

   </div>

};