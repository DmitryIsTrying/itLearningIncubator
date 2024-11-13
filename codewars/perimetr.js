function perimeter(n) {
  const start = [1]

  while (start.length < n + 1) {
    const lng = start.length
    start.push(start[lng - 1] + (start[lng - 2] || 0))
  }

  return start.reduce((acc, el) => acc + el) * 4
}

console.log(perimeter(30))
