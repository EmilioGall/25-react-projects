import { FaExternalLinkAlt } from "react-icons/fa";

export default function UserCard({ user }) {

   const { avatar_url, created_at, followers, following, html_url, location, login, name, public_repos } = user;

   return (
      <div>

         <div>

            <img src={avatar_url} alt="User" />

            <h3>{login}</h3>

            <h4>{name}</h4>

         </div>

         <p>On GitHub from - <span>{created_at}</span></p>

         <p>Public Repositories: <span>{public_repos}</span></p>

         <hr />

         <p>Location: <span>{location}</span></p>

         <hr />

         <p>Followers: <span>{followers}</span></p>

         <p>Following: <span>{following}</span></p>

         <hr />

         <a href={html_url}>Github Page <FaExternalLinkAlt /></a>

      </div>
   );

};