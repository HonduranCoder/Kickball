import { render } from '@testing-library/react';
import Home from './Home';

it('should render home', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
