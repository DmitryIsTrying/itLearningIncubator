class RomanNumerals {
  static romanToValue = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  static toRoman(num) {
    let result = ''
    for (const key in this.romanToValue) {
      while (true) {
        if (num - this.romanToValue[key] >= 0) {
          num -= this.romanToValue[key]
          result += key
        } else {
          break
        }
      }
    }
    return result
  }

  static fromRoman(str) {
    return Math.abs(
      str.split('').reduce(
        (acc, char) => {
          if (this.romanToValue[char] > acc.prev) {
            acc.result += this.romanToValue[char] - acc.prev * 2
            acc.prev = this.romanToValue[char] - acc.prev
          } else {
            acc.result += this.romanToValue[char]
            acc.prev = this.romanToValue[char]
          }

          return acc
        },
        { result: 0, prev: undefined }
      ).result
    )
  }
}
console.log(RomanNumerals.fromRoman('MCMXIV'))
