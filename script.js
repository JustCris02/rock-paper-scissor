function game(){
    var yourScore=0;
    var npc=0;
    for(var i =0;i<5,i++;){
        var playerSelection = prompt("rock paper or scissor");
        
    }
    if(yourScore>npc){
        return "You Won";
    }else if(yourScore<npc){
        return "You Lost";
    }else{
        return "Tie";
    }

}

function getComputerChoice(){
    const ans = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*ans.length);
    return ans[randomIndex];
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            return "Tie";
        }
        else if (computerSelection="paper"){
            return "You Lost";
        }else{
            return "You Won";
        }
    }
    if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return "You Won";
        }
        else if (computerSelection="paper"){
            return "Tie";
        }else{
            return "You Lost";
        }
    }
    if(playerSelection=="scissor"){
        if(computerSelection=="rock"){
            return "You Lost";
        }
        else if (computerSelection="paper"){
            return "You Won";
        }else{
            return "Tie";
        }
    }


}

game();
