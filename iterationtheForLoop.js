'strict mode'

// console.log('This is not a good method of repeating 1');
// console.log('This is not a good method of repeating 2');
// console.log('This is not a good method of repeating 3');
// console.log('This is not a good method of repeating 4');
// console.log('This is not a good method of repeating 5');

//And so we use Loops
//the loop syntax has three parts, first is the initial value of a counter - the start (For (let rep = 1;)
//the second part islogical condition that is evaluated before the code is executed (rep <= 10) if the condition is true, then it w ill keep running, if false, it will stop.
//The third part is the updator which increases the counter by each interation (red = red + 1) which is better written as (rep++)
//Once this is done, then we type out the code which we want repeated.
//So the full syntax written out will loook like this:

for (let rep = 1; rep <= 10; rep++) {
    console.log('This is not a good method of repeating 1');
}

//The string would be printed 10 times and so the logic works. but we would use the counter variable to increase the number in the string. To do that, we replace the number with the current vvalue of the counter. 

for (let rep = 1; rep <= 10; rep++) {
    console.log(`This is not a good method of repeating ${rep}`);
} //WOAH!! 
//the starting rep value (let rep = 1) is the starting point of the string. 


for (let rep = 1; rep < 10; rep++) {
    console.log(`This is not a good method of repeating ${rep}`);
} //WOAH!! 
//the starting rep value (let rep = 1) is the starting point of the string. 