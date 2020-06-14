const computerSelection = computerPlay()



document.getElementById("rock").onclick= playerSelection;
document.getElementById("paper").onclick= playerSelection;
document.getElementById("scissors").onclick= playerSelection;







let playerScore = 0
let computerScore= 0


function computerPlay() {
    let computerChoose = ["rock", "paper", "scissors"];
    return computerChoose = computerChoose[Math.floor(Math.random() * computerChoose.length)];
}



function playRound(playerSelection, computerSelection){

    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {

            playerScore++;
        return "You win " + playerSelection + " beats " + computerSelection;

    } else if (playerSelection == "rock" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "paper") {

        return `It's a tie !!`;

    } else {
        computerScore++;
        return "You lose " + computerSelection + " beats " + playerSelection;
    }



}
console.log(playRound(playerSelection,computerSelection));
