function hIndex(citations) {
  // Sort the citations in descending order
  citations.sort((a, b) => b - a)

  // Iterate through the sorted array to find the h-index
  let h = 0

  while (h < citations.length && citations[h] > h) {
    h++
  }

  return h
}
console.log(hIndex([11, 15]))
