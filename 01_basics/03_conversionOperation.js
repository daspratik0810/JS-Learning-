let score = 33
console.log(typeof score);  //number

let changeToString = String(score)  //used to chane the datatype to string
 
console.log(typeof changeToString);  // string

let score2 = "33abc"  
console.log(typeof score2);   //string

let changeToNumber = Number(score2)  //changed to num
console.log(typeof changeToNumber);  // number
console.log(changeToNumber);  // actually its not a number, but is NaN
 

// *************************  Operations  ******************************
console.log("*************************  Operations  ******************************");

let value = 3

let negvalue = -value
console.log(negvalue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);  //2 to the power of 3
console.log(2/3);
console.log(2%3);  //remainder 

let str1 = "Hello"
let str2 = " Pratik"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);  //first value is string so it will ocnsider the other also as string and merge it
console.log(1 + "2");  //first value is number so it will consider the other value as string and merge it
console.log("1" + 2 +2);  //first value is string so it will consider all the other value also as string and merge all 
console.log(1 + 2 + "2");  //first two value is number so it will add and it will merge the result with third,ie, string




