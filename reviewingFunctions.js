'strict mode'

function ageCalc(birthYear) {
    // const age = 2023 - birthYear;
    // return age;
    return 2023 - birthYear;
}
// const age = ageCalc(1998);
// console.log(age)

function positiveA(retirement) {
    return -1 * retirement;
}

const yearsTillRetirement = function (birthYear, firstName) {
    // const age = 2023 - birthYear;
    const age = ageCalc(birthYear);
    const retirement = 65 - age; //general retirement age
    // return retirement
    // const positiveV = (-1 * retirement); //IT WORKED 😱🤯
    const positiveV = positiveA(retirement); //IT WORKED 😱🤯

    if (retirement > 0) {
        return `Hello, king ${firstName}. You are currently ${age} years and you have ${retirement} years until retirement.`
    } else {
        return `dear, ${firstName} you are ${age} years old and you should've retired ${positiveV} years ago`
    }
    // return `Hello, king ${firstName}. You are currently ${age} years and you have ${retirement} years until retirement.`
}
console.log(yearsTillRetirement(1998, "Kamsiyonna"));
console.log(yearsTillRetirement(1920, "Mike"));

const red = (-1 * -1);
console.log(red)