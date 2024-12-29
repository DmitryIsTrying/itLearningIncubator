var chunk = function (arr, size) {
  const obj = arr.reduce(
    (acc, el, i) => {
      let { result, storage } = acc
      if ((i + 1) % size === 0) {
        result.push([...storage, el])
        acc.storage = []
      } else {
        storage.push(el)
      }

      return acc
    },
    {
      storage: [],
      result: [],
    }
  )
  if (obj.storage.length) {
    return [...obj.result, obj.storage]
  }
  return [...obj.result]
}
console.log(chunk([1, 2, 3, 4, 5], 3))
