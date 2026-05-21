class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS: ${this.username}`);
    }

    static createID(){      //here static keyword restricts parent and also child to imherit the method createID()
        return `123`
    }
}

const hitesh = new User ("hitesh")

hitesh.logMe()
console.log(hitesh.createID())  // because of static keyword, it failed to take the createMe() function/mentod 

