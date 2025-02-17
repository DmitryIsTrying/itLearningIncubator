function getCompressedString(text) {
  // Приводим текст к нижнему регистру
  text = text.toLowerCase()

  // Разбиваем текст на токены, игнорируя знаки препинания, а пробелы и тире считаем частью слова
  const tokens = text.match(/[\wа-яА-ЯёЁ-]+|[.,!?]|\s+/gu) || []

  // Подсчитываем частоту слов (игнорируем пробелы и знаки препинания)
  const howMany = tokens.reduce((acc, word) => {
    // Проверяем, что это не пробел или знак препинания
    if (![' ', '!', '?', ',', '.', ''].includes(word)) {
      acc[word] = (acc[word] || 0) + 1
    }
    return acc
  }, {})

  // Сортируем слова по частоте, а затем по порядку появления в тексте
  const newArr = Object.entries(howMany).sort(([key1, value1], [key2, value2]) => {
    if (value1 !== value2) {
      return value2 - value1 // сортируем по частоте
    }
    return tokens.indexOf(key1) - tokens.indexOf(key2) // сортируем по порядку появления
  })

  // Создаем объект для отображения позиций для каждого слова
  const obj = newArr.reduce((acc, [key, value], i) => {
    acc[key] = i
    return acc
  }, {})

  // Возвращаем результат, заменяя слова на их позиции, а знаки препинания оставляем
  return tokens
    .map((char) => {
      if ([' ', '!', '?', ',', '.', ''].includes(char)) {
        return char // возвращаем знак препинания или пробел без изменений
      } else {
        return obj[char] !== undefined ? obj[char] : char // заменяем слово на позицию
      }
    })
    .join('')
}

console.log(getCompressedString('a-----b!   c   d---e   f. g?'))
