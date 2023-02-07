let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
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
    if (you == opponent) {
        alert('Its a tie')
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                alert('yuppie😀 you got a point')
                yourScore += 1;
            }
            else if (opponent == "paper") {
                alert('shit😣 opponent got a point')
                opponentScore += 1;
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                alert('yuppie😀 you got a point')
                yourScore += 1;
            }
            else if (opponent == "rock") {
                alert('shit😣 opponent got a point')
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                alert('yuppie😀 you got a point')
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                alert('shit😣 opponent got a point')
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
