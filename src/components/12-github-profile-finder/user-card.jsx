import { FaExternalLinkAlt } from "react-icons/fa";

export default function UserCard({ user }) {

   const { avatar_url, created_at, followers, following, html_url, location, login, name, public_repos } = user;

   const createdDate = new Date(created_at);

   console.log('createdDate', typeof createdDate, createdDate.getDate());

   console.log('createdDate', typeof createdDate, createdDate.toLocaleDateString('it-it'));
   
   return (
      <div className={`rounded-lg bg-slate-300`}>

         <div className={`pb-3`}>

            <img className={`rounded-t-lg`} src={avatar_url} alt="User" />

            <div className={`text-center px-2 pt-2`}>

               <h3 className={`text-2xl text-sky-800 font-bold`}>{login}</h3>

               {
                  name ?
                     <h4 className={`text-slate-800 font-bold`}>{name}</h4>
                     : null
               }

            </div>

         </div>

         <div className={`px-2 pb-2`}>

            <p className={`text-slate-800 font-bold pb-3`}>Location: <span className={`font-normal`}>{location}</span></p>

            <div className={`flex flex-col gap-1 text-slate-800 font-bold pb-3`}>

               <p>On GitHub since - <span className={`font-normal`}>{`${createdDate.getDate()} ${createdDate.toLocaleDateString('it-it', {month: 'short'})} ${createdDate.getFullYear()}`}</span></p>

               <p>Public Repositories: <span className={`font-normal`}>{public_repos}</span></p>

            </div>

            <div className={`flex flex-col gap-1 text-slate-800 font-bold pb-3`}>

               <p>Followers: <span className={`font-normal`}>{followers}</span></p>

               <p>Following: <span className={`font-normal`}>{following}</span></p>

            </div>

         </div>


         <hr />

         <a className={`flex justify-center items-center gap-2 text-slate-800 hover:text-sky-800 cursor-pointer hover:text py-2`} href={html_url}>
            Github Page <span><FaExternalLinkAlt /></span>
         </a>

      </div>
   );

};