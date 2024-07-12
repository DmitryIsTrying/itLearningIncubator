// Решаю задачи на js
// Tusk 1 
function xor(a, b) {
    if (( a == false && b == true) || ( a == true && b == false)) {
      return true;
    } else {
      return false;
    }
  }

  // Tusk 2
  function getAge(inputString){
    var age = inputString.charAt(0);
    return parseInt(age, 10);
  }

  // Tusk 3
  function solution(a, b){
    if (a.length > b.length) {
      return b + a + b;
    } else {
      return a + b + a;
    }
  }
  console.log(solution("1", "22"));
  console.log(solution("22", "1"));

  