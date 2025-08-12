import React from 'react';

/**
 * StatusBar component displays game status such as current player, winner, or draw.
 */

// PUBLIC_INTERFACE
export default function StatusBar({ currentPlayer, winner, draw }) {
  /** Render status information for the game.
   * @param {'X'|'O'} currentPlayer - The player who should move next.
   * @param {'X'|'O'|null} winner - The winner symbol if the game is won.
   * @param {boolean} draw - True if the game ended in a draw.
   * @returns JSX.Element
   */
  let text = `Player ${currentPlayer}'s turn`;
  if (winner) text = `Player ${winner} wins! 🎉`;
  else if (draw) text = "It's a draw!";

  return (
    <div className="status-bar" role="status" aria-live="polite">
      <div className="status-text">{text}</div>
      {!winner && !draw && (
        <div
          className={`player-indicator ${currentPlayer === 'X' ? 'x' : 'o'}`}
          aria-hidden="true"
          title={`Current player: ${currentPlayer}`}
        />
      )}
    </div>
  );
}
