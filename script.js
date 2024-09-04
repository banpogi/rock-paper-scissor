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
    humanScore =+ 1;
    } else {
    computerScore =+ 1; }

  console.log("My Score " +""+ humanScore + "" + "" +" Computer Score " + computerScore)

}

const humanSelection = getHumanChoice();


const computerSelection = getComputerChoice();

playround(humanSelection, computerSelection);


console.log("I choose " + humanSelection)
console.log("Computer choose " + computerSelection)


