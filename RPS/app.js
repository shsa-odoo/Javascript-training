const rock_button = document.querySelector(".rock");
const paper_button = document.querySelector(".paper");
const scissors_button = document.querySelector(".scissor");
const result_text = document.getElementById("result_text");
const user_win_count = document.getElementById("p-count");
const computer_win_count = document.getElementById("c-count");
let computer_score = 0;
let player_score = 0;

rock_button.addEventListener("click", function () {
  start_game("rock");

});
paper_button.addEventListener("click", function () {
  start_game("paper");

});
scissors_button.addEventListener("click", function () {
  start_game("scissors");

});

computer_selection = () => {
  computer_options = ["rock", "paper", "scissors"];
  computer_number = Math.floor(Math.random() * 3);
  computer_choice = computer_options[computer_number];
  return computer_choice;
};

start_game = (user_choice) => {
  const comp_choice = computer_selection();

  if (user_choice == comp_choice) {
    result_text.textContent = "It's Draw";
  } else if (
    (user_choice == "rock") & (comp_choice == "scissors") ||
    (user_choice == "paper") & (comp_choice == "rock") ||
    (user_choice == "scissors") & (comp_choice == "paper")
  ) {
    player_score++;
    user_win_count.innerText = player_score;
    result_text.textContent = "You Win";

  } else if (
    (user_choice == "rock") & (comp_choice == "paper") ||
    (user_choice == "paper") & (comp_choice == "scissors") ||
    (user_choice == "scissors") & (comp_choice == "rock")
  ) {
    computer_score++;
    computer_win_count.innerText = computer_score;
    result_text.textContent = "You Lose";
    
  }
};
