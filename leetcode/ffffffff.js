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
// console.log(longestNiceSubstring('YazaAay'))

Array.prototype.findUnique = function () {
  const obj = this.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})

  const resultArr = []

  this.forEach((el) => {
    if (obj[el] === 1) {
      resultArr.push(el)
    }
  })

  return resultArr
}
// console.log([10, 5, 10, 0, 6, 6, 7, 2, 9, 9].findUnique()) //[5,0,7,2]
// const test3 = new Function('a', 'b', 'return a + b')
// console.log(test3(4, 2))
// const test = () => {}
// test()
// console.log(test.prototype)
const pr = new Promise((res) => res(2))
// console.log(pr)
var isPalindrome = function (head) {
  const values = []
  let current = head

  while (current !== null) {
    values.push(current.val)
    current = current.next
  }

  let left = 0
  let right = values.length - 1
  while (left < right) {
    if (values[left] !== values[right]) {
      return false
    }
    left++
    right--
  }

  return true
}
const obj4 = { val: 1, next: null }
const obj3 = { val: 2, next: obj4 }
const obj2 = { val: 2, next: obj3 }
const obj = { val: 1, next: obj2 }
console.log(isPalindrome(obj))
