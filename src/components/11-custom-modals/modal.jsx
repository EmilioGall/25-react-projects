// Import icon from 'react-icons'
import { GoX } from "react-icons/go";

export default function Modal({ id, header, body, footer, clickX }) {


   return (
      <div
         id={id || 'Modal'}
         className={`relative border rounded-lg py-10 px-20 `}
      >

         <header className={`text-center text-xl font-bold`}>

            <h3>
               {
                  header ?
                     header
                     : 'Default Header'
               }
            </h3>

            <span
               className={`absolute right-2 top-2 cursor-pointer`}
               onClick={clickX}>
               <GoX />
            </span>

         </header>

         <main className={`text-center text-md`}>

            <p>
               {
                  body ?
                     body
                     : 'Default body of the selected modal'
               }
            </p>

         </main>

         <footer className={`text-center text-xl font-bold`}>

            <h3>
               {
                  footer ?
                     footer
                     : 'Default Footer'
               }
            </h3>

         </footer>

      </div>
   );

};