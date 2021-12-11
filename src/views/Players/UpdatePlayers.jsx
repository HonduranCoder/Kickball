//update button next to player name in player list
//page with form

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import '../../App';
import {
  getPlayerById,
  updatePlayerById,
  deletePlayerById,
} from '../../services/players.js';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function UpdatePlayers() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getPlayerById(id).then((res) => {
      setName(res.name);
      setPosition(res.position);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePlayerById(id, { name, position });
    history.push(`/players/${id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deletePlayerById(id);
    history.push(`/players`);
  };

  return (
    <>
      <fieldset>
        <legend>Edit a Player</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            type="text"
            value={position}
            onChange={({ target }) => setPosition(target.value)}
          />
          <input type="submit" value="Edit Player" />{' '}
          <button onClick={handleDelete}>Delete Player</button>
        </form>
      </fieldset>
    </>
  );
}
