const pr = Promise.resolve(2)

pr.then((m) => {
  console.log(m)
})
  .then((m) => {
    console.log(m)
  })
  .then(console.log(1))
  .then((m) => {
    console.log(m)
  })
  .then((m) => {
    console.log(m)
  })
