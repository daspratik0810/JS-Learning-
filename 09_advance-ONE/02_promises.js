// Promises are the object which represents an eventual completion or failure of an asynchronous operation
//Essentially, a Promise is a placeholder for a value that is not yet available but will be in the future.

//FIRST : Promise should be created/declared. It has a callbackfunction, which has a resolve (if the response is correct) and reject (if the response is rejected)

const promiseOne = new Promise(function(resolve, reject){
    /*Do async tasks : 
    
    1)DB calls(database call, database connect, data inject or receive)
    
    2) cryptography
    3) network
    */

    setTimeout(function(mess){
        console.log("Async task is completed");
        resolve()  // It will connect with .then (while consuming the promise)
    },1000)
})

//SECOND : Promise after cretion, should also be consumed

//.then() has a direct connection with "resolve parameter"
promiseOne.then(function(){
    console.log("Promise Consumed successfully !!");
})  

//*********************************************************** MORE ON PROMISES; DIIFERENT WAYS TO CREATE */

new Promise(function(resolve, reject){   
 
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {       //if no error
            resolve({username: "Pratik", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {              //trigers when promise resolves
    console.log(user);
    return user.username       //it returns the "user.username" to the next .then()
})
.then((username) => {       
    console.log(username);
})
.catch(function(error){        //it is connected directly with reject parameter. It triggers when promise rejects/connection rejects.
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))       //It will always execute, just like default case


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS, went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){

    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

//******But better than tryCatch method, we can use fetch().then().catch() */
fetch('https://api.github.com/users/daspratik0810')
.then((response) => {           //It will execute when the fetch has response
    return response.json()      //It will return response.json() value to the next .then()
})
.then((value) => {              //It will have the "value", returned by the above .then()
    console.log(value);
    
})
.catch((error) => {             //It will execute when the fetch has error
    console.log(error);
})