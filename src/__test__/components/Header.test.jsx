/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header component', () => {
  test('should render the Header component', () => {
    render(<Header />);
    expect(document.querySelector('h1')).toBeInTheDocument();
  });

  test('match snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
