function demo(){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise is resolved");
        }, 2000);
    });
    return p;
}


async function main(){

    let result = await demo();
    console.log(result);
    console.log("Vlaue printed after thread is released");

}
main();
console.log("This will run before the promise is resolved");