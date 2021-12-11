//takes in a prop that is a list of player or teams, and then maps through them and returns a link of each one.
//an array of something as a prop
import { Link } from 'react-router-dom';

function TeamList({ teams }) {
  return (
    <>
      <h1>Teams:</h1>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`/teams/${team.id}`} className="App-link">
                {team.name}
              </Link>
              <Link to={`/teams/update/${team.id}`}>Edit A Team</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
