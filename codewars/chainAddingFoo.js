function add(num) {
  function accumulator(nextNum) {
    return add(num + nextNum)
  }

  accumulator.valueOf = function () {
    return num
  }

  return accumulator
}

console.log(add(1)(2)(3)(4)(5))
