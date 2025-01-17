// Importing necessary hooks from React
import { useLayoutEffect, useState } from "react";

/**
 * Description: Custom hook that returns the current window dimensions.
 * 
 * @returns {Object} - An object containing the width and height of the window.
 */
export default function useWindowResize() {

   // State to keep track of the current window size
   const [windowsSize, setWindowSize] = useState({

      width: window.innerWidth, // Set initial width to the current width of the window
      height: window.innerHeight // Set initial height to the current height of the window

   });

   // Function to handle resizing of the window
   function handleResize() {

      // Update state with the new window dimensions
      setWindowSize({

         width: window.innerWidth,
         height: window.innerHeight

      });

   };

   // useLayoutEffect helps to sync state updates with the DOM layout
   useLayoutEffect(() => {

      // Add an event listener to the 'resize' event of the window
      window.addEventListener('resize', handleResize);

      // Cleanup function that removes the event listener
      return () => {

         window.removeEventListener('resize', handleResize);

      };

   }, []); // Empty dependency array means this effect only runs on mount and unmount

   // Return the current window size
   return windowsSize;

};