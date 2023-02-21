let userInput = prompt('Enter a language code of choice from the following: "es", "de", "en" or "fr"').toLocaleLowerCase()

if (userInput === "de") {
    document.write('Hello World translated in German is: Hallo Welt')
} else if (userInput === "es") {
    document.write('Hello World translated in Spanish is: Holla Mundo')
} else if (userInput === "en") {
    document.write('Hello World')
} else if (userInput === "fr") {
    document.write('Hello World translated in French is: Bonjour le monde')
} else {
    document.write('Hello World')
}