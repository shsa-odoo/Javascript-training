const choices=['Rock','Paper','Scissor'];
var user_scores=0,computer_score=0;
function rock()
{
    let computer_choice=Math.floor(Math.random() * choices.length);
    console.log(choices[computer_choice])

    if(choices[computer_choice]=='Rock')
    {
        // console.log("helllllllo")
        document.getElementById("status").textContent="Draw";
    }
    else if (choices[computer_choice]=='Paper')
    {
        document.getElementById("status").textContent="Computer Wins";
        computer_score+=1;
        document.getElementById("computer_score").textContent=computer_score;
        console.log(computer_score)
    }
    else if(choices[computer_choice]=='Scissor')
    {
        document.getElementById("status").textContent="You Win";
        user_scores+=1;
        document.getElementById("user_scores").textContent=user_scores;
        console.log(user_scores)
    }
}
function paper()
{
    let computer_choice=Math.floor(Math.random() * choices.length);
    console.log(choices[computer_choice])
    if(choices[computer_choice]=='Paper')
    {
        document.getElementById("status").textContent="Draw";
    }
    else if (choices[computer_choice]=='Scissor')
    {
        document.getElementById("status").textContent="Computer Wins";
        computer_score+=1;
        document.getElementById("computer_score").textContent=computer_score;
    }
    else if(choices[computer_choice]=='Rock')
    {
        document.getElementById("status").textContent="You Win";
        user_scores+=1;
        document.getElementById("user_scores").textContent=user_scores;
    }
}
function scissor()
{
    let computer_choice=Math.floor(Math.random() * choices.length);
    console.log(choices[computer_choice])
    if(choices[computer_choice]=='Scissor')
    {
        document.getElementById("status").textContent="Draw";
    }
    else if (choices[computer_choice]=='Rock')
    {
        document.getElementById("status").textContent="Computer Wins";
        computer_score+=1;
        document.getElementById("computer_score").textContent=computer_score;
    }
    else if(choices[computer_choice]=='Paper')
    {
        document.getElementById("status").textContent="You Win";
        user_scores+=1;
        document.getElementById("user_scores").textContent=user_scores;
    }
}
