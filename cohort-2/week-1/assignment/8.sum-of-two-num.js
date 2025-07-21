function sum(a, b) {
  return a + b;
}

function displayPretty(result) {
  console.log("The sum of the two numbers is: " + result);
}

function displayPassive(result) {
  console.log("The sum was calculated as " + result + ".");
}

// Example usage:
let result = sum(12, 8);
displayPretty(result);      // Output: The sum of the two numbers is: 20
displayPassive(result);     // Output: The sum was calculated as 20.
