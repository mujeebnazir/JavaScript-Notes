/*
this-
in browser 'this' refers to window object
in node env 'this' refers to empty object{}

call-
holds refrence of function that you called inside a function
*/

function setUsername(username){
    //complex DB calls
    this.username = username
}
function createUser(username,email,password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai)