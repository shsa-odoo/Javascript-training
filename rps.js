
let game_options = ['rock', 'paper', 'scissor']//Game options available
var btn = [];//created a empty button list
for (let i in game_options){
    /*buttons are given ids i.e. btn_rock,btn_paper,btn_scissor which can be fetched dynamically by adding prefix "btn_" to game_options*/
    btn.push(document.getElementById("btn_" + game_options[i]))

}
/*the gameoption on left loses and the right one wins*/
winning_arrangements = [['rock', 'paper'], ['paper', 'scissor'], ['scissor', 'rock']]
let user_score_ele = document.getElementById("user_score")
let computer_score_ele = document.getElementById("computer_score")
let user_score = parseInt(user_score_ele.innerHTML)
let computer_score = parseInt(computer_score_ele.innerHTML)
let computer = document.getElementById("computer")
let computerResponse = () => Math.floor(Math.random() * 3)
let scoreIncrement = (player) => {
    player == "User" ? user_score++ : computer_score++
    return player
}
let computerWiningCondition = (computer, cond) => computer == cond ? scoreIncrement("Computer") : scoreIncrement("User")
let findWinner=(user, computer) => {
    if (user == computer){
        return "Draw";
    }
    else{
        for(let i in game_options){
            if (game_options[i] == user){
                return computerWiningCondition(computer, winning_arrangements[i][1])
            }
        }
    }
}
for(let ele in btn){ 
    btn[ele].onclick = () => {
        let temp_response = computerResponse()
        document.getElementById("winner").innerHTML = findWinner(game_options[ele], game_options[temp_response])
        computer.innerHTML = game_options[temp_response]
        computer_score_ele.innerHTML = computer_score
        user_score_ele.innerHTML = user_score
    }
}
