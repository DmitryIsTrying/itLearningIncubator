// function test(num) {
//   console.log(num)

//   if (num > 5) {
//     return false
//   }
//   return true
// }

// for (let i = 0; test(i); i++) {
//   console.log('loop')
// }

class Person {
  #name
  constructor(name) {
    this.name(name)
  }
  getName() {
    return this.#name
  }
  name(str) {
    if (str.length < 10) {
      throw new Error('max length 9')
    }
    this.#name = str
  }
}

const person = new Person('Dimadimadima')
console.log(person.getName())
