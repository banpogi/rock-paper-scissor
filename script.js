
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let computerChoice = Math.floor((Math.random()* 3 ) + 1)

    if (computerChoice == 1) {
        return "rock"
    } else if (computerChoice == 2) {
        return "paper"
    } else {
        return "scissor" 
    }
  
}




// function getHumanChoice(){

//     let humanChoice = prompt("Enter rock, paper, or scissor").toLowerCase();
//     if(humanChoice == "rock"){
        
//         return "rock"
        
//     } else if (humanChoice == "paper"){
//         return "paper"
//     } else if ( humanChoice == "scissor") {
//         return "scissor"
//     } else {
//         return "invalid"
//     }


// }



function playround(humanChoice, computerChoice) {

    

    if(humanChoice===computerChoice){
        console.log("tie")
        return "It's a tie"
    }  else if(humanChoice == "rock" && computerChoice == "scissor" || humanChoice =="paper" && computerChoice == "rock" || humanChoice =="scissor" && computerChoice=="paper"){
        humanScore++
        console.log("I win")   
    return "Player Win"
    } else {
        computerScore++
        console.log("Cpu win")       
    return "Computer Win" }


}


const score = document.querySelector(".score");
const result = document.querySelector(".result");
const outcome = document.querySelector(".outcome")
const btn = document.querySelector(".container")


document.querySelector




function playGame(){

   
    const buttonRock = document.querySelector(".button-one")
    const buttonPaper = document.querySelector(".button-two")
    const buttonScissor  = document.querySelector(".button-three")

    function handleClick(e) {
         // If buttons are disabled, stop the function execution
        if (buttonRock.disabled || buttonPaper.disabled || buttonScissor.disabled) {
            return;
        }

        let playerSelect = e.target.id;     
        let computerSelect = getComputerChoice()
        console.log(e.target.id, computerSelect)
       
        
        let gameResult =  playround(playerSelect, computerSelect)
        result.textContent = `You choose ${playerSelect} and CPU choose ${computerSelect} so ${gameResult}`
        score.textContent = `Player Score ${humanScore}  CPU Score ${computerScore}`

        if(humanScore === 5){
            outcome.textContent = "YOU WIN!!!"
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissor.disabled = true;
            
        } else if (computerScore===5){
            outcome.textContent = "CPU WIN"
           
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissor.disabled = true;
        }

        
    }

 
    buttonRock.addEventListener('click', handleClick);
    buttonPaper.addEventListener('click', handleClick);
    buttonScissor.addEventListener('click', handleClick);
    
    
    
}




playGame()












// function playGame(){
//     for(let i =1 ; i <= 5; i++){
//         console.log(`ROUND ${i}`)

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playround(humanSelection, computerSelection);

//         console.log("I choose " + humanSelection)
//         console.log("Computer choose " + computerSelection)


//     }

// }

// playGame()