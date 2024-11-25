/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import ThemeButton from '../../components/context/ThemeBUtton';
import { ThemeProvider } from '../../components/context/ThemeContext';

describe('ThemeButton component', () => {
  test('render button with correct background color', () => {
    render(
      <ThemeProvider value='red'>
        <ThemeButton />
      </ThemeProvider>
    );
    expect(screen.getByText('Click Me')).toHaveStyle({ backgroundColor: 'red' });
  });
});
