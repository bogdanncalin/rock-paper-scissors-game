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

const buttons = document.querySelectorAll('.button');


let playerSelection;

let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');
playerScoreDisplay.textContent = 0;
computerScoreDisplay.textContent = 0;

let playerScore = 0;
let computerScore = 0;
let computerChoiceDisplay = document.getElementById('computer-choice');

let decision = document.getElementById('decision');
// decision.textContent = "Let`s GO";


buttons.forEach((button) =>{
    button.addEventListener('click', () => {

        if(button.id === 'rock'){
            playerSelection = 'rock';
            document.getElementById('player-choice').src = "./images/rock.png";
        }
        else if (button.id === 'paper') {
            playerSelection = 'paper';
            document.getElementById('player-choice').src = "./images/paper.png";
        }
        else if(button.id === 'scissors') {
            playerSelection = 'scissors';
            document.getElementById('player-choice').src = "./images/scissors.png";
        }


        let computerChoice = getComputerChoice();

        if(computerChoice === 'rock'){
            document.getElementById('computer-choice').src = "./images/rock.png";
        }
        else if (computerChoice === 'paper') {
            document.getElementById('computer-choice').src = "./images/paper.png";
        }
        else if(computerChoice === 'scissors') {
            document.getElementById('computer-choice').src = "./images/scissors.png";
        }

      
        round(playerSelection, computerChoice);

        if(round(playerSelection, computerChoice) === "You won the round!"){
            // player won
            playerScore++;
        }
        else if(round(playerSelection, computerChoice) === "You lost the round!"){
            // computer won
            computerScore++;
        }
        else if(round(playerSelection, computerChoice) === "Tie"){
            // its a tie
        }
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        console.log(`PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`);
    });
});


const resetButton = document.getElementById('reset-score-button')
resetButton.addEventListener('click', function reset(e) {
    document.getElementById('player-choice').src = "./images/empty.png";
    document.getElementById('computer-choice').src = "./images/empty.png";
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    console.log(`After reset: PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`)
    // e.stopPropagation();
});



