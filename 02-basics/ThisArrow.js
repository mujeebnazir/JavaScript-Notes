const user = {
    username: "mujeeb",
    price :666,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)//in node we will see {} but in browserr this refers to window object

 function chai(){
     let name = "mujeeb"
//     console.log(this.name);//undefined we can use it like this
 }
 //chai()

const chai2 = function(){
    let name = "mujeeb"
    //console.log(this.name)//undefined
}
//chai2()

const chai3 = () => {
    let name = "mujeeb"
    //console.log(this.name)
}
//chai3()

const addtwo = (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,5));

const addtwo2 = (num1,num2)=> num1+num2
const addtwo3 = (num1,num2)=> (num1+num2)//implicit return
const addtwo5 = (num1,num2)=> ({username:"mujeeb"})


