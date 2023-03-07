// CREATE FUNCTION TO PLAY GAME
function playGame() {
    // CREATE VARIABLES
    

    do {
        let randomNum = Math.floor(Math.random() * 3 + 1)
        if (randomNum === 1) {
            randomNum = 'r'
        } else if (randomNum === 2) {
            randomNum = 'p'
        } else {
            randomNum = 's'
        }
        
        let userChoice = prompt('Enter \'r\' for rock, \'p\' for paper or \'s\' for scissors').toLocaleLowerCase()
        if (userChoice === 'r' && randomNum === 'p' ) {
            alert('Paper covers rock, you lose.')
        } else if (userChoice === 'r' && randomNum === 's') {
            alert('Rock destroys scissors, you win!')
        } else if (userChoice === 'r' && randomNum === 'r') {
            alert('You and I chose rock, it\'s a tie.')
        } else if (userChoice === 'p' && randomNum === 'r') {
            alert('Paper covers rock, you win!')
        } else if (userChoice === 'p' && randomNum === 's') {
            alert('Scissors cut paper, you lose.')
        } else if (userChoice === 'p' && randomNum === 'p') {
            alert('You and I chose paper, it\'s a tie.')
        } else if (userChoice === 's' && randomNum === 'p') {
            alert('Scissors cut paper, you win!')
        } else if (userChoice === 's' && randomNum === 'r') {
            alert('Rock destroys scissors, you lose.')
        } else if (userChoice === 's' && randomNum === 's') {
            alert('You and I chose sciccors, it\'s a tie.')
        } else if (userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's' ) {
            alert('You must enter r, p, or s.')
        }
        return
        
    } while (true);
  
}

function init() {
    alert('Welcome to the Rock, Paper, Scissors Game!')
    alert('Here we go!')
    // ask user if they want to play again
    let playAgain = 'y'

    do {
        playGame()
        playAgain = prompt('Do you want to play again?', 'y')
    } while (playAgain === 'y');
    alert('Thank you for playing the game.')
}
init()
