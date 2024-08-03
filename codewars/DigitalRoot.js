function digitalRoot(n) {
    let arr = n.toString().split("").map(Number);
  
    while (arr.length > 1) {
      const resultArr = [];
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        result += arr[i];
      }
      resultArr.push(result);
      arr = resultArr.join("").split("").map(Number);
    }
    return +arr.join('')
  }