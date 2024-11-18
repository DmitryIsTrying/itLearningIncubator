// function loop_size(node) {
//   let slow = node
//   let fast = node

//   do {
//     slow = slow.next
//     fast = fast.next.next
//   } while (slow !== fast)

//   let count = 0
//   do {
//     fast = fast.next
//     count++
//   } while (slow !== fast)

//   return count
// }
// console.log()

// const addPost = (text) => {
//   let counter = 0
//   return function () {
//     return ++counter
//   }
// }
// const start = addPost()
// console.log(start())
// console.log(start())
// const promise = new Promise((res) => {
//   setTimeout(() => {
//     console.log(2)
//     res()
//   }, 1000)
// }).then(() => {
//   console.log(1)
// })

// class Person {
//   #firstName
//   #lastName
//   constructor(firstName, lastName) {
//     this.#firstName = firstName
//     this.#lastName = lastName
//   }

//   // Геттер для получения полного имени
//   get fullName() {
//     return `${this.#firstName} ${this.#lastName}`
//   }

//   // Сеттер для установки полного имени
//   set fullName(name) {
//     const parts = name.split(' ')
//     this.#firstName = parts[0]
//     this.#lastName = parts[1]
//   }
// }

// const person = new Person('John', 'Doe')

// // Использование геттера
// console.log(person.fullName) // Вывод: John Doe

// // Использование сеттера
// person.fullName = 'Jane Smith'
// console.log(person.fullName) // Вывод: Jane Smith
// console.log(person._firstName) // Вывод: Jane
// console.log(person._lastName) // Вывод: Smith

class Node {
  constructor(value) {
    this.value = value
    if (value > 0) {
      this.node = new Node(value - 1)
    } else {
      this.node = null
    }
  }
}
const test1 = new Node(4)
console.log(test1)

class Node2 {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node2(value)
    let current = this.head
    while (value > 1) {
      value--
      current.next = new Node2(value)
      current = current.next
    }
  }
}

const test2 = new LinkedList(4)
console.log(test2)
