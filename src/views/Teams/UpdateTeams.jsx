import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import '../../App';
import {
  updateTeamById,
  getTeamById,
  deleteTeamById,
} from '../../services/teams.js';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateTeams() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getTeamById(id).then((res) => {
      setName(res.name);
      setCity(res.city);
      setState(res.state);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await updateTeamById(id, { name, city, state });
    history.push(`/teams/${resp[0].id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTeamById(id);
    history.push(`/teams`);
  };

  return (
    <>
      <fieldset>
        <legend>Update Team</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="city"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
          <label htmlFor="id">Team</label>
          <input
            id="state"
            name="state"
            type="state"
            value={id}
            onChange={({ target }) => setState(target.value)}
          />
          <input type="submit" value="Edit Team" />{' '}
          <button onClick={handleDelete}> Delete Team </button>
        </form>
      </fieldset>
    </>
  );
}
