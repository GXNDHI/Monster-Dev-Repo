function sum(a,b,fnToCall){
    const SumVal = a+b
    return SumVal
}
function displayResult(data){
    console.log("This is the data" + data)
}
function displayResultPassive(data){
    console.log("Passive data is" + data)
}

const ans = sum(1,2,fnToCall)



//Another Form
function arithCalc(a,b,arithFn){
    const ans = arithFn(a,b)
    return ans
}

function sum(x,y){
    return x+y
}

const finalVal11 = arithCalc(1,2,sum)

//Another form
function arithCalc(a,b,){
    function arithFn(a,b){
        return a+b
    }
}
const finalVal = arithCalc(1,2)