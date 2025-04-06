function wtf(s) {
  return s
}

// console.log([...'test'])

// meow meow undefined meow
// 1 6 3 5 7 8 2 4

// 5 20
function delay(fn) {
  setTimeout(fn, 1000)
}
const arr = [
  new Promise((res) =>
    delay(() => {
      res(1)
    })
  ),
  new Promise((res) =>
    delay(() => {
      res(2)
    })
  ),
  new Promise((res) =>
    delay(() => {
      res(3)
    })
  ),
]
async function test() {
  for await (const item of arr) {
    console.log(item)
  }
}
test()
