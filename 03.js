// must be 'doggo' in console

const dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name);
  }
};

// solution: to use bind() method
// const sayName = dog.sayName;
const sayName = dog.sayName.bind(dog);

sayName();
