class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val.toUpperCase()
    }

    get password(){
     return this._password.toUpperCase()
    }

    set password(value){
    this._password = value.toUpperCase()
    }
}

const mujeeb = new User("mujeeb@123.ai","abc")
console.log(mujeeb.password);
console.log(mujeeb.email);
