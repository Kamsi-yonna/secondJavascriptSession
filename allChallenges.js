'strict mode'
// //CHALLENGE 1
// let markHeight = 1.69
// let markWeight = 78

// let johnHeight = 1.95
// let johnWeight = 92

// const BMIMark = markWeight / (markHeight ** 2);
// const BMIjohn = johnWeight / (johnHeight ** 2);
// console.log(BMIMark, BMIjohn);

// const higherBMI = BMIMark > BMIjohn;
// console.log(higherBMI)





// //CHALLENGE 2
// if (BMIMark > BMIjohn) {
//     console.log(`Mark's BMI of ${BMIMark} is higher than John's BMI of ${BMIjohn}`)
// } else if (BMIMark < BMIjohn) {
//     console.log(`John's BMI of ${BMIjohn} is higher than Mark's BMI of ${BMIMark}`)
// } else {
//     console.log(`NONE`)
// }



// //CHALLENGE 3
// let averageD = (96 + 108 + 89) / 3;
// let averageK = (88 + 91 + 110) / 3;
// //TEST DATA 2
// averageD = (97 + 112 + 101) / 3;
// averageK = (109 + 95 + 123) / 3;
// //TEST DATA 3
// averageD = (97 + 112 + 101) / 3;
// averageK = (109 + 95 + 106) / 3;

// console.log(averageD, averageK)

// if (averageD > averageK && averageD >= 100) {
//     console.log(`Dolphins win with ${averageD} points. Koalas have ${averageK} points lose`)
// } else if (averageD < averageK && averageK >= 100) {
//     console.log(`Koalas win with ${averageK} points. Dolphins have ${averageD} points lose`)
// } else if (averageD === averageK && averageD >= 100 && averageK >= 100) {
//     console.log(`They both win`)
// }


// //CHALLENGE 4

// // if (billValue >= 50 && billValue <= 300) {
// //     tip = billValue * (15 / 100)
// //     console.log(tip)
// // } else {
// //     tip = billValue * (20 / 100)
// //     console.log(tip)
// // }

// let billValue = 430;

// let tip = billValue >= 50 && billValue <= 300 ? billValue * (15 / 100) : billValue * (20 / 100);
// console.log(tip);
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);

// //TOO EASY


// //CHALLENGE 5
// const calcAverage = function (a, b, c) {
//     arr = (a + b + c) / 3;
//     // console.log(arr)
// }

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(4, 6, 2))

// let averageD = calcAverage(44, 23, 71)
// let averageK = calcAverage(65, 54, 49)

// averageD = calcAverage(85, 54, 41)
// averageK = calcAverage(23, 34, 27)
// console.log(averageD, averageK);

// const winner = function (averageDolph, averageKoals) {
//     if (averageDolph >= 2 * averageKoals) {
//         console.log(`The Dolphins win with ${averageDolph} points while the Koalas have just ${averageKoals} points. `);
//     } else if (averageKoals >= 2 * averageDolph) {
//         console.log(`The Koalas win with ${averageKoals} points while the Dolphins have just ${averageDolph} points. `);
//     } else {
//         console.log(`Nobody wins`)
//     }
// }
// winner(averageD, averageK);

//Hmmm, 8/10






// CHALLENGE 6
// if (billValue >= 50 && billValue <= 300) {
//     tip = billValue * (15 / 100)
//     console.log(tip)
// } else {
//     tip = billValue * (20 / 100)
//     console.log(tip)
// }

// let billValue = 430;
// let tip = billValue >= 50 && billValue <= 300 ? billValue * (15 / 100) : billValue * (20 / 100);

// console.log(tip);
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);

// tip = function (bill) {
//     let tipValue = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
//     return tipValue;
// }
// console.log(tip(100));

// bills = [125, 555, 44];
// tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
// totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
// console.log(bills, tips, totals);





// CHALLENGE 7 //REVIEWWWWW!!!!!
// const Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }

// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }

// Mark.calcBMI();
// John.calcBMI();
// console.log(Mark.BMI, John.BMI)

//Objects





// CHALLENGE 8

calcTip = function (bill) {
    let tipValue = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
    return tipValue;
}

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

//We need to loop over the bills array and then calc the tips and totals
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(bills, tips, totals)
//quite simple

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    // console.log(sum);
    return sum / arr.length
}
console.log(calcAverage([2, 4, 6]));
console.log(calcAverage(totals));
