const choices = ['Rock','Paper','Scissor'];
var user_scores = 0,computer_score = 0;
function playgame(a)
{
    const choices=['Rock','Paper','Scissor'];
    let user_choice=choices[a];
    let computer_choice=Math.floor(Math.random() * choices.length); 
    if(choices[computer_choice]=='Rock' && user_choice=="Rock" || choices[computer_choice]=='Paper' && user_choice=="Paper" || choices[computer_choice]=='Scissor' && user_choice=="Scissor"  )
    {
        document.getElementById("status").textContent="Draw";
    }
    else if (choices[computer_choice]=='Paper' && user_choice=="Rock" || choices[computer_choice]=='Rock' && user_choice=="Scissor" || choices[computer_choice]=='Scissor' && user_choice=="Paper")
    {
        document.getElementById('status').textContent="Computer Wins";
        computer_score += 1;
        document.getElementById('computer_score').textContent=computer_score;
    }
    else
    {
        document.getElementById("status").textContent="You Win";
        user_scores +=1;
        document.getElementById('user_scores').textContent=user_scores;
    }
}