// for loop

//PRINTING ARRAYS
const arr = [0,1,2,3,4,5,6,7,8,9]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);    
}

//PRINTING TABLES
for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop is ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        let result = i * j 
//        console.log(`${i} * ${j} = ${result}`);        
    }
}

// Break  - to break and come out of the loop completely  

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Fav number 5 is received, breaking the loop ....");
        break;
    }
    console.log(`Value of i is ${index}`);
}

// continue  -  to ignore/break the current iteration only and conitnue from the next iteration
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Fav number 5 is received, continuing from the next iteration....");
        continue;
    }
    console.log(`Value of i is ${index}`);
}