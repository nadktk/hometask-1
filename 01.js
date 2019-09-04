// must be 'hey amy' in console

function greet(person) {
  //  solution: to change condition in if statement
  //  if (person == { name: 'amy' }) {
  if (person.name === 'amy') {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}

console.log(greet({ name: 'amy' }));
