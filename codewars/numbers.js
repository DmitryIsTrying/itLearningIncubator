function divisibleBy(numbers, divisor){
    const arr = [];
  for (i = 0; i < numbers.length; i++){
    numbers[i] % divisor ? true: arr.push(numbers[i]);
  }
  return arr
  }
  console.log(divisibleBy([1,2,3,4,5,6], 2));