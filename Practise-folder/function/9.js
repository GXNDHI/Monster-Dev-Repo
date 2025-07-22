function createObject(key, value) {
  return {
    [key]: value
  };
}

// Call the function
const result = createObject("username", "animesh123");

console.log(result); // { username: 'animesh123' }
