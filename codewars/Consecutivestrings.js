function longestConsec(strarr, k) {
    if(strarr.length < k || k < 1){
      return ''
    }
    const arr = []
    const lengthArr = []
  for (let i = 0; i < strarr.length - k+1; i++) {
    arr.push(strarr.slice(i,i+k).join(''));
    lengthArr.push(arr[i].length);
  }
  return arr[lengthArr.indexOf(Math.max(...lengthArr), 0)]
  }