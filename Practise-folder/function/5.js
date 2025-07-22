function fn1(fn2){
    return fn2
}
function sum(a,b){
    return a+b
}
let res = fn1(sum(1,2))
console.log(res)