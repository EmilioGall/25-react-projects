import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {

   const [qrCode, setQrCode] = useState('');
   const [input, setInput] = useState('');

   function handleQRCodeGeneration() {

      setQrCode(input);

      setInput('');

   };

   return (

      // Main section of the QR Code Generator component
      <section id="qr-code-generator" className="h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-green-300">

         {/* QR Code Generator component Title */}
         <h2 className="text-4xl text-center font-bold">QR Code Generator</h2>

         <div className="flex flex-col justify-center items-center gap-2">

            <input
               id="qr-code-input"
               type="text"
               name="qr-code"
               placeholder="Enter a value"
               onChange={(e) => setInput(e.target.value)}
               className={`px-2 rounded`}
            />

            <button
               onClick={handleQRCodeGeneration}
               disabled={input && input.trim() !== 0 ? false : true}
               className={`border border-black rounded text-center px-2 py-1 ${input.trim() === '' ? '' : 'cursor-pointer hover:bg-black hover:text-slate-200'}`}
            >

               Generate QR Code

            </button>

         </div>

         <div className={`bg-white rounded-md p-3`}>

            <QRCode
               id="qr-code-value"
               value={qrCode}
            />

         </div>

      </section>

   )

};