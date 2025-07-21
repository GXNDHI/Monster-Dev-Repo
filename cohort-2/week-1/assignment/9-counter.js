let count = 30;

// Store the interval ID
let intervalId = setInterval(counter, 500);

function counter() {
    console.log("Counter: " + count);
    count--;
    if (count === 0) {
        clearInterval(intervalId);          // Stop the interval!
        console.log("Counter stopped at: " + count);
        // No need for return here, but you can use it if you want
    }
}
