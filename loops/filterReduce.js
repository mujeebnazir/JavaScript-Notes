// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//     return item
// })

// console.log(values)
//cant return anything by using forEach

const nums = [1,2,3,4,5,6,7,8]

//const newNums = nums.filter((num)=>(num>4))

//const newNums = nums.map((num)=>(num+10))

//chaining

const newNums = nums
.map((num)=>(num*10)) //[10,20,30,40,...]
.map((num)=> (num+10))//[20,30,40,50,..]
.filter((num)=> (num>40))

console.log(newNums);