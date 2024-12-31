// var join = function (arr1, arr2) {
//   const oneArr = [...arr1, ...arr2]
//   const obj = {}
//   for (let i = 0; i < oneArr.length; i++) {
//     if (oneArr[i].id in obj) {
//       obj[oneArr[i].id] = { ...obj[oneArr[i].id], ...oneArr[i] }
//     } else {
//       obj[oneArr[i].id] = oneArr[i]
//     }
//   }
//   return Object.values(obj)
// }
// arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
// arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]
// console.log(join(arr1, arr2))
const pr = new Promise(() => {
  throw new Error('')
})
pr.catch(() => {
  console.log('here')
})
