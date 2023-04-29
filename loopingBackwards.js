'strict mode'

//we will loop through backwards and also create a loop in a loop
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

//Looping is from 0, 1,2 - ...
//looping backwards is from var.length i.e 4,3,2...0
for (let i = Kamsy.length - 1; i >= 0; i--) {
    console.log(Kamsy[i])
}