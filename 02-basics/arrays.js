// const myArr = [1,2,34,true,"mujeeb",55,5]
// const myheros = ["shakitaman", "naahfe"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);

//array methods

// myArr2.push(7)
// myArr2.pop()
// 

// myArr2.unshift(9)
// myArr2.shift()

// console.log(myArr2.includes(3));
// console.log(myArr2.indexOf(3));

// const newStr2 = myArr2.join()
// console.log(myArr2)
// console.log(newStr2);

//slice, splice

// console.log("A ",myArr2);
// const myn1 = myArr2.slice(1,3)
// console.log(myn1)
// console.log("B ",myArr2)

// console.log("A ",myArr2);
// const myn1 = myArr2.splice(1,3)
// console.log(myn1)
// console.log("B ",myArr2)

// const arr = [1,2,3,4,5,6,7,8]
// const heros = ["ironman","thor","spiderman"]
// const dc = ["superman","batman"]

//heros.push(dc)
// const allHeros = heros.concat(dc)
// console.log(allHeros)

//spred
// const allHeros = [...heros,...dc]
// console.log(allHeros);

console.log(Array.isArray("mujeeb"));
console.log(Array.from("mujeeb"));
console.log(Array.from({name:"mujeeb"}));//intresting

let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))