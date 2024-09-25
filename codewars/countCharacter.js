function count(string) {
  return string.split("").reduce((acc, e) => {
    if (!acc[e]) {
      acc[e] = 0;
    }
    acc[e] += 1;
    return acc;
  }, {});
}

console.log(count("aba"));
