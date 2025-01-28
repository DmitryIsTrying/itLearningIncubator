function arrToObjWithArrays(arr) {
  return arr.reduce((acc, obj) => {
    for (const key in obj) {
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj[key])
    }
    return acc
  }, {})
}

const arr = [
  { name: 'Dima', value: 5 },
  { name: 'Alena', value: 35 },
  { name: 'Anna', value: 8 },
  { name: 'Igor', value: 21 },
]
console.log(arrToObjWithArrays(arr))
