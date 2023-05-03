'strict mode'


// //Looping is from 0, 1,2 - ...
// //looping backwards is from var.length i.e 4,3,2...0
// for (let i = Kamsy.length - 1; i >= 0; i--) {
//     console.log(Kamsy[i])
// }

// //A loop inside a loop - 
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----STARTING EXERCISE ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`----lifting weight  repetition ${rep}`)
//     }
// }



//A WHILE LOOP uses similar components. but we can only specify a condition

//Let the code keep running while the repetitions is less than 10 i.e true
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----STARTING EXERCISE ${exercise}`);
// }

//basically separating this

// let rep = 1;
// while (rep <= 10) {
//     //but we need to manually compute the other two components of the for loop. The increasing and the repetitions
//     console.log(`----The best workout ${rep}`);
//     rep++;
// }
//All a while loop needs is a condition. It doesnt really need an initial counter. It is also versatile.


//SAMPLE

//We want to roll a dice and then stop when we roll a six. So we will create a loop that keeps running till we get a 6.

//The roll of a dice is between 1 and 6

let dice = Math.trunc(Math.random() * 6 + 1)

//This gives us a random number from 0 to 6. 
//adding math.trunc() makes it a whole number.
//adding + 1 makes it random everytime we refresh the page

// console.log(`----The best workout ${dice}`)

//So until the dice value gets to 6, it will keep running

while (dice !== 6) {
    console.log(`You rolled the ${dice}`);

    dice = Math.trunc(Math.random() * 6 + 1)

    if (dice === 6) console.log(`You finally rolled a ${dice}`)
}

//The while loop works without a counter. You don't know how many iterations or how many times the code should run
//For loops for iterations