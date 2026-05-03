// while loop  
let index = 0 

while (index <=10){
    console.log(`Value of index is ${index}`);
    index = index + 2 
}

let myArr = ["flash","Batman","Superman"] 
let arr = 0

while (arr < myArr.length){
    console.log(myArr[arr]);
    arr = arr+1
}

// do while loop  - pehle kaam phir condition check, not used too much in production

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10)
