import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

it('should render a player', async () => {
  render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  screen.getByText('Wait For It', { exact: false });
  const teams = await screen.findByText('Betty Grey');

  expect(teams).toBeInTheDocument();
});
