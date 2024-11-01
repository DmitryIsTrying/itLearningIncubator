function decipherThis(str) {
  const crypt = new Crypt(str)
  return crypt.decrypt()
}

class Crypt {
  constructor(str) {
    this.str = str
  }

  decrypt() {
    return this.str
      .split(' ')
      .map((word) => {
        word = word.replace(/\d+/, (num) => {
          return String.fromCharCode(Number(num))
        })

        const arr = word.split('')
        ;[arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]]
        return arr.join('')
      })
      .join(' ')
  }
}

console.log(decipherThis('72olle 103doo 100ya'))
