function rank(st, we, n) {
  console.log(st, we, n)
  if (st === '') return 'No participants'
  const stArr = st.split(',')

  if (stArr.length < n) return 'Not enough participants'
  const numsObj = stArr.reduce((acc, name, inx) => {
    let num = name
      .toLowerCase()
      .split('')
      .reduce((acc, char) => {
        acc += char.charCodeAt() - 96

        return acc
      }, 0)
    num = (num + name.length) * we[inx]
    acc.push({ num, name })
    return acc
  }, [])
  return numsObj.sort((a, b) => {
    if (a.num === b.num) {
      return a.name.localeCompare(b.name)
    } else {
      return b.num - a.num
    }
  })[n - 1].name
}
console.log(rank('', [4, 2, 1, 4, 3, 1, 2], 6))
