const orderFactory = (description, quantity, price) => {
  return {
    id: Math.floor(Math.random() * 1000),
    description,
    quantity,
    totalPrice: price * quantity
  }
}

function getOrderDescription ({ description, quantity, totalPrice }) {
  return function (paymentCallback) {
    return `Pedido: ${quantity} ${description} por ${totalPrice}. ${paymentCallback()}`
  }
}

const order = orderFactory('DVD do HULK!', 1, 11.9)
const orderDescription = getOrderDescription(order)

const paymentConfirm = orderDescription(function () {
  return 'Pagamento Aprovado'
})

console.log(paymentConfirm)
