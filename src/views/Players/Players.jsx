//map
import React from 'react';
import PlayerList from '../../components/PlayerList.jsx';
import { Link } from 'react-router-dom';

export default function Players() {
  return (
    <div>
      <PlayerList />
      <Link to="/players/new">
        <button>Add a Player</button>
      </Link>
    </div>
  );
}
