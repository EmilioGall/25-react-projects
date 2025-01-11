import { useState } from "react"

export default function Tabs({ tabsContent, onChange }) {

   const [curTabIndex, setCurTabIndex] = useState(0);

   function handleOnClickTab(getCurIndex) {

      setCurTabIndex(getCurIndex);

      onChange(getCurIndex);
      
   };

   return <div>

      <div>
         {
            tabsContent.map((tabItem, tabIndex) => (
               <div key={tabItem.label} onClick={()=> handleOnClickTab(tabIndex)}>

                  <span>{tabItem.label}</span>

               </div>
            ))
         }
      </div>

      <div>
         {
            tabsContent[curTabIndex] && tabsContent[curTabIndex].content ?

               tabsContent[curTabIndex].content

               : null
         }
      </div>

   </div>
};