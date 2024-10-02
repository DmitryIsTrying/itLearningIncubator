const array = [
  { name: "Dima" },
  { name: "Dima" },
  { name: "Dima" },
  { name: "Dima" },
];

// const copyArray = array.map((element) => ({ ...element }));
const copyArray = [...array];

array[2].name = "Anton";

console.log(array[2]);
console.log(copyArray[2]);
