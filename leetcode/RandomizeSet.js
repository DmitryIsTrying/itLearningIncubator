class RandomizedSet {
  constructor() {
    this.collection = new Set()
  }

  main(value, fn, isInsert) {
    let result = undefined
    if (isInsert) {
      result = !this.collection.has(value)
    } else {
      result = this.collection.has(value)
    }
    fn(value)
    return result
  }

  insert(value) {
    return this.main(value, this.collection.add.bind(this.collection), true)
  }

  remove(value) {
    return this.main(value, this.collection.delete.bind(this.collection), false)
  }

  getRandom() {
    const arr = Array.from(this.collection)
    const random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }
}
