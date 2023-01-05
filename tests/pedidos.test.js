const { Pedido } = require('../models');

async function testCreateOrder() {
  const order = {
    usuario_id: 1,
    total: 5000.50,
    pagamento: 'boleto',
    entrega: 'normal'
  }

  const newOrder = await Pedido.create(order)
  console.log(newOrder);
}

testCreateOrder();

