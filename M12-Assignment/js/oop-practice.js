// STEP 1
// function Cat() {}
// const Dog = function() {}
// STEP 2
// function Cat() {}
// const Dog = function () {} 

// const cat1 = new Cat()
// const dog1 = new Dog()
// STEP 3
// function Animal() {
//     console.log('The animal has been created.')
// }
// const animal1 = new Animal()
// STEP 4
// function Animal(color) {
//     console.log(color)
// }
// const animal1 = new Animal('The black cat animal has been created.')
// STEP 5
// function Animal(type, breed, color, height, Anlength) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.Anlength = Anlength;
//     console.log(`The ${this.color}, ${this.breed} ${this.type} stands ${this.height} inches high and ${this.Anlength} inches long.`)
// }
// const animal1 = new Animal('cat', 'Manx', 'black', '11', '20')
// STEP 6
// function Animal(type, breed, color, height, Anlength) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.Anlength = Anlength
// }
// const animal1 = new Animal('cat', 'Manx', 'black', '11', '20')
// for (let properties in animal1) {
//     if (animal1.hasOwnProperty(properties)) {
//       console.log(properties + ': ' + animal1[properties]);
//     }
//   }
// STEP 7
// function Animal(type, breed, color, height, Anlength) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.Anlength = Anlength
// }
// Animal.prototype.speak = function () {
//     if (this.type === 'dog') {
//         return 'The ' + this.color + ' dog is barking!';
//     } else {
//         return 'The ' + this.color + ' cat is meowing!';
//     }
// }
// const cat = new Animal('cat', 'Manx', 'black', '11', '20')
// const dog = new Animal('dog', 'Manx', 'black', '11', '20')
// console.log(cat.speak())
// console.log(dog.speak())
// STEP 8
// function Animal(type, breed, color, height, Anlength) {
//     let type = type
//     let breed = breed
//     let color = color
//     let height = height
//     let Anlength = Anlength

//     let checkType = function () {
//         if (type === 'cat') {
//             return 'cat'
//         } else {
//             return 'dog'
//         }
//     }
// }

// Animal.speak = function () {
//     return checkType()
// }
// const pet = new Animal('cat', 'Manx', 'black', '11', '20')
// console.log('The ' + pet.speak() + ' has made a noise.')

// STEP 9
// class Words {
//     constructor(word) {
//         this._word = word;
//         this._paragraph = [
//             'Eventually',
//             'all',
//             'things',
//             'fall',
//             'into',
//             'place',
//             '.',
//             'Until',
//             'then',
//             ',',
//             'laugh',
//             ' at',
//             'the',
//             'confusion',
//             ',',
//             'live',
//             'for',
//             'the',
//             'moments',
//             ',',
//             'and',
//             'know',
//             'everything',
//             'happens',
//             'for',
//             'a',
//             'reason',
//             '.'                        
//         ]
//     }
//     findWords = function(word) {
//         if (this._paragraph === 'for') {
//             for (let i = 0; i < this._paragraph.length; i++) {
//                 alert(`This word was found ${this._paragraph[i]} times`)
//             }
//         }
//     }
// }
// const wordFor = new Words('for')
// wordFor.findWords()