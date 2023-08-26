//Primitive(call by value) :
//7 types : String,Number,Boolean, null,undefined,symbol,BigInt



//refrenceType(non primitive):
//Array,Objects, Functions

//js is dynamic not static language

//&*********************************************************************
//stack(primitive),heap(non - primitive)
// let myYoutubename = "mujeebnazir.com";
// let anothername = myYoutubename;
// anothername = "dotcommujee";

// console.log(myYoutubename)
// console.log(anothername)

let userOne = {
    email:"mujeeb@gamil.com",
    upi: "scdbksc"
}
let userTwo = userOne
userTwo.email ="mujeeb703@gmail.com"

console.log(userOne);
console.log(userTwo);