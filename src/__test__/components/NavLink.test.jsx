import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavLink from '../../components/NavLink';

describe('NavLink component', () => {
  test('render link with correct href', () => {
    render(
      <MemoryRouter>
        <NavLink />
      </MemoryRouter>
    );
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
  });
});
