// must be '0, 1, 2, 3' in console

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

// solution #1: replace var with let:
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

// solution #2: to use closure
for (let i = 0; i < 4; i++) {
  (n => setTimeout(() => console.log(n), 0))(i);
}
