function rockPaperScissors(player1, player2) {
  const winMatrix = {
    rock: [`scissors`, `lizard`],
    paper: [`rock`, `spock`],
    scissors: [`paper`,`lizard`],
    spock: [`rock`, `scissors`],
    lizard: [`spock`, `paper`],
  };

  if (player1 === player2) {
    return 'draw';
  } else if (winMatrix[player1].includes(player2)) {
    return 'player1';
  } else {
    return 'player2';
  }
}

console.log(rockPaperScissors("spock", "rock")); // should return "player1"

//console.log(rockPaperScissors("scissors", "rock"))

/*if (player1 === player2) {
    return "draw"
  }

  else if ((player1 === "rock" && player2 === "scissors") || (player1 === "paper" && player2 === "rock") || (player1 === "scissors" && player2 === "paper")) {
    return "player1"
    }

  else if ((player1 === "paper" && player2 === "scissors") || (player1 === "scissors" && player2 === "rock") || (player1 === "rock" && player2 === "paper")) {
    return "player2"
  }
  */








// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}
