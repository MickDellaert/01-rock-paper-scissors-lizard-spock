const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const compRandom = document.getElementById("start");
let playerChoice;

rock.addEventListener("click", () => {
    playerChoice = rock.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
});

paper.addEventListener("click", () => {
    playerChoice = paper.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
});

scissors.addEventListener("click", () => {
    playerChoice = scissors.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
});

lizard.addEventListener("click", () => {
    playerChoice = lizard.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
});

spock.addEventListener("click", () => {
    playerChoice = spock.innerHTML;
    document.getElementById("user-choice").innerHTML = playerChoice;
});

compRandom.addEventListener("click", () => {
    let choices = [rock.innerHTML, paper.innerHTML, scissors.innerHTML, lizard.innerHTML, spock.innerHTML];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("computer-choice").innerHTML = computerChoice;
    let playerChoice = document.getElementById("user-choice").innerHTML;

    console.log(computerChoice);
    console.log(playerChoice);

    if (computerChoice === playerChoice) {
        document.getElementById("result").innerHTML = "it's a tie";
    } else if (computerChoice === "Rock") {
        if (playerChoice === "Scissors" || playerChoice === "Lizard") {
            document.getElementById("result").innerHTML = "computer wins";
        } else {
            document.getElementById("result").innerHTML = "player wins";
        }

    } else if (computerChoice === "Paper") {
        if (playerChoice === "Rock" || playerChoice === "Spock") {
            document.getElementById("result").innerHTML = "computer wins";
        } else {
            document.getElementById("result").innerHTML = "player wins";
        }

    } else if (computerChoice === "Scissors") {
        if (playerChoice === "Paper" || playerChoice === "Lizard") {
            document.getElementById("result").innerHTML = "computer wins";
        } else {
            document.getElementById("result").innerHTML = "player wins";
        }

    } else if (computerChoice === "Lizard") {
        if (playerChoice === "Spock" || playerChoice === "Paper") {
            document.getElementById("result").innerHTML = "computer wins";
        } else {
            document.getElementById("result").innerHTML = "player wins";
        }

    } else if (computerChoice === "Spock") {
        if (playerChoice === "Scissors" || playerChoice === "Rock") {
            document.getElementById("result").innerHTML = "computer wins";
        } else {
            document.getElementById("result").innerHTML = "player wins";
        }
    }
});










