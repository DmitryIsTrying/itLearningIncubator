var findMissing = function (list) {  
    const count = (list[list.length - 1] - list[0]) / list.length;
    let result = list[0]
    
      for (let index = 0; index < list.length; index++) {
        result += count;
       if(result !== list[index+1]){
        list.splice(index+1, 0, result)
        return list
       }
      }
    }
    console.log(findMissing([1, 3, 5, 9, 11]));