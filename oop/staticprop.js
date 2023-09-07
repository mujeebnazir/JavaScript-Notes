//static- make methods private
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`usernmae: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const mujeeb = new User("mujeeb")
//console.log(mujeeb.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email =email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId())