// names in heroes array must NOT be in uppercase
// names in newHeroes array must be in uppercase

const heroes = [
  { name: 'Wolverine', family: 'Marvel', isEvil: false },
  { name: 'Deadpool', family: 'Marvel', isEvil: false },
  { name: 'Magneto', family: 'Marvel', isEvil: true },
  { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
  { name: 'Batman', family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
  { name: 'Legolas', family: 'Tolkien', isEvil: false },
  { name: 'Gandalf', family: 'Tolkien', isEvil: false },
  { name: 'Saruman', family: 'Tolkien', isEvil: true }
];

// solution: to make a copy of each object in the array and then modify

// const newHeroes = heroes.map(h => {
//   h.name = h.name.toUpperCase();
//   return h
// });

const newHeroes = heroes.map(h => {
  const hero = { ...h };
  hero.name = hero.name.toUpperCase();
  return hero;
});

console.log(heroes);
console.log(newHeroes);
