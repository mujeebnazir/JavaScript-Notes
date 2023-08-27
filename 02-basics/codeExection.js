/*
two execution context
1.global execution context(this)
2.function execution context
3.eval execution context

    -->memory cretion phase
     ->execution phase

steps to run a program in js:
1.Global exection (this)
2.memory phase
    val1 ->undefined
    val2 ->undefined
    addnum -> definition
    result1 ->undefined
    result2 ->undefined

3.Execution phase
      val1 <-10
      val2 <- 4
      addnum -> 1.new variable environment  //gets deleted after work is done
                2.execution thread          //
*/

let val1 = 10
let val2 = 4
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(2,4)