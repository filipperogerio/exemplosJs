const Book = class {
  constructor (title, author) {
    this.title = title
    this.author = author
  }
}

const book = new Book('Clean Code', 'Robert C. Martin')

console.log('Tipo:', typeof Book)
console.log(book)
