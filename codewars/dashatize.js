function dashatize(num) {
  const str = Math.abs(num).toString(10)

  if (!(str.length - 1)) return str
  const result = str.split('').reduce((acc, el, i, arr) => {
    if (el & 1) {
      if (acc[acc.length - 1] === '-') {
        acc += `${el}-`
      } else {
        switch (i) {
          case 0:
            acc += `${el}-`
            break
          case arr.length - 1:
            acc += `-${el}`
            break
          default:
            acc += `-${el}-`
        }
      }
    } else {
      acc += el
    }

    return acc
  }, '')
  if (result[result.length - 1] === '-') {
    return result.slice(0, -1)
  }
  return result
}

console.log(dashatize(5311))
