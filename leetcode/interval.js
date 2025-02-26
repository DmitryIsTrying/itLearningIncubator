var intervalIntersection = function (firstList, secondList) {
  let i = 0
  let j = 0
  const result = []
  while (i < firstList.length && j < secondList.length) {
    const start1 = firstList[i][0]
    const start2 = secondList[j][0]
    const end1 = firstList[i][1]
    const end2 = secondList[j][1]
    if (end1 >= start2 && end2 >= start1) {
      result.push([Math.max(start1, start2), Math.min(end1, end2)])
    }

    if (end1 < end2) {
      i++
    } else {
      j++
    }
  }

  function merge(arr) {
    let current = arr[0]
    const result = []
    for (let i = 1; i < arr.length; i++) {
      const nextInterval = arr[i]
      if (current[1] >= nextInterval[0]) {
        current[1] = Math.max(current[1], nextInterval[1])
      } else {
        result.push(current)
        current = nextInterval
      }
    }
    if (current) {
      result.push(current)
    }
    return result
  }

  return merge(result)
}
console.log(
  intervalIntersection(
    [
      [10, 15],
      [17, 18],
    ],
    [
      [12, 18],
      [17, 19],
    ]
  )
)
