const game = ["rock", "paper", "scissors"]

let humanscore = 0
let computerscore = 0
let rounds = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}`
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanscore++
        return `You win! ${humanChoice} beats ${computerChoice}`
    } else {
        computerscore++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
}

const buttons = document.querySelectorAll("[data-choice]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (rounds === 5) return

        const humanChoice = button.dataset.choice.toLowerCase()
        const computerChoice = game[Math.floor(Math.random() * 3)]

        console.log(playRound(humanChoice, computerChoice))
        rounds++

        if (rounds === 5) {
            if (humanscore > computerscore) console.log("You won the game")
            else if (humanscore < computerscore) console.log("You lost the game")
            else console.log("The game is a tie")
        }
    })
})

