//How data are kept in memory and can be accessed, datatypes are categorised into 2 types:-

//  Primitive   (they are call by value - A copy of the actual value is passed to the function. Any changes made inside the function do not affect the original variable.)
// 7 Types : String, Number, boolean, null, undefined, Symbol, BigInt

//  Non-Primitive  (they are call by reference - A reference (memory address) of the original data is passed. Changes made inside the function do affect the original data.)
//  Array, Objects, Functions

/* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:
*/

// Array :-
const heros = ["naagraj","Shaktimaan","Doga"]
// Objects :-
let myObj = {
    name : "Pratik",
    age : 24,
}
// Functions :-
const myFunction = function() {
    console.log("Hello, I am a function");
}