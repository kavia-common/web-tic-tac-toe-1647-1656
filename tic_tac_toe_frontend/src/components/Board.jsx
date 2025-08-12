import React from 'react';
import Square from './Square';

/**
 * Board component renders the 3x3 grid of squares.
 */

// PUBLIC_INTERFACE
export default function Board({ squares, onSquareClick, winningLine }) {
  /** Render the Tic Tac Toe board.
   * @param {Array<string|null>} squares - The current board values (length 9).
   * @param {function} onSquareClick - Handler invoked when a square is clicked with the square index.
   * @param {Array<number>|null} winningLine - Indices of the winning line to highlight, or null if none.
   * @returns JSX.Element
   */
  const isWinningIndex = (idx) => Array.isArray(winningLine) && winningLine.includes(idx);

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {squares.map((value, idx) => (
        <Square
          key={idx}
          index={idx}
          value={value}
          highlight={isWinningIndex(idx)}
          onClick={() => onSquareClick(idx)}
        />
      ))}
    </div>
  );
}
