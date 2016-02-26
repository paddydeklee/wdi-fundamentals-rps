////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove = function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput()
}

var computerMove = function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay()
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == computerMove){
        return 'tie';
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
        return 'player';
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
        return 'player';
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        return 'player';
    } else return   'computer'; 
}

function playTo() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var maxWins = 5;
    var turns = 0;
        
        while ((playerWins < maxWins) && (computerWins < maxWins)){  
        
            var playerMove = getPlayerMove();
            var computerMove = getComputerMove();
            var winner = getWinner(playerMove, computerMove);
    
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('the winner is ' + winner);
    
            if (winner == 'player'){
            playerWins = playerWins + 1;
            } 

            else if (winner == 'computer'){
            computerWins = computerWins + 1;
            } 

            else {
            console.log('tied!');
            }
            turns++;
            
            console.log('currently player has ' + playerWins + ' wins vs computers ' + computerWins + ' from ' + turns + ' games');
        }
    return [playerWins, computerWins];
}

//run getWinner add one to the number of games n, who won, add one to the number of wins for the winner


//This code is looping through games keeping score until the first player gets to 5

// 1
// Log the player move and computer move
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

/* 2
// Check if either player scores are 5 yet, if so skip this function and end the game
    If winner is player add one to player score
    if getWinner == 'player' {
    playerWins++ ;
    } else if getWinner == 'computer' {
    computerWins++
    }

*/

//  
// If the player score is five get out of the loop
// If winner is computer add one to computer score
// If the computer score is five get out of the loop

// 3 countPlays
// var num = 0
// var num += 1 to itself
// Record how many plays there have been times the loop has run ('/n')

// 4 
// Record the playerWins and computerWins and log them in the console 
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,



