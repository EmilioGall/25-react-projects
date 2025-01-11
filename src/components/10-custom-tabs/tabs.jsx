// Importing useState hook from React
import { useState } from "react"

// Tabs component that displays the tabbed interface
export default function Tabs({ tabsContent, onChange }) {

   // State to keep track of the currently active tab index
   const [curTabIndex, setCurTabIndex] = useState(0);

   // Handle click events on the tabs
   function handleOnClickTab(getCurIndex) {

      // Update the current tab index state
      setCurTabIndex(getCurIndex);

      // Invoke the onChange callback with the new index
      onChange(getCurIndex);

   };

   // Render the tabs and their content
   return (
      <div className="w-5/6 lg:w-4/6 xl:w-3/6">

         {/* Tab buttons rendered based on the provided tabsContent */}
         <div className="flex justify-between grow">
            {
               tabsContent.map((tabItem, tabIndex) => (
                  <div
                     key={tabItem.label}
                     className={`text-center font-bold grow rounded-t-lg ${curTabIndex === tabIndex ? 'text-slate-700 bg-slate-300' : 'border border-slate text-slate-300'}`}>

                     {/* Each tab button */}
                     <span
                        className="cursor-pointer"
                        onClick={() => handleOnClickTab(tabIndex)}>

                        {tabItem.label}

                     </span>

                  </div>
               ))
            }
         </div>

         {/* Content area for the currently selected tab */}
         <div className="rounded-b-lg px-4 py-3 bg-slate-300 text-slate-700">
            {
               tabsContent[curTabIndex] && tabsContent[curTabIndex].content ?

                  tabsContent[curTabIndex].content // Display content for the current tab

                  : null // Fallback if no content is available
            }
         </div>

      </div>
   );

};