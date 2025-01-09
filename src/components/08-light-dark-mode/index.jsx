import useLocalStorage from "./useLocalStorage"

export default function LightDarkMode() {

   const [theme, setTheme] = useLocalStorage(['theme', 'dark'])

   function handleToggleTheme() {

      setTheme(theme === 'light' ? 'dark' : 'light');

      console.log('Theme locally stored =', JSON.parse(localStorage.getItem('t')));
      

   };

   return (

      // Main section of the Light-Dark Mode component
      <section id="light-dark-mode" className={`h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}>

         {/* QR Code Generator component Title */}
         <h2 className={`text-4xl text-center ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'} font-bold`}>Light/Dark Mode</h2>

         {/* Input field for user to enter a value for QR code generation */}
         <div className="flex flex-col justify-center items-center gap-2">

            {/* Button to trigger QR code generation */}
            <button
               onClick={handleToggleTheme} // onClick event triggers the function to generate the QR code
               className={`rounded border ${theme === 'dark' ? 'border-slate-300 hover:bg-slate-300 text-slate-300 hover:text-slate-800' : 'border-slate-800 hover:bg-slate-800 text-slate-800 hover:text-slate-300'} text-center px-2 py-1`}
            >

               Change Theme

            </button>

         </div>

      </section>

   )

};