function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Test cases
console.log(sumAll(1, 2, 3));        // Output: 6
console.log(sumAll(5, 10, 15, 20));  // Output: 50
