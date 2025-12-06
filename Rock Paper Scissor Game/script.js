const choices=['rock','paper','scissors']

playerDisplay=document.getElementById('playerDisplay');
computerDisplay=document.getElementById('computerDisplay');
resultDisplay=document.getElementById('resultDisplay');
const playerScoreDIsplay=document.getElementById('playerScoreDisplay');
const computerScoreDIsplay=document.getElementById('computerScoreDisplay');
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)]

    let result= "";

    if (playerChoice===computerChoice){
        result = "IT'S A TIE!";
    }
    else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice==="scissors")?"YOU WIN!":"YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice==="paper")?"YOU WIN!":"YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice==="rock")?"YOU WIN!":"YOU LOSE!";
                break;
        }
    } 

    playerDisplay.textContent=`PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice.toUpperCase()}`;
    resultDisplay.classList.remove('greenText','redText');
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;

    }
    resultDisplay.textContent=result;
    playerScoreDIsplay.textContent=playerScore;
    computerScoreDIsplay.textContent=computerScore;
}