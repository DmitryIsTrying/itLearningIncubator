function solution(str, ending){
   return ending.length > 0 ? str.slice(-ending.length) === ending : true;
}
