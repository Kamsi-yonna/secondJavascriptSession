'strict mode'

// Writing an expression function to calculate the average

// const averageCalculator = function (a, b, c) {
//     const average = (a + b + c) / 3;
//     return average;
// }
// const average = averageCalculator(1, 2, 3)
// console.log(average)

// // making it an arrow function
// const averageCalculator = (a, b, c) => (a + b + c) / 3;

// const averageD = averageCalculator(1, 2, 3)
// const averageK = averageCalculator(4, 5, 6)
// console.log(`Dolphins have ${averageD} points and Kualas have ${averageK} points.`)

// // Now we put in the real test data values
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


const averageCalculator = (a, b, c) => (a + b + c) / 3;

const averageD = averageCalculator(44, 23, 71);
const averageK = averageCalculator(65, 54, 49);

// TEST 2
const averageD2 = averageCalculator(85, 54, 41);
const averageK2 = averageCalculator(23, 34, 27);

console.log(`Dolphins have ${averageD} points and Koalas have ${averageK} points.`)

//to get the winner. We create a function
const checkWinner = function (averageD, averageK) {

    if (averageD >= 2 * averageK) {
        return `Dolphins win 🏆 with ${averageD} points`
    } else if (averageK >= 2 * averageD) {
        return `Koalas win with 🏆  ${averageK} points `
    } else {
        return `Speechless because nobody wins`
    }
}

console.log(checkWinner(averageD, averageK))
console.log(checkWinner(averageD2, averageK2))



