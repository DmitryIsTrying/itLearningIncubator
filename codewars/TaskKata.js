function reverse(str) {
  const array = [',', '!', '.', ' ']
  return (
    str
      .toLowerCase()
      .split('')
      .filter((el) => {
        return !array.includes(el)
      })
      .reverse()
      .join('') ===
    str
      .toLowerCase()
      .split('')
      .filter((el) => {
        return !array.includes(el)
      })
      .join('')
  )

  // /[\s\p{P}]/gu
  // /[АаПп]/gu
  // /[а-я]/gu
  // /[^а-я]/gu
}

// console.log(reverse('А .роа !упала на, ла.пу Азора'))

class Mix {
  constructor(a) {
    this.num = a
    this.num2 = a * 2
    this.num3 = a * 3
  }
}

const objectNums = new Mix(5)
console.log(objectNums)
