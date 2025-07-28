function createCallCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(`Function has been called ${count} times.`);
    return count;
  };
}

const counter = createCallCounter();

counter(); // Function has been called 1 times.
counter(); // Function has been called 2 times.
counter(); // Function has been called 3 times.
counter(); // Function has been called 4 times.