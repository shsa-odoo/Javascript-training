let your_score = 0;
let computer_score = 0;
let result_ref = document.getElementById("result");
const rock_button = document.querySelector(".rock");
const paper_button = document.querySelector(".paper");
const scissor_button = document.querySelector(".scissor");
const yourOptions = [rock_button, paper_button, scissor_button];

rock_button.addEventListener("click", function () {
  rps("rock");
});

paper_button.addEventListener("click", function () {
  rps("paper");
});

scissor_button.addEventListener("click", function () {
  rps("scissor");
});
yourOptions.forEach((option) => {
  option.addEventListener("click", function () { });
});

computer = (computer_choice) => {
  computer_options = ["rock", "paper", "scissor"];
  number = Math.floor(Math.random() * 3);
  computer_choice = computer_options[number];
  return computer_choice;
};

rps = (your_choice) => {
  const comp_choice = computer();

  if (your_choice == comp_choice) {
    result_ref.textContent = "Draw";
  } else if (
    (your_choice == "rock") & (comp_choice == "scissor") ||
    (your_choice == "paper") & (comp_choice == "rock") ||
    (your_choice == "scissor") & (comp_choice == "paper")
  ) {
    your_score +=1;
    your_score.innerText = your_score;
    result_ref.textContent = "You Win";
  } else if (
    (your_choice == "rock") & (comp_choice == "paper") ||
    (your_choice == "paper") & (comp_choice == "scissor") ||
    (your_choice == "scissor") & (comp_choice == "rock")
  ) {
    computer_score++;
    computer_score.innerText = computer_score;
    result_ref.textContent = "Computer Win";
  }
  document.getElementById("computer-choice").innerHTML = 
  ` Computer choose <span> ${comp_choice.toUpperCase()} </span>`;

  document.getElementById("your-choice").innerHTML = 
  ` You choose <span> ${your_choice.toUpperCase()} </span>`;

  document.getElementById("computer_score").innerHTML = computer_score;
  document.getElementById("user_score").innerHTML = your_score;
};
