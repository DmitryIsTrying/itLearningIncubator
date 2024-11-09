function cakes(recipe, available) {
  let cake = []
  for (const key in recipe) {
    const n = Math.floor(available[key] / recipe[key])
    cake.push(n)
  }
  return Math.min(...cake) || 0
}

console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))
