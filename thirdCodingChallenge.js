'strict method'


// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �


let markHeight = 1.69;
let johnHeight = 1.95;

//Weight

let markWeight = 78;
let johnWeight = 92;

// console.log(markWeight, johnWeight);
// console.log(markHeight, johnHeight);

// 2. Calculate both their BMIs using the formula (you can even implement both
//BMI = mass / height ** 2
// const markBMI = markWeight / (markHeight ** 2); //already declared
// const johnBMI = johnWeight / (johnHeight ** 2); //already declared

// console.log(markBMI, johnBMI);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// const markHigherBMI = (markBMI > johnBMI); //already declared
// console.log(markHigherBMI);

const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    getBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI; //NIIIIIIICEEEEEEE
    }
}
console.log(Mark.getBMI());


const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    getBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI; //NIIIIIIICEEEEEEE
    }
}
console.log(John.getBMI())

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

if (Mark.getBMI() > John.getBMI()) {

    console.log(`${Mark.firstName} ${Mark.lastName}'s BMI of (${Mark.getBMI()}) is higher than ${John.firstName} ${John.lastName}'s BMI of (${John.getBMI()}) `)

} else {

    console.log(`${John.firstName} ${John.lastName}'s BMI of (${John.getBMI()}) is higher than ${Mark.firstName} ${Mark.lastName}'s BMI of (${Mark.getBMI()}) `)

}


//Ternary method because we can. and if we can, we do.
const higherBMI = (Mark.getBMI() > John.getBMI()) ? `${Mark.firstName} ${Mark.lastName}'s BMI of (${Mark.getBMI()}) is higher than ${John.firstName} ${John.lastName}'s BMI of (${John.getBMI()}) ` : `${John.firstName} ${John.lastName}'s BMI of (${John.getBMI()}) is higher than ${Mark.firstName} ${Mark.lastName}'s BMI of (${Mark.getBMI()}) `;

console.log(higherBMI);

//GREAT JOB
