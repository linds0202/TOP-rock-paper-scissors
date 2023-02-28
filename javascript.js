let score = [0, 0]

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection ===  'scissors' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
            keepScore(true, false)
            return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection ===  'paper' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
            keepScore(false, true)
            return `You Loose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === computerSelection) {
        return `You tied! Both players chose ${computerSelection}!`
    } else {
        return 'You did not enter a valid selection'
    }
}

function checkEntry(entry) {
    if (entry.toLowerCase() !== 'rock' && entry.toLowerCase() !== 'paper' && entry.toLowerCase() !== 'scissors') return false
    return true
}

function keepScore(player, comp) {
    if (player) {
        score[0]++
    }
    if (comp) {
        score[1]++
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = ''
        checkEntry(playerSelection)
        while(!checkEntry(playerSelection)) {
            playerSelection = prompt('enter rock, paper, or scissors') 
        }
        console.log(playRound(playerSelection, getComputerChoice()))
    }
    console.log('Final Score:')
    console.log(`Player: ${score[0]}`)
    console.log(`Computer: ${score[1]}`)
    if(score[0] > score[1]) {
        console.log('You are the winner!')
    } else if(score[1] > score[0]) {
        console.log('The computer wins!')
    } else {
        console.log('You tied the ocmputer!')
    }
}

game()


// const playerSelection = "rock"
// const computerSelection = getComputerChoice()
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection))