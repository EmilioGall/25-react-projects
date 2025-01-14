import { useState } from "react";

export default function SearchAutocomplete() {

   const [username, setUsername] = useState('');
   const [userData, setUserData] = useState(null);
   const [loading, setLoading] = useState(false);

   return (

      // Main section of the Github Profile Finder component
      <section id="search-autocomplete-api" className={`relative min-h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-slate-800`}>

         {/* Github Profile Finder component Title */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Search Autocomplete with API</h2>

         {/* Container for the Github Profile Finder component */}
         <div className="flex flex-col justify-center items-center gap-2">

            <div className="flex justify-center items-center gap-2">

               <input
                  id="github-username-input"
                  type="text"
                  name="github-username-input"
                  placeholder="Search user here..."
                  onChange={''}
                  className={`rounded px-2`}
               />

               <button
                  onClick={''}
                  className={`rounded border border-slate-300 text-md text-center text-slate-300 hover:bg-slate-300 hover:text-sky-800 font-bold px-3`}>
                  Search
               </button>

            </div>

            {
               loading ?

                  <div>

                     <p>Loading data. Please wait...</p>

                  </div>

                  : null

            }

            {
               userData && username !== '' && !loading ?

                  <UserCard user={userData} />

                  : null
            }


         </div>

      </section>

   );

};