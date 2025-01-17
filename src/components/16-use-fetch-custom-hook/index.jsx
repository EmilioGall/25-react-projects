import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {

   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState(null);


   async function fetchData() {

      setLoading(true);

      try {

         const response = await fetch(url, { ...options });

         if (!response.ok) throw new Error(response.statusText);

         const result = await response.json();

         setData(result);

         setError(null);

      } catch (e) {

         setError(`Error occured: ${e}`);

      } finally {

         setLoading(false);

      };

   };

   useEffect(() => {

      fetchData();

   }, [url]);

   return { error, loading, data };
   
};