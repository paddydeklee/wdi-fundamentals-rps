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

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var n = 0;
    return [playerWins, computerWins];
}

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




    // i needs to be the console log above
    /* function playerScore(num) {
        var result;
        for (var i = 0; i < 6; i += 1) {
        if (i%3 === 0 && i%5 === 0) {
        result = "fizzbuzz"
        } else if (i%3 === 0) {
        result = "fizz";
        } else if(i%5 === 0) {
        result = "buzz";
        } else {
        result = i;
        }
    //this loop gives me best of 5
        console.log(result); // This is a command to our console, telling it to display the the winner
}
}


    YOUR CODE HERE */



