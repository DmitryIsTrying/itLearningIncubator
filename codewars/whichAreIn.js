function inArray(array1,array2){
    const arr = []
    let search;
    
    
    for (let i = 0; i < array1.length; i++) {
      search = array1[i]
      if(array2.some(e => e.includes(search))){
        arr.push(search)
      }
    }
    
     return arr.sort((a,b) => {
      let count = 0
    while(a.charCodeAt(count) === b.charCodeAt(count)){
      count++
    }
      return a.charCodeAt(count) - b.charCodeAt(count)
     })
    }