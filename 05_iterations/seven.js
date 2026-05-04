// we have an array "myNumbers", add 10 to each value
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = []

for (let index = 0; index < myNumbers.length; index++) {
    const element = myNumbers[index] + 10;
    newNumbers.push(element)
}
console.log(newNumbers);    //it is a good approach, but not the best, better we use map concept here

//map  

//const newNums = myNumbers.map( (num) => num + 10 )     //it will add 10 to each value

const newNumss = myNumbers           //We can also pass map two times
                .map( (num) => num * 10 )       //first, it will multiply 10 to each value
                .map( (num) => num + 1 )       //secondly, it will add 1 to the value multiplied with 10 previously
console.log(newNumss);

const newNumsss = myNumbers           //We can also pass map two times
                .map( (num) => num * 10 )       //first, it will multiply 10 to each value
                .map( (num) => num + 1 )       //secondly, it will add 1 to the value multiplied with 10 previously
                .filter( (num) => num >=40 )  //it will return only the values that are greater than 40
console.log(newNumsss);


