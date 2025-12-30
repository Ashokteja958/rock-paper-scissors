game = ["rock","paper","scissors"]
let humanscore = 0
let computerscore = 0
function playRound(humanChoice, computerChoice) {
    humanChoice = prompt("Enter Your Choice:", "rock").toLowerCase();
    let x = Math.floor(Math.random()*3)
    computerChoice = game[x].toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return;
        }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
        humanscore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return humanscore
    } else {
        computerscore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return computerscore
    }
}



function playGame(){    
    for(let i = 0; i<5;i++){
        playRound()
    }
    if(humanscore>computerscore) console.log("you won")
    else if(humanscore === computerscore) console.log("its a tie")
    else console.log("you lose")
}

playGame()
