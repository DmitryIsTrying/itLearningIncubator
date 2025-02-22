// Алгоритм поиска кратчайшего пути в невзвешанном графе
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

// Алгоритм скользящего окна - находим самую длинную под* в линейной структуре данных
function longestSubstring(str) {
  let left = 0
  let right = 0
  let answer = 0
  const set = new Set()

  while (right < str.length) {
    const char = str[right]
    while (set.has(char)) {
      set.delete(str[left])
      left++
    }
    set.add(char)
    answer = Math.max(answer, right - left + 1)
    right++
  }

  return answer
}
console.log(longestSubstring('aaaaaaaaa'))
console.log(longestSubstring('adabgcabac'))
console.log(longestSubstring('agadasatgfa'))
console.log(longestSubstring('adwqry'))

// Метод поиска всех возможных подстрок
function isNiceString(left, right, s) {
  const set = new Set(s.slice(left, right + 1))

  for (const el of set) {
    if (!set.has(el.toLowerCase()) || !set.has(el.toUpperCase())) return false
  }

  return true
}

function longestNiceSubstring(s) {
  let maxLength = 0
  let result = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isNiceString(i, j, s)) {
        const currentLength = j - i + 1
        if (currentLength > maxLength) {
          maxLength = currentLength
          result = s.slice(i, j + 1)
        }
      }
    }
  }

  return result
}
console.log(longestNiceSubstring('YazaAay'))

// Алгоритм два указателя

function findTwoSum(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const sum = nums[left] + nums[right]

    if (sum === target) {
      return [nums[left], nums[right]]
    }

    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return null // Если пара не найдена
}

// Пример использования
const sortedArray = [-2, 1, 2, 4, 7, 11]
const targetSum = 13

console.log(findTwoSum(sortedArray, targetSum)) // Выведет: [2, 11]

// Подход с быстрыми и медленными указателями, также известный как  алгоритм Зайца и Черепахи , представляет собой алгоритм указателя, который использует два указателя, которые перемещаются по массиву (или последовательности/связанному списку) с разной скоростью.  Этот подход весьма полезен при работе с циклическими связанными списками или массивами.
// ===========

//
