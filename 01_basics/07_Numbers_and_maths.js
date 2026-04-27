const score = 400
console.log(score);  //not a good way to define constant


const balance = new Number(100)  //input will be strictly numbers only
console.log(balance);

console.log(balance.toString().length);  //so that more features and methods will be unlocked compared to Numbers
console.log(balance.toFixed(2));  //gives an adequate decimal number, very useful for the E-Commerce websites

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));  //to give commas

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//  ***************************  Maths  **************************

console.log("***************************  Maths  **************************");

console.log(Math.abs(-4));  //absolute value, to change neg to pos
console.log(Math.round(4.6));  //round-off
console.log(Math.ceil(4.01));  //gives upper value of the integer even if its little bit greater
console.log(Math.floor(3.99));  //gives lower value of the integer even if its little bit lower

console.log(Math.min(4, 3, 6, 8));  //gives minimum value out of the list
console.log(Math.max(4, 3, 6, 8));  //gives maximum value out of the list

console.log(Math.random());  //always give unique number between 0 and 1
console.log((Math.random() * 10) + 1);  //it will always come minimum 1 or more

const min = 10
const max = 20

Math.random()


 











