import Tabs from "./tabs";

function TextContent() {
   
   return <p className="text-orange-800">"Lorem ipsum TextComponent" dolor sit amet consectetur adipisicing elit. Veritatis voluptatum quos tempore illum consequuntur qui quaerat vel non delectus, adipisci labore nisi. Aliquid, reprehenderit neque! Consequuntur neque numquam autem quaerat?</p>
};

export default function CustomTabs() {

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
         content: <TextContent />,
      },

      {
         label: 'Tab 4',
         content: '"Lorem ipsum 4" dolor sit amet consectetur adipisicing elit. Iste voluptatem quis quia, repellat voluptas accusamus iure eos tempora, sequi nam, quod aperiam illo sed nobis officia quae. Repellat, quis optio.'
      },
   ];

   function handleChange(curTabIndex) {

      console.log('curTabIndex', curTabIndex);
      

   };

   return (

      // Main section of the Light-Dark Mode component
      <section id="custom-tabs" className={`h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-orange-800`}>

         {/* Custom Tabs component Title */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Custom Tabs</h2>

         {/* Container tabs block */}
         <div className="flex justify-center items-center">

            <Tabs tabsContent={tabs} onChange={handleChange} />

         </div>

      </section>

   );

};
