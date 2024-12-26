var addTwoPromises = async function (...promises) {
  const arr = await Promise.all(promises)
  return arr.reduce((acc, num) => acc + num)
}
console.log(addTwoPromises(Promise.resolve(1), Promise.resolve(5)))
