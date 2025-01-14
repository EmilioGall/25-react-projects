// Import necessary hooks from React
import { useEffect, useState } from "react";
// Import the UserCard component to display user data
import UserCard from "./user-card";

// Define the main component for finding GitHub profiles
export default function GithubProfileFinder() {

   // State to store the GitHub username input by the user; initialized to an empty string
   const [username, setUsername] = useState('');

   // State to store the fetched user data; initialized to null as no data is fetched at the start
   const [userData, setUserData] = useState(null);

   // State to handle loading status; initialized to false indicating not loading at the start
   const [loading, setLoading] = useState(false);

   // Async function to fetch user data from GitHub API based on the provided username
   async function fetchGithubUsersData() {

      // Check if the username is not empty
      if (username !== '') {

         // Try-catch block to handle potential errors during the fetch
         try {

            // Set loading state to true while fetching data
            setLoading(true);

            // Fetch user data from GitHub API using the entered username
            const response = await fetch(`https://api.github.com/users/${username}`);

            // Parse the response data into JSON format
            const data = await response.json();

            // console.log('data', data);

            // If data is fetched, update the userData state with the retrieved data
            if (data) {

               setUserData(data);

            };

         } catch (error) {

            // Log any errors that occur during the fetch
            console.log(error);


         } finally {

            // Set loading state to false after the fetch operation is completed
            setLoading(false);

         };

      };

   };

   // Function to handle the search action when the "Search" button is clicked
   function handleSearch() {

      // Call the fetch function to get user data
      fetchGithubUsersData()

   };

   // Render the component
   return (

      // Main section of the Github Profile Finder component
      <section id="github-profile-finder" className={`relative min-h-screen w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-sky-800`}>

         {/* Github Profile Finder component Title */}
         <h2 className={`text-4xl text-center text-slate-300 font-bold`}>Github Profile Finder</h2>

         {/* Container for the Github Profile Finder component */}
         <div className="flex flex-col justify-center items-center gap-2">

            <div className="flex justify-center items-center gap-2">

               {/* Input field for the user to enter their GitHub username */}
               <input
                  id="github-username-input"
                  type="text"
                  name="github-username-input"
                  placeholder="Github Username"
                  onChange={(event) => setUsername(event.target.value)}
                  className={`rounded px-2`}
               />

               {/* Button to trigger the search for the entered username */}
               <button
                  onClick={handleSearch}
                  className={`rounded border border-slate-300 text-md text-center text-slate-300 hover:bg-slate-300 hover:text-sky-800 font-bold px-3`}>
                  Search
               </button>

            </div>

            {/* Conditional rendering to show loading status while data is being fetched */}
            {
               loading ?

                  <div>

                     <p>Loading data. Please wait...</p>

                  </div>

                  : null

            }

            {/* Conditional rendering to display the UserCard component if userData is available and loading is false */}
            {
               userData && username !== '' && !loading ?

                  <UserCard user={userData} />

                  : null
            }

         </div>

      </section>

   );

};