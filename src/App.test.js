import { render, screen } from '@testing-library/react';
import App from './App';

test('Movies App', () => {
  render(<App />);
  const linkElement = screen.getByText(/movies app/i);
  expect(linkElement).toBeInTheDocument();
});
