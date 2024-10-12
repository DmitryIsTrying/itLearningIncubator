function meeting(s) {
  return s
    .toUpperCase()
    .split(';')
    .map((nameAndLast) => {
      const newStr = nameAndLast.split(':')
      ;[newStr[0], newStr[1]] = [newStr[1], newStr[0]]
      return `(${newStr.join(', ')})`
    })
    .sort()
    .join('')
}
console.log(
  meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill')
)

//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
