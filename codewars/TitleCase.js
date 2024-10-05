function titleCase(title, minorWords) {
  if (minorWords) {
    minorWords = minorWords.split(' ')
  } else {
    minorWords = []
  }

  if (!title) return ''

  return title
    .toLowerCase()
    .split(' ')
    .map((el, i) => {
      if ((minorWords.includes(el) || minorWords.includes(el.toUpperCase())) && i !== 0) {
        return el
      }
      el = el[0].toUpperCase() + el.slice(1)
      return el
    })
    .join(' ')
}

console.log(titleCase('ab', 'ab'))
