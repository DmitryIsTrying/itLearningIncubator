function productFib(prod) {
  const start = [0, 1]
  while (start[start.length - 1] * start[start.length - 2] < prod) {
    start.push(start[start.length - 1] + start[start.length - 2])
  }
  return [
    start[start.length - 2],
    start[start.length - 1],
    start[start.length - 1] * start[start.length - 2] === prod ? true : false,
  ]
}

console.log(productFib(714))
