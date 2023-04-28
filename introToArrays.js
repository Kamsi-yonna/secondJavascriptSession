'strict mode'
//  Data Structure -  A data structure is a data structure where we can store vales. An array is a type of data structure

const color1 = 'red';
const color2 = 'green';
const color3 = 'blue';

const colors = ['orange', 'purple', 'cyan'];
console.log(colors)

const years = new Array(2001, 2002, 2003, 2004);
//This is also a function. the array is a function and the parenthesis contains its parameters....kind of

//How we can access values within the arrays
console.log(colors[1], years[3])

//To get the number of elements in the array
console.log(colors.length, years.length)

//To get the last element in any array
//Statements can't go into the brackets, just expressions
console.log(colors[colors.length - 1])

//To add/replace elements in the array
colors[1] = 'slme green';
console.log(colors)

//for const- only primitive values are immutable, but an array is not a primitive value and so it can be changed. However, we cannot replace the entire array. it is ILLEGAL

//An array can also hold values of different types
const hobbies = ['Cooking', 'Reading', 'Coding'];
const friends = ['Jay Trabosky', 'Bobby Brown', 'Stevenolisky'];

const Kamsy = ["Kamsiyonna", "Etiobi", 2023 - 1998, 'eba and hot egusi soup', hobbies, friends]
console.log(Kamsy)

//EXERCISE
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const year = [2001, 2002, 2003, 2004];
// console.log(calcAge(year[2]))

const age1 = calcAge(year[0])
const age2 = calcAge(year[1])
const age3 = calcAge(year[2])
console.log(age1, age2, age3)

// we can also place function calls in an array becasue they are expressions that produce a value
const allAges = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2])]
console.log(allAges)

