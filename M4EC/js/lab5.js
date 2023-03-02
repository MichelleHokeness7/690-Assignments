// VARIABLES
let miles        // miles we have driven
let gallons      // gallons our car holds
let mpg          // mpg
let again = 'y'  // do you want to play again?

do {
    miles = parseFloat(prompt('Enter the number of miles driven'))
    gallons = parseFloat(prompt('How many gallons does your car hold?'))
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons
        console.log(`Your vehicle gets ${mpg.toFixed(2)} miles per gallon.`)
    } else {
        alert('One or both of your enteries are invalid. Enter numbers greater than 0')
    }
    again = prompt('Do you want to run this application again? y/n ', 'y')
    while (again !== 'y' && again !== 'n') {
        again = prompt('Do you want to run this application again? y/n ', 'y')
    }
} while (again === 'y')
console.log('Application has ended')

