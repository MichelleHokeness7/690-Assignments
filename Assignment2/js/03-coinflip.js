let coinFlip = Math.round(Math.random())
let choice = prompt('Enter "Heads" or "Tails"').toLocaleLowerCase()

if (choice === 'heads') {
    if (coinFlip === 0) {
        alert('The flip was heads and you chose heads... You win!')
    } else if (coinFlip === 1) {
        alert('The flip was tails and you chose heads... You lose.')
    }

} else if (choice === 'tails') {
    if (coinFlip === 0) {
        alert('The flip was heads but you chose tails... You lose.')
    } else if (coinFlip === 1) {
        alert('The flip was tails and you chose tails... You win!')
    }

} else {
    alert('Please type "heads" or "tails" for valid entry')

}
