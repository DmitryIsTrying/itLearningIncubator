function moveZeros(arr) {
    let nonZeroArr = arr.filter(e => e !== 0);
    let zeroCount = arr.length - nonZeroArr.length;
    return nonZeroArr.concat(Array(zeroCount).fill(0));
  }