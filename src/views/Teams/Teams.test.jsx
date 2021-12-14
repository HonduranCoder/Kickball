import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

it('should render a team', async () => {
  render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );
  screen.getByText('Wait For It', { exact: false });
  const teams = await screen.findByText('Vancougers');

  expect(teams).toBeInTheDocument();
});
