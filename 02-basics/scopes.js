// let a = 300
// if(true){

//     let a =10
//     const b = 20
//   console.log("inner",a);
// }

// console.log(a);

function one(){
    const username = "mujeeb"

    function two(){
        const website = "yotube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

//addone(5) will run seemlessly
function addone(num){
    return num+1
}

//addtwo(5) throw error bc of hoisting
const addtwo = function(num){
    return num + 2
}
