function meeting(s) {
  return s
    .toUpperCase()
    .split(';')
    .map((nameAndLast) => {
      const newStr = nameAndLast.split(':')
      ;[newStr[0], newStr[1]] = [newStr[1], newStr[0]]
      return `(${newStr.join(', ')})`
    })
    .sort()
    .join('')
}
// console.log(
//   meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill')
// )

//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// console.log('exmaple: d\td d')

// let str = 'Hello'

// console.log(str.at(~-1))

// function userFoo(name) {
//   this.name = name
//   this.isAdmin = false
// }
// let user = new userFoo()
// console.log(user)
// console.log(new Array())

// class Animal {
//   static type = 'Animal'

//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }
//   voice() {
//     return `I'm ${this.name}`
//   }
// }

// class Cat extends Animal {
//   static type = 'Cat'
//   constructor(options) {
//     super(options)
//     this.color = options.color
//   }

//   voice() {
//     return super.voice() + ' and my color is black'
//   }

//   get ageInfo() {
//     return (this.age - 2) * 4 + 24
//   }

//   set ageInfo(newAge) {
//     this.age = newAge
//   }
// }

// const cat = new Cat({ name: 'Cat', age: 19, hasTail: true, color: 'black' })

// const elephant = new Animal({ name: 'Elephant', age: 5, hasTail: true })

// console.log(elephant)
// console.log(Object)

// console.log(elephant.voice())

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)
//     this.isRegularElement = true
//   }
//   isRegularElement = false // not worked
//   hide() {
//     this.$el.style.display = 'none'
//   }

//   show() {
//     this.$el.style.display = 'block'
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector)
//     this.$el.style.width = this.$el.style.height = options.size + 'px'
//     this.$el.style.backgroundColor = options.color
//   }
// }

// class Circle extends Box {
//   constructor(options) {
//     super(options)
//     this.$el.style.borderRadius = options.br
//   }
// }

// const circle1 = new Circle({
//   selector: '#cirlce1',
//   size: 150,
//   color: 'yellow',
//   br: '20%',
// })

// const box1 = new Box({
//   selector: '#box1',
//   size: 100,
//   color: 'red',
// })

// const box2 = new Box({
//   selector: '#box2',
//   size: 200,
//   color: 'blue',
// })

class CoffeeMachine {
  #waterAmount = 0
  constructor(power) {
    this.power = power
  }

  set addWatter(value) {
    this.#waterAmount += value
  }
  get waterAmount() {
    return this.#waterAmount
  }

  createCoffe() {
    if (this.#waterAmount >= 200) {
      this.#waterAmount -= 200
      return 'Cup of coffee is created'
    }
    return 'No water'
  }
}

const coffeeMachine = new CoffeeMachine(100)
coffeeMachine.addWatter = 210

console.log(coffeeMachine.createCoffe())
console.log(coffeeMachine.waterAmount)
