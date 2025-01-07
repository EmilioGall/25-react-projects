import MenuItem from "./menu-item";

export default function MenuList({ menuList = [] }) {

   return <ul className="bg-orange-600">

      {
         menuList && menuList.length > 0 ?

            menuList.map(menuItem => <MenuItem key={menuItem.label} item={menuItem} />)

            : null

      }

   </ul>

};