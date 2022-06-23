// 01 - Object

// const cat = {
//   name: "Garfield",
//   age: "44",
//   isCute: true,
// }

// console.log(cat)
// console.log(cat.age)

// if (cat.isCute) {
//   console.log("So cute!")
// }


// 02 - Combine

// const cat2 = {
//   name: "Felix",
//   age: "103",
//   isCute: false,
// }

// const cats = [cat, cat2]

// console.log(cats)

// console.log(cat["age"])
// console.log(cat.age)
// console.log(cat2["isCute"])
// console.log(cat2.isCute)

// 03 - Even
// const num = 13

// const checkIfEven = () => {
//   if (num % 2 === 0) {
//     console.log("even")
//   } else {
//     console.log("odd")
//   }
//   return;
// }

// checkIfEven()

//04 - Compare


// const compare = (x, y) => {
//   if (x>y){
//     console.log(`${x} is bigger than ${y}`)
//   } else if (x<y) {
//     console.log(`${y} is bigger than ${x}`)
//   } else {
//     console.log("both are the same")
//   }
// }
// compare(337, 69)


// 05 Add Up

// const addUp = (num) => {
//   var newNumber = 0
//   for (i=0; i<=num; i++) {
//   newNumber = newNumber + i}
// return newNumber; 
// }

// console.log(addUp(12))


// 06 Time

const format = (num) => {
  var Hours = Math.trunc(num/3600)
  var restHours = (num % 3600);
  var restMinutes = (restHours % 60)

  console.log('i${Hours} : ${restHours} : ${restMinutes}')
}

console.log(format(2457))


// console.log("tests:")
// console.log(Object.keys(cat))
// console.log(Object.values(cat))
// console.log(Object.entries(cat))
// console.log(Object.keys(cat2))
// console.log(Object.values(cat2))
// console.log(Object.entries(cat2))
// console.log(Object.keys(cats))
// console.log(Object.values(cats))
// console.log(Object.entries(cats))
// if (Object.keys(cat) = "age") {
//   console.log(Object.values(cat))
// }

// console.log(cats2)
// const cats2 = [Object.values(cat), Object.values(cat2), Object.entries(cat), Object.entries(cat2)]
