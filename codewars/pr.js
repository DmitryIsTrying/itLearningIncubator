const pr2 = new Promise((res) => {
  res()
})
const pr1 = new Promise((res) => {
  res()
})

pr1
  .then(() => {
    console.log('pr1')
  })
  .then(() => {
    console.log('pr1')
  })
  .then(() => {
    console.log('pr1')
  })
pr2
  .then(() => {
    console.log('pr2')
  })
  .then(() => {
    console.log('pr2')
  })
  .then(() => {
    console.log('pr2')
  })
