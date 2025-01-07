import MenuList from "./menu-list";

export default function MenuItem({ item }) {

   return <li className="ml-3">

      <a href="#">

         {
            item && item.number ?

               <span>{item.number}</span>

               : null
         }

         <p>{item.title}</p>

      </a>

      {
         item && item.parts && item.parts.length > 0 ?

            <MenuList menuList={item.parts} />

            : null
      }

   </li>

};