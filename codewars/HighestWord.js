function high(x) {

    const arr = x.split(" ");
    const nowArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      const word = arr[i];
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
  
        count += char.charCodeAt(0) - 96;
      }
  
      nowArr.push(count);
    }
  
    const check = Math.max(...nowArr);
    return x.split(' ')[nowArr.indexOf(check, 0)]
  }