// create function which will make deep copy of object

function deepestObjCopyEver(obj) {
  // 1.
  // check if it is an object and not null value
  if (obj && typeof obj === 'object') {
    // 2.
    // check if it is an array and create a new object or array correspondingly
    const newObj = Array.isArray(obj) ? [] : {};
    // 3.
    // check all inner properties and call deepestObjCopyEver recursively if needed
    for (let key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        newObj[key] = deepestObjCopyEver(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  } else return obj;
}

const testObj = {
  mail: 'name@mail.com',
  id: 543,
  f: function(a) {
    console.log('hello world');
  },
  info: {
    name: 'name',
    age: 18,
    hobby: null,
    nestedArray: [1, 2, [1, 5, 6]]
  }
};

console.log(deepestObjCopyEver(testObj));
