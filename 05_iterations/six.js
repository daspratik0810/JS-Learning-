const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
} )
console.log(values);        //In forEach does not return any value, it just prints the items from the array

// * filter *
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => {
    return num > 4
})  //In filters, whoever satisfies the condition,are returned 
console.log(newNums);  //the returned value can be printed later on

//const newNums = myNums.filter( (num) => num > 4)  // or write this way, without block scope so that return keyword can be omited 

// data from DataBase -- BEST practise for learning to build project

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk)=> {return bk.genre==="Science" } )
userBooks = books.filter( (bk)=> bk.genre ==="History" && bk.publish >= 1990 )  //it will override the userBooks value
console.log(userBooks);

