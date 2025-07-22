function fact(n){
    let fac=1
    if(n === 0 || n === 1){
        return 1;
    } else {
        for(let i = 1 ;i<=n;i++){
            fac = fac*i;
        }
    }
    return fac
}
let res = fact(5)
console.log(res)