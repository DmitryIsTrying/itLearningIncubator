function allContinents(list) {
  if (list.length < 5) return false
  const obj = list.reduce((acc, el) => {
    if (!acc[el.continent]) {
      acc[el.continent] = 1
    }
    return acc
  }, {})
  const arr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  for (el of arr) {
    if (!obj[el]) return false
  }
  return true
}

console.log(
  allContinents([
    { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
    { firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 21, language: 'Clojure' },
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Nikola', lastName: 'H.', country: 'Serbia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Asia', age: 28, language: 'Java' },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Americas',
      age: 89,
      language: 'JavaScript',
    },
    { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Oceania', age: 29, language: 'Clojure' },
    { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
  ])
)
