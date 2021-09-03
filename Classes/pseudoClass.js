function User (name, age) {
  this.name = name
  this.age = age
}

const user = new User('Filippe', 32)

console.log('Tipo:', typeof User)
console.log(user)
