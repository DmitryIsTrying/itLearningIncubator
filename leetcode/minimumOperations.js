/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const mapa = new Map()
  for (const num of nums) {
    const get = mapa.get(num) || 0
    mapa.set(num, get + 1)
  }
  for (const [key, value] of mapa) {
    if (value === 1) {
      mapa.delete(key)
    }
  }
  let counter = 0

  while (mapa.size > 0) {
    const spliced = nums.splice(0, 3)
    for (const num of spliced) {
      const get = mapa.get(num)

      if (!get) continue

      if (get === 2) {
        mapa.delete(num)
      } else {
        mapa.set(num, get - 1)
      }
    }
    counter++
  }

  return counter
}
