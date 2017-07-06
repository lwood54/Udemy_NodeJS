// Standard arrow function, you can have as many lines of code that you want
// inside the {}
var square = (x) => {
    var result = x*x;
    return result;
};
console.log(square(9)); // get 81

// When simplifying the arrow functions, if you have a shorter return and body,
// then you can just put it on the same line and remove the return keyword.
// Simplifying the arrow function:
var squareMe = (x) => x*x;
// the line above basically says:
// set an arrow function that returns the value of x times x and stores it in
// the variable called squareMe
console.log(squareMe(10)); // get 100

// NOTE: If you have only ONE argument, you can leave off the parenthesese.
// If you have no arguments, or more than one argument, this will NOT work.
var add5 = x => x + 5;
console.log(add5(10)); // get 15



/////////////
var user = {
    name: 'Logan',
    sayHi: () => {
        console.log(arguments); // user.sayHi(1,2,3); --> lots of stuff about files, but no 1,2,3
        console.log(`Hi. I'm ${this.name}`); // user.sayHi(); --> Hi. I'm undefined
    },
    sayHiAlt () { // still simplified when making methods in an object, but works with arguments and 'this'
        console.log(arguments); // user.sayHiAlt(1,2,3); --> {'0': 1, '1': 2, '2': 3}   Hi. I'm Logan (on a new line)
        console.log(`Hi. I'm ${this.name}`); // user.sayHiAlt(); --> Hi. I'm Logan
    }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
