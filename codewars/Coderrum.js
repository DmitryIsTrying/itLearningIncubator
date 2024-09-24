function getCount(str) {
  let arr = ["a", "e", "i", "o", "u"];
  let res = [];
  const obj = {};
  //   for ( let i = 0; i < str.length; i++){
  // if( str[i])
  //   }
  // }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (str[i] === arr[j]) {
        res.push(str[i]);
      }
    }
  }
  return res.join("").length;
}
