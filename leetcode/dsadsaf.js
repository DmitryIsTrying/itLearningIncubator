// var invalidTransactions = function (transactions) {
//   const invalids = []
//   const mapNames = {}

//   for (let i = 0; i < transactions.length; i++) {
//     const [name, time, price, city] = transactions[i].split(',')

//     if (Number(price) > 1000) {
//       invalids.push(transactions[i])
//     }

//     if (mapNames[name]) {
//       for (const { time: memoTime, city: memoCity, index: memoIndex } of mapNames[name]) {
//         if (Math.abs(memoTime - Number(time)) <= 60 && memoCity !== city) {
//           invalids.push(transactions[i])
//           invalids.push(transactions[memoIndex])
//         }
//       }
//     }

//     if (!mapNames[name]) {
//       mapNames[name] = []
//     }
//     mapNames[name].push({ time: Number(time), city, index: i })
//   }

//   return invalids
// }
var twoCitySchedCost = function (costs) {
  // Сортируем людей по разнице в стоимости между городом A и городом B
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))

  let sum = 0
  const n = costs.length / 2

  // Отправляем первых n людей в город A, остальных в город B
  for (let i = 0; i < n; i++) {
    sum += costs[i][0] // Город A
  }
  for (let i = n; i < 2 * n; i++) {
    sum += costs[i][1] // Город B
  }

  return sum
}
// console.log(
//   twoCitySchedCost([
//     [10, 20],
//     [30, 200],
//     [400, 50],
//     [30, 20],
//   ])
// )
// console.log(
//   twoCitySchedCost([
//     [259, 770],
//     [448, 54],
//     [926, 667],
//     [184, 139],
//     [840, 118],
//     [577, 469],
//   ])
// )

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase()
}

var reverseOnlyLetters = function (s) {
  const result = s.split('')
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isLetter(result[left])) {
      left++
    } else if (!isLetter(result[right])) {
      right--
    } else {
      ;[result[left], result[right]] = [result[right], result[left]]
      left++
      right--
    }
  }

  return result.join('')
}
// console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))

class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k)
    this.maxSize = k
    this.front = -1
    this.rear = -1
  }

  Front() {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[this.front]
  }

  Rear() {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[this.rear]
  }

  enQueue(value) {
    if (this.isFull()) {
      return false
    }
    if (this.isEmpty()) {
      this.front = 0
    }
    this.rear = (this.rear + 1) % this.maxSize
    this.queue[this.rear] = value
    return true
  }

  deQueue() {
    if (this.isEmpty()) {
      return false
    }
    if (this.front === this.rear) {
      this.front = -1
      this.rear = -1
    } else {
      this.front = (this.front + 1) % this.maxSize
    }
    return true
  }

  isEmpty() {
    return this.front === -1
  }

  isFull() {
    return (this.rear + 1) % this.maxSize === this.front
  }
}

// Пример использования
const circularQueue = new MyCircularQueue(3)
console.log(circularQueue.enQueue(1)) // true
console.log(circularQueue.enQueue(2)) // true
console.log(circularQueue.enQueue(3)) // true
console.log(circularQueue.enQueue(4)) // false (очередь заполнена)
console.log(circularQueue.Rear()) // 3
console.log(circularQueue.isFull()) // true
console.log(circularQueue.deQueue()) // true
console.log(circularQueue.enQueue(4)) // true
console.log(circularQueue.Rear()) // 4
