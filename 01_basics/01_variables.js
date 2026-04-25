//will never Change, is constant 
const accountId = 146999
//will change, highly frequently used
let accountEmail = "pratik@gmail.com"
//will change, but not used frequently due to issue of block and functional scope, hence only "let" is used 
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "212124"
accountCity = "Bangalore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
