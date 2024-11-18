function pickPeaks(arr) {
  console.log(arr)

  return arr.reduce(
    (acc, el, i) => {
      if (el > arr[i - 1] && el > arr[i + 1]) {
        acc.pos.push(i)
        acc.peaks.push(el)
      }

      if (el > arr[i - 1] && el === arr[i + 1]) {
        let count = 1
        while (true) {
          if (arr[i + count] < el && arr[i + count] !== undefined) {
            acc.pos.push(i)
            acc.peaks.push(el)
            break
          } else if (arr[i + count] === undefined || arr[i + count] > el) {
            break
          }
          count++
        }
      }
      return acc
    },
    { pos: [], peaks: [] }
  )
}
console.log(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]))
