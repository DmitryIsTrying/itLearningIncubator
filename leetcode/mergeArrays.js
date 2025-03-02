/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let p1 = 0
  let p2 = 0
  let result = []
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1][0] === nums2[p2][0]) {
      result.push([nums1[p1][0], nums1[p1][1] + nums2[p2][1]])
      p1++
      p2++
    } else {
      if (nums1[p1][0] < nums2[p2][0]) {
        result.push([nums1[p1][0], nums1[p1][1]])
        p1++
      } else {
        result.push([nums2[p2][0], nums2[p2][1]])
        p2++
      }
    }
  }

  while (p1 < nums1.length) {
    result.push([nums1[p1][0], nums1[p1][1]])
    p1++
  }

  while (p2 < nums2.length) {
    result.push([nums2[p2][0], nums2[p2][1]])
    p2++
  }

  return result
}
