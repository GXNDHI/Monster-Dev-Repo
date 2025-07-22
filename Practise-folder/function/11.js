function handleSearch(input) {
  console.log("Searching for:", input);
}
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


const debouncedSearch = debounce(handleSearch, 500);

// Simulate user typing
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");  // 👈 Only this one will execute after 500ms
