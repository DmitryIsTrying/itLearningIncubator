class MinStack {
  #stack
  #minsHistory

  constructor() {
    this.#stack = [] // Основной стек для хранения элементов
    this.#minsHistory = [] // Стек для хранения минимумов
  }

  push(value) {
    this.#stack.push(value)
    if (this.#minsHistory.length === 0 || this.#minsHistory[this.#minsHistory.length - 1] >= value) {
      this.#minsHistory.push(value)
    }
  }
  pop() {
    const deleteElement = this.#stack.pop()
    if (deleteElement === this.#minsHistory[this.#minsHistory.length - 1]) {
      this.#minsHistory.pop()
    }
  }
  top() {
    return this.#stack[this.#stack.length - 1]
  }
  getMin() {
    return this.#minsHistory[this.#minsHistory.length - 1]
  }
}

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin()) // return -3
minStack.pop()
console.log(minStack.top()) // return 0
console.log(minStack.getMin()) // return -2
