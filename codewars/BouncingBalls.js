function bouncingBall(h,  bounce,  window) {
    if(h > 0 && 0 < bounce && 1 > bounce && window < h){
   let count = 0;
   while(h > window){
   h *= bounce
   count++
   }
   return count * 2 - 1
    }
    return -1
   }