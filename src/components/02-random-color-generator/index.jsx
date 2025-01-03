import { useState } from "react";

export default function ColorGenerator() {

   const [colorType, setColorType] = useState('rgba')

   const [color, setColor] = useState('rgba(0,0,0,0.3)')

   const [isPressedHex, setIsPressedHex] = useState(false);

   const [isPressedRgba, setIsPressedRgba] = useState(false);

   const [isPressedGen, setIsPressedGen] = useState(false);

   function getRandomInteger(min, max) {

      return Math.floor(Math.random() * (max - min) + min);

   };

   function getRandomNum(min, max) {

      return (Math.random() * (max - min) + min).toFixed(1);

   };

   function handleGenerateHexColor() {

      const hexElement = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

      let hexColor = '#';

      for (let i = 0; i < 8; i++) {

         hexColor += hexElement[getRandomInteger(0, hexElement.length)];

      }

      console.log(hexColor);

      setColor(hexColor);


   };

   // Convert HEX to RGBa
   function hexToRgba(hex) {

      console.log(`%cHEX to RGBa`, 'color: cyan');

      // Remove the hash (#) if present
      if (hex.startsWith("#")) {

         hex = hex.slice(1);

      };

      console.log('Start - HEX Color:', hex);

      let r, g, b, a = 1;

      if (hex.length === 3) {

         // Handle shorthand HEX (#abc)
         r = parseInt(hex[0] + hex[0], 16);
         g = parseInt(hex[1] + hex[1], 16);
         b = parseInt(hex[2] + hex[2], 16);

      } else if (hex.length === 6) {

         // Handle standard HEX (#aabbcc)
         r = parseInt(hex.slice(0, 2), 16);
         g = parseInt(hex.slice(2, 4), 16);
         b = parseInt(hex.slice(4, 6), 16);

      } else if (hex.length === 8) {

         // Handle 8-digit HEX (#rrggbbaa)
         r = parseInt(hex.slice(0, 2), 16);
         g = parseInt(hex.slice(2, 4), 16);
         b = parseInt(hex.slice(4, 6), 16);
         a = (parseInt(hex.slice(6, 8), 16) / 255).toFixed(1); // Convert alpha to a decimal between 0 and 1

      } else {

         throw new Error("Invalid HEX color.");

      };

      console.log('End - RGBa Color:', `rgba(${r}, ${g}, ${b}, ${a})`);

      setColor(`rgba(${r}, ${g}, ${b}, ${a})`);

   };

   function handleGenerateRgbaColor() {

      const r = getRandomInteger(0, 256);
      const g = getRandomInteger(0, 256);
      const b = getRandomInteger(0, 256);
      const a = getRandomNum(0, 1);

      console.log(`rgba(${r}, ${g}, ${b}, ${a})`);

      setColor(`rgba(${r}, ${g}, ${b}, ${a})`);
   };

   // Convert RGBa to HEX
   function rgbaToHex(rgba) {

      console.log(`%cRGBa to HEX`, 'color: red');

      // Remove the "rgba(" and ")" parts and split the values by commas
      const values = rgba.replace("rgba(", "").replace(")", "").split(",");

      console.log('Start - RGBa Color:', values);

      // Extract r, g, b, and a values, trimming whitespace 
      const r = parseInt(values[0].trim(), 10);
      const g = parseInt(values[1].trim(), 10);
      const b = parseInt(values[2].trim(), 10);
      const a = parseFloat(values[3]?.trim() || "1"); // Default alpha to 1 if not present

      console.log('Start - RGBa Color:', `${r}, ${g}, ${b}, ${a}`);

      // Convert r, g, b to HEX
      const redHex = r.toString(16).padStart(2, "0");
      const greenHex = g.toString(16).padStart(2, "0");
      const blueHex = b.toString(16).padStart(2, "0");

      // Convert alpha to HEX if less than 1
      const alphaHex = a < 1 ? Math.round(a * 255).toString(16).padStart(2, "0") : "";

      console.log('End - HEX Color:', redHex, greenHex, blueHex, alphaHex);

      setColor(`#${redHex}${greenHex}${blueHex}${alphaHex}`);

   };

   return (

      <section className="h-screen w-full p-10" style={{ background: color }}>

         <div className="flex justify-center gap-5 mb-3">

            <button className={`transition-transform duration-200 ease-in-out ${isPressedHex ? "scale-95" : "scale-100"
               } border border-slate-900 text-slate-900 font-bold py-1 px-2 rounded hover:bg-slate-900 hover:text-white active:bg-slate-800 active:text-white focus:outline-none`}
               onMouseDown={() => setIsPressedHex(true)}
               onMouseUp={() => setIsPressedHex(false)}
               onMouseLeave={() => setIsPressedHex(false)} // Ensures the button resets if the mouse is released outside
               onClick={() => { colorType === 'hex' ? null : rgbaToHex(color); setColorType('hex'); }}>
               HEX Color
            </button>

            <button className={`transition-transform duration-200 ease-in-out ${isPressedRgba ? "scale-95" : "scale-100"
               } border border-slate-900 text-slate-900 font-bold py-1 px-2 rounded hover:bg-slate-900 hover:text-white active:bg-slate-800 active:text-white focus:outline-none`}
               onMouseDown={() => setIsPressedRgba(true)}
               onMouseUp={() => setIsPressedRgba(false)}
               onMouseLeave={() => setIsPressedRgba(false)} // Ensures the button resets if the mouse is released outside
               onClick={() => { colorType === 'rgba' ? null : hexToRgba(color); setColorType('rgba'); }}>
               RGBa Color
            </button>

         </div>

         <div className="flex justify-center mb-10">

            <button className={`transition-transform duration-200 ease-in-out ${isPressedGen ? "scale-95" : "scale-100"
               } bg-slate-900 text-white font-bold py-1 px-2 rounded shadow-md hover:bg-slate-600 active:bg-slate-700 focus:outline-none`}
               onMouseDown={() => setIsPressedGen(true)}
               onMouseUp={() => setIsPressedGen(false)}
               onMouseLeave={() => setIsPressedGen(false)} // Ensures the button resets if the mouse is released outside
               onClick={colorType === 'hex' ? () => handleGenerateHexColor() : () => handleGenerateRgbaColor()}>
               Generate random color
            </button>

         </div>

         <div className="flex flex-col items-center gap-3">

            <h3 className="text-6xl">{colorType === 'hex' ? 'HEX Color' : 'RGBa Color'}</h3>

            <h2 className="text-4xl font-bold">{color}</h2>

         </div>

      </section>

   );

}
