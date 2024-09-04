console.log("Hello")
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




function getHumanChoice(){

    let humanChoice = prompt("Enter rock, paper, or scissor").toLowerCase();
    if(humanChoice == "rock"){
        
        return "rock"
        
    } else if (humanChoice == "paper"){
        return "paper"
    } else if ( humanChoice == "scissor") {
        return "scissor"
    } else {
        return "invalid"
    }


}



function playround(humanChoice, computerChoice) {

    

    if(humanChoice===computerChoice){
        console.log("ITS A TIE")
    }  else if(humanChoice == "rock" && computerChoice == "scissor" || humanChoice =="paper" && computerChoice == "rock" || humanChoice =="scissor" && computerChoice=="paper"){
    humanScore++
    } else {
    computerScore++; }

  console.log("My Score " +""+ humanScore + "" + "" +" Computer Score " + computerScore)

}




function playGame(){
    for(let i =1 ; i <= 5; i++){
        console.log(`ROUND ${i}`)

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playround(humanSelection, computerSelection);

        console.log("I choose " + humanSelection)
        console.log("Computer choose " + computerSelection)


    }

}

playGame()