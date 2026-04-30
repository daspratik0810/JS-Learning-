//Object de-structure and JSON API intro 

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Pratik"
}

console.log(course.coursename)  //good method to access the obj

const {price} = course    // Obj de-structure - better way to access obj
console.log(price);         // here, we can simply now access and print using just the keyname

const {courseInstructor: adhyapak} = course 
console.log(adhyapak);           // or simply by giving a short nikname to the original long keyname

// *************** API *************
// JSON :- It is a data format commonly used in web APIs for sending and receiving structured data
/*
  {
    "name" : "Pratik",
    "coursename" : "JS in hindi",
    "price" : "FREE"
}
*/

