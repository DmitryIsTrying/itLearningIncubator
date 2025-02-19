// function strJoin5(char) {
//   return new Array(arguments).slice(1).join(char)
// }
// console.log(strJoin5('.', 'a', 'b', 'c'))

// 2 undefined

function sum(a, b, c) {
  return a + b + c
}

function curry(fn) {
  const storage = [] // Глобальный массив для хранения аргументов

  function storageCall(...args) {
    storage.push(...args)

    if (storage.length >= fn.length) {
      return fn(...storage) // Если аргументов достаточно — вызываем функцию
    } else {
      return storageCall // Иначе продолжаем собирать аргументы
    }
  }

  return storageCall
}

const curriedSum = curry(sum)

// console.log(curriedSum(1)) // Возвращает функцию
// console.log(curriedSum(2)) // Возвращает функцию
// console.log(curriedSum(3)) // 6 (Ожидаемо)

// console.log(curriedSum(10)) // 16 (???) <--- НЕОЖИДАННОЕ ПОВЕДЕНИЕ!
// console.log(curriedSum(100)) // 116 (???) <--- Ошибка продолжается!
// const timeLimited = function (fn, t) {
//   return function (...args) {
//     return new Promise((res, rej) => {
//       // Устанавливаем таймаут для ограничения времени
//       const timer = setTimeout(() => {
//         rej('Time limit exceeded')
//       }, t)

//       // Вызываем асинхронную функцию
//       fn(...args)
//         .then((result) => {
//           clearTimeout(timer) // Очищаем таймер, если функция завершилась успешно
//           res(result)
//         })
//         .catch((error) => {
//           clearTimeout(timer) // Очищаем таймер в случае ошибки
//           rej(error) // Передаем ошибку
//         })
//     })
//   }
// }
function intersection(user1, user2) {
  const sameIntersection = []

  let i = 0,
    j = 0

  // Проходим по обоим массивам с интервалами
  while (i < user1.length && j < user2.length) {
    const start1 = user1[i][0]
    const end1 = user1[i][1]
    const start2 = user2[j][0]
    const end2 = user2[j][1]

    // Находим пересечение интервалов
    if (end1 >= start2 && end2 >= start1) {
      sameIntersection.push([Math.max(start1, start2), Math.min(end1, end2)])
    }

    // Перемещаем указатели на следующий интервал в массиве, чтобы продолжить проверку
    if (end1 < end2) {
      i++
    } else {
      j++
    }
  }

  return sameIntersection
}

const result1 = intersection(
  [
    [8, 12],
    [17, 22],
  ],
  [
    [5, 11],
    [14, 18],
    [20, 23],
  ]
)

const result2 = intersection(
  [
    [9, 15],
    [18, 21],
  ],
  [
    [10, 17],
    [21, 22],
  ]
)

// console.log(result1) // [[9, 11], [17, 18]]
// console.log(result2) // [[10, 15], [21, 21]]

function digitPermutation(arr) {
  strArr = arr.map((num) => {
    return num
      .toString()
      .replace(/0/g, '')
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
  })

  const obj = strArr.reduce((acc, str, i) => {
    if (acc[str]) {
      acc[str].push(arr[i])
    } else {
      acc[str] = [arr[i]]
    }
    return acc
  }, {})
  return Object.values(obj)
}

// console.clear()
// console.log('start test')
// console.log(digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 9000000009, 9]))
// // [[99,9000000009], [111,101010], [1230, 23001,123,300021], [9]]
// console.log(digitPermutation([11, 12]))
// // [[11],[12]]
// console.log(digitPermutation([1111111111111112, 1222222222222222]))
// // [[1111111111111112],[12222222222222222]]
function throttle(fn, delay, ctx) {
  let isReadyToCall = true
  let argsForLastCall = null
  return function (...args) {
    if (!isReadyToCall) {
      argsForLastCall = args
      return
    }

    fn.apply(ctx, args)
    isReadyToCall = false

    setTimeout(() => {
      isReadyToCall = true
      if (argsForLastCall) {
        fn.apply(ctx, argsForLastCall)
        argsForLastCall = null
      }
    }, delay)
  }
}
function getNodes(tree, type, result = []) {
  if (!tree) return

  if (tree.type === type) {
    result.push(tree)
  }

  tree.children?.forEach((node) => getNodes(node, type, result))

  return result
}
