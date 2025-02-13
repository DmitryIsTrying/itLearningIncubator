class LRUCache {
  #capacity
  #cache = new Map() // Хранит ключи и значения
  #head = {} // Фиктивный узел для начала списка
  #tail = {} // Фиктивный узел для конца списка

  constructor(capacity) {
    this.#capacity = capacity
    // Связываем голову и хвост
    this.#head.next = this.#tail
    this.#tail.prev = this.#head
  }

  // Вспомогательный метод: удаляет узел из списка
  #removeNode(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  // Вспомогательный метод: добавляет узел в начало списка
  #addToFront(node) {
    node.next = this.#head.next
    node.prev = this.#head
    this.#head.next.prev = node
    this.#head.next = node
  }

  // Получение значения по ключу
  get(key) {
    if (this.#cache.has(key)) {
      const node = this.#cache.get(key)
      // Обновляем порядок: перемещаем узел в начало списка
      this.#removeNode(node)
      this.#addToFront(node)
      return node.value
    }
    return -1
  }

  // Добавление значения по ключу
  put(key, value) {
    if (this.#cache.has(key)) {
      // Если ключ уже существует, обновляем значение и перемещаем узел в начало
      const node = this.#cache.get(key)
      node.value = value
      this.#removeNode(node)
      this.#addToFront(node)
    } else {
      // Если ключ новый, создаём новый узел
      const newNode = { key, value }
      this.#cache.set(key, newNode)
      this.#addToFront(newNode)

      // Если превышена ёмкость, удаляем последний узел
      if (this.#cache.size > this.#capacity) {
        const lastNode = this.#tail.prev
        this.#removeNode(lastNode)
        this.#cache.delete(lastNode.key)
      }
    }
  }
}
