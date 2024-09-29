function wave(str) {
  str = str.toLowerCase();
  const resultArr = [];
  for (let index = 0; index < str.length; index++) {
    const arr = str.split("");
    if (arr[index] !== " ") {
      arr[index] = arr[index].toUpperCase();
      resultArr.push(arr.join(""));
    }
  }
  return resultArr;
}

console.log(wave("two words"));
