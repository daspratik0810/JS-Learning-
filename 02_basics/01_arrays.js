// arrays

const myArr = [0, 1, 2, 3, 4, 5]  //array is an object where data can be a mix of any datatype
//changes made will be reflected in the original array as it is non-primitive and goes to heap memory
//arrays has meny methods so that we can manupulate the array according to our need
console.log(myArr[0]); 

const anotherArr = new Array(1, 2, 3, 4, 5)  //better way of defining
console.log(anotherArr[1]);

// Array Methods

myArr.push(6)       //adds value to last of an array.
console.log(myArr);

myArr.pop()         //removes last value of an array.
console.log(myArr);

myArr.unshift(9)   // push 9 to the 0th index
console.log(myArr);

myArr.shift()   // removes the 0th index
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()   //the type of newArr is changed from arrays(obj) to string keeping the value same
console.log(myArr);
console.log(newArr);

console.log(typeof myArr);
console.log(typeof newArr);

// slice and splice

//slice - does not includes last index and does not affect the original array
// splice - does include last index and does affect the original array

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  //it slices the array taking the first index, ie, 1 and omiting the second index, ie, 3
console.log(myn1);
console.log(myArr);     //does not affect or manipulates the original array


console.log("B", myArr);

const myn2 = myArr.splice(1,3)  //it slices the array taking the first index, ie, 1 and also taking the second index, ie, 3
console.log(myn2);
console.log(myArr);   //does affect or manipulates the original array









