function invert(array) {
  return array.map((e) => {
    return e > 0 ? -e : Math.abs(e);
  });
}

console.log(invert([1, -2, 3, -4, 5]));
