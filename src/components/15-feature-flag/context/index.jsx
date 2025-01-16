import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from '../data'

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

   const [loading, setLoading] = useState(false);
   const [enabledFlags, setEnabledFlags] = useState({});

   async function fetchEnabledFlags() {

      try {

         const response = await featureFlagDataServiceCall;

         console.log(response);

         setEnabledFlags(response);

      } catch (error) {

         console.log(error);

         throw new Error(error);

      };

   };

   useEffect(() => {

      fetchEnabledFlags();

   }, [])

   return <FeatureFlagContext.Provider value={{ enabledFlags }}>

      {children}

   </FeatureFlagContext.Provider>

};