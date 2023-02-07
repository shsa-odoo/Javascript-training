const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

let player, computer;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.textContent);

    player = btn.textContent;
    playerChoice.textContent = `Player : ${player}`;

    computerChoice.textContent = `Computer : ${computerTurn()}`;

    // THIS WILL RETURN THE WINNER OF THE GAME
    result.textContent = checkWinner(player, computer);
  });
});

function computerTurn() {
  const game = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.trunc(Math.random() * 3);
  //   console.log(random);
  computer = game[random];
  return computer;
}

function checkWinner(playerChoice, computerChoice) {
  //   console.log(playerChoice, computerChoice);
  if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
    playerScore.textContent = +playerScore.textContent + 1;
    return `Result : You WIN!!!`;
  } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
    computerScore.textContent = +computerScore.textContent + 1;
    return `Result : You LOSE!!!`;
  } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
    computerScore.textContent = +computerScore.textContent + 1;
    return `Result : You LOSE!!!`;
  } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
    playerScore.textContent = +playerScore.textContent + 1;
    return `Result : You WIN!!!`;
  } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
    computerScore.textContent = +computerScore.textContent + 1;
    return `Result : You LOSE!!!`;
  } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
    playerScore.textContent = +playerScore.textContent + 1;
    return `Result : You WIN!!!`;
  } else {
    return `Result : It's DRAW!!!`;
  }
}
