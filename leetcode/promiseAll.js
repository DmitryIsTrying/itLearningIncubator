const myPromiseAny = (promises) => {
  return new Promise((resolve, reject) => {
    const errors = [] // Массив для хранения отклонённых значений
    let rejectedCount = 0 // Счётчик отклонённых промисов

    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          resolve(res) // Если промис выполнился успешно, завершаем промис
        })
        .catch((err) => {
          errors[index] = err // Сохраняем ошибку
          rejectedCount++ // Увеличиваем счётчик отклонённых промисов

          // Если все промисы отклонены, вызываем reject с AggregateError
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        })
    })
  })
}

const pr = myPromiseAny([Promise.reject(142), Promise.reject(23), Promise.reject(55), Promise.reject(89)])
  .then(console.log)
  .catch(() => {})
