export default function ScrollIndicator() {

   return (

      // Main section of the Scroll Indicator component
      <section id="scroll-indicator" className={`h-screen w-4 pt-12 font-mono`}>

         <div className={`h-full py-5`}>

            <div className={`h-full w-full bg-slate-600 rounded-full flex flex-col justify-center items-center`}>

               {/* Scroll Indicator component Title */}
               <h2 className={`text-sm text-slate-100 rotate-90 text-center text-nowrap`}>Scroll Indicator</h2>

            </div>

         </div>

      </section>

   )

};