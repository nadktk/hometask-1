// create function which will return the sum of two numbers

// The most difficult task because it's hard to define what to do here beside adding numbers.
// My solution is to add type checking so that function would return NaN for any arguments except of numbers.
// The only alowed exception will be undefined value for the second parameter. In this case, we will consider it is 0 value.
function sum(a, b) {
  if (b === undefined) b = 0;
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  return a + b;
}

console.log(sum(2, 2)); // 4
console.log(sum(10)); // 10
console.log(sum(3, [5])); // NaN
console.log(sum('15', 7)); // NaN
console.log(sum(null, 5)); // NaN
console.log(sum(2, false)); // NaN
