// Import the useState hook from React to manage component state
import { useState } from "react";

/**
 * Description: ColorGenerator component allows users to generate a random color code in HEX or RGBa form and switch between.
 */
export default function ColorGenerator() {

   // State to track the current color type (either 'rgba' or 'hex')
   const [colorType, setColorType] = useState('rgba');

   // State to hold the generated color value
   const [color, setColor] = useState('rgba(0,0,0,0.3)');

   // States to manage button press visual feedback for different buttons
   const [isPressedHex, setIsPressedHex] = useState(false);
   const [isPressedRgba, setIsPressedRgba] = useState(false);
   const [isPressedGen, setIsPressedGen] = useState(false);

   // Function to generate a random integer within a specified range
   function getRandomInteger(min, max) {

      // Random integer between min (inclusive) and max (exclusive)
      return Math.floor(Math.random() * (max - min) + min);

   };

   // Function to generate a random number within a specified range, rounded to one decimal place
   function getRandomNum(min, max) {

      // Random number between min and max
      return (Math.random() * (max - min) + min).toFixed(1);

   };

   // Function to generate a random HEX color
   function handleGenerateHexColor() {

      // Array containing valid characters for HEX color representation
      const hexElement = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

      // Start with the '#' symbol for HEX color
      let hexColor = '#';

      // Generate 8 random HEX digits
      for (let i = 0; i < 8; i++) {

         hexColor += hexElement[getRandomInteger(0, hexElement.length)];

      };

      // console.log(hexColor);

      // Update the color state with the new HEX color
      setColor(hexColor);

   };

   // Function to convert a HEX color string to an RGBa color string
   function hexToRgba(hex) {

      // console.log(`%cHEX to RGBa`, 'color: cyan');

      // Remove the hash (#) if present at the beginning of the hex string
      if (hex.startsWith("#")) {

         hex = hex.slice(1);

      };

      // console.log('Start - HEX Color:', hex);

      // Initialize RGB and alpha variables
      let r, g, b, a = 1;

      // Check the length of hex value and parse accordingly
      if (hex.length === 3) {

         // Handle shorthand HEX (#abc)
         r = parseInt(hex[0] + hex[0], 16); // Duplicate each character for RGB
         g = parseInt(hex[1] + hex[1], 16);
         b = parseInt(hex[2] + hex[2], 16);

      } else if (hex.length === 6) {

         // Handle standard HEX (#aabbcc)
         r = parseInt(hex.slice(0, 2), 16); // Parse first two characters for red
         g = parseInt(hex.slice(2, 4), 16); // Parse middle two characters for green
         b = parseInt(hex.slice(4, 6), 16); // Parse last two characters for blue

      } else if (hex.length === 8) {

         // Handle 8-digit HEX (#rrggbbaa)
         r = parseInt(hex.slice(0, 2), 16);
         g = parseInt(hex.slice(2, 4), 16);
         b = parseInt(hex.slice(4, 6), 16);
         a = (parseInt(hex.slice(6, 8), 16) / 255).toFixed(1); // Convert alpha to a decimal between 0 and 1

      } else {

         throw new Error("Invalid HEX color."); // Throw an error if hex length is invalid

      };

      // console.log('End - RGBa Color:', `rgba(${r}, ${g}, ${b}, ${a})`);

      // Update the color state with the new RGBa color
      setColor(`rgba(${r}, ${g}, ${b}, ${a})`);

   };

   // Function to generate a random RGB(a) color
   function handleGenerateRgbaColor() {

      const r = getRandomInteger(0, 256); // Random red value
      const g = getRandomInteger(0, 256); // Random green value
      const b = getRandomInteger(0, 256); // Random blue value
      const a = getRandomNum(0, 1); // Random alpha value between 0 and 1

      // console.log(`rgba(${r}, ${g}, ${b}, ${a})`);

      // Update the color state with the new RGBa color
      setColor(`rgba(${r}, ${g}, ${b}, ${a})`);

   };

   // Function to convert RGBa color to HEX format
   function rgbaToHex(rgba) {

      // console.log(`%cRGBa to HEX`, 'color: red');

      // Remove the "rgba(" and ")" parts and split the values by commas
      const values = rgba.replace("rgba(", "").replace(")", "").split(",");

      // console.log('Start - RGBa Color:', values);

      // Extract r, g, b, and a values, trimming whitespace 
      const r = parseInt(values[0].trim(), 10);
      const g = parseInt(values[1].trim(), 10);
      const b = parseInt(values[2].trim(), 10);
      const a = parseFloat(values[3]?.trim() || "1"); // Default alpha to 1 if not present

      // console.log('Start - RGBa Color:', `${r}, ${g}, ${b}, ${a}`);

      // Convert RGB values to HEX strings
      const redHex = r.toString(16).padStart(2, "0"); // Ensure 2 characters
      const greenHex = g.toString(16).padStart(2, "0");
      const blueHex = b.toString(16).padStart(2, "0");

      // Convert alpha to HEX if less than 1
      const alphaHex = a < 1 ? Math.round(a * 255).toString(16).padStart(2, "0") : "";

      // console.log('End - HEX Color:', redHex, greenHex, blueHex, alphaHex);

      // Update state with the new HEX color
      setColor(`#${redHex}${greenHex}${blueHex}${alphaHex}`);

   };

   return (

      // Main section for the color generator component
      <section id="random-color-generetor" className="h-screen w-full font-mono p-10" style={{ background: color }}>

         {/* Button container to generate colors */}
         <div className="flex justify-center gap-5 mb-3">

            {/* Button to generate HEX color */}
            <button className={`transition-transform duration-200 ease-in-out ${isPressedHex ? "scale-95" : "scale-100"
               } border border-slate-900 text-slate-900 font-bold py-1 px-2 rounded hover:bg-slate-900 hover:text-white active:bg-slate-800 active:text-white focus:outline-none`}
               onMouseDown={() => setIsPressedHex(true)} // Visual feedback on press
               onMouseUp={() => setIsPressedHex(false)} // Reset feedback on release
               onMouseLeave={() => setIsPressedHex(false)} // Reset feedback if mouse leaves
               onClick={() => { colorType === 'hex' ? null : rgbaToHex(color); setColorType('hex'); }}>
               HEX Color
            </button>

            {/* Button to generate RGBa color */}
            <button className={`transition-transform duration-200 ease-in-out ${isPressedRgba ? "scale-95" : "scale-100"
               } border border-slate-900 text-slate-900 font-bold py-1 px-2 rounded hover:bg-slate-900 hover:text-white active:bg-slate-800 active:text-white focus:outline-none`}
               onMouseDown={() => setIsPressedRgba(true)} // Visual feedback on press
               onMouseUp={() => setIsPressedRgba(false)} // Reset feedback on release
               onMouseLeave={() => setIsPressedRgba(false)} // Reset feedback if mouse leaves
               onClick={() => { colorType === 'rgba' ? null : hexToRgba(color); setColorType('rgba'); }}>
               RGBa Color
            </button>

         </div>

         {/* Button to generate a random color based on selected type */}
         <div className="flex justify-center mb-10">

            <button className={`transition-transform duration-200 ease-in-out ${isPressedGen ? "scale-95" : "scale-100"
               } bg-slate-900 text-white font-bold py-1 px-2 rounded shadow-md hover:bg-slate-600 active:bg-slate-700 focus:outline-none`}
               onMouseDown={() => setIsPressedGen(true)} // Visual feedback on press
               onMouseUp={() => setIsPressedGen(false)} // Reset feedback on release
               onMouseLeave={() => setIsPressedGen(false)} // Reset feedback if mouse leaves
               onClick={colorType === 'hex' ? () => handleGenerateHexColor() : () => handleGenerateRgbaColor()}>
               Generate random color
            </button>

         </div>

         {/* Display the current color type and the generated color value */}
         <div className="flex flex-col items-center gap-3">

            <h3 className="text-6xl">{colorType === 'hex' ? 'HEX Color' : 'RGBa Color'}</h3>

            <h2 className="text-4xl font-bold">{color}</h2>

         </div>

      </section>

   );

};
