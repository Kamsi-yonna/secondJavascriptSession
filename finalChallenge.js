'strict mode'

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK �


// //An array containing the bills value

// const calcTip = function (billValue) {
//     if (billValue >= 50) {
//         return 0.15 * billValue;
//     } else {
//         return 0.2 * billValue;
//     }
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// console.log(tips)
// console.log(bills.length)//To find how many iterations we need.

// // calculate and return the tips of the first bill down to the final bill
// //Basic syntax would be:
// //first component would be the startig tip - tips = calcTip(bills[0]). 
// //The second component would be the tip for the final bill and to get that, we use bill.length to get the length of the array. then tips++ to continue the code.

// // for (let tips = calcTip(bills[1]); tips <= bills.length; tips++) {
// //     console.log(`tip ${tips}`)
// // }

// for (let i = 0; i < tips.length; i++) {
//     console.log(tips[i])
// }



// // const totals = [bills[0] + tips[0],];



// // const bills = [125, 555, 44]
// // // console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3]), calcTip(bills[4])]
// // // console.log(tips)

// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// // console.log(bills, tips, totals)

// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`This is not a good method of repeating ${rep}`);
// // }


// const calcTip = function (billValue) {
//     if (billValue >= 50) {
//         return 0.15 * billValue;
//     } else if (billValue <= 300) {
//         return 0.2 * billValue;
//     }
// }
const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
// console.log(tips);
// console.log(bills.length);

//We want to fill in the tips using the push method
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(tip + bills[i]);
}
// console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    // console.log(sum)
    return sum / arr.length;
}
// console.log(calcAverage([2, 3, 7]))
console.log(calcAverage(totals))
console.log(calcAverage(tips))