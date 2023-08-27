const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,cv)=> {
    console.log(acc, cv);
    return acc+cv},0)
console.log(myTotal);