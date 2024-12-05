// function travel(r, zipcode) {
//   if (!zipcode) return ':/'

//   const obj = r.split(',').reduce(
//     (acc, el) => {
//       const reg = new RegExp(`\\b${zipcode}\\b`)

//       if (reg.test(el)) {
//         acc.streets.push(el.split(' ').slice(1, -2).join(' '))
//         acc.nums.push(el.split(' ')[0])
//       }
//       return acc
//     },
//     { streets: [], nums: [] }
//   )
//   return `${zipcode}:${obj.streets.join(',')}/${obj.nums.join(',')}`
// }
// r =
//   '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000'

// // console.log(travel(r, 'OH 430'))
// const arr = [, ,]
// for (el of arr) {
//   console.log(el)
// }
class Test {
  a = 5

  getA() {
    return this.a
  }
}
const test = new Test()
console.log(test)
