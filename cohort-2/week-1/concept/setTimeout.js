function greet(){
    console.log("Animesh Gandhi")
}
setTimeout(greet,3*1000)


//Must Note :
function sum(a,b){
    return a+b
}
setTimeout(sum(1,2),3*1000)  //wrong way to do


function calc(){
    function sum(a,b){
        return a+b
    }
}
setTimeout(calc,3*1000) //correct way to do