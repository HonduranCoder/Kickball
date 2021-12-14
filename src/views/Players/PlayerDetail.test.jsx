import { render, screen } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

it('should render a detailed view of an individual team', async () => {
  render(
    <MemoryRouter initialEntries={['/players/18']}>
      <Switch>
        <Route exact path="/players/:id" component={PlayerDetail} />
      </Switch>
    </MemoryRouter>
  );
  screen.getByText('Wait for it', { exact: false });
  const teamName = await screen.findByText('NONONO', {
    exact: false,
  });
  expect(teamName).toBeInTheDocument();
});
