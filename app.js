
// Class 10 - JS - Sir Saad - Farhan Ali - 31-dec-2023.
// Quiz related to Javascript on 31-dec-2023. Chapter 1 to 20.

//--------------------------------------------------------------------------------------------------------------------------
/* Math method in JAVASCRIPT */
// Math.round       --> method will round off the value. 
// Math.ceil        --> method will always increment the value by 1.
// Math.floor       --> the value before the 'decimal point' will be displayed, 
// Math.random()

//--------------------------------------------------------------------------------------------------------------------------
/* Heads and Tails Game using math methods */
// var p1 = prompt("Enter the name of player 1 below:");
// var p2 = prompt("Enter the name of player 2 below:");
// var toss = Math.random() * 2;
// var convert = Math.floor(toss);

// if (convert == 0) {
//     alert(p1 + " heads wins.");
// }
// else
//     (convert == 0)
// {
//     alert(p2 + " tails wins.");
// }

//--------------------------------------------------------------------------------------------------------------------------
/* Math methods implementation in Javascript */
var n1 = 45.5;
var n2 = 55.8;
var n3 = 72.1;
var n4 = 48.3;

// console.log(Math.floor(n1));
// console.log(Math.floor(n2));
// console.log(Math.floor(n3));
// console.log(Math.floor(n4));

// console.log(Math.ceil(n1));
// console.log(Math.ceil(n2));
// console.log(Math.ceil(n3));
// console.log(Math.ceil(n4));

// console.log(Math.round(n1));
// console.log(Math.round(n2));
// console.log(Math.round(n3));
// console.log(Math.round(n4));

console.log("----------------------------------------------------------------------------------------");
console.log(Math.random());
console.log(Math.random() * 2);
console.log(Math.random() * 5);
console.log(Math.random() * 13);

console.log("----------------------------------------------------------------------------------------");
console.log(Math.floor(Math.random() * 2));
console.log(Math.floor(Math.random() * 5));
console.log(Math.floor(Math.random() * 13));

