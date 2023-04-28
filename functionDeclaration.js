'use strict'

// //THIS IS A FUNCTION DECLARATION
// function calcAge1(birthYear) {//The parameter is like the placeholder in the function
//     const age1 = 2023 - birthYear;
//     return age1;
// }
// calcAge1(1998) //the argument is the actual value we use to fill in the parameter.
// const age1 = calcAge1(1998);
// console.log(age1)

//THIS IS A DECLARATION
function calcAge1(birthYear) {
    const age1 = 2023 - birthYear
    return age1;
}
const age1 = calcAge1(1998); //You can call a function declaration before you define it
console.log(age1);

//THIS IS AN EXPRESSION
const calcAge2 = function (birthYear) {
    const age2 = 2023 - birthYear
    return age2;
}
const age2 = calcAge2(1998);// You cant place this before the function
console.log(age2);


//An expression produces a value
//DIFFERENCE BETWEEN EXPRESSIONS AND DECLARATIONS
//We can call function declarations before they are defined in the code. We call them first then declare


//When coding, it is often times better to use function expression because it makes you define all the functions first before calling