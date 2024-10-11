function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return ''
  let howMany = Math.ceil(str.length / sz)
  const allCharArr = str.split('')
  const EmptyArray = []
  while (howMany !== 0) {
    const CharArr = []
    for (let i = 0; i < sz; i++) {
      CharArr.push(allCharArr[i])
    }

    if (CharArr.join('').split('').length === sz) EmptyArray.push(CharArr.join('').split(''))

    allCharArr.splice(0, sz) // 0 1 2 3 4
    howMany--
  }
  const resultArr = EmptyArray.map((elArr) => {
    const sumOfArraySlice = elArr.reduce((acc, el) => {
      return (acc += +el)
    }, 0)
    if (sumOfArraySlice % 2 === 0) {
      elArr.reverse()
    } else {
      const deleteChar = elArr.shift()
      elArr.push(deleteChar)
    }
    return elArr.join('')
  })
  return resultArr.join('')
}
console.log(revrot('733049910872815764', 5))

function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return ''

  const sumCubes = (chunk) => chunk.split('').reduce((sum, digit) => (sum += digit ** 3), 0)
  const reverse = (chunk) => chunk.split('').reverse().join('')
  const rotate = (chunk) => chunk.slice(1) + chunk.slice(0, 1)

  const chunks = []

  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz)

    if (chunk.length < sz) continue

    chunk = sumCubes(chunk) % 2 ? rotate(chunk) : reverse(chunk)

    chunks.push(chunk)
  }

  return chunks.join('')
}

//"33047 91089 28157"

// 94033 77801 99751 827
