export default function ScrollIndicator() {

   return (

      // Main section of the Scroll Indicator component
      <section id="scroll-indicator" className={`h-screen w-5 pt-12 font-mono`}>

         <div className={`h-full py-5`}>

            <div className={`h-full w-full bg-rose-400 rounded-full flex flex-col justify-center items-center`}>

               {/* Scroll Indicator component Title */}
               <h2 className={`text-lg rotate-90 text-center text-nowrap font-bold`}>Scroll Indicator</h2>

            </div>

         </div>

      </section>

   )

};