const test = 123
const obj = {
  test: 'hello',
  fn: () => {
    console.log(this === global)

    console.log(this.test)
  },
}
// obj.fn()
// console.log(Number.isNaN('dd'))
// console.log(isNaN('dd'))
// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York',
  },
  {
    name: 'Johan',
    city: 'Berlin',
  },
]

const groupByCity = (array) => {
  return array.reduce((acc, { name, city }) => {
    if (acc[city]) {
      if (Array.isArray(acc[city])) {
        acc[city].push(name)
      } else {
        acc[city] = [acc[city], name]
      }
    } else {
      acc[city] = name
    }
    return acc
  }, {})
}

// Данные на выход
/*
  {
    'Moscow': [ 'Alex', 'Ivan' ],
    'New York': 'Joe',
    'Berlin': 'Johan'
  }
  */
// console.log(groupByCity(people))
//Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.
function minAndMax(arr) {
  let min = arr[0]
  let max = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }

    if (arr[i] < min) {
      min = arr[i]
    }
  }

  return { min, max }
}

// console.log(minAndMax([1, -5, 512, 4, -145, 321, 67, 84, 990]))

const array1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
] // [[1, 6], [8, 10], [15, 18]]
const array2 = [
  [1, 4],
  [4, 5],
] // [[1, 5]]
const array3 = [
  [11, 12],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
  [6, 8],
] // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  intervals.sort(([a], [b]) => a - b)
  let current = intervals[0]
  const result = []
  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i]
    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1])
    } else {
      result.push(current)
      current = next
    }
  }
  result.push(current)
  return result
}

// console.log(merge(array1))
// console.log(merge(array2))
// console.log(merge(array3))
// Объект на вход
const object = {
  a: {
    d: {
      h: 4,
    },
    e: 2,
  },
  b: 1,
  c: {
    f: {
      g: 3,
      k: {},
    },
  },
}

const addLevels = (obj, counter = 0) => {
  obj.level = counter
  for (const key in obj) {
    if (obj[key] instanceof Object) {
      addLevels(obj[key], counter + 1)
    }
  }
  return obj
}

// Данные на выход
/*
  updatedObject {
    a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
    b: 1,
    c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
    level: 0
  }*/

// Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }
// console.log(addLevels(object))

/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

const obj23 = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: 4,
}

const flattenObject = (obj, parentKey = '', result = {}) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // Рекурсивно вызываем flattenObject для вложенных объектов
        flattenObject(obj[key], newKey, result)
      } else {
        // Если это не объект, добавляем значение в результат
        result[newKey] = obj[key]
      }
    }
  }
  return result
}

const flattenedObj = flattenObject(obj23)
// console.log(flattenedObj)
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase()
}

function palindrom(str) {
  str = str.toLowerCase()
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (!isLetter(str[left])) {
      left++
      continue
    }

    if (!isLetter(str[right])) {
      right--
      continue
    }

    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
/*
Примеры:
- Казак // true
- Madam, I'm Adam // true
- А в Енисее - синева // true
- О, духи, от уборки микробу-то и худо // true
- Не палиндром // false
*/
// console.log(palindrom('Казак'))
// console.log(palindrom("Madam, I'm Adam"))
// console.log(palindrom('А в Енисее - синева'))
// console.log(palindrom('О, духи, от уборки микробу-то и худо'))
// console.log(palindrom('Не палиндром'))
const anagram = (strA, strB) => {
  if (strA.length !== strB.length) return false

  strA = strA.toLowerCase()
  strB = strB.toLowerCase()

  const charCount = {}

  // Заполняем счетчик для strA
  for (let char of strA) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  // Проверяем strB
  for (let char of strB) {
    if (!charCount[char]) return false // Если символа нет, это не анаграмма
    charCount[char]--
  }

  return true
}

const anagram2 = (strA, strB) => {
  const sortedStrA = strA
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')

  const sortedStrB = strB
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')

  return sortedStrA === sortedStrB
}

// console.log(anagram2('finder', 'Friend')) // true
// console.log(anagram2('hello', 'bye')) // false
// const str = 'one.two.three.four.five'

// function strToObj(str) {
//   const arr = str.split('.')
//   const obj = {}
//   let current = obj

//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i]
//     current[key] = {}
//     current = current[key]
//   }

//   return obj
// }

// console.log(strToObj(str))

// RESULT
/*
{
  one: {
    two: {
      three: {
        four: {
          five: }
        }
      }
    }
  }
}
*/
//Задачи на работу с числами
// Проверить, является ли заданное число простым.
function isSimpleInt(int) {
  if (int < 2) return false // Отрицательные числа и 1 не являются простыми
  if (int === 2 || int === 3) return true
  if (int % 2 === 0 || int % 3 === 0) return false // Делимость на 2 и 3

  const sq = Math.sqrt(int)
  for (let n = 5; n <= sq; n += 6) {
    if (int % n === 0 || int % (n + 2) === 0) return false
  }

  return true
}
// console.log(isSimpleInt(9))
function factorialNum(n) {
  return n === 1 ? 1 : n * factorialNum(n - 1)
}

// console.log(factorialNum(7))
//Найти сумму всех чисел в заданном диапазоне.

function sumNumbers(n) {
  return n === 1 ? 1 : n + sumNumbers(n - 1)
}
// console.log(sumNumbers(5)) // 1+2+3+4+5=15
//Реализовать рекурсивную функцию для вычисления чисел Фибоначчи.
function fibonacci(n, cache = {}) {
  if (n in cache) {
    return cache[n]
  }

  if (n <= 1) {
    return n
  }

  const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
  cache[n] = result
  return result
}
// console.log(fibonacci(8)) // 21
//Развернуть вложенные массивы с помощью рекурсии.
function flattenArray(arr) {
  const result = []

  for (const el of arr) {
    if (Array.isArray(el)) {
      result.push(...flattenArray(el))
    } else {
      result.push(el)
    }
  }
  return result
}

const nestedArray = [1, [2, [3, 4], 5], 6]
// console.log(flattenArray(nestedArray)) // [1, 2, 3, 4, 5, 6]
//Написать собственные функции debounce и throttle
function debounce(fn, ms) {
  let timeoutId = null
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(fn, ms, ...args)
  }
}
function throttle(fn, ms) {
  let isReadyToCall = true

  return function (...args) {
    if (!isReadyToCall) return
    fn(...args)
    isReadyToCall = false
    setTimeout(() => {
      isReadyToCall = true
    }, ms)
  }
}
//Написать функцию sleep, которая останавливает выполнение кода на определенное время.
function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms)
  })
}
async function delayFN() {
  console.log('Начало')
  await sleep(2000) // Приостанавливаем выполнение на 2 секунды
  console.log('Прошло 2 секунды')
}
delayFN()
// 12 13 14 15 16 17 18
// 14 15
// 16 - 13 = 3
// 18 - 11 = 7
