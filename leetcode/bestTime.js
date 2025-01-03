function maxProfit(prices) {
  let minPrice = Infinity // Initialize minPrice to a very large value
  let maxProfit = 0 // Initialize maxProfit to 0

  for (let i = 0; i < prices.length; i++) {
    // Update minPrice if the current price is smaller
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
    // Calculate the profit if we sell on the current day
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }

  return maxProfit
}
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
