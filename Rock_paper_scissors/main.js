const arr = ['rock', 'paper', 'scissor'];
let wins = 0;
let losses = 0;
let ties = 0;

function gameState(value) {
    var rand = arr[Math.floor(Math.random() * 3)];
    document.getElementById("print_result").innerHTML = `You choose ${value}, computer choose ${rand}.<br/><br/>`;
    let you_win = ((value == 'rock' && rand == "scissor") || (value == "paper" && rand == "rock") || (value == "scissor" && rand == "paper"))
    let computer_win = (value == 'rock' && value == "scissor" || rand == "paper" && value == "rock" || rand == "scissor" && value == "paper")
    document.getElementById("print_result").innerHTML += (you_win) ? `You Win`  : (value === rand) ? `it's a Tie` : `Computer Win`
    incrementScore(you_win,computer_win)
}
const incrementScore = ((user,computer) => {
        user ? document.getElementById("win").innerHTML = wins += 1 : computer ? document.getElementById("lose").innerHTML = losses += 1 : document.getElementById("tie").innerHTML = ties +=1;
    });