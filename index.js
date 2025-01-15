function getComputerChoice(){
    let num = Math.random();
    num *= 10;
    num = Math.floor(num%3);
       
    if(num === 0){
        return "Rock";
    }
    else if(num === 1){
        return "Paper";
    }
    else{
        return "Scissor";
    } 
}

function getHumanChoice(){
    let string = prompt("Enter your choice");
    if (!string) {
        return ""; 
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();;
}


function playRound(c,h){
    console.log("Computer : " , c);
    console.log("Human : " , h);
    if(c === h){
        console.log("It's a tie!");
    }
    else if((c==="Rock" && h==="Scissor") || (c==="Paper" && h==="Rock") || (c==="Scissor" && h==="Paper")){
        console.log("You lose! " , c , " beats ",  h);
        computerScore++;
    }
    else{
        console.log("You win! " , h , " beats ",  c);
        humanScore++;
    } 
}

function playGame(){ 
    
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(computer,human);
    
}

let humanScore = 0;
let computerScore = 0;

playGame();

console.log("Final score HUMAN : " , humanScore, "COMPUTER : ",computerScore);
