//STEP 1
// let movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985']
// console.log(movies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Clash of the Titans'
// movies[1] = 'Resident Evil'
// movies[2] = 'French Kiss'
// movies[3] = 'Aliens'
// movies[4] = 'Legend-1985'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Clash of the Titans'
// movies[1] = 'Resident Evil'
// movies[2] = 'French Kiss'
// movies[3] = 'Aliens'
// movies[4] = 'Legend-1985'

// movies.splice(2, 0, 'Die Hard')
// console.log(movies.length)
// console.log(movies)

//STEP 4
// let movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985']
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// for (let titles in movies) {
//     console.log(movies[titles])
// }

//STEP 6
// let movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// for (let i of movies) {
//     console.log(i)
// }

//STEP 7
// const movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// for (const titles of movies) {
//     console.log(titles)
// }
// console.log(movies.sort())

//STEP 8
// const movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// const leastFavMovies = ['Torque', 'Junior', 'Cyborg']

// console.log('Movies I like:\n\n')
//  for (const items of movies) {
//         console.log(`${items}`)
// }
// console.log('...\n\n')
// console.log('Movies I regret watching:\n\n')
// for (const items2 of leastFavMovies) {
//     console.log(`${items2}`)
// }
// console.log('...\n\n')
   
//STEP 9
// const movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// const leastFavMovies = ['Torque', 'Junior', 'Cyborg']
// const arrayPlus2 = movies.concat(leastFavMovies)
// for (let i = 0; i < arrayPlus2.length; i++) {
//     console.log(arrayPlus2[i])
// }
// console.log(arrayPlus2.reverse())

//STEP 10
// const movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// const leastFavMovies = ['Torque', 'Junior', 'Cyborg']
// const arrayPlus2 = movies.concat(leastFavMovies)
// for (let i = 0; i < arrayPlus2.length; i++) {
//     console.log(arrayPlus2[i])
// }
// console.log(arrayPlus2.slice(-1))

//STEP 11
// const movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// const leastFavMovies = ['Torque', 'Junior', 'Cyborg']
// const arrayPlus2 = movies.concat(leastFavMovies)
// for (let i = 0; i < arrayPlus2.length; i++) {
//     console.log(arrayPlus2[i])
// }
// console.log(arrayPlus2.slice(0, 1))

//STEP 12
// const movies = ['Clash of the Titans', 'Resident Evil', 'French Kiss', 'Aliens', 'Legend-1985', 'Die Hard', 'The Pelican Brief']
// const leastFavMovies = ['Torque', 'Junior', 'Cyborg']
// const arrayPlus2 = movies.concat(leastFavMovies)
// for (let i = 0; i < arrayPlus2.length; i++) {
//     console.log(arrayPlus2[i])
// }
// console.log(arrayPlus2.indexOf('Torque'))
// console.log(arrayPlus2.indexOf('Junior'))
// console.log(arrayPlus2.indexOf('Cyborg'))

// arrayPlus2.splice(7, 8, 'Shawshank Redemption', 'Chitty-Chitty-Bang-Bang', 'I am Sam')
// console.log(arrayPlus2)

//STEP 13
// let movies = [['Legend-1985', 1], ['Clash of the Titans', 2], ['Resident Evil', 3], ['Aliens', 4], ['French Kiss', 5]]
// for (let i = 0; i < movies.length; i++) {
//     let titles = movies.filter((item) => {
//         return typeof item === 'string'
//     })
//     console.log(movies[i][0])
    
// }

//STEP 14
// let employees = ['Marg', 'Cyndi', 'George', 'Venus']
// let showEmployee = function (employee) {
//     console.log('Employees:\n\n')
//     employees.forEach((employee) => {
//         console.log(`${employee}`)
//     });
    
// }
// showEmployee()

//STEP 15
// const myArray = [58, '', 'abcd', true, null, false, 0]
// let array2 = myArray.filter((e) => {
//     return e
// })
// console.log(array2)

//STEP 16
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let randomItem = myArray[Math.floor(Math.random() * myArray.length)]
// console.log(randomItem)

//STEP 17
// const myArray = [4, 2, 3, 6, 5, 7, 1, 8, 0, 9]
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }
// let newArray = myArray.sort()
// console.log('')
// console.log(newArray.splice(-1))