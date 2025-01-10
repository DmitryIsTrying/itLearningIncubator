var candy = function (ratings) {
  let candies = Array(ratings.length).fill(1)
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1
    }
  }
  return candies.reduce((acc, el) => acc + el, 0)
}

console.log(candy([1, 0, 2]))
