function isIsogram(str){
    const arr = str.toLowerCase().split('')
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
  
      if(newArr.indexOf(arr[index]) !== -1){
        return false;
      } else {
        newArr.push(arr[index])
      }
    }
    return true;
  }