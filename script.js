//console.log('Js is working');
//console.log(Math.floor(Math.random()*3));
let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerSCore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Get computer choices
function getComputerChoice(){
const lol = ['r','p','s'];
let random = Math.floor(Math.random()*3);
return lol[random];
}

//converter
function convertWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}


// win design  
function win(user,computer){
    userScore++;
userScore_span.innerHTML = userScore;
result_div.innerHTML = convertWord(user) + " beats " + convertWord(computer) + " you win!";
}

// lose deign
function lose(user,computer){
    computerScore++;
computerSCore_span.innerHTML = computerScore;
result_div.innerHTML = convertWord(computer) + " beats " + convertWord(user) + " you lose" 
    
}

// draw design
function draw(){
result_div.innerHTML = "Draw";
}


// game is designed here:
function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch(userChoice + ComputerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,ComputerChoice);
            break;

        case "rp":
        case "ps":    
        case "sr":
            lose(userChoice,ComputerChoice);
            break;

        case "rr":
        case "ss":
        case "pp":        
            draw(); 
            break;
    }
}

//Take user inputs:
function main()
{
 rock_div.addEventListener('click',function(){
     game("r");
 });

paper_div.addEventListener('click',function(){
     game("p"); 
})

scissors_div.addEventListener('click',function(){
     game("s");
 })
}

main();