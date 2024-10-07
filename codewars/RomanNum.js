function solution(roman) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const objResult = roman.split('').reduce(
    (acc, el) => {
      if (acc.prevNum < obj[el]) {
        acc.main += obj[el] - acc.prevNum * 2
      } else {
        acc.main += obj[el]
      }
      acc.prevNum = obj[el]
      return acc
    },
    {
      main: 0,
      prevNum: 0,
    }
  )
  return objResult.main
}

console.log(solution('IX'))
