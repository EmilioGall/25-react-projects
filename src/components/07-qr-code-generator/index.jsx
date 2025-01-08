// Importing useState hook to manage state
import { useState } from "react";

// Importing QRCode component to display QR codes
import QRCode from "react-qr-code";

/**
 * Description: QrCodeGenerator component renders a simple interface to generate QR codes based on user input.
 */
export default function QrCodeGenerator() {

   // Declaring a state variable 'qrCode' to hold the generated QR code value
   const [qrCode, setQrCode] = useState('');

   // Declaring a state variable 'input' to hold the user input from the text field
   const [input, setInput] = useState('');

   // Function to handle the generation of the QR code
   function handleQRCodeGeneration() {

      // Update the qrCode state with the current input value
      setQrCode(input);

      // Clear the input field after generating the QR code
      setInput('');

   };

   return (

      // Main section of the QR Code Generator component
      <section id="qr-code-generator" className="h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-green-300">

         {/* QR Code Generator component Title */}
         <h2 className="text-4xl text-center font-bold">QR Code Generator</h2>

         {/* Input field for user to enter a value for QR code generation */}
         <div className="flex flex-col justify-center items-center gap-2">

            <input
               id="qr-code-input"
               type="text"
               name="qr-code"
               placeholder="Enter a value"
               onChange={(e) => setInput(e.target.value)} // onChange event updates the 'input' state with the current value of the input field
               className={`px-2 rounded`}
            />

            {/* Button to trigger QR code generation */}
            <button
               onClick={handleQRCodeGeneration} // onClick event triggers the function to generate the QR code
               disabled={input && input.trim() !== 0 ? false : true}// Disabled conditionally based on whether the input field has text; ensures user cannot click if it's empty
               className={`border border-black rounded text-center px-2 py-1 ${input.trim() === '' ? '' : 'cursor-pointer hover:bg-black hover:text-slate-200'}`}
            >

               Generate QR Code

            </button>

         </div>

{/* Container to display the generated QR Code */}
         <div className={`bg-white rounded-md p-3`}>

            <QRCode
               id="qr-code-value"
               value={qrCode} // The value of the QR code, which is the current state of qrCode
            />

         </div>

      </section>

   )

};