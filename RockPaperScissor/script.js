const score = document.querySelector(".score");
const selectionBtns = document.querySelectorAll("[data-selection]");
const finalResult = document.querySelector(".final-result");
const dialog = document.querySelector("dialog");
const playAgainBtn = dialog.querySelector("button");

const CHOICE = {
  ROCK: "Rock",
  PAPER: "Paper",
  SCISSORS: "Scissors",
};
const ROUND_RESULT = {
  PLAYER_WON: "playerWon",
  COMPUTER_WON: "computerWon",
  TIE: "tie",
};

let playerWins = 0;
let computerWins = 0;

function play() {
  const playerSelection = CHOICE[this.dataset.selection.toUpperCase()];
  const computerSelection = getComputerSelection();
  const result = playRound(playerSelection, computerSelection);
  displayRoundResult(result, playerSelection, computerSelection);
  updateScore(result);
  displayScore(playerWins, computerWins);
  if (playerWins === 5 || computerWins === 5) {
    displayFinalResult();
  }
}

function getComputerSelection() {
  const possibleChoices = Object.values(CHOICE);
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ROUND_RESULT.TIE;
  }
  const hasPlayerWon =
    (playerSelection === CHOICE.ROCK &&
      computerSelection === CHOICE.SCISSORS) ||
    (playerSelection === CHOICE.PAPER && computerSelection === CHOICE.ROCK) ||
    (playerSelection === CHOICE.SCISSORS && computerSelection === CHOICE.PAPER);
  return hasPlayerWon ? ROUND_RESULT.PLAYER_WON : ROUND_RESULT.COMPUTER_WON;
}

function displayRoundResult(result, playerSelection, computerSelection) {
  let textResult;
  switch (result) {
    case ROUND_RESULT.PLAYER_WON:
      textResult = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case ROUND_RESULT.COMPUTER_WON:
      textResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      textResult = "Tie!";
  }

  const currentResult = document.querySelector(".round-result");
  const newResult = currentResult.cloneNode();
  newResult.textContent = textResult;
  newResult.classList.add("hidden");
  currentResult.parentNode.replaceChild(newResult, currentResult);
  // Trigger layout recalculation to show transition when the class
  // is removed.
  newResult.offsetWidth;
  newResult.classList.remove("hidden");
}

function displayScore(playerWins, computerWins) {
  score.textContent = `${playerWins} - ${computerWins}`;
}

function displayFinalResult() {
  finalResult.textContent =
    playerWins === 5
      ? `You won ${playerWins} to ${computerWins}!!!`
      : `You lost ${computerWins} to ${playerWins}!`;
  dialog.showModal();
}

function updateScore(result) {
  if (result === ROUND_RESULT.PLAYER_WON) {
    playerWins++;
  } else if (result === ROUND_RESULT.COMPUTER_WON) {
    computerWins++;
  }
}

function reset() {
  playerWins = 0;
  computerWins = 0;
  displayScore(playerWins, computerWins);
  const roundResult = document.querySelector(".round-result");
  roundResult.textContent = "";
  dialog.close();
}

selectionBtns.forEach((btn) => btn.addEventListener("click", play));
playAgainBtn.addEventListener("click", reset);