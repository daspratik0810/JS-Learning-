// There are two methods to declare an Object 
 // 1) Constructor/Singleton :- the objs that are made with constructor
 Object.create
 // 2) Literals :- the objs that are made with literals

 const mySym = Symbol("key1");

 const JsUser = {       //this is an object having multiple datatypes
    name : "Pratik",
    "full name" : "Pratik Das",
    age : 24,
    [mySym] : "mykey1",    //after using [] here, if we print the entire JsUser, we can see the key is a symbol and not a noaml string
    location : "Friedberg",
    email : "daspratik500@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
 }  

 console.log(JsUser.name);      // method to acess the key written normally 
 console.log(JsUser["full name"]);  //method to acess the key written in inverted commas(ie as a string)
 console.log(JsUser[mySym]);      //method to acess the key as a symbol,  

 JsUser.email = "pratik200das@gmail.com"   //to change/overwrite the values from the obj
// Object.freeze(JsUser)  // to locks the entire Obj so the changes cant be made in values of the obj
JsUser.email = "pratik200das@apple.com"

console.log(JsUser);

// ***************** functions in obj ****************

JsUser.greeting = function(){  //it adds a new key "greeting" with value as a function
console.log("Hello JS user");
}

JsUser.greetingTwo = function(){   //it adds a new key "greetingTwo" with value as a function
console.log(`Hello JS user, ${this.name}`)  //string interpulation with this keyword which specifies the keys present in that specific obj
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 
  

