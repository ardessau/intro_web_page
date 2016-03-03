// alert("Hello");

var message = "Hello";  // string variable

var x = 27;    // x is a number (numeric) variable
var temps = [14, 32, 36, 40];    // temps is an array avairable
var person = {        // person variable is an object
    first: "Nate",     // "Nate" is a string variable type
    last: "White",
    age: 23,
    address: {        // address variable is an object within the person object
        city: "Fort Collins",
        zip:  80521
    },
};



// simple logic statement (if statement in that if the condition is true, the Hello statement will run
// if statement is a block structure of code

if(person.age >= 21 && person.age < 65) {
    greeting(person);
} else if (person.age >=65) {
    console.console.log("Discount Time!");
} else {
    console.log("You must leave! Come back when you are 21 or older.");
}

/*
  Function: greeting

    Creates a simple greeting for a user

  Arguments:

    name: String

*/

function greeting(person) {
    console.log("Hello " + person.first + " " + person.last);
}

console.log(message);
console.log(temps[2]);
console.log(person.address.city);

// switch statements are an alternative to if then else statements

switch(age) {
    case 21:
        console.log("I'm 21");
        break;
    case 24:
        console.log("I'm 24");
        break;
    case 30:
        console.log("I'm 30");
        break;
    default:
        console.log("I'm " + age);
        break;
}

// while loops run while condition is true
var x = 0;

while(x < 10) {
    console.log(x++);
}

var lookup = {};

['abdegopq4690ADOPQ' , 'B8'].forEach(function(group, idx) {
    group.split("").forEach(function(char){
        lookup[char] = idx + 1;
    })
})


function countHoles(str) { // str = "hello"
    var holeCount = 0;
    var letters = str.split(""); // ["h", "e", "l", "l", "o"];

    letters.forEach(function(char){
        if (lookup[char]) {
            holeCount += lookup[char];
        }
    });

    return holeCount;
}
