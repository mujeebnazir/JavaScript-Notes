const user = {
    //this is Object literal
    username: "Mujeeb",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        console.log(`${this.username}`);
        console.log(this);
    }

}
//console.log(this); //{} in browser gives window object

// const promiseOne = new Promise()
// const date = new Date()
//new is a constructor

function User(username, logginCount,isLoggedIn){
    this.username = username;
    this.loginCount = logginCount;
    this.isLoggedIn = isLoggedIn;

   // return this, tab be return hoga khudse hee
}

const userOne = new User("mujeeb",12 ,true)
console.log(userOne);