import React from 'react';

/**
 * A single cell in the Tic Tac Toe board.
 */

// PUBLIC_INTERFACE
export default function Square({ value, onClick, highlight, index }) {
  /** Render a square button that displays 'X', 'O', or nothing.
   * @param {'X'|'O'|null} value - The symbol to display in the square.
   * @param {function} onClick - Click handler.
   * @param {boolean} highlight - Whether this square is part of the winning line.
   * @param {number} index - The index of the square (0-8).
   * @returns JSX.Element
   */
  const labelValue = value ? value : 'empty';
  const classes = [
    'square',
    value === 'X' ? 'square--x' : '',
    value === 'O' ? 'square--o' : '',
    highlight ? 'square--highlight' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={`Cell ${index + 1}, ${labelValue}`}
      data-testid={`square-${index}`}
    >
      {value}
    </button>
  );
}
