// const arr = [0, 321, 5, 1, -1, 5, 6, -8, 32]
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let indexMin = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexMin]) {
//         indexMin = j
//       }
//     }
//     ;[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
//   }
//   return arr
// }

// selectionSort(arr)

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let isSwapped = false
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         isSwapped = true
//       }
//     }
//     if (!isSwapped) {
//       return arr
//     }
//   }
//   return arr
// }
// bubbleSort(arr)

// function fibonacci(n, cache = {}) {
//   count += 1 // Увеличиваем count при каждом вызове функции

//   if (n === 1 || n === 2) {
//     return 1
//   }

//   if (cache[n]) {
//     return cache[n]
//   }
//   const value = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
//   cache[n] = value
//   return value
// }
// const value = fibonacci(7)
// console.log(`${count}: ${value}`)
// function quickSort(arr, fn) {
//   if (arr.length <= 1) return arr
//   const middleIndex = Math.floor(arr.length / 2)
//   const pivot = arr[middleIndex]
//   const left = []
//   const right = []

//   for (let i = 0; i < arr.length; i++) {
//     if (i === middleIndex) {
//       continue
//     }
//     if (fn(pivot, arr[i]) < 0) {
//       right.push(arr[i])
//     } else {
//       left.push(arr[i])
//     }
//   }

//   return [...quickSort(left, fn), pivot, ...quickSort(right, fn)]
// }

// console.log(quickSort(arr, (a, b) => b - a))
// function algoStr(str) {
//   let cache = []
//   const nums = []
//   for (let i = 0; i < str.length; i++) {
//     const index = cache.indexOf(str[i])
//     if (index !== -1) {
//       nums.push(cache.length)
//       cache = cache.slice(index + 1)
//       cache.push(str[i])
//     } else {
//       cache.push(str[i])
//     }
//   }

//   return Math.max(...nums, cache.length)
// }
// console.log(algoStr('abcbada')) // 4
// console.log(algoStr('axbxcxd')) // 3
// console.log(algoStr('aaaaaaa')) // 1
// console.log(algoStr('abcdefg')) // 7
// const test = {
//   b: { value: '123', next: 'c' },
// }
function algoStr(str) {
  const charIndexMap = {}
  let maxLength = 0
  let start = 0

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end]

    if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
      start = charIndexMap[currentChar] + 1
    }

    charIndexMap[currentChar] = end
    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}

console.log(algoStr('abcbada')) // 4
console.log(algoStr('axbxcxd')) // 3
console.log(algoStr('aaaaaaa')) // 1
console.log(algoStr('abcdefg')) // 7
