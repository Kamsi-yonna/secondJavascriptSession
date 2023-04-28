// function fruitProccessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juiceMix = `Blended with ${apples} apples and ${oranges} oranges`
//     return juiceMix;
// }

// // fruitProccessor(2, 4);
// const juiceMix = fruitProccessor(2, 4);
// console.log(juiceMix)

//We need to make a fruit juice by blending and mixing fruits.For this to happen, we would need two main processes: 
//1. We need to grind the fruits in smaller pieces 
//2. We need to blend and mix the fruits.
//We have already called a function earlier that will mix the fruits fro us but before that we would need to blend them. 
//So we need to create a function which grinds the fruits first and then put them in the mix.


//This is the function for the grinder
function fruitGrinder(fruit) {
    return fruit * 4;
} //We will now join it to the fruitProccessor

function fruitProccessor(apples, oranges) {
    const applePieces = fruitGrinder(apples);
    const orangePieces = fruitGrinder(oranges);

    const juiceMix = `Blended with ${apples} apples grinded into ${applePieces} pieces and ${oranges} oranges grinded into ${orangePieces} pieces.`
    return juiceMix;
}

// const juiceMix = fruitProccessor(2, 4);
console.log(fruitProccessor(2, 4))