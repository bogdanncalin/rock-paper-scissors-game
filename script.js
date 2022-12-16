function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playerWon(){
    return "You won the round!";
}

function computerWon(){
    return "You lost the round!";
}

function round(playerSelection, computerChoice){
    switch(true){
        case playerSelection === computerChoice: return "Tie";
        break;
        case (playerSelection === 'rock' && computerChoice === 'scissors') || 
            (playerSelection === 'paper' && computerChoice === 'rock') || 
            (playerSelection === 'scissors' && computerChoice === 'paper'): return playerWon();
        break;
        case (computerChoice === 'rock' && playerSelection === 'scissors') || 
            (computerChoice === 'paper' && playerSelection === 'rock') || 
            (computerChoice === 'scissors' && playerSelection === 'paper') : return computerWon();
        break;
        default: return "Default";
    }

}

function getPlayersChoice(){
    return prompt("What do you choose?").toLowerCase();
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i <= 4; i++){
        playerSelection = getPlayersChoice();
        computerChoice = getComputerChoice();
        console.log(`Round number ${i+1}: ${round(playerSelection, computerChoice)}`);
        console.log(`You vs computer: ${playerSelection} vs ${computerChoice}`);
        console.log('');
        if(round(playerSelection, computerChoice) === "You won the round!"){
            playerScore ++;
        }
        else if(round(playerSelection, computerChoice) === "You lost the round!"){
            computerScore ++;
        }
    }
    if (playerScore > computerScore){
        return `You won the game! The score is ${playerScore} - ${computerScore} (Player - Computer)`;
    }
    else if (computerScore > playerScore){
        return `You lost the game! The score is ${playerScore} - ${computerScore} (Player - Computer)`;
    }
    else{
        return `It is a tie! The score is ${playerScore} - ${computerScore} (Player - Computer)`;
    }
}

console.log(game());