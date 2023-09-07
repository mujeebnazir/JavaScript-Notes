class User{
    constructor(username){
        this.username = username
    }
    logMe(){
    console.log(`USERNAME is ${this.username}`);
}
}

class Teacher extends User {
constructor (username,email,password){
    super(username)
    this.email = email;
    this.password = password;
}
addCourse(){
    console.log(`A new course was added by ${this.username}`);
}

}
const chai = new  Teacher("chai", "chai@gb.com","123")
chai.logMe()
chai.addCourse()

const tea = new User("mujeeb")
tea.logMe()
console.log(tea instanceof User);
console.log(Teacher instanceof User);