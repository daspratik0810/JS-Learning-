function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
   //this.username = username //this will also work, but let us play more
   //SetUsername (username) //it wont work, because it does not call SetUsername, instead only gives the refrence and it is a limitation of JS
    SetUsername.call(this, username) //It will work now, by using call() method.It will call the SetUsername function
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);