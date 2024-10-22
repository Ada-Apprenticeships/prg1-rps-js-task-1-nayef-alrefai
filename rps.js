function rockPaperScissors(player1, player2) { 
  // Dictionary of winning choices, the key defeats the other items
  const winMatrix = { 
    rock: ['scissors', 'lizard'], 
    paper: ['rock', 'spock'],
    scissors: ['paper','lizard'],
    spock: ['rock', 'scissors'],
    lizard: ['spock', 'paper'],
  };

  //both players choosing the same item results in a draw
  if (player1 === player2) return 'draw';

  // Checks if player1's item defeats player2's based on the winMatrix
  // If true, player1 wins otherwise, player2 wins
  return winMatrix[player1].includes(player2) ? 'player1' : `player2`;
}

console.log(rockPaperScissors('spock', 'rock'));

module.exports = {
  rockPaperScissors,
}
