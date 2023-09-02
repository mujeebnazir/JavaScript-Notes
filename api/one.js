//promise is a object
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //db calls
    //cryptography
    //network call
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },1000)
})

promiseOne.then(
    function(){
        console.log("promise consumed");
    }
)


new Promise(function(resolve ,reject){
    setTimeout(function (){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise 3 complete");
    },1000)
    resolve({username: "Chai",email: "example@chai.com"})
}).then(function(user){
console.log(user);
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"mujeeb",password:"12344"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
 console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> (console.log("the promise is either resolved or rejected")))


const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function comsumFive(){
 try {
    const response = await promiseFive
      console.log(response);
 } catch (error) {
    console.log(error);
 }

}

comsumFive()


// async function getAlluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//          console.log(data);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// getAlluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);})
.catch((error)=>console.log(error))