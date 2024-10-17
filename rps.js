function rockPaperScissors(player1, player2) { //function takes 2 arguments for the 2 players of the game
  const winMatrix = { //object acts as a dictionary for indexing the outcome of choosing each item, the keys for each definition are assigned with the objects which lose 
    rock: [`scissors`, `lizard`], 
    paper: [`rock`, `spock`],
    scissors: [`paper`,`lizard`],
    spock: [`rock`, `scissors`],
    lizard: [`spock`, `paper`],
  };

  if (player1 === player2) { //if statements act as the logic for the program in this case if both players choose the same item the program responds with "draw"
    return 'draw';
  } else if (winMatrix[player1].includes(player2)) { //
    return 'player1';
  } else {
    return 'player2';
  }
}

console.log(rockPaperScissors("spock", "rock"));

module.exports = {
  rockPaperScissors,
}
