class Order {
  constructor (description, quantity, price) {
    this.id = Math.floor(Math.random() * 1000)
    this.description = description
    this.quantity = quantity
    this.totalPrice = price * quantity
  }
}

const order = new Order('Livro Código Limpo', 1, 52.6)

console.log('Tipo:', typeof Order)
console.log(order)


