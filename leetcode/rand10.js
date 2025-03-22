function rand7() {
  return Math.floor(Math.random() * 7) + 1
}

function rand10() {
  let num
  do {
    const a = rand7()
    const b = rand7()
    num = (a - 1) * 7 + b
  } while (num > 40)

  return (num % 10) + 1
}

const arr = []
for (let i = 0; i < 10; i++) {
  arr.push(rand10())
}
console.log(arr)
