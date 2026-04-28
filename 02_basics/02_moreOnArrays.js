const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "Flash", "Batman"]

//marvel_heros.push(dc_heros)  //here all dcheros elements will go in a single index of marvel heros
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const all_heros = marvel_heros.concat(dc_heros)  //it is a better way to merge array, which wil do it correctly, but only works with 2 arrays
//console.log(all_heros);

const all_final_heros = [...marvel_heros, ...dc_heros]  //SPREAD OPERATOR :- Best way to merge two or more arrays
console.log(all_final_heros);

const another_array = [1, [2, 3, 4], 5, [6, 7, [8, 9]] ] 

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Pratik"));   //says if the data/input is an array or not
console.log(Array.from("Pratik"));  //makes arrays from the given input

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //can make array from multiple inputs, it is better thatn using array.from()


