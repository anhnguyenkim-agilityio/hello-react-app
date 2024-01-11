import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deploy link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Deploy to Amplify Hosting/i);
  expect(linkElement).toBeInTheDocument();
});
