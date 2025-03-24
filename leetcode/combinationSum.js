var combinationSum = function (candidates, target) {
  const result = []
  candidates.sort((a, b) => a - b)

  function backtrack(start, currentCombination, remainingTarget) {
    if (remainingTarget === 0) {
      result.push([...currentCombination])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i]
      if (num > remainingTarget) break

      currentCombination.push(num)
      backtrack(i, currentCombination, remainingTarget - num)
      currentCombination.pop()
    }
  }

  backtrack(0, [], target)
  return result
}
