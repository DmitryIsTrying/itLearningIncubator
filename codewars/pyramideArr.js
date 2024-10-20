function pyramid(n) {
  return Array.from({ length: n }, (_, i) => {
    const resultArr = []

    while (i + 1) {
      resultArr.push(1)
      i--
    }
    return resultArr
  })
}

console.log(pyramid(3))
