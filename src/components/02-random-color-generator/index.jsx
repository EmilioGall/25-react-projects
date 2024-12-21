import { useState } from "react";
import './style.css';

export default function ColorGenerator() {

   const [colorType, setColorType] = useState('hex')

   const [color, setColor] = useState('#000056')

   function getRandomInteger(min, max) {

      return Math.floor(Math.random() * (max - min) + min);

   }

   function getRandomNum(min, max) {

      return (Math.random() * (max - min) + min).toFixed(1);

   }

   function handleGenerateHexColor() {

      const hexElement = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

      let hexColor = '#';

      for (let i = 0; i < 6; i++) {

         hexColor += hexElement[getRandomInteger(0, hexElement.length)];

      }

      console.log(hexColor);

      setColor(hexColor);


   }

   function handleGenerateRgbaColor() {

      const r = getRandomInteger(0, 256);

      const g = getRandomInteger(0, 256);

      const b = getRandomInteger(0, 256);

      const a = getRandomNum(0, 1);

      console.log(`rgb(${r}, ${g}, ${b}, ${a})`);

      setColor(`rgb(${r}, ${g}, ${b}, ${a})`);
   }

   return (

      <div className="h-screen w-full" style={{ background: color }}>

         <div className="flex justify-center">

            <button onClick={() => setColorType('hex')}>
               HEX Color
            </button>

            <button onClick={() => setColorType('rgba')}>
               RGBa Color
            </button>

            <button onClick={colorType == 'hex' ? () => handleGenerateHexColor() : () => handleGenerateRgbaColor()}>
               Generate random color
            </button>

         </div>

         <div className="flex justify-center">

            <h3>{colorType == 'hex' ? 'HEX Color' : 'RGBa Color'}</h3>

            <h1>{color}</h1>

         </div>

      </div>

   );

}
