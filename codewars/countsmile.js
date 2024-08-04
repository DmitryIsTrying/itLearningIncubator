function countSmileys(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr[i].split("");
      if (newArr[0] === ":" || newArr[0] === ";") {
        if (
          newArr[1] === "-" ||
          newArr[1] === "~" ||
          newArr[1] === ")" ||
          newArr[1] === "D"
        ) {
          if (newArr[2] === undefined || newArr[2] === ")" || newArr[2] === "D") {
            count++;
          }
        }
      }
    }
    return count;
  }