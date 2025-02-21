// const arr = [0, 321, 5, 1, -1, 5, 6, -8, 32]
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let indexMin = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexMin]) {
//         indexMin = j
//       }
//     }
//     ;[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
//   }
//   return arr
// }

// selectionSort(arr)

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let isSwapped = false
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         isSwapped = true
//       }
//     }
//     if (!isSwapped) {
//       return arr
//     }
//   }
//   return arr
// }
// bubbleSort(arr)

// function fibonacci(n, cache = {}) {
//   count += 1 // Увеличиваем count при каждом вызове функции

//   if (n === 1 || n === 2) {
//     return 1
//   }

//   if (cache[n]) {
//     return cache[n]
//   }
//   const value = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
//   cache[n] = value
//   return value
// }
// const value = fibonacci(7)
// console.log(`${count}: ${value}`)
// function quickSort(arr, fn) {
//   if (arr.length <= 1) return arr
//   const middleIndex = Math.floor(arr.length / 2)
//   const pivot = arr[middleIndex]
//   const left = []
//   const right = []

//   for (let i = 0; i < arr.length; i++) {
//     if (i === middleIndex) {
//       continue
//     }
//     if (fn(pivot, arr[i]) < 0) {
//       right.push(arr[i])
//     } else {
//       left.push(arr[i])
//     }
//   }

//   return [...quickSort(left, fn), pivot, ...quickSort(right, fn)]
// }

// console.log(quickSort(arr, (a, b) => b - a))
// function algoStr(str) {
//   let cache = []
//   const nums = []
//   for (let i = 0; i < str.length; i++) {
//     const index = cache.indexOf(str[i])
//     if (index !== -1) {
//       nums.push(cache.length)
//       cache = cache.slice(index + 1)
//       cache.push(str[i])
//     } else {
//       cache.push(str[i])
//     }
//   }

//   return Math.max(...nums, cache.length)
// }
// console.log(algoStr('abcbada')) // 4
// console.log(algoStr('axbxcxd')) // 3
// console.log(algoStr('aaaaaaa')) // 1
// console.log(algoStr('abcdefg')) // 7
// const test = {
//   b: { value: '123', next: 'c' },
// }
// function algoStr(str) {
//   const charIndexMap = {}
//   let maxLength = 0
//   let start = 0

//   for (let end = 0; end < str.length; end++) {
//     const currentChar = str[end]

//     if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
//       start = charIndexMap[currentChar] + 1
//     }

//     charIndexMap[currentChar] = end
//     maxLength = Math.max(maxLength, end - start + 1)
//   }

//   return maxLength
// }

// console.log(algoStr('abcbada')) // 4
// console.log(algoStr('axbxcxd')) // 3
// console.log(algoStr('aaaaaaa')) // 1
// console.log(algoStr('abcdefg')) // 7

function intersection(user1, user2) {
  const sameIntersection = []

  let i = 0,
    j = 0

  while (i < user1.length && j < user2.length) {
    const start1 = user1[i][0]
    const end1 = user1[i][1]
    const start2 = user2[j][0]
    const end2 = user2[j][1]

    // Находим пересечение интервалов
    const intersectStart = Math.max(start1, start2)
    const intersectEnd = Math.min(end1, end2)

    if (intersectStart <= intersectEnd) {
      sameIntersection.push([intersectStart, intersectEnd])
    }

    // Перемещаем указатели на следующий интервал в массиве
    if (end1 < end2) {
      i++
    } else {
      j++
    }
  }
  console.log(sameIntersection)

  // [ [ 12, 15 ], [ 17, 18 ], [ 17, 19 ] ]
  function mergeIntervals(arr) {
    let currentInterval = arr[0]
    const result = []
    for (let i = 1; i < arr.length; i++) {
      const nextInterval = arr[i]

      if (currentInterval[1] >= nextInterval[0]) {
        currentInterval[1] = Math.max(nextInterval[1], currentInterval[1])
      } else {
        result.push(currentInterval)
        currentInterval = nextInterval
      }
    }
    result.push(currentInterval)

    return result
  }

  return mergeIntervals(sameIntersection)
}

const arr1 = [
  [10, 15],
  [17, 19],
]

const arr2 = [
  [12, 18],
  [17, 19],
]

// console.log(intersection(arr1, arr2))
function arrayPairSum(nums) {
  nums.sort((a, b) => a - b)

  let sum = 0
  console.log(nums)

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }

  return sum
}

// console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))

function graphSearch(graph, start, end) {
  let queue = []
  queue.push({ node: start, steps: 0 }) // Добавляем начальную вершину и количество шагов (0)

  while (queue.length > 0) {
    const { node: current, steps } = queue.shift() // Извлекаем текущую вершину и количество шагов

    if (!graph[current]) {
      graph[current] = []
    }

    if (graph[current].includes(end)) {
      return steps + 1 // Возвращаем количество шагов + 1 (так как мы переходим к конечной вершине)
    } else {
      // Добавляем соседние вершины в очередь с увеличенным количеством шагов
      queue = [...queue, ...graph[current].map((neighbor) => ({ node: neighbor, steps: steps + 1 }))]
    }
  }

  return false // Если путь не найден
}
// const graph = {}

// graph.a = ['b', 'c']
// graph.b = ['f', 'c']
// graph.c = ['d', 'e']
// graph.d = ['f']
// graph.e = ['f']
// graph.f = ['g']
// console.log(graphSearch(graph, 'b', 'g'))

// Алгоритм дейкстры для поиска кратчайшего пути в графе
const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
}

function shortPath(graph, start, end) {
  const costs = {} // Хранит стоимость пути до каждой вершины
  const processed = [] // Хранит обработанные вершины
  let neighbors = {}

  // Инициализация costs
  Object.keys(graph).forEach((node) => {
    if (node === start) {
      costs[node] = 0 // Стоимость пути до стартовой вершины равна 0
    } else {
      costs[node] = Infinity // Для остальных вершин пока что бесконечность
    }
  })

  // Находим вершину с минимальной стоимостью
  let node = findNodeLowestCost(costs, processed)

  while (node) {
    const cost = costs[node] // Текущая стоимость пути до вершины node
    neighbors = graph[node] // Соседи текущей вершины

    // Обновляем стоимости для всех соседей
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor] // Новая стоимость пути
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost // Обновляем, если нашли более короткий путь
      }
    })

    processed.push(node) // Помечаем вершину как обработанную
    node = findNodeLowestCost(costs, processed) // Ищем следующую вершину
  }

  return costs[end] // Возвращаем стоимость пути до конечной вершины
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = Infinity
  let lowestNode = null

  Object.keys(costs).forEach((node) => {
    const cost = costs[node]
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestNode = node
    }
  })

  return lowestNode
}

// console.log(shortPath(graph, 'a', 'g')) // Вывод: 3

function sumTree(root, cache = { counter: 0 }) {
  if (!root) return
  cache.counter += root.val

  root.children((node) => {
    sumTree(node, cache)
  })

  return cache.counter
}
