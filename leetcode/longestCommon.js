var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  let initPref = strs[0]

  for (let i = 1; i < strs.length; i++) {
    let j = 0

    while (j < initPref.length && j < strs[i].length && strs[i][j] === initPref[j]) {
      j++
    }

    initPref = initPref.slice(0, j)

    if (initPref === '') {
      return initPref
    }
  }

  return initPref
}

const strs = ['flower', 'flower', 'flower', 'flower']
console.log(longestCommonPrefix(strs))

// flower
