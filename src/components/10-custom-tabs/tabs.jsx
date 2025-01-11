import { useState } from "react"

export default function Tabs({ tabsContent, onChange }) {

   const [curTabIndex, setCurTabIndex] = useState(0);

   function handleOnClickTab(getCurIndex) {

      setCurTabIndex(getCurIndex);

      onChange(getCurIndex);

   };

   return <div className="w-5/6 lg:w-4/6 xl:w-3/6">

      <div className="flex justify-between grow">
         {
            tabsContent.map((tabItem, tabIndex) => (
               <div className={`text-center font-bold grow rounded-t-lg ${curTabIndex === tabIndex ? 'text-slate-700 bg-slate-300' : 'border border-slate text-slate-300'}`} key={tabItem.label}>

                  <span className="cursor-pointer" onClick={()=> handleOnClickTab(tabIndex)}>{tabItem.label}</span>

               </div>
            ))
         }
      </div>

      <div className="rounded-b-lg px-4 py-3 bg-slate-300 text-slate-700">
         {
            tabsContent[curTabIndex] && tabsContent[curTabIndex].content ?

               tabsContent[curTabIndex].content

               : null
         }
      </div>

   </div>
};