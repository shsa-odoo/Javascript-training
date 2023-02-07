var comp_score = 0;
var user_score = 0;


function check(str) {
    var vals = ['rock', 'paper', 'scissor'];
    var index = Math.floor((Math.random() * 3));
    var comp_res = vals[index];

    if (str == comp_res) {
        document.getElementById('result').innerHTML="Draw!";
    }
    else if(str == 'rock' && comp_res == 'scissor') {
        document.getElementById('result').innerHTML='You Won';
        user_score += 1;
        document.getElementById('user_score_display').innerHTML=user_score;
    }
    else if(str == 'paper' && comp_res == 'rock') {
        document.getElementById('result').innerHTML='You Won';
        user_score += 1;
        document.getElementById('user_score_display').innerHTML=user_score;
    }
    else if(str == 'scissor' && comp_res == 'paper') {
        document.getElementById('result').innerHTML="You Won";
        user_score += 1;
        document.getElementById('user_score_display').innerHTML=user_score;
    }
    else {
        document.getElementById('result').innerHTML='You Lose';
        comp_score += 1;
        document.getElementById('comp_score_display').innerHTML=comp_score;
    }
}
