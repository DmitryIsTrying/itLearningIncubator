function stockList(books, categories) {
  if (!books.length) return ''
  const objectResult = books.reduce((acc, el) => {
    if (!categories.includes(el[0])) return acc

    if (acc[el[0]]) {
      acc[el[0]] += +el.split(' ')[1]
    } else {
      acc[el[0]] = +el.split(' ')[1]
    }
    return acc
  }, {})
  let resultArr = []
  categories.forEach((el) => {
    if (objectResult[el]) {
      resultArr.push(`(${el} : ${objectResult[el]})`)
    } else {
      resultArr.push(`(${el} : 0)`)
    }
  })
  return resultArr.join(' - ')
}

console.log(stockList(['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B', 'C', 'D']))
