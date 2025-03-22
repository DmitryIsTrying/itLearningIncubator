const pr = Promise.any([])
pr.then((res) => {
  console.log('THEN', res)
}).catch((err) => {
  console.log('CATCH', err)
})
