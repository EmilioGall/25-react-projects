import { useEffect, useState } from "react";
import Suggestions from "./Suggestion";

export default function SearchAutocomplete() {

   const [searchParam, setSearchParam] = useState('');
   const [usersData, setUsersData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [filteredUsersData, setFilteredUsersData] = useState([]);

   async function fetchUsersData() {

      try {

         setLoading(true);

         const response = await fetch(`https://dummyjson.com/users`);

         const data = await response.json();

         console.log('data.users', data.users);

         if (data && data.users && data.users.length > 0) {

            setUsersData(data.users.map((userItem) => userItem.firstName));

         };

      } catch (error) {

         console.log(error);


      } finally {

         setLoading(false);

      };

   };

   function handleTextInput(event) {

      const query = event.target.value.toLowerCase();

      console.log('query =', query);

      setSearchParam(query);

      if (query.length > 1) {

         console.log('inside');


         const filteredData =
            usersData && usersData.length ?
               usersData.filter(username => username.toLowerCase().indexOf(query) > -1)
               : [];

         setFilteredUsersData(filteredData);

      } else {

         setFilteredUsersData([]);

      };

   };

   function handleSuggestionClick(event) {

      console.log(event.target.innerText);

      setSearchParam(event.target.innerText);

      setFilteredUsersData([]);
      
   };

   useEffect(() => {

      fetchUsersData();

   }, []);

   console.log('usersData =', usersData);

   console.log('filteredUsersData =', filteredUsersData);

   return (

      // Main section of the Github Profile Finder component
      <section id="search-autocomplete-api" className={`relative min-h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-slate-800`}>

         {/* Github Profile Finder component Title */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Search Autocomplete with API</h2>

         {/* Container for the Github Profile Finder component */}
         <div className="flex flex-col justify-center items-center gap-2">

            <div>

               <div className="flex gap-2">

                  <input
                     id="github-username-input"
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

               {
                  filteredUsersData ?

                     <div className="relative w-full mt-1">

                        <Suggestions data={filteredUsersData} handleSuggestionClick={handleSuggestionClick} />

                     </div>

                     : null

               }

            </div>

            <div>

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