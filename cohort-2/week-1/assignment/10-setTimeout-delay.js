const scheduledDelay = 2000; // intended delay in milliseconds

const start = performance.now(); // high-resolution time stamp

setTimeout(() => {
  const end = performance.now();
  const actualDelay = end - start;
  console.log(`Requested delay: ${scheduledDelay} ms`);
  console.log(`Actual delay: ${actualDelay} ms`);
  console.log(`Difference: ${actualDelay - scheduledDelay} ms`);
}, scheduledDelay);
