const accountId = 12334
let accountEmail = "mujeeb@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //hosakta hai but you should'nt do this way!

//accountId = 2 //TypeError: Assignment to constant variable.
accountEmail = "asx@gmail.com"
accountPassword = "13124"
accountCity = "mumbai"

console.log(accountId);

/*
1.prefer not to use var 
because of issue in block scope and functional scope
2.until variable dosnt have any value it will be read as undefined
*/
console.table([accountId,accountEmail,accountPassword,accountCity])