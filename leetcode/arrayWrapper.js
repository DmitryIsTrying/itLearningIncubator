class ArrayWrapper {
  constructor(arr) {
    this.nums = arr
  }

  valueOf() {
    return this.nums.reduce((acc, cur) => {
      acc = acc + cur
      return acc
    }, 0)
  }
  toString() {
    return JSON.stringify(this.nums)
  }
}
const arr1 = new ArrayWrapper([1, 2, 3])
const arr2 = new ArrayWrapper([4, 5, 6])
console.log(arr1 + arr2)
console.log(String(arr1))
