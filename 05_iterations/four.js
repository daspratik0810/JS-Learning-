// for of :- As we saw in three.js, It is used to iterate though map, but not for obj as obj are not iterable by default. It can only be used to iterate in arrays, strings, sets and map
// for in :- hence we use this to iterate through plain obj making it iterable
// we can also convert obj to array using Object.keys(), which can be later iterated

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
} 

for (const key in myObject) {
    //console.log(key);  // for getting keys of obj
    //console.log(myObject[key]);  // for getting values of obj
    console.log(`The key is ${key} and its value is ${myObject[key]}`);
}

const myArr = ["H", "E", "L", "L", "O"]

for (const key in myArr) {          //here "for in" gives the index of the array
   //console.log(key);        // it gives the index number of the array element
   console.log(myArr[key]);   // hence now this gives the array element
}