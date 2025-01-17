// Import useEffect from React
import { useEffect } from "react";

/**
 * Description: Custom hook that triggers a handler function when a click occurs outside of a specified element.
 * 
 * @param {Object} ref - React ref that points to the target DOM element.
 * @param {Function} handler - Function to call when click is detected outside of the referenced element.
 */
export default function useOnClickOutside(ref, handler) {

   // useEffect runs after the component has rendered and is used here to set up event listeners.
   useEffect(() => {

      // This function will be called whenever an event occurs
      function listener(event) {

         // Check if the reference is valid and if the click was inside the referenced element
         if (!ref.current || ref.current.contains(event.target)) {

            return; // If click is inside, do nothing and exit.

         };

         // If click is outside, call handler function
         handler(event);

      };

      // Adding event listeners for both mouse clicks and touch events
      document.addEventListener('mousedown', listener); // Listen for mouse button down events
      document.addEventListener('touchstart', listener); // Listen for touch events

      // Cleanup function to remove the event listeners when the component unmounts or ref/handler changes
      return () => {

         document.removeEventListener('mousedown', listener);
         document.removeEventListener('touchstart', listener);

      };

   }, [ref, handler]) // Dependencies that will trigger useEffect to run again

};