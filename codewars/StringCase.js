function toWeirdCase(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((el, i) => (i % 2 > 0 ? el : el.toUpperCase()))
        .join("")
    )
    .join(" ");
}
console.log(toWeirdCase("Weird string case"));
