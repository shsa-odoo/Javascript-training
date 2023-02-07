const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const stat = document.getElementById("status")
stat.innerText = "Start"
const status_human = document.getElementById("status_human")
const status_bot = document.getElementById("status_bot")


let human_count = 0
let bot_count = 0
const human_score = document.getElementById('human')
human_score.innerText = human_count
const bot_score = document.getElementById('bot')
bot_score.innerText = bot_count

const random_number_generator = ()=>(Math.ceil(Math.random()*3))   //random number generator
const evaluator = (id)=>{
    const computer_choice = random_number_generator()
    console.log(computer_choice)
    // For rock 
   if(id===1){
    if(computer_choice == 2){
        status_human.innerText ="Rock"
        stat.innerText= "You lose"
        status_bot.innerText= "Paper"
        bot_count++
        bot_score.innerText = bot_count
    }
    else if(computer_choice == 3){
        status_human.innerText ="Rock"    
        stat.innerText = "You won"
        status_bot.innerText= "Scissor"   
        human_count++
        human_score.innerText = human_count
    }      
    else{
        status_human.innerText ="Rock"
        stat.innerText = "Score are tied" 
        status_bot.innerText= "Rock" 
    }
             
    stat.remove
   }
//    For paper
   else if(id===2){
    if(computer_choice == 1) {
        status_human.innerText ="Paper"
        stat.innerText= "You won"
        status_bot.innerText= "Rock"  
        human_count++
        human_score.innerText = human_count
    }
              
    else if(computer_choice == 3){
        status_human.innerText ="Paper"
        stat.innerText = "You Lose"
        status_bot.innerText= "Scissor"
        bot_count++
        bot_score.innerText = bot_count
    }
    else{
        status_human.innerText ="Paper"
        stat.innerText = "Score are tied"
        status_bot.innerText= "paper"
    }
            
    stat.remove
   }
//    For Scissors
   else{
    if(computer_choice == 1) {
        status_human.innerText ="Scissor"
        stat.innerText= "You Lose"
        status_bot.innerText= "Rock"
        bot_count++
        bot_score.innerText = bot_count
    }
        
    else if(computer_choice == 2){
        status_human.innerText ="Scissor"
        stat.innerText = "You Won"
        status_bot.innerText= "Paper"
        human_count++
        human_score.innerText = human_count
    }    
    else{
        status_human.innerText ="Scissor"
        stat.innerText = "Score are tied"
        status_bot.innerText= "Scissor"
    }
        
    stat.remove   
   }
}
rock.addEventListener('click',()=>{
    evaluator(1)
})
paper.addEventListener('click',()=>{
    evaluator(2)

})
scissor.addEventListener('click',()=>{
    evaluator(3)
})

