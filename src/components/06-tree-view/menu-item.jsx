import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {

   const [displayCurChildren, setDisplayCurChildren] = useState({})

   function handleToogleChildren(getCurLabel) {

      setDisplayCurChildren({...displayCurChildren, [getCurLabel]: !displayCurChildren[getCurLabel]});

   }   

   return <li className="ml-3">

      <a href="#" className="flex gap-2">

         {
            item && item.number ?

               <span>{item.number}</span>

               : null
         }

         <p>{item.label}</p>

         {
            item && item.parts ?

               <span onClick={()=> handleToogleChildren(item.label)}>

                  {
                     displayCurChildren[item.label] ?
                     '-'
                     : '+'
                  }

               </span>

               : null
         }

      </a>

      {
         item && item.parts && item.parts.length > 0 && displayCurChildren[item.label]?

            <MenuList menuList={item.parts} />

            : null
      }

   </li>

};