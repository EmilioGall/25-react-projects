// Import icon from 'react-icons'
import { GoX } from "react-icons/go";

export default function Modal({ id, header, body, footer, clickX }) {


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

            <span onClick={clickX}><GoX /></span>

         </header>

         <main>

            <p>
               {
                  body ?
                     body
                     : 'Default body of the selected modal'
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