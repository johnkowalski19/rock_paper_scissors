function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()* 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowercase();
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
    for (let i = 0; i < 5; i++) {
       let playerScore = prompt ('Enter you choice: Rock, Paper, or Scissors.')
       if (playerSelection !== null) {
        let computerSelection = getComputerChoice();
       } 
    }
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.startsWith('You Win!')) {
        playerScore++;
        
    }
    else if (result.startsWith('You Lose!')) {
        computerScore++;
    }
 
    else {
        console.log('You canceled the game.');
    }
    if (computerScore < playerScore) {
        console.log('You Won the Game! Your score is ${playerscore} and the computer score is!{computerScore}. ');
        
    }
}

