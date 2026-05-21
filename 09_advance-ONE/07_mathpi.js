const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);  //as writable is false, so we cannot change pi value, it will be 3.14...

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);    //it will be still 3.14....

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //it will give all the description of the properties "n ame",ie, (value,writable,enumerable and configurable)

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}