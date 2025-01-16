// Import necessary hooks and createContext from React
import { createContext, useEffect, useState } from "react";

// Import the data service call from the data module
import featureFlagDataServiceCall from '../data';

// Create a context for feature flags, initialized as null
export const FeatureFlagContext = createContext(null);

// Define a provider component for the feature flags
export default function FeatureFlagGlobalState({ children }) {

   // Local state for storing enabled feature flags
   const [enabledFlags, setEnabledFlags] = useState({});

   // Asynchronous function to fetch enabled feature flags from the data service call
   async function fetchEnabledFlags() {

      try {

         // Await the response from the data service call
         const response = await featureFlagDataServiceCall;

         // Update the local state with the fetched response
         setEnabledFlags(response);

      } catch (error) {

         // Log any errors and throw a new error for further handling
         console.log(error);

         throw new Error(error);

      };

   };

   // Use effect to call fetchEnabledFlags when the component mounts
   useEffect(() => {

      fetchEnabledFlags();

   }, [])

   // Render the context provider with enabledFlags as value, and render children components
   return <FeatureFlagContext.Provider value={{ enabledFlags }}>

      {children}

   </FeatureFlagContext.Provider>

};