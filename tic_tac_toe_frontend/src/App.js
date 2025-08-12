import React, { useMemo, useState } from 'react';
import './App.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import { calculateWinner } from './utils/gameLogic';

/**
 * Root application component for the Tic Tac Toe game.
 * Renders a centered, responsive game card with a 3x3 grid, status bar, and reset control.
 */

// PUBLIC_INTERFACE
export default function App() {
  /** Main App.
   * Handles game state, win/draw detection, and UI layout.
   * @returns JSX.Element
   */
  const initialBoard = useMemo(() => Array(9).fill(null), []);
  const [squares, setSquares] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const { winner, line } = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => !winner && squares.every(Boolean), [winner, squares]);
  const currentPlayer = isXNext ? 'X' : 'O';

  // PUBLIC_INTERFACE
  const handleSquareClick = (index) => {
    /** Handle a square click: place the current player's mark on the selected cell. */
    if (squares[index] || winner) return; // ignore if already filled or game over
    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
    setIsXNext((prev) => !prev);
  };

  // PUBLIC_INTERFACE
  const handleReset = () => {
    /** Reset the game to its initial state. */
    setSquares(initialBoard);
    setIsXNext(true);
  };

  return (
    <div className="app">
      <main className="game-card" aria-label="Tic Tac Toe">
        <h1 className="title">Tic Tac Toe</h1>

        <StatusBar currentPlayer={currentPlayer} winner={winner} draw={draw} />

        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          winningLine={line}
        />

        <div className="controls">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleReset}
            aria-label="Reset game"
          >
            Reset Game
          </button>
        </div>
      </main>
    </div>
  );
}
