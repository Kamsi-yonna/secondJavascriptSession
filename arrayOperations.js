'strict mode'

const friends = ['Jay Trabosky', 'Bobby Brown', 'Stevenolisky'];

//Using methods to add a value to the end of the array
// friends.push('pasky d don');
console.log(friends)
//Push is a function and so we can also return values. The returned value can be captured 
const newLength = friends.push('pasky d don');
console.log(newLength)

//We can also add values to the beginning of an array
friends.unshift('Don Von');
console.log(friends)

//We can also remove the last element
friends.pop(); //We can do this more than once to keep removing
console.log(friends)

//We can also remove the first element
friends.shift();
console.log(friends)

//We can find out where an element is positioned in the array
console.log(friends.indexOf('Bobby Brown'))
//We can also use 'includes' which is an ES6 method. Its tells us if the element is in the array or not
if (friends.includes('Bobby Brown')) {
    console.log('You have a friend called Bobby')
}













