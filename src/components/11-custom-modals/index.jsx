import { useState } from "react";
import Modal from "./modal";

export default function CustomModals() {

   const [showDefaultModal, setShowDefaultModal] = useState(false);
   const [showCustomModal, setShowCustomModal] = useState(false);

   function handleToggleModal(type) {

      switch (type) {

         case 'default':

            setShowDefaultModal(!showDefaultModal);

            break;

         case 'custom':

            setShowCustomModal(!showCustomModal);

            break;

         default:

            break;
      };

   };

   return (

      // Main section of the Custom Modals component
      <section id="custom-modals" className={`h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-green-500`}>

         {/* Custom Modals component Title */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Custom Modals</h2>

         {/* Container for the modals component */}
         <div className="flex flex-col justify-center items-center">

            <div className="flex justify-center items-center gap-3 text-slate-300">

               <button
                  className="border border-2 border-slate-300 rounded px-2 py-1 cursor-pointer hover:text-green-500 hover:bg-slate-300"
                  onClick={() => handleToggleModal('default')}
               >
                  Show Default Modal
               </button>

               <button
                  className="border border-2 border-slate-300 rounded px-2 py-1 cursor-pointer hover:text-green-500 hover:bg-slate-300"
                  onClick={() => handleToggleModal('custom')}
               >
                  Show Custom Modal
               </button>

            </div>

            <div className="flex justify-center items-center gap-3 text-slate-300">

               {showDefaultModal && <Modal />}

               {showCustomModal && <Modal />}

            </div>

         </div>

      </section>

   );

};