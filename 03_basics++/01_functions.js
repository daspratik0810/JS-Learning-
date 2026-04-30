function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("K");
}
sayMyName()


function addTwoNumbers(number1,number2){        //function definition with 2 parameters
    console.log(number1 + number2);             //here this function will only print the out, as it is console, but wont return anything
}
addTwoNumbers(6,5)                  //function call with 2 arguments


function addThreeNumbers(number1,number2,number3){        //function definition with 3 parameters
    let result = number1 + number2 + number3;            
    return result                                            //here this function will return result, and hence some values will be stored in the result variable
}
const result = addThreeNumbers(6,5,4)                  //function call with 3 arguments, here the value can be stored in result as the value was returned by the function
console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){                     //we can also use "!username" in the if condition
        console.log("Please enter an username")
        return
    }
    return `${username} just logged in !!`
}
console.log(loginUserMessage());



function calculateCartPrice(...num1){       // REST PARAMETER :- It takes all the arguments passed in the calculateCartPrice and wraps it into an array, which can be later iterated to calculate sum or to do any other thing
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));



const user = {
    name : "Pratik",
    price: 399
}
function handleObject(anyObject){       //here obj are passed as an argument in the function
console.log(`Username is ${anyObject.name} and the price is ${anyObject.price} `);
}
handleObject(user)


const fruits = ["Apple", "Banana", "Pear", "Strawberry"]    //here array is passed as an argument in the function
function handleArray(anyArray) {
    console.log(`My fav fruit is ${fruits[0]} and aftergym fruit is ${fruits[1]} and my gf fruit is  ${fruits[3]}`);
}
handleArray(fruits)




 

