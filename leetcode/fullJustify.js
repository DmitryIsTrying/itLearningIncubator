var fullJustify = function (words, maxWidth) {
  let res = []
  for (let i = 0; i < words.length; ) {
    let j = 1
    let str = words[i]

    // Собираем строку, пока она не превысит maxWidth
    while (i + j < words.length && `${str} ${words[i + j]}`.length <= maxWidth) {
      str += ` ${words[i + j]}`
      j++
    }

    // Если это последняя строка или строка содержит только одно слово
    if (i + j >= words.length || j === 1) {
      // Добавляем пробелы в конец строки
      res.push(str + ' '.repeat(maxWidth - str.length))
    } else {
      // Иначе распределяем пробелы между словами
      const dif = maxWidth - str.length
      const spaces = j - 1
      const spacePerWord = Math.floor(dif / spaces)
      let extraSpaces = dif % spaces

      let justifiedStr = ''
      for (let k = 0; k < j; k++) {
        justifiedStr += words[i + k]
        if (k < spaces) {
          justifiedStr += ' '.repeat(spacePerWord + 1)
          if (extraSpaces > 0) {
            justifiedStr += ' '
            extraSpaces--
          }
        }
      }
      res.push(justifiedStr)
    }

    i += j
  }
  return res
}

const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be']
const maxWidth = 16
console.log(fullJustify(words, maxWidth))
