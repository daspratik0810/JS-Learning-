//After ES6 

//WAY 1 : BY USING FUNCTIONS AND PROTOTYPES(own/userdefined methods)
function Users(username, email, password){  //creating a fucntion
    this.username = username;
    this.email = email;
    this.password = password
}

Users.prototype.encryptPassword = function(){   //defining the own/userdefined prototype in the unctions
    return `${this.password}abc`
}
Users.prototype.changeUsername = function(){    //defining the own/userdefined prototype in the functions
    return `${this.username.toUpperCase()}`
}


const tea = new Users("tea", "tea@gmail.com", "123")    //creating a new User

console.log(tea.encryptPassword()); //calling the own/userdefined prototype 
console.log(tea.changeUsername());  //calling the own/userdefined prototype 

// WAY 2 : USING CLASSES (SAME THING AS ABOVE BUT VERY SIMPLE)
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }  

    encryptPassword(){
        return `${this.password}abc`
    }

    capitilizeAll(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@fb.com", "chai123")

console.log(chai.encryptPassword());  //it will ecrypt thr passoword (will add abc to chai123)

console.log(chai.capitilizeAll()); //it will capitilize the username (to CHAI)

