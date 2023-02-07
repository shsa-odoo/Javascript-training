const arr = ['rock', 'paper', 'scissor'];
let wins = 0;
let losses = 0;
let ties = 0;

function ABC(value) {
    var rand = arr[Math.floor(Math.random() * 3)];
    document.getElementById("print_result").innerHTML = `You choose ${value}, computer choose ${rand}.<br/><br/>`;

    if (value == 'rock' && rand == "scissor" ||
        value == "paper" && rand == "rock" ||
        value == "scissor" && rand == "paper") {
        document.getElementById("win").innerHTML = wins += 1;
        document.getElementById("print_result").innerHTML += `You Win`;

    } else if (rand == 'rock' && value == "scissor" ||
        rand == "paper" && value == "rock" ||
        rand == "scissor" && value == "paper") {
        document.getElementById("lose").innerHTML = losses += 1;
        document.getElementById("print_result").innerHTML += `Computer Win`;

    } else {
        document.getElementById("tie").innerHTML = ties += 1;
        document.getElementById("print_result").innerHTML += `it's a Tie`;

    }

}