// fix the function isBig to make check of numbers

// solution: use strict comparison instead of type converting (if I understand the problem correctly)
function isBig(thing) {
  //  if (thing == 0 || thing == 1 || thing == 2) {
  if (thing === 0 || thing === 1 || thing === 2) {
    return false;
  }
  return true;
}

console.log(isBig(1));
console.log(isBig([2]));
console.log(isBig([3]));
