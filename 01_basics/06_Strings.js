const name = "Pratik"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const  gameName = new String("Valorant")  //here strings acts like an obj. It is another method to define strings, but it is better as it unlocks many methods and major functionalities with it

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());  //it does not affect the original value, as it goes to heap memory 
console.log(gameName.charAt(1));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4)  //it makes a new substring from 0 to 3 index and omits the 4th index
console.log(newString);  

const anotherString = gameName.slice(0,4)  //it is same like substring
console.log(anotherString);

const oneMoreString = gameName.slice(-7,3)  //it is same like substring, but can also be given neg number unlike substring, it will start from the end and in reverse 
console.log(oneMoreString);   // here -7 → length (8)   - 7 = 1 so the range is from 1 to 3.

const newStringOne = "   Pratik   "
console.log(newStringOne);
console.log(newStringOne.trim());  //it will delete all the whitespaces

const url = "https://pratik.com/webzev"

console.log(url.replace("z", "D"));  //it wont change the original url as it is defined in const and not in let
console.log(url.includes("webz ev")); 

const gameCharName = "Valorant - Jett - Sage - Fade - Phenux"

console.log(gameCharName.split("-"));  //it will split entire string based on "-" and put in arrray form.We can also split based on each character by "" and by each whitespace " "






 









