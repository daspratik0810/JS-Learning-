// STUDY OBJS VERY PROPERLY AS IT IS VERY IMPORtANT IN APIs

//declaring singleton obj using constructor
const tinderUser = new Object ()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// *********complete the video, its very easy *****************

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Pratil",
            lastname: "Das"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)  //here obj1 and obj2 are combined and placed in {}
console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}   //SPREAD OPERATOR:- same as assign, but easier, better and easier
console.log(obj5);

const users = [                         // MULTIPLE OBJECTS INSIDE ARRAYS 
    {
        id: 1,                          // 0 index of array
        email: "h@gmail.com"
    },
    {
        id: 2,                          // 1 index of array
        email: "i@gmail.com"
    },
    {               
        id: 3,                          // 2 index of array
        email: "j@gmail.com"
    }
]

console.log(users[2].email)

console.log(Object.keys(tinderUser));       //returns a new array with keys of tinderUser object, later it can be iterated and make into use
console.log(Object.values(tinderUser));       //returns a new array with values of tinderUser object, later it can be iterated and make into use
  
console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //checks whether the obj has that property or keys





