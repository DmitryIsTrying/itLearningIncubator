var minWindow = function (s, t) {
  if (s.length < t.length) return ''

  // Create a map to store the frequency of each character in t
  const tMap = new Map()
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1)
  }

  let left = 0,
    right = 0
  let required = tMap.size // Number of unique characters in t
  let formed = 0 // Number of unique characters in the current window that match the frequency in t

  // Map to store the frequency of characters in the current window
  const windowMap = new Map()

  // Variables to store the minimum window
  let minLen = Infinity
  let minLeft = 0

  while (right < s.length) {
    const char = s[right]

    // Expand the window by adding the current character
    windowMap.set(char, (windowMap.get(char) || 0) + 1)

    // If the current character's frequency matches the required frequency in t, increment formed
    if (tMap.has(char) && windowMap.get(char) === tMap.get(char)) {
      formed++
    }

    // Try to contract the window from the left
    while (left <= right && formed === required) {
      const currentLen = right - left + 1

      // Update the minimum window if the current window is smaller
      if (currentLen < minLen) {
        minLen = currentLen
        minLeft = left
      }

      const leftChar = s[left]

      // Remove the left character from the window
      windowMap.set(leftChar, windowMap.get(leftChar) - 1)

      // If the left character was part of t and its frequency drops below the required frequency, decrement formed
      if (tMap.has(leftChar) && windowMap.get(leftChar) < tMap.get(leftChar)) {
        formed--
      }

      // Move the left pointer to the right
      left++
    }

    // Move the right pointer to the right
    right++
  }

  // If no valid window was found, return an empty string
  return minLen === Infinity ? '' : s.slice(minLeft, minLeft + minLen)
}
