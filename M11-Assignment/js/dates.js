//STEP 1
// const daysInMonth = (year, month) => new Date(year, month, 0).getDate()
// console.log(daysInMonth(2023, 6))
//STEP 2
// const date = new Date('2022-05-09')
// const monthNumber = date.getMonth()
// const monthNames = [
//   'January', 'February', 'March', 'April',
//   'May', 'June', 'July', 'August',
//   'September', 'October', 'November', 'December'
// ]
// const monthName = monthNames[monthNumber]
// console.log(monthName)
//STEP 3
// function isWeekend(date) {
//     const dayOfWeek = date.getDay()
//     if (dayOfWeek === 0 || dayOfWeek === 6) {
//       return true;
//     } else {
//       return false
//     }
//   }
//   const myDate = new Date()
//   console.log((myDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })))
//   console.log(`It is ${isWeekend(myDate)} that it is a weekend.`)
//STEP 4
// const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let d = new Date()
// let dayName = weekday[d.getDay() -1]
// console.log(dayName)
//STEP 5
// const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let d = new Date()
// let dayName = weekday[d.getDay()].slice(0, 1)
// console.log(dayName)