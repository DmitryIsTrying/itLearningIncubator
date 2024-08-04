function sortArray(arr) {
    let oddNumbers = arr.filter((num) => num % 2 !== 0);
  
    oddNumbers.sort((a, b) => a - b);
  
    return arr.map((num) => (num % 2 === 0 ? num : oddNumbers.shift()));
  }