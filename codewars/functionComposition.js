function compose(f, g) {
  return function () {
    return f(g(...arguments))
  }
}
