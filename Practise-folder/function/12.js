function memoizedIsPrime() {
  const cache = {};

  return function isPrime(n) {
    if (n in cache) {
      console.log("Cached result:", n);
      return cache[n];
    }

    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        cache[n] = false;
        return false;
      }
    }

    cache[n] = true;
    return true;
  };
}

const isPrime = memoizedIsPrime();

console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(17)); // cached
