//will never Change, is constant 
const accountId = 8948948
//will change, highly frequently used
let accountEmail = "pratik@gmail.com"
//will change, but not used frequently due to issue of block and functional scope, hence only "let" is used 
var accountPassword = "12345"
accountCity = "Pune"

//accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "1235487"
accountCity = "Bangalore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
