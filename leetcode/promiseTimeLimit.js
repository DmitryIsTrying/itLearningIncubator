var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      // Вызываем fn с аргументами и ждем её завершения
      fn(...args)
        .then((result) => {
          res(result) // Разрешаем промис с результатом выполнения fn
        })
        .catch((err) => {
          rej(err) // Отклоняем промис, если fn завершилась с ошибкой
        })

      setTimeout(() => {
        rej('Time Limit Exceeded')
      }, t)
    })
  }
}
fn = async (n) => {
  await new Promise((res) => setTimeout(res, 5000))
  return n * n
}
inputs = [5]
t = 200
const foo = timeLimit(fn, t)
const pr = foo()
pr.then(() => {
  console.log('here')
})
