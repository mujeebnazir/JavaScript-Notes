//singleton
//Object.create
//const tinderUser = new Object()//singleton object
// const tinderUser = {} //nonsingleton
// tinderUser.id= "123"
// tinderUser.name = "Mujeeb"
// tinderUser.isLogged = false

// const regularUser = {
//     email : "mujeeb@gmail.com",
//     fullname: {
//         userFullName:{
//             firstname:"mujeeb",
//             lastname:"nazir"
//         }
//     }
// }

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));


// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

//const obj3 = {...obj1,...obj2}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)


//object literals
// const mySym = Symbol("key1")

// const jsUser = {
//     name:"Mujeeb",
//     [mySym]:"mykey1",
//     age:18,
//     location:"Kashmir",
//     isLoggedIn:false
// }

// console.log(jsUser.location);
// console.log(jsUser["location"]);
// console.log(jsUser[mySym]);

// jsUser.location = "Mumbai"
// console.log(jsUser.location);
// Object.freeze(jsUser)
// jsUser.location = "Jammu"
// console.log(jsUser.location);

// jsUser.greeting = function(){
//     console.log("Hello js user!")
// }

// jsUser.greetingtwo = function(){
//     console.log(`Hello js user, ${this.name}!`)
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

//******************* */

// const course = {
//     coursename: "Js in hindi",
//     price : "999",
//     courseInstructor:"mujeeb"
// }
// const {courseInstructor} = course
// console.log(courseInstructor);

//json

// {
//     "name": "mujeeb",
//     "age": "16"
// }

