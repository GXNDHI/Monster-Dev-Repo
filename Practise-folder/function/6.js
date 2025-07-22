function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Test cases
greet("Animesh"); // Output: Hello, Animesh!
greet();           // Output: Hello, Guest!