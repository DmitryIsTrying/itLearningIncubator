function foldArray(array, runs) {
  while (runs !== 0) {
    const indexMiddleChar = Math.floor(array.length / 2) //
    const middlechar = array[indexMiddleChar]
    const leftSideArr = array.slice(0, indexMiddleChar) // 1 2
    const rightSideArr = array.slice(array.length % 2 === 0 ? indexMiddleChar : indexMiddleChar + 1).reverse() // 4 5
    console.log(array)

    if (array.length % 2 === 0) {
      array = leftSideArr.map((el, i) => el + rightSideArr[i])
    } else {
      array = leftSideArr.map((el, i) => el + rightSideArr[i])
      array.push(middlechar)
    }
    runs--
    console.log(array)
    console.log('-------')
  }
  return array
}

console.log(foldArray([1, 2, 3, 4, 5], 2))

// 6 6 3
// 9 6
