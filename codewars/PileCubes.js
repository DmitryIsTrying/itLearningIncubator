function findNb(m) {
    let count = 0;
    let n = 0;
    while(count < m){
      n++;
      count += n**3;
      if(count === m){
        return n
      };
    };
    return - 1
  }