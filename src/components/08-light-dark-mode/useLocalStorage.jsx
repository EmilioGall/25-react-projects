// Importing useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Custom hook that manages a state variable backed by local storage
export default function useLocalStorage([key, defaultValue]) {

   // State variable 'value' initialized with defaultValue or value from local storage
   const [value, setValue] = useState(() => {

      // Variable to store the current value fetched from local storage
      let currentValue;

      // Attempt to retrieve and parse the value from local storage
      try {

         currentValue = JSON.parse(

            // Use defaultValue if nothing is in local storage
            localStorage.getItem(key) || String(defaultValue)

         );

      } catch (e) {

         // In case of any error (e.g., JSON parsing), log the error and assign defaultValue
         console.log(e);

         // Fallback to the defaultValue
         currentValue = defaultValue;

      };

      // Return the current value retrieved from local storage (or defaultValue)
      return currentValue;

   });

   // useEffect hook runs every time the 'key' or 'value' changes
   useEffect(() => {

      // Store the current value in local storage as a JSON string whenever the value changes
      localStorage.setItem(key, JSON.stringify(value));

   }, [key, value]) // Dependencies: runs effect whenever 'key' or 'value' updates

   // Return the current value and the setter function to update the value
   return [value, setValue];

};