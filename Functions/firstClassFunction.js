const orderFactory = (description, quantity, price) => {
  return {
    id: Math.floor(Math.random() * 1000),
    description,
    quantity,
    totalPrice: price * quantity,
    getDescription: () => {
      return `Descrição do pedido: ${quantity} ${description} por ${price * quantity}.`
    }
  }
}

orderFactory.id = 1

console.log(orderFactory.id)

var myOrder = orderFactory('CD do Molejo', 2, 9.9);

console.log(myOrder)
console.log(myOrder.getDescription())
