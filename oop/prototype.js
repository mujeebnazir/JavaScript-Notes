function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

//everthing in js is object
//function also refrence to object

function createUser(username,score){
     this.username = username;
     this.score = score;
}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.pritMe = function(){
    console.log(`score is ${this.score}`);  
}

const chai =new createUser("chai",25)
//the 'new' keyword combines base object with prototypes and then adds methods then returns the new object 
const tea = createUser("tea", 250)

chai.pritMe()