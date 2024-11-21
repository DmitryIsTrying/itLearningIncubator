function rot13(str) {
  return str
    .split('')
    .map((el) => {
      const charCode = el.charCodeAt()

      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65)
      }

      if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + 13) % 26) + 97)
      }

      return el
    })
    .join('')
}
