// Import icon from 'react-icons'
import { GoX } from "react-icons/go";

export default function Modal({ id, header, body, footer }) {


   return (
      <div id={id || 'Modal'}>

         <header>

            <h3>
               {
                  header ?
                     header
                     : 'Default Header'
               }
            </h3>

            <span><GoX /></span>

         </header>

         <main>

            <p>
               {
                  body ?
                     body
                     : 'Default body of the modal'
               }
            </p>

         </main>

         <footer>

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