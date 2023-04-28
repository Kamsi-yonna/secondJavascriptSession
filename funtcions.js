'use strict'; //This activates the strict mode. Strict mode is able to find an error and let us know what exactly it is.


//Functions are the fundamental building blocks of building js in the real world. It is a piece of code that you can use. It is similar to a variable, but it holds larger chunks of codes

// function logger() {
//     console.log('my name is Kamsiyonna');
// }

// calling, running or invoking the function
// logger()
// logger()
// logger()

// //We can pass data into a function as well as get data back from a function
// function fruitProccessor(apples, oranges) { //The apps and ors are the parameters
//     // console.log(apples, oranges, oranges)
//     // console.log(apples + oranges + oranges)
//     // console.log(`Mix in the ratio ${apples} ${oranges}`)
//     const juiceMix = `Blended with ${apples} apples and ${oranges} oranges`
//     return juiceMix;

//     //return would be the result of the entire function once  you call it out. However, we won't see this in the console log because it hasnt been called out.
//     //To use the value that was returned, we would have to store it in a variable and then we can call it out.
// }
// // fruitProccessor(3, 5); //These are the arguments
// const appleJuice = fruitProccessor(3, 5); //storing the return value
// // appleJuice will be the value of fruitProccessor and the value of the fruitProccessor is whhatever was called if.e juiceMix
// console.log(appleJuice);

// const appleJuice2 = fruitProccessor(5, 12);
// console.log(appleJuice2);

function fruitProccessor(apples, oranges) {
    console.log(apples, oranges)
    const juiceMix = `Blended with ${apples} apples and ${oranges} oranges`
    return juiceMix;
}

// fruitProccessor(2, 4);
const juiceMix = fruitProccessor(2, 4);
console.log(juiceMix)

const juiceMix2 = fruitProccessor(5, 2);
console.log(juiceMix2)

// 
