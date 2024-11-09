function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .map((word) =>
      word.replace(/[aA-zZ]/g, (char) => {
        if (char.charCodeAt() < 97) {
          return char.toLowerCase()
        } else {
          return char.toUpperCase()
        }
      })
    )
    .join(' ')
}
console.log(stringTransformer('Example Input'))
