//takes in a prop that is a list of player or teams, and then maps through them and returns a link of each one.
//an array of something as a prop
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../services/players';

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayers()
      .then((res) => setPlayers(res))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1> Wait For It </h1>;
  }

  return (
    <>
      <h1>Players:</h1>
      <ul>
        {players.map((player) => {
          return (
            <li
              key={player.id}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Link to={`/players/${player.id}`} className="App-link">
                {player.name}
              </Link>
              <button style={{ margin: '1em' }}>
                {' '}
                <Link to={`/players/update/${player.id}`}>
                  Edit A Player
                </Link>{' '}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PlayerList;
