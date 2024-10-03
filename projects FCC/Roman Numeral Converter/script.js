// const lesson = (x = { ...client }) => (x.age += 1);
// // Почему меняется
const x = 3;

function foo() {
  x = 10;
  return;
  function x() {}
}

foo();
console.log(x);

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(
  filter([1, 2, 3, 4, 5, 6, 7], (element, index) => element % 2 === 0)
);
