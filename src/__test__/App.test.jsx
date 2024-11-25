/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App component', () => {
  test('should render the App component', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});

describe('check image vite logo', () => {
  test('check image vite logo', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    expect(viteLogo).toBeInTheDocument();
  });

  test('display count is 0', () => {
    render(<App />);
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  test('increment count', () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const count = screen.getByText('count is 1');
    expect(count).toBeInTheDocument();
  });

  test('renders Vite + React header', () => {
    render(<App />);
    const headerElement = screen.getByText('Vite + React');
    expect(headerElement).toBeInTheDocument();
  });

  
});


