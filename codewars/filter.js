function arrayDiff(a, b) {
    return a.filter((e)=>{
      return b.indexOf(e) === -1;
    })
  }