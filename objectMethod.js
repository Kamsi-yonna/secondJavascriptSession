'strict mode'

// const Yonna = {
//     firstName: 'Kamsiyonna',
//     lastName: 'Etiobi',
//     age: 2023 - 1998,
//     // birthYear: 1998,
//     job: 'Architect',
//     guys: ['Jay Trabosky', 'Bobby Brown', 'Stevenolisky'],

//     // calcAge: function (birthYear) {
//     //     return 2023 - birthYear;
//     // }

//     calcAge: function (birthYear) {
//         // console.log(this);
//         return 2023 - birthYear;
//     }
// };
// //a function can also be a property
// console.log(Yonna.calcAge(2021))


const Yonna = {
    firstName: 'Kamsiyonna',
    lastName: 'Etiobi',
    age: 2023 - 1998,
    birthYear: 1998,
    job: 'Architect',
    guys: ['Jay Trabosky', 'Bobby Brown', 'Stevenolisky'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job}. ${this.hasDriversLicense ? 'He has his Drivers License' : 'He has no license'}`
    }
}

//a function can also be a property
console.log(Yonna.calcAge())
console.log(Yonna.getSummary())

//Arrays are also objects