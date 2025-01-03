function getComputerChoice(){
    let num = Math.random();
    num *= 10;
    num = Math.floor(num%3);
    
    if(num === 0){
        return "Rock";
    }
    else if(num === 1){
        return "paper";
    }
    else{
        return "Scissor";
    }
}

for(let i=1;i<=10;i++){
    console.log(getComputerChoice());
}