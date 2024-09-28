function solution(string) {
  const arr = string.split("");
  const newArr = arr.map((e) => {
    console.log("e.toUpperCase()", e.toUpperCase());
    console.log("e", e);

    if (e === e.toUpperCase()) {
      return ` ${e}`;
    }
    return e;
  });
  return newArr.join("");
}

console.log(solution("camelCasingFaceHello"));
