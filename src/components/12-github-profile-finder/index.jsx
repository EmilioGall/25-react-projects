import { useEffect, useState } from "react";
import UserCard from "./user-card";

export default function GithubProfileFinder() {

   const [username, setUsername] = useState('');
   const [userData, setUserData] = useState(null);
   const [loading, setLoading] = useState(false);

   async function fetchGithubUsersData() {

      if (username !== '') {
         
         try {

            setLoading(true);
   
            const response = await fetch(`https://api.github.com/users/${username}`);
   
            const data = await response.json();
   
            console.log('data', data);
   
            if (data) {
   
               setUserData(data);
   
            };
   
         } catch (error) {
   
            console.log(error);
   
   
         } finally {
   
            setLoading(false);
   
         };

      };

   };

   function handleSearch() {

      fetchGithubUsersData()

   };

   return (

      // Main section of the Github Profile Finder component
      <section id="github-profile-finder" className={`relative min-h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-sky-800`}>

         {/* Github Profile Finder component Title */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Github Profile Finder</h2>

         {/* Container for the Github Profile Finder component */}
         <div className="flex flex-col justify-center items-center gap-2">

            <div className="flex justify-center items-center gap-2">

               <input
                  id="github-username-input"
                  type="text"
                  name="github-username-input"
                  placeholder="Github Username"
                  onChange={(event) => setUsername(event.target.value)}
                  className={`rounded px-2`}
               />

               <button
                  onClick={handleSearch}
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