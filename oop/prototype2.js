// let myName = "mujeeb    "
// console.log(myName.trueLength);
// goal: to make a new method in string to cal truelength


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spideman:"sling",
    getSpiderPower: function(){
        console.log(`spidy pwer is ${this.spideman}`);
    }

}
Object.prototype.mujeeb = function(){
    console.log((`mujeeb is present here`));
}
Array.prototype.isIthere = function(){
    console.log(`Array mai be hai!`);
}
//heroPower.mujeeb()
//myHeros.mujeeb()
//myHeros.isIthere()
//heroPower.isIthere()//this wont work!

let another = "chaiaurcode   "
String.prototype.trueLength = function(){
    console.log(`${this.trim().length}`) 
}
another.trueLength()