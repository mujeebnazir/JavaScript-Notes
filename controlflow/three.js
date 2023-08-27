//falsy value
//false, 0 ,-0,BigInt 0n,"",null,undefined,NaN

//truly value
//"0",'false'," ",[],{},function(){},

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("obj is empty");
}


//
false == 0 //true
false == ''//true
0 ==''//true