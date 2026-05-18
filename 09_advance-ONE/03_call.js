function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
   //this.username = username //this will also work, but let us play more
    SetUsername.call(this.username)
    this.email = email
    this.password = password
}

const chai = new createUser("chaii", "chai@fb.com", "123")
console.log(chai);