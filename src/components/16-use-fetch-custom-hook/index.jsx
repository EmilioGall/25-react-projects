import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {

   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState(null);


   async function fetchData() {

      setLoading(true);

      try {

         const optionsToString =
            Object.entries(options)
               .map(([key, value]) => `${key}=${value}`)
               .join('&');

         const response = await fetch(`${url}${optionsToString ? '?' : null}${optionsToString}`);

         console.log('response ', response);

         if (!response.ok) throw new Error(response.statusText);

         const result = await response.json();

         console.log('Object.entries(options) ', Object.entries(options));

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