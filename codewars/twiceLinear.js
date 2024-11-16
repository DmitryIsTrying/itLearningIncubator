class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(val) {
    this.heap.push(val)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[parentIndex] <= this.heap[index]) break
      ;[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      index = parentIndex
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.sinkDown(0)
    return min
  }

  sinkDown(index) {
    const length = this.heap.length
    const element = this.heap[index]

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild < element) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break
      ;[this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]]
      index = swap
    }
  }

  peek() {
    return this.heap[0]
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

function dblLinear(n) {
  let u = new Set([1])
  let q2 = new MinHeap()
  let q3 = new MinHeap()

  q2.insert(3)
  q3.insert(4)

  let current = 1

  for (let i = 0; i < n; i++) {
    let y = q2.peek()
    let z = q3.peek()

    if (y < z) {
      current = q2.extractMin()
    } else if (z < y) {
      current = q3.extractMin()
    } else {
      current = q2.extractMin()
      q3.extractMin()
    }

    q2.insert(2 * current + 1)
    q3.insert(3 * current + 1)

    u.add(current)
  }

  return current
}
