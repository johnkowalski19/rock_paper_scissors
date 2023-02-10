function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()* 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowercase();
   if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
        return 'You loose! Paper covers rock.';
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
        return 'You loose! Scissors cut paper';
    } else {
        return "It's a tie!";
    }
}
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win! Scissors cut paper.';
        }
        else if (computerSelection === 'rock') {
            return 'You loose! Rock crushes scissors.';
        } else {
            return "It's a tie!";
        }
    }
}

function

