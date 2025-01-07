import { useState } from "react";
import MenuList from "./menu-list";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function MenuItem({ item }) {

   const [displayCurChildren, setDisplayCurChildren] = useState({})

   function handleToogleChildren(getCurLabel) {

      setDisplayCurChildren({...displayCurChildren, [getCurLabel]: !displayCurChildren[getCurLabel]});

   }   

   return <li className="md:ml-4">

      <a href={item.to} className={`flex justify-center md:justify-start gap-2 items-center rounded-lg hover:bg-cyan-600 px-3 py-1 ${displayCurChildren[item.label] ? 'mb-1.5 md:bg-slate-600' : ''}`}>

         {
            item && item.number ?

               <span className="font-bold text-2xl text-slate-100">{item.number}</span>

               : null
         }

         <p className="text-lg leading-none text-slate-100 hidden md:flex">{item.label}</p>

         {
            item && item.parts ?

               <span className="hidden md:flex" onClick={()=> handleToogleChildren(item.label)}>

                  {
                     displayCurChildren[item.label] ?
                     <SlArrowUp  className="font-bold text-md text-slate-100"/>
                     : <SlArrowDown className="font-bold text-md text-slate-100"/>

                  }

               </span>

               : null
         }

      </a>

      {
         item && item.parts && item.parts.length > 0 && displayCurChildren[item.label]?

         <div className="hidden md:block">

            <MenuList menuList={item.parts} />

         </div>

            : null
      }

   </li>

};