//map through an array
//call the teamList component
import React, { useState, useEffect } from 'react';
import TeamList from '../../components/TeamList.jsx';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeams()
      .then((res) => setTeams(res))
      .then(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <h1> Wait For It </h1> : <TeamList teams={teams} />}
      <Link to="/teams/new">
        <button> Add a Team</button>{' '}
      </Link>
    </div>
  );
}
