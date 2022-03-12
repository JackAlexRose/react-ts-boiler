import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lets Build text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lets Build/i);
  expect(linkElement).toBeInTheDocument();
});
