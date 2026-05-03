//for each :- best for iterating the arrays
// syntax :- arr.forEach(callbackfunction) 
// a callback function is a regular fucntion but without name
// funciton colours(){}  - normal function 
// funciton (){}  - callback function 
const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){   // using forEach + normal function
     console.log(val);
 } )

 coding.forEach( (item) => {     // same but using forEach + arraw function
     console.log(item);
 } )

 function printMe(item){        // a function is declared first
     console.log(item);
 }

 coding.forEach(printMe)        // then that declared function's refrence is given to the forEach

 coding.forEach( (item, index, arr)=> {     // forEach can also store elements, index and entire array
     console.log(item, index, arr);
 } )

const myCoding = [          //this is obj inside array
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);     //it can easily be accessed and iterated using dot operator
} )
 