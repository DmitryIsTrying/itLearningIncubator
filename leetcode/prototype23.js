function Book(autor, name) {
  this.autor = autor
  this.name = name
}

function SuperBook(test, autor, name) {
  Book.call(this, autor, name)
  this.test = test
}
SuperBook.prototype.__proto__ = Book.prototype
SuperBook.__proto__ = Book

const superBook = new SuperBook('a', 'b', 'c')
console.log(superBook)
console.log(superBook instanceof Book)
console.log(superBook instanceof SuperBook)
