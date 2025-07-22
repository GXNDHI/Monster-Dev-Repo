let arr=[]
let sum = 0
function findsum(arr){
    for(let i =0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum)
}
findsum([1,2,3])