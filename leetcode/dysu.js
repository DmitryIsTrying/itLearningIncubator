function isObject(obj) {
  if (obj == null) {
    return false
  }

  return obj.__proto__ === Object.prototype
}

// function structuredClone(obj) {
//   if (Array.isArray(obj)) {
//     return obj.map(structuredClone)
//   } else if (isObject(obj)) {
//     const result = {}
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     result[key] = structuredClone(obj[key])
//   }
// }
//     return result
//   } else {
//     return obj
//   }
// }

// const obj = {
//   name: 'Dima',
//   age: 18,
//   city: 'Moskow',
//   address: {
//     a: 'x',
//     b: 'y',
//     u: [1, 2, 3],
//   },
// }

// const copyObj = structuredClone(obj)

// console.log(copyObj !== obj)
// console.log(copyObj.address !== obj.address)
// console.log(copyObj.address.u !== obj.address.u)

// {a: 1,b:2,c:undefined}
// {a: 1,b:2,y:3}

function isEqualObjs(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }

  for (const key in obj1) {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      if (!isEqualObjs(obj1[key], obj2[key])) {
        return false
      }
      continue
    }

    if (!obj2.hasOwnProperty(key)) {
      return false
    }

    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

// console.log(isEqualObjs({ a: 1, b: 2, c: undefined }, { a: 1, b: 2, y: 3 }))
// console.log(isEqualObjs({ a: 1, b: 2, c: undefined }, { a: 1, b: 2, c: undefined }))
// console.log(isEqualObjs({ a: 1, b: 2, c: { a: 1, b: 2 } }, { a: 1, b: 2, c: { a: 1, b: 2 } }))
// Object.prototype.test = 123
// const obj = {}
// console.log(obj.test)
