import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './views/Home/Home';
import './App.css';
import TeamDetail from './views/Teams/TeamDetail.jsx';
import Teams from './views/Teams/Teams.jsx';
import Players from './views/Players/Players.jsx';
import PlayerDetail from './views/Players/PlayerDetail.jsx';
import AddTeams from './views/Teams/AddTeam.jsx';
import AddPlayers from './views/Players/AddPlayers.jsx';
import UpdatePlayers from './views/Players/UpdatePlayers.jsx';
import UpdateTeams from './views/Teams/UpdateTeams.jsx';

function App() {
  return (
    <main className="App-header">
      <Router>
        <header>
          <NavLink to="/">Home</NavLink> <NavLink to="/teams">Teams</NavLink>{' '}
          <NavLink to="/players">Players</NavLink>{' '}
        </header>
        <Switch>
          <Route exact path="/players/new" component={AddPlayers} />
          <Route exact path="/teams/new" component={AddTeams} />
          <Route exact path="/teams/:id" component={TeamDetail} />
          <Route exact path="/teams/update/:id" component={UpdateTeams} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players/update/:id" component={UpdatePlayers} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={PlayerDetail} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  );
}
export default App;
