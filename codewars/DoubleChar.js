function doubleChar(str) {
  return str.split("").reduce((acc, e) => {
    return (acc += e + e);
  }, "");
}

console.log(doubleChar("Hello World"));
