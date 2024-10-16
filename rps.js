const readlineSync = require('readline-sync');

function PlayerChoice() {
  let choice = readlineSync.question('Please enter rock paper or scissors').toLowerCase();
  while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    choice = readlineSync.question ('Please input a valid choice of either rock, paper or scissors').toLowerCase();
  }
   return PlayerChoice; 

}

User1 = PlayerChoice()
User2 = PlayerChoice()

console.log(User1 + User2);

/*function rockPaperScissors(player1, player2) {
  
  
   
}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}
  */