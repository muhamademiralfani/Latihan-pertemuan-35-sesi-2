/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import UserList from '../../components/UserList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'John Doe' }]),
  })
);

describe('UserList component', () => {
  test('should render the UserList component', async () => {
    render(<UserList />);
    expect(await screen.findByText('John Doe')).toBeInTheDocument();
  });
});
