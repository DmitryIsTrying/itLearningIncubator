class EventEmitter {
  #subscribers = {}
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (eventName in this.#subscribers) {
      this.#subscribers[eventName].push(callback)
    } else {
      this.#subscribers[eventName] = [callback]
    }
    return {
      unsubscribe: () => {
        this.#subscribers[eventName] = this.#subscribers[eventName].filter((cb) => cb !== callback)
      },
    }
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.#subscribers[eventName]) {
      return []
    }
    return this.#subscribers[eventName].map((cb) => cb(...args))
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
