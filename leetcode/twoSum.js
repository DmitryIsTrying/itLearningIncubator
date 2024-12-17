var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var findNum = target - nums[i]
    var indexFindNum = nums.indexOf(findNum, i + 1)

    if (~indexFindNum) {
      return [i, indexFindNum]
    }
  }
}
console.log(twoSum([3, 2, 4], 6))
