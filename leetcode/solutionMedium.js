function str(s, t) {
  const hashTableT = new Map()
  for (const el of t) {
    const num = hashTableT.get(el)
    if (num) {
      hashTableT.set(el, num + 1)
    } else {
      hashTableT.set(el, 1)
    }
  }
  let copyHash = new Map(hashTableT)
  let result = 0
  let touched = false
  for (let i = 0; i < s.length; i++) {
    const subStr = s[i]
    const num = copyHash.get(subStr)
    if (num) {
      touched = true
      if (num === 1) {
        copyHash.delete(subStr)
        if (copyHash.size === 0) {
          result++
          i -= t.length - 1
          copyHash = new Map(hashTableT)
        }
      } else {
        copyHash.set(subStr, num - 1)
      }
    } else {
      if (touched) {
        copyHash = new Map(hashTableT)
        touched = false
      }
    }
  }

  return result
}

// function str(s, t) {
//   const tLength = t.length
//   const sLength = s.length
//   let result = 0

//   // Создаем маску для строки t
//   const createMask = (str) => {
//     const mask = new Array(128).fill(0) // Используем массив фиксированного размера для ASCII символов
//     for (const char of str) {
//       mask[char.charCodeAt()]++
//     }
//     return mask
//   }

//   const tMask = createMask(t)

//   // Создаем маску для текущего окна в строке s
//   const windowMask = new Array(128).fill(0)
//   let begin = 0

//   for (let end = 0; end < sLength; end++) {
//     windowMask[s[end].charCodeAt()]++

//     // Если длина окна равна длине t, проверяем маску
//     if (end - begin + 1 === tLength) {
//       if (windowMask.toString() === tMask.toString()) {
//         result++
//       }

//       // Сдвигаем окно вправо
//       windowMask[s[begin].charCodeAt()]--
//       begin++
//     }
//   }

//   return result
// }

console.log(str('abcabadc', 'abc'))
