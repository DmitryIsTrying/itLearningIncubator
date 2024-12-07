function getObj(str) {
  return str.split('').reduce((acc, char) => {
    if (acc[char]) {
      acc[char] += 1
    } else {
      acc[char] = 1
    }
    return acc
  }, {})
}

function grabscrab(anagram, dictionary) {
  const objAnagram = getObj(anagram)

  return dictionary.reduce((acc, word) => {
    const filterWord = getObj(word)

    for (key in filterWord) {
      if (filterWord[key] > objAnagram[key] || !objAnagram[key]) {
        return acc
      }
    }
    acc.push(word)
    return acc
  }, [])
}
console.log(grabscrab('oob', ['bob', 'baobab']))
