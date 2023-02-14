function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()* 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
   
   if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
        return 'You lose! Paper covers rock.';
    } else if (computerSelection === 'scissors'){
    return 'You win! Rock crushes scissors';
   } else {
    return "It's a tie!";
   }
}
    if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
        return 'You win! Paper covers rock.'
    } else if (computerSelection === 'scissors') {
        return 'You lose! Scissors cut paper';
    } else {
        return "It's a tie!";
    }
}
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win! Scissors cut paper.';
        }
        else if (computerSelection === 'rock') {
            return 'You lose! Rock crushes scissors.';
        } else {
            return "It's a tie!";
        }
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
   let computerSelection;
   let playerSelection;
   let tie = 0;
    
    for (let i = 0; i < 5; i++) {
       playerSelection = prompt('Enter you choice: Rock, Paper, or Scissors.');

       if (playerSelection !== null || '') {
        computerSelection = getComputerChoice();
       } 
    
   let result = playRound(playerSelection.toLowerCase(), computerSelection);
    console.log(result);
    if (result.startsWith('You win!')) {
        playerScore++;
        
    }
    else if (result.startsWith('You lose!')) {
        computerScore++;
    }
    else if (result.startsWith("It's a tie!")) {
        tie++;
    }
 
    else {
        console.log('You canceled the game.');
    }

    if (computerScore < playerScore && i > 3) {
        console.log(`You Won the Game! Your score is ${playerScore} and the computer score is ${computerScore}. `);  
    }
    else if (i > 3 && computerScore > playerScore) {
        console.log(`You Lost the Game! Your score is ${playerScore} and the computer score is ${computerScore}. `);
    }
    else if (i > 3 && computerScore === playerScore) {
        console.log(`You Tied the computer! Your score is ${playerScore} and the computer score is ${computerScore}.`);
    }
    }
}
game()

