function sqInRect(lng, wdth) {
  if (lng === wdth) return null;
  const resultArr = [];
  while (lng !== 0) {
    resultArr.push(Math.min(lng, wdth));
    lng >= wdth
      ? ([lng, wdth] = [lng - wdth, wdth])
      : ([lng, wdth] = [lng, wdth - lng]);
  }
  return resultArr;
}

console.log(sqInRect(5, 3));
