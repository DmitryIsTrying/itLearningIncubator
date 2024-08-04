function findMissingLetter(arr){
    let count = arr[0].charCodeAt(0);
    let i = 0;
    while(i < arr.length){
      if(count === arr[i].charCodeAt(0)){
        count++;
        i++;
      } else {
        return String.fromCharCode(count);
      }
    }
    return false;
  }