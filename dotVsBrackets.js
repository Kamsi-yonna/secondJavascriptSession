'strict mode'

const Yonna = {
    firstName: 'Kamsiyonna',
    lastName: 'Etiobi',
    age: 2023 - 1998,
    job: 'Architect',
    guys: ['Jay Trabosky', 'Bobby Brown', 'Stevenolisky']
}

//first way to get a property from an object
console.log(Yonna.firstName);
console.log(Yonna['firstName']);

const nameKey = 'Name';
console.log(Yonna['first' + nameKey]);
console.log(Yonna['last' + nameKey]);

// const interestedIn = prompt('what do yo want to know about kamsiyonna? firstName, lastName, age, job, guys');
// // alert(Yonna[interestedIn]) //kpor
// if (Yonna[interestedIn]) {
//     alert(Yonna[interestedIn])
// } else {
//     alert('Kindly select from the options listed')
// }

//Adding a property to the object
Yonna.location = 'Canada';
Yonna['best fruit'] = 'watermelon';
console.log(Yonna);

console.log(`${Yonna.firstName} has ${Yonna.guys.length} friends and his best friend is ${Yonna.guys[1]}`);