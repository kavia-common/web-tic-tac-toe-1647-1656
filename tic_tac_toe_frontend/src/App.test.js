import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic Tac Toe title and 9 squares', () => {
  render(<App />);
  const title = screen.getByText(/Tic Tac Toe/i);
  expect(title).toBeInTheDocument();

  // Ensure all 9 squares are present
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId(`square-${i}`)).toBeInTheDocument();
  }
});
