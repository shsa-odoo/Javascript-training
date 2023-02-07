const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const computersOptions = ["Rock", "Paper", "Scissor"];
const humanChoiceSpan = document.getElementById("humanChoiceSpan");
const computerChoiceSpan = document.getElementById("computerChoiceSpan");
const result = document.getElementById("result");
const humanScore = document.getElementById("humanScore");
const computerScore = document.getElementById("computerScore");
const resetBtn = document.getElementById("resetBtn");
const humanChoiceIcon = document.getElementById("humanChoiceIcon");
const computerChoiceIcon = document.getElementById("computerChoiceIcon");

const play = () => {
    rockBtn.addEventListener("click", () => {
        let computerChoice = random();
        computerChoiceSpan.innerText = computersOptions[computerChoice];
        humanChoiceIcon.innerHTML =
            '<i class="fa-solid fa-hand-back-fist fa-5x"></i>';
        humanChoiceSpan.innerText = "Rock";
        if (computerChoice === 0) {
            result.innerText = "Draw";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand-back-fist fa-5x"></i>';
        } else if (computerChoice === 1) {
            result.innerText = "Computer Won!!!";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand fa-5x"></i>';
            computerScore.innerText++;
        } else {
            result.innerText = "You Won!!!";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand-scissors fa-5x"></i>';
            humanScore.innerText++;
        }
    });
    paperBtn.addEventListener("click", () => {
        let computerChoice = random();
        computerChoiceSpan.innerText = computersOptions[computerChoice];
        humanChoiceIcon.innerHTML = '<i class="fa-solid fa-hand fa-5x"></i>';
        humanChoiceSpan.innerText = "Paper";
        if (computerChoice === 0) {
            result.innerText = "You Won!!!";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand-back-fist fa-5x"></i>';
            humanScore.innerText++;
        } else if (computerChoice === 1) {
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand fa-5x"></i>';
            result.innerText = "Draw";
        } else {
            result.innerText = "Computer Won!!!";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand-scissors fa-5x"></i>';
            computerScore.innerText++;
        }
    });
    scissorBtn.addEventListener("click", () => {
        let computerChoice = random();
        computerChoiceSpan.innerText = computersOptions[computerChoice];
        humanChoiceIcon.innerHTML =
            '<i class="fa-solid fa-hand-scissors fa-5x"></i>';
        humanChoiceSpan.innerText = "Scissor";
        if (computerChoice === 0) {
            result.innerText = "Computer Won!!!";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand-back-fist fa-5x"></i>';

            computerScore.innerText++;
        } else if (computerChoice === 1) {
            result.innerText = "You Won!!!";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand fa-5x"></i>';
            humanScore.innerText++;
        } else {
            result.innerText = "Draw";
            computerChoiceIcon.innerHTML =
                '<i class="fa-solid fa-hand-scissors fa-5x"></i>';
        }
    });
    resetBtn.addEventListener("click", () => {
        reset();
    });
};

const random = () => {
    return Math.floor(Math.random() * 3);
};

const reset = () => {
    humanChoiceSpan.innerText = "";
    computerChoiceSpan.innerText = "";
    humanScore.innerText = 0;
    computerScore.innerText = 0;
    result.innerText = "";
    humanChoiceIcon.innerHTML = "";
    computerChoiceIcon.innerHTML = "";
};

play();

// const object = {
//     p1: 1,
//     p2: 2,
//     p3: 3,
//     p4: {
//         p5: 4,
//     },
// };
// console.log(document.getElementsByTagName("p"));

// const prom = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Working");
//     }, 10000);
// });

// console.log(
//     prom.then(() => console.log("done")).catch(() => console.log("rejected"))
// );

fetch("https://portal.tycoonstats.com/api/demo")
    .then((response) => response.text())
    .then((data) => console.log(data));

async function a() {
    let response = await fetch("https://portal.tycoonstats.com/api/demo");
    let data = await response.text();
    console.log(data);
}

a();
