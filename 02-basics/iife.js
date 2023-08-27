//immidiate invoked function expression(IIFE)
(function chai(){
    //named iife
    console.log(`DB connected`);
})();//explicit ;

//()()
((name)=>{
    console.log(`DB connected ${name}`);
})("mujeeb");