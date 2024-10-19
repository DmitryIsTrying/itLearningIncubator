function coinCombo(cents) {
  const coins = [1, 5, 10, 25]
  const result = [0, 0, 0, 0]

  for (let i = coins.length - 1; i >= 0; i--) {
    while (cents >= coins[i]) {
      cents -= coins[i]
      result[i]++
    }
  }

  return result
}
