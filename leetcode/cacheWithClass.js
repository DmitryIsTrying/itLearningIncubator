class TimeLimitedCache {
  #cache = {}
  #ids = {}
  get(key) {
    console.log(this.#cache)

    return key in this.#cache ? this.#cache[key] : -1
  }
  set(key, value, duration) {
    let result = key in this.#cache

    this.#cache[key] = value
    clearTimeout(this.#ids[key])
    this.#ids[key] = setTimeout(() => {
      delete this.#cache[key]
    }, duration)

    return result
  }
  count() {
    return Object.keys(this.#cache).length
  }
}
