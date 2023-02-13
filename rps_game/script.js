let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner
    let user_win =  ( (you === "rock") && (opponent === "scissors") ||
    (you === "paper") && (opponent === "rock") ||
    (you === "scissors") && (opponent === "paper"))


    let computer_win =  ( (opponent === "rock") && (you === "scissors") ||
    (opponent === "paper") && (you === "rock") ||
    (opponent === "scissors") && (you === "rock") )

    user_win ? alert('yuppie😀 you got a point') : computer_win ? alert('shit😣 opponent got a point') : alert('Its a tie')

    scoreincrement(user_win,computer_win)
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}

const scoreincrement = (user,computer_win)=>{
    return user ? yourScore += 1 : computer_win ? opponentScore +=1 : ""
}
