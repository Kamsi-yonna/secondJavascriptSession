'strict mode'

// const hobbies = ['Cooking', 'Reading', 'Coding'];
// const friends = ['Jay Trabosky', 'Bobby Brown', 'Stevenolisky'];
// const Kamsy = [
//     "Kamsiyonna",
//     "Etiobi",
//     2023 - 1998,
//     'eba and hot egusi soup',
//     hobbies,
//     friends,
// ];

// const types = [];

// // console.log(Kamsy)

// // //To loop through arrays
// // for (let i = 0; i < Kamsy.length; i++) {
// //     console.log(Kamsy[i])
// // }

// //For cases like this, we use 'i' as a general syntax I guess. for the limit of the loop, we compute the code to find the length of the array. and so the array should run until it reaches whatever length the array has. This is efficient because we can eventually add elements to the arrays. 

// // //To loop through arrays andget the type of the variable
// // for (let i = 0; i < Kamsy.length; i++) {
// //     console.log(Kamsy[i], typeof Kamsy[i])
// // }

// //To create a new array based on the values of the new variables.
// for (let i = 0; i < Kamsy.length; i++) {
//     console.log(Kamsy[i],);

//     // //filling the types array
//     // types[i] = typeof Kamsy[i];

//     //Another Method of adding would be to use the push method
//     // types.push(typeof Kamsy[i])
//     // console.log(types)
// }
// // // types[i] = typeof Kamsy[i]

// const years = [2000, 2001, 2002, 2003, 2004];
// const age = [] //we will loop through the arrays and then fill up the ages arrays

// for (let i = 0; i < years.length; i++) {
//     // const age = 2023 - age[i]; THIS IS WRONGGGGG
//     age.push(2023 - years[i]);
// }
// console.log(age) //Putting this within the array gives a different answer

//THE CONTINUE AND BREAK STATEMENT FOR LOOPS
//Continue is to exit the current iteration of the loop
//break is used to terminate the whole loop

const hobbies = ['Cooking', 'Reading', 'Coding'];
const friends = ['Jay Trabosky', 'Bobby Brown', 'Stevenolisky'];
const Kamsy = [
    "Kamsiyonna",
    "Etiobi",
    2023 - 1998,
    'eba and hot egusi soup',
    hobbies,
    friends,
];
// now we want to print only strings. We will use continue so it doesnt terminate the entire string
console.log('---ONLY STRINGS ---')
for (let i = 0; i < Kamsy.length; i++) {
    if (typeof Kamsy[i] !== 'string') continue;
    //if the type of data in the array 'Kamsy' is not a string then continue

    console.log(Kamsy[i], typeof Kamsy[i]);
}


// Now we want to terminate the code as soon as a number is found.
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < Kamsy.length; i++) {
    if (typeof Kamsy[i] === 'number') break;
    //if it reaches a number, then the code will be terminated.

    console.log(Kamsy[i], typeof Kamsy[i]);
}
