// Importing a custom hook to manage local storage
import useLocalStorage from "./useLocalStorage"

export default function LightDarkMode() {

   // Using the custom hook 'useLocalStorage' to manage the 'theme'
   // Initial state is set to 'dark' and stored in local storage under the key 'theme'
   const [theme, setTheme] = useLocalStorage(['theme', 'dark'])

   // Function to handle the toggling of themes between 'light' and 'dark'
   function handleToggleTheme() {

      // Toggle the theme between 'light' and 'dark' based on the current theme state
      setTheme(theme === 'light' ? 'dark' : 'light');

   };

   return (

      // Main section of the Light-Dark Mode component
      <section id="light-dark-mode" className={`h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}>

         {/* QR Code Generator component Title */}
         <h2 className={`text-4xl text-center ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'} font-bold`}>Light/Dark Mode</h2>

         {/* Container for user interaction, allows them to switch themes */}
         <div className="flex flex-col justify-center items-center gap-2">

            {/* Button that toggles between light and dark modes */}
            <button
               onClick={handleToggleTheme} // Event handler that toggles the theme on click
               className={`rounded border ${theme === 'dark' ? 'border-slate-300 hover:bg-slate-300 text-slate-300 hover:text-slate-800' : 'border-slate-800 hover:bg-slate-800 text-slate-800 hover:text-slate-300'} text-center px-2 py-1`}
            >

               Change Theme

            </button>

         </div>

      </section>

   )

};