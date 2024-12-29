var isEmpty = function (obj) {
  if (JSON.stringify(obj) === '[]' || JSON.stringify(obj) === '{}') {
    return true
  } else {
    return false
  }
}
console.log(isEmpty({}))
