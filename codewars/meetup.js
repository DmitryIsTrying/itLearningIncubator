function findSenior(list) {
  return list.reduce(
    (acc, devop) => {
      if (acc[0].age < devop.age) {
        acc = [devop]
      } else if (acc[0].age === devop.age) {
        acc.push(devop)
      }
      return acc
    },
    [{ age: 0 }]
  )
}
console.log(
  findSenior([
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ])
)
