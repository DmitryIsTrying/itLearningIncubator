function kebabize(str) {
  const newStr = str.replace(/\d/g, '').replace(/[A-Z]/g, (char) => {
    return '-' + char.toLowerCase()
  })
  return newStr[0] === '-' ? newStr.slice(1) : newStr
}

console.log(kebabize('myCamelHas3Humps'))
