var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complect = target - nums[i];
    if (map.has(complect)) {
      return [map.get(complect), i];
    }
    map.set(nums[i], i);
  }
};
