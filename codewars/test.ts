const user = {
  name: {
    first: 'dima',
    last: 'smirnov',
  },
  age: 13,
} as const

type User = typeof user
// const obj: User = {
//   first: 'dima',
//   last: 'smirnov',
// }

type Name = Pick<User, 'name'>
type Test = Name['name']
function go(value: User) {}
// go('dd')

// type A = { a: string }
// type B = { b: string }
// type AB = A & B
