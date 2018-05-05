const bar = 42;
const result = typeof typeof bar;
// The value of result is string because the type of bar is "number" and the type of "number" is string
console.log(result);
