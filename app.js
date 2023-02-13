const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

let player, computer;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    player = btn.textContent;
    computer = computerTurn();
    playerChoice.textContent = `Player : ${player}`;
    computerChoice.textContent = `Computer : ${computer}`;

    checkWinner(player, computer);
  });
});

function computerTurn() {
  const game = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.trunc(Math.random() * 3);
  return game[random];
}

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result.textContent = "Result : It's DRAW!";
  } else if (computerChoice === "ROCK") {
    return playerChoice === "PAPER" ? playerWin() : computerWin();
  } else if (computerChoice === "PAPER") {
    return playerChoice === "SCISSORS" ? playerWin() : computerWin();
  } else if (computerChoice === "SCISSORS") {
    return playerChoice === "ROCK" ? playerWin() : computerWin();
  }
}

function playerWin() {
  playerScore.textContent = +playerScore.textContent + 1;
  result.textContent = "Result : You WIN!";
}

function computerWin() {
  computerScore.textContent = +computerScore.textContent + 1;
  result.textContent = "Result : You LOSE!";
}
