const compvalue = () =>{
    let num = Math.floor(Math.random() * 3)
    let value = () => {
        if (num == 0){
            return 'rock'
        }
        else if(num == 1){
            return 'paper'
        }
        else{
            return 'scissor'
        }
    }
    return value()
}

let cscore = 0
let yscore = 0

showValue = (val) => { 
    document.getElementById('yourChoice').value = val.toUpperCase();
    document.getElementById('compChoice').value = compvalue().toUpperCase();

    var compChoice = document.getElementById('compChoice').value
    var yourChoice = document.getElementById('yourChoice').value

    if (compChoice == 'ROCK'){
        if(yourChoice == 'SCISSOR'){
            document.getElementById('compscore').value = ++cscore;
            document.getElementById('result').value = "Computer Wins !!!";
        }else if(yourChoice == 'PAPER'){
            document.getElementById('yourscore').value = ++yscore;
            document.getElementById('result').value = "You Win !!!";
        }else{
            document.getElementById('result').value = "Draw !!!";
        }
    }else if(compChoice == 'PAPER'){
        if(yourChoice == 'SCISSOR'){
            document.getElementById('yourscore').value = ++yscore;
            document.getElementById('result').value = "You Win !!!";
        }else if(yourChoice == 'ROCK'){
            document.getElementById('compscore').value = ++cscore;
            document.getElementById('result').value = "Computer Win !!!";
        }else{
            document.getElementById('result').value = "Draw !!!";
        }
    }else{
        if(yourChoice == 'PAPER'){
            document.getElementById('compscore').value = ++cscore;
            document.getElementById('result').value = "Computer Wins !!!";
        }else if(yourChoice == 'ROCK'){
            document.getElementById('yourscore').value = ++yscore;
            document.getElementById('result').value = "You Wins !!!";
        }else{
            document.getElementById('result').value = "Draw !!!";
        }
    }
} 