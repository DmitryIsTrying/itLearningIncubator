function longest(s1, s2) {
  const str = s1 + s2;
  const newArray = [...new Set(str)];
  return newArray.sort(), join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
