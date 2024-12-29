Array.prototype.groupBy = function (fn) {
  const obj = {}
  for (let i = 0; i < this.length; i++) {
    const res = fn(this[i])
    if (res in obj) {
      obj[res].push(this[i])
    } else {
      obj[res] = [this[i]]
    }
  }
  return obj
}
