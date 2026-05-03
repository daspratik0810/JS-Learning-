// ["", "", ""]  - Normal Array
// [{}, {}, {}]  - Obj inside Arrç
 
// for of  - it can be applied or used to iterate to anything, whether array, strings, map, etc
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

//********************************************************** 

const greetings = "Hello World"

for (const greet of greetings) {    //it will iterate throughtout "greetings" string
    if (greet == " "){              // it will skip the whitespace 
        continue
    }
    console.log(`Each char is ${greet}`);   
}

// ***************************************

//Maps  - it is an object which holds unique (no duplicate keys are allowed) key-value pairs and remembers the original insertion order of the keys.
const  map = new Map()
map.set("IN" , "India")                     //It remembers that this goes 1st
map.set("USA" , "United State Of America")  //It remembers that this goes 2nd
map.set("FR" , "France")                    //It remembers that this goes 3rd
map.set("DE" , "Deutschland")               //It remembers that this goes 4th

console.log(map);

for (const [key,value] of map) {         //this is the way to iterate the map, by placing the square brackets
    console.log(key, ":-", value);
}