async function first() {
  console.log(9)
  await Promise.resolve(2).then((r) => console.log(r))
  console.log(0)
  await Promise.resolve(3).then((r) => console.log(r))
}

async function second() {
  console.log(10)
  await Promise.resolve(4).then((r) => console.log(r))
  console.log(11)
  await Promise.resolve(5).then((r) => console.log(r))
}

first()

second()

const promises = Promise.resolve('new Promise')
promises.then((str) => console.log(str))
