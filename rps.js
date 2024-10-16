//rock_paper_scissors("paper", "paper")


function rockPaperScissors(player1, player2) {
  
  if (player1 === player2) {
    return "draw"
  }

  else if ((player1 === "rock" && player2 === "scissors") || (player1 === "paper" && player2 === "rock") || (player1 === "scissors" && player2 === "paper")) {
    return "player1"
    }

  else if ((player1 === "paper" && player2 === "scissors") || (player1 === "scissors" && player2 === "rock") || (player1 === "rock" && player2 === "paper")) {
    return "player2"
  }
   
}
//console.log(rockPaperScissors("scissors", "rock"))









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}
