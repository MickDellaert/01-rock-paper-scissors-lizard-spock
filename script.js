const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const resetButton = document.getElementById("reset");
let playerChoice = document.getElementById("user-choice");
let result = document.getElementById("result");
let compScore = document.getElementById("compScore");
let playerScore = document.getElementById("playerScore");
let compCount = 1;
let playerCount = 1;

resetButton.addEventListener("click", function () {
    location.reload();
});

rock.addEventListener("click", () => {
    playerChoice = rock.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
    setTimeout(() => { computer(); }, 400);
});

paper.addEventListener("click", () => {
    playerChoice = paper.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
    setTimeout(() => { computer(); }, 400);
});

scissors.addEventListener("click", () => {
    playerChoice = scissors.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
    setTimeout(() => { computer(); }, 400);
});

lizard.addEventListener("click", () => {
    playerChoice = lizard.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
    setTimeout(() => { computer(); }, 400);
});

spock.addEventListener("click", () => {
    playerChoice = spock.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
    setTimeout(() => { computer(); }, 400);
});

function computer () {
    let choices = [rock.innerHTML, paper.innerHTML, scissors.innerHTML, lizard.innerHTML, spock.innerHTML];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("computer-choice").innerHTML = computerChoice;
    let playerChoice = document.getElementById("user-choice").innerHTML;

    console.log(computerChoice);
    console.log(playerChoice);

        if (computerChoice === playerChoice) {
            document.getElementById("result").innerHTML = "it's a tie!";
        } else if (computerChoice === "✊") {
            if (playerChoice === "✌️" || playerChoice === "🤞") {
                result.innerHTML = "computer wins!";
                compScore.innerHTML = compCount++ + " ";
            } else {
                result.innerHTML = "player wins!";
                playerScore.innerHTML = " " + playerCount++;
            }

        } else if (computerChoice === "✋") {
            if (playerChoice === "✊" || playerChoice === "🖖") {
                result.innerHTML = "computer wins!";
                compScore.innerHTML = compCount++ + " ";
            } else {
                result.innerHTML = "player wins!";
                playerScore.innerHTML = " " + playerCount++;
            }

        } else if (computerChoice === "✌️") {
            if (playerChoice === "✋" || playerChoice === "🤞") {
                result.innerHTML = "computer wins!";
                compScore.innerHTML = compCount++ + " ";
            } else {
                result.innerHTML = "player wins!";
                playerScore.innerHTML = " " + playerCount++;
            }

        } else if (computerChoice === "🤞") {
            if (playerChoice === "🖖" || playerChoice === "✋") {
                result.innerHTML = "computer wins!";
                compScore.innerHTML = compCount++ + " ";
            } else {
                result.innerHTML = "player wins!";
                playerScore.innerHTML = " " + playerCount++;
            }

        } else if (computerChoice === "🖖") {
            if (playerChoice === "✌️" || playerChoice === "✊") {
                result.innerHTML = "computer wins!";
                compScore.innerHTML = compCount++ + " ";
            } else {
                result.innerHTML = "player wins!";
                playerScore.innerHTML = " " + playerCount++;
            }
        }
}











