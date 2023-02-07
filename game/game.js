function getvalue(id) {
    var number = document.getElementById(id).value;
    let obj = new Game(number);
    obj.fight();
}

class Game {
    constructor(choice) {
        this.choice = choice;
    }

    computer_choice() {
        var x = Math.random() * 3;
        var x = Math.floor(x)
        var choices = ['rock', 'paper', 'scissor']

        return choices[x];
    }

    fight() {
        
        var a = this.computer_choice();
        let b = this.choice;
        let c = Number(document.getElementById('computer_score').textContent);
        let u = Number(document.getElementById('user_score').textContent);
        let n = Number(document.getElementById('points').value);

        if (n) {
            document.getElementById('computer_img').src = `img/${a}.png`
            document.getElementById('user_img').src = `img/${b}.png`
            if ((a == "rock" & b == "scissor") | (a == "scissor" & b == "paper") | (a == "paper" & b == "rock")) {
                document.getElementById('computer_score').innerHTML = c += 1;
                document.getElementById('score').innerHTML = "Computer Wins";
            }
            else if ((b == "rock" & a == "scissor") | (b == "scissor" & a == "paper") | (b == "paper" & a == "rock")) {
                document.getElementById('user_score').innerHTML = u += 1;
                document.getElementById('score').innerHTML = "User Wins";
            } else {
                document.getElementById('score').innerHTML = "Tie";
            }
        }

        if (n == c) {
            const buttons = document.getElementsByClassName("btn");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
            document.getElementById("computer_header").classList.add("bg-success");
            document.getElementById("computer_body").classList.add("border-success");
            document.getElementById("user_header").classList.add("bg-danger");
            document.getElementById("user_body").classList.add("border-danger");
        }
        else if (n == u) {
            const buttons = document.getElementsByClassName("btn");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
            document.getElementById("user_header").classList.add("bg-success");
            document.getElementById("user_body").classList.add("border-success");
            document.getElementById("computer_header").classList.add("bg-danger");
            document.getElementById("computer_body").classList.add("border-danger");

        }

    }
}