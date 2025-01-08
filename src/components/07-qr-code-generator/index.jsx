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

      // Main section of the Load-more button component
      <section id="qr-code-generator" className="w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-green-300">

         {/* Load-more Button component Title */}
         <h2 className="text-4xl text-center font-bold">QR Code Generator</h2>

         <div>

            <input id="qr-code-input"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter a value" />

            <button
               onClick={handleQRCodeGeneration}
               disabled={input && input.trim() !== 0 ? false : true}
            >

               Generate QR Code

            </button>

         </div>

         <div>

            <QRCode
               id="qr-code-value"
               value={qrCode}
            />

         </div>

      </section>

   )

};