function solution(string) {
    const str = string.replace(/[A-Z]/g, '1')
    let count;
    const arr = []
   while(count !== -1){
  
  count = str.indexOf('1', count + 1)
  if(count !== -1){
    arr.push(count)
    
  }
   }
  const newStr =  string.split('')
  
  
  for (let i = 0; i < arr.length; i++) {
    newStr.splice(arr[i]+i, 0, ' ')
  }
  
  
   return newStr.join('')
  }