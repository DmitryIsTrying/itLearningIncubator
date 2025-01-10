doItAfter(2).then(() => console.log('something'))

function doItAfter(seconds) {
  let promise = new Promise((resolve, reject) => {
    setInterval(() => {
      console.log('here')

      resolve()
    }, seconds * 1000)
  })
  return promise
}
