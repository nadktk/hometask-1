// real life task

// we have: array of colors, 2 arrays of titles and values
// titles are unique for arr1 and arr2 but may cross between arr1 and arr2
// number of elements in arr1 and arr2 is always 5

// as a result we need to get 2 arrays (ex. finalArr1, finalArr2)
// finalArr1 must include objects { title: 'title', color: 'color' } with titles from arr1
// finalArr2 must include objects { title: 'title', color: 'color' } with titles from arr2
// the order of elements in finalArr1 must be as in arr1 by title
// in finalArr2 elements with the same titles as in finalArr1 must have the same number in array as in finalArr1

// output
// const finalArr1 = [
//   { title: 'title1', color: 'color1' },
//   { title: 'title2', color: 'color2' },
//   { title: 'title3', color: 'color3' },
//   { title: 'title4', color: 'color4' },
//   { title: 'title5', color: 'color5' }
// ];
//
// const finalArr2 = [
//   { title: 'title1', color: 'color1' },
//   { title: 'title8', color: 'color8' },
//   { title: 'title3', color: 'color3' },
//   { title: 'title7', color: 'color7' },
//   { title: 'title6', color: 'color6' }
// ];

// arr1 and arr2 has crossed titles - title1, title3
// so in final arrays title1 and title3 elements must #1 and #3 in array (as in first array)
// other elements positions in finalArr2 (with title6, title7, title8) are not important

const colors = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10'
];

const arr1 = [
  { title: 'title1', value: 'value1' },
  { title: 'title2', value: 'value2' },
  { title: 'title3', value: 'value3' },
  { title: 'title4', value: 'value4' },
  { title: 'title5', value: 'value5' }
];

const arr2 = [
  { title: 'title1', value: 'value1' },
  { title: 'title3', value: 'value3' },
  { title: 'title6', value: 'value6' },
  { title: 'title7', value: 'value7' },
  { title: 'title8', value: 'value8' }
];

// My solution
// function that creates new objects for new arrays according to the title
function createNewItem(title) {
  const colorIndex = Number(title.substring(5));
  return {
    title: title,
    color: colors[colorIndex - 1]
  };
}

// function that accepts array1 and creates finalArray1
function createFinalArray1(array) {
  return array.map(el => createNewItem(el.title));
}

// function that accepts array1 and array2 and creates finalArray2
function createFinalArray2(array1, array2) {
  const arrLength = array2.arrLength;
  const resultArray = new Array(arrLength);
  const titles1 = array1.map(el => el.title);
  const titles2 = array2.map(el => el.title);
  const notCrossedTitles = [];

  // check if the title is present in both source arrays and if it's true then put it in the right place in the result array
  // otherwise push it to the temporary storage(notCrossedTitles)
  for (let i = 0; i < arrLength; i++) {
    const ind1 = titles1.indexOf(titles2[i]);
    if (ind1 !== -1) resultArray[ind1] = createNewItem(titles2[i]);
    else notCrossedTitles.push(titles2[i]);
  }

  // fill in all empty values in the result array with the rest of titles stored in notCrossedTitles
  for (let i = 0; i < arrLength; i++) {
    if (!resultArray[i]) {
      const nextTitle = notCrossedTitles.pop();
      resultArray[i] = createNewItem(nextTitle);
    }
  }

  return resultArray;
}

// Output results:
console.log('const finalArr1 = ', createFinalArray1(arr1));
console.log('const finalArr2 = ', createFinalArray2(arr1, arr2));
