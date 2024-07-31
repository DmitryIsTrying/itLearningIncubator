function duplicateEncode(str){
    let arr = str.toLowerCase().split('')
    let a = 0;
    let newArr = []
  for(i=0; i < arr.length; i++){
     if (str.toLowerCase().split(arr[i]).length - 1 > 1) 
     {
    if(newArr.indexOf(arr[i]) === -1){
  newArr.push(arr[i]);
  a++;
    }
     }  
    }
    return a;
  
  } 
  console.log(duplicateEncode("Indivisibilities"));