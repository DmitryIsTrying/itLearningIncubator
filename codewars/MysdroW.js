function spinWords(string){
    const str = string.split(' ')
     str.forEach((e, i) => {
      if(e.length > 4){
      str.splice(i, 1, e.split('').reverse().join(''))
      }
    });
  
    return str.join(' ')
  }