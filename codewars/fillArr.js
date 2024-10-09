function fill(arr, method = 0) {
  const initArr = [...arr]
  let method1 = undefined
  return initArr.map((el, i) => {
    if (el === undefined) {
      let newvalue
      if (method === -1) {
        const newArr = initArr.slice(i)
        newvalue = newArr.reduce((acc, el) => {
          if (el === undefined) {
            return acc
          } else if (acc === undefined) {
            return el
          }
          return acc
        }, undefined)
      }
      if (method === 1) {
        newvalue = method1
      }
      if (method === 0) {
        let leftI = i - 1
        let rightJ = i + 1
        let leftInt = undefined
        let rightInt = undefined
        while (leftI >= 0) {
          if (!(initArr[leftI] === undefined)) {
            leftInt = initArr[leftI]
            break
          }
          leftI--
        }

        while (rightJ <= initArr.length - 1) {
          if (!(initArr[rightJ] === undefined)) {
            rightInt = initArr[rightJ]
            break
          }
          rightJ++
        }
        console.log(leftInt)
        console.log(rightInt)
        console.log('next')

        if (leftInt === undefined && rightInt === undefined) return undefined
        if (leftInt === undefined) return rightInt
        if (rightInt === undefined) return leftInt

        return i - leftI === rightJ - i
          ? leftInt > rightInt
            ? rightInt
            : leftInt
          : i - leftI > rightJ - i
          ? rightInt
          : leftInt
      }
      return newvalue
    }
    method1 = el
    return el
  })
}

console.log(fill([undefined, undefined, 6, undefined, undefined, 8, 4, undefined, undefined], 0))
