function game(){
    var yourScore=0;
    var npc=0;
    for(var i =0;i<5;i++){
        var playerSelection = prompt("rock paper or scissor");
        var computerSelection=getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        if(result=="You Won"){
            ++yourScore;
        }else if(result =="You Lost"){
            ++npc;
        }else{

        }
        console.log("Round "+(i+1)+"\nYour Choice = "+playerSelection+"\nNPC Choice = "+computerSelection);
        console.log("Your Score = "+yourScore);
        console.log("NPC score = "+npc);
        
    }
    if(yourScore>npc){
        console.log("You Won");
    }else if(yourScore<npc){
        console.log("You Lost");;
    }else{
        return console.log("Tie");
    }

}

function getComputerChoice(){
    const ans = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*ans.length);
    return ans[randomIndex];
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==computerSelection){
        return "Tie";
    }else if(playerSelection=="rock"&&computerSelection=="scissor"||playerSelection=="paper"&&computerSelection=="rock"||playerSelection=="scissor"&&computerSelection=="paper"){
        return "You Won";
    }else{
        return "You Lost";
    }
}

game();
