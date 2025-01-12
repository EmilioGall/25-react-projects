// Importing the Tabs component from the tabs file
import Tabs from "./tabs";

// This component renders some placeholder text content
function TextContent() {

   // Returns a paragraph with some example text
   return <p className="text-orange-800">"Lorem ipsum TextComponent" dolor sit amet consectetur adipisicing elit. Veritatis voluptatum quos tempore illum consequuntur qui quaerat vel non delectus, adipisci labore nisi. Aliquid, reprehenderit neque! Consequuntur neque numquam autem quaerat?</p>

};

// Main CustomTabs component to manage the tabbed layout
export default function CustomTabs() {

   // Define the tabs and their content
   const tabs = [

      {
         label: 'Tab 1',
         content: '"Lorem ipsum" dolor sit amet consectetur, adipisicing elit. Incidunt voluptates vitae nostrum veritatis. Neque, quam temporibus voluptatibus laudantium fugiat ut excepturi autem consectetur perspiciatis quae fuga nesciunt, fugit non magni.'
      },

      {
         label: 'Tab 2',
         content: '"Lorem ipsum 2" dolor sit amet consectetur adipisicing elit. Iste voluptatem quis quia, repellat voluptas accusamus iure eos tempora, sequi nam, quod aperiam illo sed nobis officia quae. Repellat, quis optio.'
      },

      {
         label: 'Tab 3',
         content: <TextContent />, // Using the TextContent component for tab 3's content
      },

      {
         label: 'Tab 4',
         content: '"Lorem ipsum 4" dolor sit amet consectetur adipisicing elit. Iste voluptatem quis quia, repellat voluptas accusamus iure eos tempora, sequi nam, quod aperiam illo sed nobis officia quae. Repellat, quis optio.'
      },
   ];

   // Handle tab change events
   function handleChange(curTabIndex) {

      console.log('curTabIndex', curTabIndex);

   };

   return (

      // Main section of the Custom Tabs component
      <section id="custom-tabs" className={`min-h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-orange-800`}>

         {/* Custom Tabs component Title */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Custom Tabs</h2>

         {/* Container for the tab component */}
         <div className="flex justify-center">

            {/* Rendering the Tabs component, passing in [tabsContent] and change handler */}
            <Tabs
               tabsContent={tabs}
               onChange={handleChange}
            />

         </div>

      </section>

   );

};
