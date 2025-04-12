function countGoodIntegers(n, k) {
  const comb = Array.from({ length: 11 }, () => Array(11).fill(0))
  for (let i = 0; i <= 10; i++) comb[i][0] = comb[i][i] = 1
  for (let i = 2; i <= 10; i++) {
    for (let j = 1; j < i; j++) {
      comb[i][j] = comb[i - 1][j] + comb[i - 1][j - 1]
    }
  }

  const base = 10 ** Math.ceil(n / 2)
  const set = new Set()

  for (let half = Math.floor(base / 10); half < base; half++) {
    const halfStr = half.toString()
    const fullStr =
      n % 2 === 0 ? halfStr + [...halfStr].reverse().join('') : halfStr + [...halfStr.slice(0, -1)].reverse().join('')
    const num = BigInt(fullStr)
    if (num % BigInt(k) === 0n) {
      const freq = Array(10).fill(0)
      for (let ch of fullStr) freq[+ch]++
      let encoded = 0n
      for (let f of freq) encoded = encoded * 11n + BigInt(f)
      set.add(encoded.toString())
    }
  }

  let total = 0n
  for (let codeStr of set) {
    let code = BigInt(codeStr)
    const freq = Array(10).fill(0)
    for (let i = 9; i >= 0; i--) {
      freq[i] = Number(code % 11n)
      code /= 11n
    }

    let rem = n
    let ways = 1n
    for (let i = 0; i < 10; i++) {
      if (freq[i] > rem) {
        ways = 0n
        break
      }
      const c = comb[i === 0 ? rem - 1 : rem][freq[i]]
      ways *= BigInt(c)
      rem -= freq[i]
    }
    total += ways
  }

  return Number(total)
}
