//
// Game logic utilities for Tic Tac Toe
//

// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /** Determine the winner of the Tic Tac Toe game.
   *  Returns an object { winner: 'X' | 'O' | null, line: number[] | null }
   *  - winner: the symbol that won or null if no winner yet
   *  - line: the winning combination indices or null
   */
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}
