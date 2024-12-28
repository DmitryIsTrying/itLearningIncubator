var promiseAll = function (functions) {
  const result = []
  let counter = 0

  return new Promise((resolve, reject) => {
    functions.forEach((promise, index) => {
      promise()
        .then((res) => {
          result[index] = res
          counter++
          if (counter === functions.length) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}
const pr = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
])
pr.then(console.log).catch(console.log)
