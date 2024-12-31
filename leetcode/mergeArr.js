var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2.slice(0, n + 1))
  nums1.sort((a, b) => a - b)
}
const arr = [1, 2, 3, 0, 0, 0]
merge(arr, 3, [2, 5, 6], 3)
console.log(arr)
