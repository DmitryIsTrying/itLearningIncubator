function throttle(fn, delay, ctx) {
  let isReady = true // Флаг, разрешающий выполнение
  let argsForLast = null // Аргументы последнего вызова

  function setTimer() {
    setTimeout(() => {
      isReady = true
      if (argsForLast) {
        fn.apply(ctx, argsForLast)
        argsForLast = null
        isReady = false
        setTimer()
      }
    }, delay)
  }

  return function (...args) {
    if (isReady) {
      fn.apply(ctx, args)
      isReady = false
      setTimer()
    } else {
      argsForLast = args
    }
  }
}

function test() {
  const start = Date.now()

  function log(text) {
    const msPassed = Date.now() - start
    console.log(`${msPassed}: ${this.name} logged ${text}`)
  }

  const throttled = throttle(log, 100, { name: 'me' })

  setTimeout(() => throttled('m'), 0)
  setTimeout(() => throttled('mo'), 22)
  setTimeout(() => throttled('mos'), 33)
  setTimeout(() => throttled('mosc'), 150)
  setTimeout(() => throttled('moscow'), 400)
}

console.clear()
test()
