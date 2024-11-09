function findKeyValues(obj, k, result = []) {
  for (const key in obj) {
    console.log(key)

    if (typeof obj[key] === 'object') {
      findKeyValues(obj[key], k, result)
    } else if (key === k) {
      result.push(obj[key])
    }
  }
  return result
}
function test(a, b, c) {}

test.customProperty = 'Hello'
test.anotherProperty = 'World'

console.log(findKeyValues(test, 'city'))
