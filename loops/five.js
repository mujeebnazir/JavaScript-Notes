//for each

const coding = ["js", "ruby","java","python","cpp"]

// coding.forEach( function(item){ 
//     console.log(item);
// })
// coding.forEach((item)=>(console.log(item)))

//coding.forEach((item,index,arr)=> (console.log(item,index,arr)))
const myCode = [
    {lang:"javascript",
ext: "js"},
    {lang:"c++",
ext: "cpp"},
    {lang:"java",
ext: "java"},

]

myCode.forEach((item)=>(console.log(item.lang)))