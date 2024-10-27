var numbers = []

Array.prototype.square = function () {
  return this.map((el) => el ** 2)
}
Array.prototype.cube = function () {
  return this.map((el) => el ** 3)
}
Array.prototype.average = function () {
  return this.sum() / this.length
}

Array.prototype.sum = function () {
  if (!this.length) return NaN
  return this.reduce((acc, el) => (acc += el))
}

Array.prototype.odd = function () {
  return this.filter((el) => el % 2)
}

Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0)
}
