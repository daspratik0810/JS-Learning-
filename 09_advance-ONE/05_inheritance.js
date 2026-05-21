class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

//Teacher class  gets/inherits all the properties from User class
class Teacher extends User{
    constructor(username, email, password){
        super(username)  //it is very useful, as it will directly take the username to the parent class with "this" and does as it is mentioned in parent class
        this.email= email
        this.password= password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()

const masalachai = new User("masalachai")   //obj from parent class User

//masalachai.addCourse()  //USer class cannot access addCourse, as parent cannot take properties from child
masalachai.logMe()

chai.logMe()   //But child chai has all the properties from parent

console.log(chai instanceof Teacher);  //TRUE : as chai is an instance of child Teacher

