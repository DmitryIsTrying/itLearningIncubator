/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  const m = str1.length
  const n = str2.length

  // Step 1: Find the LCS using dynamic programming
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // Step 2: Reconstruct the shortest common supersequence
  let i = m,
    j = n
  let result = ''

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result = str1[i - 1] + result
      i--
      j--
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      result = str1[i - 1] + result
      i--
    } else {
      result = str2[j - 1] + result
      j--
    }
  }

  // Add remaining characters from str1 and str2
  while (i > 0) {
    result = str1[i - 1] + result
    i--
  }

  while (j > 0) {
    result = str2[j - 1] + result
    j--
  }

  return result
}
