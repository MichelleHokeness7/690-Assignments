let userInput = prompt('Enter a language code of choice from the following: "es", "de", "en" or "fr"').toLocaleLowerCase()

if (userInput === "de") {
    console.log('Hello World translated in German is: Hallo Welt')
} else if (userInput === "es") {
    console.log('Hello World translated in Spanish is: Holla Mundo')
} else if (userInput === "en") {
    console.log('Hello World')
} else if (userInput === "fr") {
    console.log('Hello World translated in French is: Bonjour le monde')
} else {
    console.log('Hello World')
}