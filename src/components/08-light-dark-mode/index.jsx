export default function LightDarkMode() {

   function handleChangeTheme() {

   }

   return (

      // Main section of the Light-Dark Mode component
      <section id="light-dark-mode" className="h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-slate-300">

         {/* QR Code Generator component Title */}
         <h2 className="text-4xl text-center font-bold">Light/Dark Mode</h2>

         {/* Input field for user to enter a value for QR code generation */}
         <div className="flex flex-col justify-center items-center gap-2">

            {/* Button to trigger QR code generation */}
            <button
               onClick={handleChangeTheme} // onClick event triggers the function to generate the QR code
               className={`border border-black rounded text-center px-2 py-1`}
            >

               Change Theme

            </button>

         </div>

      </section>

   )

};