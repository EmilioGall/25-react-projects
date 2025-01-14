// Importing the FaExternalLinkAlt icon from the react-icons library.
// This icon will be used in the user card to link to the user's GitHub page.
import { FaExternalLinkAlt } from "react-icons/fa";

// UserCard is a functional React component that takes a 'user' object as a prop.
export default function UserCard({ user }) {

      // Destructuring the 'user' object to extract specific properties for easy access.
   const { avatar_url, created_at, followers, following, html_url, location, login, name, public_repos } = user;

      // Creating a Date object from the 'created_at' string to manipulate and format the date.
   const createdDate = new Date(created_at);
   
   return (
            // Main container for the user card, styled with Tailwind CSS classes.
      <div className={`rounded-lg bg-slate-300`}>

{/* Section for displaying the user's avatar and name. */}
         <div className={`pb-3`}>

            {/* Image element for the user's avatar, styled to have rounded corners. */}
            <img className={`rounded-t-lg`} src={avatar_url} alt="User" />

            {/* Text container; centered text and some padding. */}
            <div className={`text-center px-2 pt-2`}>

               {/* Displaying the GitHub username, styled with larger font size and bold text. */}
               <h3 className={`text-2xl text-sky-800 font-bold`}>{login}</h3>

               {/* Conditionally rendering the user's name if it exists. If not, render nothing. */}
               {
                  name ?
                     <h4 className={`text-slate-800 font-bold`}>{name}</h4>
                     : null
               }

            </div>

         </div>

         {/* Section for displaying additional user details. */}
         <div className={`px-2 pb-2`}>

            {/* Displays the user's location with font styling. */}
            <p className={`text-slate-800 font-bold pb-3`}>Location: <span className={`font-normal`}>{location}</span></p>

            {/* Section for displaying user statistics like account age and repositories. */}
            <div className={`flex flex-col gap-1 text-slate-800 font-bold pb-3`}>

               {/* Displaying account creation date in a formatted way. */}
               <p>On GitHub since - <span className={`font-normal`}>{`${createdDate.getDate()} ${createdDate.toLocaleDateString('it-it', {month: 'short'})} ${createdDate.getFullYear()}`}</span></p>

               {/* Displaying the number of public repositories. */}
               <p>Public Repositories: <span className={`font-normal`}>{public_repos}</span></p>

            </div>

            {/* Section for displaying follower and following counts. */}
            <div className={`flex flex-col gap-1 text-slate-800 font-bold pb-3`}>

               {/* Number of followers */}
               <p>Followers: <span className={`font-normal`}>{followers}</span></p>

               {/* Number of users the user is following */}
               <p>Following: <span className={`font-normal`}>{following}</span></p>

            </div>

         </div>

         <hr />

         {/* Link to the user's GitHub profile, styled to look like a button. */}
         <a className={`flex justify-center items-center gap-2 text-slate-800 hover:text-sky-800 cursor-pointer hover:text py-2`} href={html_url}>

            {/* Text for the link */}
            Github Page <span><FaExternalLinkAlt /></span>

         </a>

      </div>
   );

};