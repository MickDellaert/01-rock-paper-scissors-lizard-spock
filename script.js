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

document.querySelectorAll(".choice").forEach(choice =>
    choice.addEventListener("click", () => {
        playerChoice = choice.innerHTML;
        document.getElementById("user-choice").innerHTML = playerChoice;
        setTimeout(() => {
            computer();
        }, 400);
    }));

function computer() {
    let choices = ["✊", "✋", "✌️", "🤞", "🖖"];
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











