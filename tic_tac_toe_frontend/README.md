# Tic Tac Toe – React Frontend

A lightweight, modern React implementation of Tic Tac Toe with a centered, responsive 3x3 grid, player turn indicator, win/draw detection, and a reset button. Designed with a minimal, light theme using the provided color palette.

## Features
- Interactive 3x3 grid
- Player turn indicator (X/O)
- Win and draw detection with winning line highlight
- Reset game functionality
- Responsive, mobile-friendly layout
- Modern, minimalistic light theme
- Accessible labels and status updates

## Tech
- React 18, Create React App tooling
- No heavy UI frameworks; pure CSS
- Minimal dependencies for fast load

## Quick Start
In the project directory, run:

### `npm install`
Install dependencies.

### `npm start`
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

### `npm test`
Launches the test runner in watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Color Palette
- Primary: `#1976d2`
- Secondary: `#f44336`
- Accent: `#ffc107`

## Project Structure
- `src/components/Board.jsx` – Renders the 3x3 grid
- `src/components/Square.jsx` – Individual square cell
- `src/components/StatusBar.jsx` – Displays current player, win/draw
- `src/utils/gameLogic.js` – Winner calculation utility
- `src/App.js` – Main app layout and game state
- `src/App.css` – Styling for the game UI
- `src/App.test.js` – Basic test for rendering

## Accessibility
- Role and aria labels for the status and board
- Live region for status updates
- Test IDs for grid squares to aid testing

## Notes
- No environment variables are required.
- To extend the game (e.g., move history, AI), consider adding context and enhancing `src/utils/gameLogic.js`.
