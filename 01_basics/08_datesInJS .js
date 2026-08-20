//Dates 

let myDate = new Date()
console.log(myDate);  //gives current date and time, but not in good useable form
console.log(myDate.toString());  //gives current date and time,and in good useable form
console.log(myDate.toDateString());  //gives same in another format, day with date 
console.log(myDate.toLocaleString()); //gives same in another format, date with time

console.log(typeof myDate);  //obj 

let myCreatedDate = new Date(2021, 5, 21)  //created a date starting with "0 - Jan" to "11-Dec"
console.log(myCreatedDate.toDateString());  //gives the output of date created

let myCreatedDate2 = new Date(2021, 5, 21, 19, 0)  //created a date with time
console.log(myCreatedDate2.toLocaleString());  //so to preview both date and time

let myCreatedDate3 = new Date("2023-01-14")  //created a date starting "01 - Jan" and "12-Dec"
console.log(myCreatedDate3.toLocaleString());

// little more concepts are there in timestamps ,please do it accordingly






