// Import necessary hooks from React
import { useEffect, useState } from "react";

// Custom hook to fetch data from a given URL with optional query parameters.
export default function useFetch(url, options = {}) {

   // State to hold any error that occurs during fetch.
   const [error, setError] = useState(null);

   // State to track the loading status of the fetch operation.
   const [loading, setLoading] = useState(false);

   // State to hold the fetched data.
   const [data, setData] = useState(null);

   // Asynchronous function to fetch data from the provided URL.
   async function fetchData() {

      // Set loading to true to indicate that the fetch operation has started.
      setLoading(true);

      try {

         // Convert the options object into a query string format (key=value).
         const optionsToString =
            Object.entries(options)
               .map(([key, value]) => `${key}=${value}`) // Create key=value pairs.
               .join('&'); // Join pairs with '&' to form a query string.

         // Construct the full URL with the query string if any options are present.
         const response = await fetch(`${url}${optionsToString ? '?' : null}${optionsToString}`);

         // Check if the response is not ok (e.g., status is not in the range 200-299).
         if (!response.ok) throw new Error(response.statusText);

         // Parse the response JSON data.
         const result = await response.json();

         // Update the data state with the fetched result.
         setData(result);

         // Reset the error state as the fetch was successful.
         setError(null);

      } catch (e) {

         // In case of an error, set the error state with an informative message.
         setError(`Error occured: ${e}`);

      } finally {

         // Set loading to false once the fetch operation is completed (either succeeded or failed).
         setLoading(false);

      };

   };

   // useEffect hook to trigger the fetchData function whenever the url changes.
   // This ensures that new data is fetched whenever the URL changes.
   useEffect(() => {

      fetchData();

   }, [url]); // The dependency array ensures that the effect runs only when 'url' changes.

   // Return an object containing the error, loading state, and fetched data for use in components.
   return { error, loading, data };

};