const userEmail = "pratik@gmail.com"  

if(userEmail){      // here any string received is true, and empty string is false
    console.log("Got the user email");
}else{
    console.log("Did not get the email ");    
}

// FALSY VALUE
//false, 0, -0, BigInt (0n), "", null, undefined, NaN

// TRUTHY VALUE
// "0", 'false', " ", [], {}, function(){}


//How to check if the array is empty or not ? 
const arr = [5,7,9]

if(arr.length == 0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}

//How to check if the obj is empty or not ? 
const obj = {name:"Pratik"}

if(Object.keys(obj).length == 0){
    console.log("Obj is empty");
}else{
    console.log("Obj is not empty");
}

// Nullish Coalescing Operator (??) : null undefined

//Turniary Operator
const iceTeaPrice = 60
//condtion        ? true : false
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");
 

 