// Import necessary hooks from React and the Suggestions component
import { useEffect, useState } from "react";
import Suggestions from "./Suggestion";

// Define the main functional component SearchAutocomplete
export default function SearchAutocomplete() {

   // State variable to hold the current search input
   const [searchParam, setSearchParam] = useState('');

   // State variable to hold the fetched user data
   const [usersData, setUsersData] = useState(null);

   // State variable to indicate loading status when fetching data
   const [loading, setLoading] = useState(false);

   // State variable to hold the filtered user data based on the search
   const [filteredUsersData, setFilteredUsersData] = useState([]);

   // Function to fetch user data from the API
   async function fetchUsersData() {

      try {

         // Set loading to true while fetching data
         setLoading(true);

         // Fetch user data from the specified API endpoint
         const response = await fetch(`https://dummyjson.com/users`);

         // Parse the JSON response
         const data = await response.json();

         // Check if data and usersData are available and contains users
         if (data && data.users && data.users.length > 0) {

            // Extract first names from user data and set the usersData state
            setUsersData(data.users.map((userItem) => userItem.firstName));

         };

      } catch (error) {

         // Log any error that occurs during the fetch
         console.log(error);


      } finally {

         // Set loading to false after data fetching operation is complete
         setLoading(false);

      };

   };

   // Handle changes in the text input
   function handleTextInput(event) {

      // Convert input to lowercase
      const query = event.target.value.toLowerCase();

      // console.log('query =', query);

      // Update the searchParam state with the current input
      setSearchParam(query);

      // If the query length is more than 1, filter the user data
      if (query.length > 1) {

         // Filter usersData based on the input query
         const filteredData = (
            usersData && usersData.length ?
               usersData.filter(username => username.toLowerCase().indexOf(query) > -1) // Check if username contains query
               : []
         );

         // Set the filtered user data based on the filtered results
         setFilteredUsersData(filteredData);

      } else {

         // If the query length is less than or equal to 1, clear filtered data
         setFilteredUsersData([]);

      };

   };

   // Handle the click event on a suggestion
   function handleSuggestionClick(event) {

      // console.log(event.target.innerText);

      // Update the searchParam to the suggestion text
      setSearchParam(event.target.innerText);

      // Clear the filtered suggestions after selection
      setFilteredUsersData([]);

   };

   // useEffect hook to fetch user data when the component is mounted
   useEffect(() => {

      fetchUsersData(); // Call the function to fetch data

   }, []); // Empty dependency array means it runs once after initial render

   // console.log('usersData =', usersData);

   // console.log('filteredUsersData =', filteredUsersData);

   return (

      // Main container for the SearchAutocomplete component
      <section id="search-autocomplete-api" className={`relative min-h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-slate-800`}>

         {/* Title for the search functionality */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Search Autocomplete with API</h2>

         {/* Input container for the search functionality */}
         <div className="flex flex-col justify-center items-center gap-2">

            <div>

               <div className="flex gap-2">

                  <input
                     id="autocomplete-username-input"
                     type="text"
                     name="github-username-input"
                     value={searchParam}
                     placeholder="Search user here..."
                     onChange={handleTextInput}
                     className={`rounded px-2`}
                  />

                  <button
                     // onClick={''}
                     className={`rounded border border-slate-300 text-md text-center text-slate-300 hover:bg-slate-300 hover:text-sky-800 font-bold px-3`}>
                     Search
                  </button>

               </div>

               {/* Render Suggestions component if there are filtered users */}
               {
                  filteredUsersData ?

                     <div className="relative w-full mt-1">

                        {/* Pass filtered data and click handler to Suggestions */}
                        <Suggestions data={filteredUsersData} handleSuggestionClick={handleSuggestionClick} />

                     </div>

                     : null

               }

            </div>

            <div>

               {/* Display loading message if loading state is true */}
               {
                  loading ?

                     <div>

                        <p>Loading data. Please wait...</p>

                     </div>

                     : null

               }

            </div>




         </div>

      </section>

   );

};