import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lets Build text', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: 'Test Element' });
  expect(linkElement).toBeInTheDocument();
});
