function validBraces(braces) {
    const arr = braces.split("");
  let countEven = 0;
  let countOdd= 0;
    const newArr = [];
    while (arr.length > 0) {
      const check = arr.shift();
      if (check === "(" || check === "{" || check === "[") {
        newArr.push(check);
        countEven++;
      }
      if (check === ")") {
        if (newArr.pop() !== "(") {
          return false;
        }
        countOdd++;
      }
      if (check === "}") {
        if (newArr.pop() !== "{") {
          return false;
        }
        countOdd++;
      }
      if (check === "]") {
        if (newArr.pop() !== "[") {
          return false;
        }
        countOdd++;
      }
    }
  if(countOdd !== countEven){
    return false
  }
  return true;
  }