import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Route, Router, Switch } from 'react-router-dom';
//import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import AddTeam from './AddTeam';
import TeamDetail from './TeamDetail';

const mockTeam = {
  id: 6,
  created_at: '2021-12-08T20:26:24.408898+00:00',
  name: 'redirect me!',
  city: 'okay',
  state: 'go',
  players: [],
};

const server = setupServer(
  rest.get(
    'https://oktdarowzkpgrqauvkeb.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.post(
    'https://oktdarowzkpgrqauvkeb.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json([mockTeam]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should add a team and redirect to the team detail page', async () => {
  const history = createMemoryHistory();
  history.push('/teams/new');

  render(
    <Router history={history}>
      <Switch>
        <Route path="/teams/new">
          <AddTeam />
        </Route>
        <Route path="/teams/:id" component={TeamDetail} />
      </Switch>
    </Router>
  );

  screen.getByText('Add A Team');

  const nameField = screen.getByLabelText(/name/i);
  const cityField = screen.getByLabelText(/city/i);
  const stateField = screen.getByLabelText(/state/i);
  const submitBtn = screen.getByRole('button', { name: 'Add Team' });

  userEvent.type(nameField, 'My New Team');
  userEvent.type(cityField, 'Anytown');
  userEvent.type(stateField, 'US');
  userEvent.click(submitBtn);
  await screen.findByText('Wait For It');
  return waitFor(() => {
    screen.getByText('okay');
  });
});
