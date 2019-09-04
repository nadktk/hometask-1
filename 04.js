// must be 'fido says woof' in console

function Dog(name) {
  this.name = name;
}

// solution: add method to Dog.prototype instead of Dog function
// Dog.bark = function () {
Dog.prototype.bark = function() {
  console.log(this.name + ' says woof');
};

const fido = new Dog('fido');

fido.bark();
